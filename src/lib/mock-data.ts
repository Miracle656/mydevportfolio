export type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    status: "shipped" | "in-progress" | "archived"
    year: string
    stars: number
    forks: number
    url: string
    homepage?: string
    featured: boolean
    highlight?: boolean
}

export const suiProjects: Project[] = [
    {
        id: 101,
        title: "Sui Wallet Adapter",
        description: "A comprehensive wallet adapter for Sui dApps, supporting standard wallet connection standards.",
        tags: ["Sui", "TypeScript", "Wallet Standard"],
        status: "shipped",
        year: "2024",
        stars: 120,
        forks: 35,
        url: "https://github.com/example/sui-wallet-adapter",
        featured: true,
        highlight: true,
    },
    {
        id: 102,
        title: "Sui Move Explorer",
        description: "An explorer to visualize Move objects and packages on the Sui network.",
        tags: ["Sui", "Move", "Next.js"],
        status: "in-progress",
        year: "2025",
        stars: 45,
        forks: 10,
        url: "https://github.com/example/sui-move-explorer",
        featured: true,
    },
]

export const evmProjects: Project[] = [
    {
        id: 201,
        title: "PushChain Notification Service",
        description: "Decentralized notification service built on PushChain (EVM compatible).",
        tags: ["EVM", "Solidity", "Push Protocol"],
        status: "shipped",
        year: "2023",
        stars: 89,
        forks: 22,
        url: "https://github.com/example/push-chain-notify",
        featured: true,
        highlight: true,
    },
    {
        id: 202,
        title: "Base DeFi Dashboard",
        description: "Dashboard for tracking yield and liquidity across Base network protocols.",
        tags: ["Base", "EVM", "DeFi"],
        status: "shipped",
        year: "2024",
        stars: 230,
        forks: 60,
        url: "https://github.com/example/base-defi-dashboard",
        featured: true,
    },
]

export const btcProjects: Project[] = [
    {
        id: 301,
        title: "Stacks NFT Marketplace",
        description: "NFT Marketplace built on the Stacks layer for Bitcoin.",
        tags: ["Bitcoin", "Stacks", "Clarity"],
        status: "shipped",
        year: "2023",
        stars: 150,
        forks: 40,
        url: "https://github.com/example/stacks-nft-market",
        featured: true,
        highlight: true,
    },
    {
        id: 302,
        title: "Ordinal Inscriber",
        description: "Tool for easily inscribing ordinals onto the Bitcoin blockchain.",
        tags: ["Bitcoin", "Ordinals", "Rust"],
        status: "in-progress",
        year: "2024",
        stars: 300,
        forks: 80,
        url: "https://github.com/example/ordinal-inscriber",
        featured: true,
    },
]

export const allProjects: Project[] = [
    ...suiProjects,
    ...evmProjects,
    ...btcProjects
]
