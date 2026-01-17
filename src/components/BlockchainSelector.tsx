import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

import suiLogo from "@/assets/portfolio assets/suilogo.png"
import ethLogo from "@/assets/portfolio assets/ethlogo.png"
import btcLogo from "@/assets/portfolio assets/btclogo.png"

export function BlockchainSelector() {
    const chains = [
        {
            name: "Sui",
            href: "/projects/sui",
            logo: suiLogo,
            color: "text-blue-500",
            description: "Fast, secure, and scalable",
        },
        {
            name: "EVM",
            href: "/projects/evm",
            logo: ethLogo,
            color: "text-indigo-500",
            description: "Ethereum, Base, PushChain",
        },
        {
            name: "Bitcoin",
            href: "/projects/btc",
            logo: btcLogo,
            color: "text-orange-500",
            description: "L2s, Stacks, Ordinals",
        },
    ]

    return (
        <section className="px-4 sm:px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 sm:grid-cols-3">
                    {chains.map((chain) => (
                        <Link
                            key={chain.name}
                            to={chain.href}
                            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 glass transition-all duration-300 hover:border-primary/40 hover:bg-card/70 hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn("relative flex h-14 w-14 items-center justify-center rounded-xl bg-background/50 p-2.5 ring-1 ring-border/50 transition-colors group-hover:bg-primary/10 group-hover:ring-primary/20")}>
                                    <img
                                        src={chain.logo}
                                        alt={`${chain.name} logo`}
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold tracking-tight text-xl">{chain.name}</h3>
                                    <p className="text-sm text-muted-foreground">{chain.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
