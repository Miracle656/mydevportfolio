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
        title: "TUNA",
        description: "A decentralized news aggregator for the Sui ecosystem",
        tags: ["Sui", "Move", "React", "Walrus"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/TUNA",
        homepage: "https://tuna-sandy.vercel.app/",
        featured: true,
        highlight: true,
    },
    {
        id: 102,
        title: "suiGraph",
        description: "Graph visualization tool for the Sui blockchain.",
        tags: ["Sui", "Graph", "Visualization", "Simulator", "PTB"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/suiGraph",
        homepage: "https://sui-graph.vercel.app/",
        featured: true,
    },
    {
        id: 103,
        title: "Atlantis",
        description: "The Premier dApp Discovery Platform on Sui.",
        tags: ["Sui", "Move", "Walrus", "Enoki"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/mamiwater",
        homepage: "https://mamiwater.vercel.app/",
        featured: true,
    },
    {
        id: 104,
        title: "Narwhal",
        description: "Narwhal.net is a decentralized, interactive gaming experience built on the Sui Network that redefines digital ownership through Dynamic NFTs.",
        tags: ["Sui", "Move", "DApp", "Dynamic NFTs", "Gaming", "Decentralized"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/narwhal",
        homepage: "https://narwhal-eight.vercel.app/join",
        featured: false,
    },
    {
        id: 105,
        title: "Orca",
        description: "Orca is the premier platform for digital assets on Sui.",
        tags: ["Sui", "Move", "DApp", "Decentralized", "Exchange", "NFT"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/orca",
        homepage: "https://orca-henna.vercel.app/",
        featured: false,
    },
]

export const evmProjects: Project[] = [
    {
        id: 201,
        title: "Universal Name Service",
        description: "A universal naming service for EVM chains.",
        tags: ["EVM", "Solidity", "Identity"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/universal_name_service",
        homepage: "https://universal-name-service.vercel.app/",
        featured: true,
        highlight: true,
    },
]

export const btcProjects: Project[] = [
    {
        id: 301,
        title: "Stacks Market Connect",
        description: "Marketplace connection tool for Stacks (Bitcoin L2).",
        tags: ["Bitcoin", "Stacks", "Clarity"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/stacks-market-connect",
        homepage: "https://stacks-market-connect.vercel.app/",
        featured: true,
        highlight: true,
    },
    {
        id: 302,
        title: "LnProject (Breeze)",
        description: "Bitcoin Lightning Network integration with Breeze.",
        tags: ["Bitcoin", "Lightning", "JavaScript"],
        status: "shipped",
        year: "2024",
        stars: 0,
        forks: 0,
        url: "https://github.com/Miracle656/LnProject/tree/javascript/lnwithbreeze",
        featured: true,
    },
]

export const allProjects: Project[] = [
    ...suiProjects,
    ...evmProjects,
    ...btcProjects
]
