import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex h-8 w-8 items-center justify-center">
                <div className="h-4 w-4 animate-pulse rounded bg-muted" />
            </div>
        )
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    const CurrentIcon = resolvedTheme === "dark" ? Moon : Sun

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "group relative flex size-8 items-center justify-center rounded",
                "text-muted-foreground transition-all duration-200 hover:text-primary"
            )}
            aria-label={`Switch theme`}
        >
            <CurrentIcon className="size-4" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {resolvedTheme}
            </span>
        </button>
    )
}
