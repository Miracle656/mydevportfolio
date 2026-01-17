import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { BlockchainSelector } from "@/components/BlockchainSelector"
import { GlobalStatsSection } from "@/components/GlobalStatsSection" // Added this import
import { allProjects } from "@/lib/mock-data" // Restored this import

export function Home() {
    return (
        <div className="min-h-screen bg-background"> {/* Changed main to div and added classes */}
            {/* <CursorGlow /> */}
            {/* Removed the relative z-10 div */}
            <Header />
            <main> {/* Added a new main tag */}
                <HeroSection />
                <GlobalStatsSection /> {/* Added this component */}
                <BlockchainSelector />
                <ProjectsGrid initialProjects={allProjects} title="Featured Work" />
            </main>
            <Footer />
        </div>
    )
}
