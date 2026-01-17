import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { BlockchainSelector } from "@/components/BlockchainSelector"
import { allProjects } from "@/lib/mock-data"

export function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden scanlines">
            {/* <CursorGlow /> */}
            <div className="relative z-10">
                <Header />
                <HeroSection />
                <BlockchainSelector />
                <ProjectsGrid initialProjects={allProjects} title="Featured Work" />
                <Footer />
            </div>
        </main>
    )
}
