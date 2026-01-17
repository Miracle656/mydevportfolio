import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { allProjects } from "@/lib/mock-data"

export function Projects() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                <ProjectsGrid initialProjects={allProjects} title="All Projects" />
            </main>
            <Footer />
        </div>
    )
}
