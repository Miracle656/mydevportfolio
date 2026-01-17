import { useParams, Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { suiProjects, evmProjects, btcProjects, type Project } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"

// Define valid chains and their display names
const chainMap: Record<string, { title: string, projects: Project[] }> = {
    sui: {
        title: "Sui Ecosystem",
        projects: suiProjects
    },
    evm: {
        title: "EVM Projects",
        projects: evmProjects
    },
    btc: {
        title: "Bitcoin & Stacks",
        projects: btcProjects
    }
}

export function ProjectPage() {
    const { chain } = useParams<{ chain: string }>()

    if (!chain || !chainMap[chain]) {
        return (
            <main className="relative min-h-screen overflow-hidden scanlines flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">404</h1>
                    <p className="text-muted-foreground">Chain not found</p>
                    <Link to="/" className="text-primary hover:underline mt-4 block">Back to Home</Link>
                </div>
            </main>
        )
    }

    const chainData = chainMap[chain]

    return (
        <main className="relative min-h-screen overflow-hidden scanlines">
            {/* <CursorGlow /> */}
            <div className="relative z-10">
                <Header />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>

                <ProjectsGrid initialProjects={chainData.projects} title={chainData.title} />

                <Footer />
            </div>
        </main>
    )
}
