import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stats, formatNumber, topCountries } from "../../data/country-data";

function useAnimatedNumber(baseValue: number, incrementRatePerSecond: number) {
    const [value, setValue] = useState(baseValue);
    const [displayRate, setDisplayRate] = useState(incrementRatePerSecond);

    useEffect(() => {
        // If incrementRate is 0, don't animate - just show the static value
        if (incrementRatePerSecond === 0) {
            setValue(baseValue);
            setDisplayRate(0);
            return;
        }

        const updatesPerSecond = 20;
        const baseIncrement = incrementRatePerSecond / updatesPerSecond;

        const interval = setInterval(() => {
            const variation = 0.7 + Math.random() * 0.6;
            const increment = Math.max(1, Math.floor(baseIncrement * variation));
            setValue((v) => v + increment);

            const rateVariation = 0.85 + Math.random() * 0.3;
            setDisplayRate(Math.floor(incrementRatePerSecond * rateVariation));
        }, 1000 / updatesPerSecond);

        return () => clearInterval(interval);
    }, [incrementRatePerSecond, baseValue]);

    return { value, rate: displayRate };
}

function InfoIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="5" r="0.75" fill="currentColor" />
        </svg>
    );
}

function PixelGridTransition({
    firstContent,
    secondContent,
    isActive,
    gridSize = 30,
    animationStepDuration = 0.3,
    className,
}: {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
    isActive: boolean;
    gridSize?: number;
    animationStepDuration?: number;
    className?: string;
}) {
    const [showPixels, setShowPixels] = useState(false);
    const [animState, setAnimState] = useState<"idle" | "growing" | "shrinking">("idle");
    const hasActivatedRef = useRef(false);

    const pixels = useMemo(() => {
        const total = gridSize * gridSize;
        const result = [];
        for (let n = 0; n < total; n++) {
            const row = Math.floor(n / gridSize);
            const col = n % gridSize;
            const color = Math.random() > 0.85 ? "rgb(59, 130, 246)" : "rgb(63, 63, 70)"; // blue-500 or zinc-700
            result.push({ id: n, row, col, color });
        }
        return result;
    }, [gridSize]);

    const [shuffledOrder, setShuffledOrder] = useState<number[]>([]);

    useEffect(() => {
        if (!hasActivatedRef.current && !isActive) return;
        if (isActive) hasActivatedRef.current = true;

        const indices = pixels.map((_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        setShuffledOrder(indices);

        setShowPixels(true);
        setAnimState("growing");

        const shrinkTimer = setTimeout(() => setAnimState("shrinking"), animationStepDuration * 1000);
        const hideTimer = setTimeout(() => {
            setShowPixels(false);
            setAnimState("idle");
        }, animationStepDuration * 2000);

        return () => {
            clearTimeout(shrinkTimer);
            clearTimeout(hideTimer);
        };
    }, [isActive, animationStepDuration, pixels]);

    const delayPerPixel = useMemo(() => animationStepDuration / pixels.length, [animationStepDuration, pixels.length]);
    const orderMap = useMemo(() => {
        const map = new Map<number, number>();
        shuffledOrder.forEach((idx, order) => map.set(idx, order));
        return map;
    }, [shuffledOrder]);

    return (
        <div className={`w-full overflow-hidden max-w-full relative ${className || ""}`}>
            <motion.div
                className="h-full"
                aria-hidden={isActive}
                initial={{ opacity: 1 }}
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0, delay: animationStepDuration }}
            >
                {firstContent}
            </motion.div>

            <motion.div
                className="absolute inset-0 w-full h-full z-[2] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0, delay: animationStepDuration }}
                style={{ pointerEvents: isActive ? "auto" : "none" }}
                aria-hidden={!isActive}
            >
                {secondContent}
            </motion.div>

            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
            >
                <AnimatePresence>
                    {showPixels &&
                        pixels.map((pixel) => {
                            const order = orderMap.get(pixel.id) ?? 0;
                            return (
                                <motion.div
                                    key={pixel.id}
                                    style={{
                                        backgroundColor: pixel.color,
                                        aspectRatio: "1 / 1",
                                        gridArea: `${pixel.row + 1} / ${pixel.col + 1}`,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: animState === "growing" ? 1 : 0,
                                        scale: animState === "growing" ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.01, delay: order * delayPerPixel }}
                                />
                            );
                        })}
                </AnimatePresence>
            </div>
        </div>
    );
}

