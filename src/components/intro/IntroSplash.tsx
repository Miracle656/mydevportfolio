import { useState, useEffect } from "react"
import { GL } from "./gl"

export function IntroSplash({ onComplete }: { onComplete: () => void }) {
    const [show, setShow] = useState(true)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        // Start fading out after 4 seconds
        const fadeTimer = setTimeout(() => {
            setFade(true)
        }, 4000)

        // Complete after fade (1s fade time)
        const endTimer = setTimeout(() => {
            setShow(false)
            onComplete()
        }, 5000)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(endTimer)
        }
    }, [onComplete])

    if (!show) return null

    return (
        <div className={`fixed inset-0 z-[100] h-screen w-full bg-black text-white transition-opacity duration-1000 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <GL hovering={false} />

            <div className="absolute inset-x-0 bottom-16 flex flex-col items-center text-center pb-16 z-10 pointer-events-none">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-balance">
                    Unlock your <br />
                    <i className="font-light">future</i> growth
                </h1>
                <p className="font-mono text-sm sm:text-base text-white/60 text-balance mt-8 max-w-[440px] mx-auto">
                    Through perpetual investment strategies that outperform the market
                </p>
            </div>
        </div>
    )
}
