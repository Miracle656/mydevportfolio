import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export function Resume() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-28 px-4 sm:px-6 pb-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ebube Miracle Ukpai</h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            Fullstack Blockchain Developer | Web3 Specialist
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <a href="mailto:iupacnumen2020@gmail.com" className="text-primary hover:underline">
                                iupacnumen2020@gmail.com
                            </a>
                            <a href="https://github.com/Miracle656/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/ebube-ukpai-2960a6225/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <section className="mb-12 animate-fade-in-up stagger-2">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Experienced fullstack blockchain developer specializing in decentralized applications across Sui, EVM-compatible chains, and Bitcoin ecosystems. Passionate about building innovative Web3 solutions and bridging traditional web technologies with blockchain infrastructure.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-12 animate-fade-in-up stagger-3">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Blockchain & Web3</h3>
                                <p className="text-muted-foreground text-sm">
                                    Sui Move, Solidity, Smart Contracts, dApp Development, Web3.js, Ethers.js
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Frontend Development</h3>
                                <p className="text-muted-foreground text-sm">
                                    React, TypeScript, Next.js, TailwindCSS, Responsive Design
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Backend Development</h3>
                                <p className="text-muted-foreground text-sm">
                                    Node.js, Express, REST APIs, Database Design
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                                <p className="text-muted-foreground text-sm">
                                    Git, GitHub, Vercel, Docker, CI/CD
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-12 animate-fade-in-up stagger-4">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
                        <div className="space-y-6">
                            <div className="border-l-2 border-primary pl-4">
                                <h3 className="font-semibold text-lg">Blockchain Developer</h3>
                                <p className="text-sm text-muted-foreground mb-2">Freelance | 2023 - Present</p>
                                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                    <li>Built decentralized applications on Sui, EVM chains, and Bitcoin</li>
                                    <li>Developed and deployed smart contracts for various DeFi protocols</li>
                                    <li>Integrated Web3 wallets and blockchain functionality into web applications</li>
                                </ul>
                            </div>
                            <div className="border-l-2 border-border pl-4">
                                <h3 className="font-semibold text-lg">Fullstack Developer</h3>
                                <p className="text-sm text-muted-foreground mb-2">Previous Role | 2022 - 2023</p>
                                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                    <li>Developed responsive web applications using React and TypeScript</li>
                                    <li>Built RESTful APIs and backend services</li>
                                    <li>Collaborated with cross-functional teams on product development</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-12 animate-fade-in-up stagger-5">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
                        <div className="border-l-2 border-primary pl-4">
                            <h3 className="font-semibold text-lg">Computer Science / Software Engineering</h3>
                            <p className="text-sm text-muted-foreground">University Name | Year</p>
                        </div>
                    </section>

                    {/* Projects Highlight */}
                    <section className="animate-fade-in-up stagger-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Featured Projects</h2>
                        <p className="text-muted-foreground mb-4">
                            View my complete portfolio of blockchain projects including DeFi protocols, NFT marketplaces, and cross-chain applications.
                        </p>
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
                        >
                            View All Projects →
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