function StatCard({
    title,
    baseValue,
    incrementRate,
    children,
    infoContent,
    href,
    className,
}: {
    title: string;
    baseValue?: number;
    incrementRate?: number;
    children?: React.ReactNode;
    infoContent?: string;
    href?: string;
    className?: string;
}) {
    const [showInfo, setShowInfo] = useState(false);
    const { value } = useAnimatedNumber(baseValue || 0, incrementRate || 0);

    const statsContent = (
        <div className="bg-card/60 p-4 md:p-6 w-full min-h-[120px] h-full border border-border rounded-md">
            <div className="space-y-2">
                <h2 className="my-0 font-mono font-medium text-sm tracking-tight uppercase text-foreground pr-6">
                    {title}
                </h2>
                {baseValue !== undefined && (
                    <div className="text-3xl md:text-4xl tracking-normal font-mono tabular-nums text-foreground">
                        {formatNumber(value)}
                    </div>
                )}
                {children}
            </div>
        </div>
    );

    const infoContentView = (
        <div className="bg-card p-4 md:p-6 w-full h-full overflow-y-auto flex flex-col gap-y-2 border border-border rounded-md">
            {href ? (
                <a
                    href={href}
                    tabIndex={showInfo ? 0 : -1}
                    className="my-0 font-mono font-medium text-sm tracking-tight uppercase text-foreground hover:underline underline-offset-2 inline-flex gap-x-0.5 items-center w-fit shrink-0"
                >
                    {title}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z" />
                    </svg>
                </a>
            ) : (
                <span className="my-0 font-mono font-medium text-sm tracking-tight uppercase text-foreground shrink-0">
                    {title}
                </span>
            )}
            <span className="tracking-tight text-sm text-muted-foreground leading-relaxed line-clamp-6">
                {infoContent}
            </span>
        </div>
    );

    return (
        <div className={`relative group rounded-md overflow-hidden ${className || ""}`}>
            <PixelGridTransition
                firstContent={statsContent}
                secondContent={infoContentView}
                isActive={showInfo}
                gridSize={30}
                animationStepDuration={0.3}
                className="h-full"
            />
            {infoContent && (
                <div className={`absolute top-2 right-2 transition-opacity duration-150 z-[20] isolate ${showInfo ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"}`}>
                    <button
                        aria-label={`Learn more about ${title}`}
                        type="button"
                        onClick={() => setShowInfo(!showInfo)}
                        className="p-1 m-0 bg-transparent text-muted-foreground border-none md:border md:border-solid border-border hover:text-foreground hover:bg-secondary transition-colors duration-150 flex items-center justify-center outline-none focus-visible:ring cursor-pointer rounded"
                    >
                        <InfoIcon />
                    </button>
                </div>
            )}
        </div>
    );
}



export function TotalRequests() {
    const { value, rate } = useAnimatedNumber(stats.totalRequests, 150);

    return (
        <div className="space-y-2">
            <h2 className="my-0 font-mono font-medium text-sm tracking-tight uppercase text-zinc-400">
                Total requests
            </h2>
            <div className="text-4xl md:text-5xl tracking-normal font-mono tabular-nums text-white">
                {formatNumber(value)}
            </div>
            <div className="text-sm text-zinc-500 font-mono tabular-nums">
                {formatNumber(rate)}/s
            </div>
        </div>
    );
}

function CountryRow({ country, incrementRate }: { country: typeof topCountries[0]; incrementRate: number }) {
    const { value, rate } = useAnimatedNumber(country.requests, incrementRate);

    return (
        <li className="flex items-center w-full md:w-fit justify-between md:justify-start">
            <span aria-hidden="true" className="inline-block translate-y-[-2px] translate-x-[2px] mr-2">
                <span style={{ color: country.color, opacity: 1 }}>■</span>
            </span>
            <div className="text-left">
                <h3
                    className="inline-block my-0 font-medium text-[16px]"
                    style={{ color: country.color }}
                >
                    {country.code}
                </h3>
            </div>
            <div className="w-[16ch] text-right">
                <span className="inline-flex tabular-nums text-zinc-300">{formatNumber(value)}</span>
            </div>
            <div className="w-[10ch] ml-auto text-right text-zinc-500">
                <span>{formatNumber(rate)}</span>
                <span className="lowercase" aria-label="per second">/s</span>
            </div>
        </li>
    );
}

export function TopCountries() {
    const incrementRates = [50, 40, 30, 20, 10, 5, 5];

    return (
        <div className="space-y-2">
            <h2 className="my-0 font-mono font-medium text-sm tracking-tight uppercase text-zinc-400">
                Top states by requests
            </h2>
            <ul className="list-none pl-0 space-y-1">
                {topCountries.map((country, index) => (
                    <CountryRow
                        key={country.code}
                        country={country}
                        incrementRate={incrementRates[index] || 10000}
                    />
                ))}
            </ul>
        </div>
    );
}

export function RegionCount() {
    return (
        <div className="flex items-center w-full md:w-fit justify-between md:justify-start mt-2">
            <span aria-hidden="true" className="inline-block translate-y-[-2px] translate-x-[2px] mr-2">
                <span className="text-[10px] text-zinc-400">▲</span>
            </span>
            <div className="text-left">
                <span className="inline-block my-0 font-medium text-[16px] text-zinc-200">37</span>
                <span className="font-medium text-[16px] text-zinc-500 tracking-tight">&nbsp;States</span>
            </div>
        </div>
    );
}

export function StatsGrid() {
    // Calculate total projects across all categories
    const totalProjects = 9; // Based on the projects in mock-data.ts (3 Sui + 3 EVM + 3 Bitcoin)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {/* Total Projects Card */}
            <StatCard
                title="Total Projects"
                baseValue={totalProjects}
                incrementRate={0} // Static count
                infoContent="Total number of blockchain projects built across Sui, EVM, and Bitcoin ecosystems."
                href="/projects"
                className="flex-1"
            >
                <p className="text-zinc-400 text-sm font-mono mt-1">Shipped & In Progress</p>
            </StatCard>

            {/* Tech Stack Card */}
            <StatCard
                title="Tech Stack"
                infoContent="Primary technologies and frameworks used in development."
                href="#"
                className="flex-1"
            >
                <ul className="space-y-2 list-none pl-0 mt-3">
                    <li className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-zinc-300 font-mono">Sui Move, Solidity, Bitcoin Script</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-zinc-300 font-mono">React, TypeScript, Next.js</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-zinc-300 font-mono">Node.js, Web3.js, Ethers.js</span>
                    </li>
                </ul>
            </StatCard>
        </div>
    );
}
