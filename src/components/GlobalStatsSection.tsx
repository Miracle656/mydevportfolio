

import DottedMap from './map/DottedMap';
import {
    TotalRequests,
    TopCountries,
    RegionCount,
    StatsGrid,
} from './map/StatsDisplay';

export function GlobalStatsSection() {
    return (
        <section className="w-full px-6 py-12 md:py-20 relative overflow-hidden">
            <div className="relative flex flex-col xl:flex-row gap-12 xl:items-center">

                {/* Left Side (Stats) */}
                <div className="flex flex-col z-10 pointer-events-none">
                    <header className="flex flex-col items-start font-mono text-sm uppercase gap-2 mb-6 text-zinc-400">
                        <p className="my-0 whitespace-nowrap">
                            Global Network Activity{" "}
                            <span className="block font-mono text-zinc-600">
                                [Live Stats]
                            </span>
                        </p>
                    </header>

                    <section className="pb-6 w-full pointer-events-auto">
                        <div className="flex flex-col gap-y-6">
                            <TotalRequests />
                            <TopCountries />
                        </div>
                        <RegionCount />
                    </section>
                </div>

                {/* Right Side (Map) - Absolute on large screens, or just flexed */}
                <div className="w-full xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:w-[65%] h-[400px] md:h-[600px] pointer-events-none xl:scale-110 xl:translate-x-20">
                    <DottedMap />
                </div>
            </div>

            <div className="mt-12 xl:mt-32 pointer-events-auto">
                <StatsGrid />
            </div>
        </section>
    );
}
