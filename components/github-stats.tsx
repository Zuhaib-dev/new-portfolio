"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GithubStats() {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Determine the current theme
    const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light"
    const isDark = currentTheme === "dark"

    // GitHub username
    const username = "Zuhaib-dev"

    // Theme parameters for the contribution graph
    const themeParams = isDark
        ? "theme=dark&bg_color=0d1117&border_color=30363d&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff"
        : "theme=default&bg_color=ffffff&border_color=e1e4e8&title_color=0969da&text_color=24292f&icon_color=0969da"

    const streakTheme = isDark ? "dark" : "default"

    return (
        <section id="github-stats" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold">GitHub Activity</h2>
                    <Button variant="outline" size="sm" asChild>
                        <Link
                            href={`https://github.com/${username}`}
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Github className="h-4 w-4" />
                            View Profile
                        </Link>
                    </Button>
                </div>

                <div className="space-y-6">
                    {/* GitHub Streak Stats - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-xl border bg-card p-6"
                    >
                        <h3 className="text-lg font-semibold mb-4">Contribution Streak</h3>
                        {mounted ? (
                            <Image
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${streakTheme}&hide_border=true&background=${isDark ? "0D1117" : "FFFFFF"}&ring=${isDark ? "58A6FF" : "0969DA"}&fire=${isDark ? "58A6FF" : "0969DA"}&currStreakLabel=${isDark ? "C9D1D9" : "24292F"}`}
                                alt="GitHub Streak Stats"
                                width={800}
                                height={200}
                                className="w-full h-auto"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-[200px] animate-pulse bg-muted rounded-lg" />
                        )}
                    </motion.div>

                    {/* Contribution Graph - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative overflow-hidden rounded-xl border bg-card p-6"
                    >
                        <h3 className="text-lg font-semibold mb-4">Contribution Graph</h3>
                        {mounted ? (
                            <Image
                                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&${themeParams}&hide_border=true&area=true&custom_title=Contribution%20Graph`}
                                alt="GitHub Contribution Graph"
                                width={1000}
                                height={300}
                                className="w-full h-auto"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-[300px] animate-pulse bg-muted rounded-lg" />
                        )}
                    </motion.div>

                    {/* GitHub Profile Link Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative overflow-hidden rounded-xl border bg-card p-8 text-center"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <Github className="h-12 w-12 text-muted-foreground" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Want to see more?</h3>
                                <p className="text-muted-foreground mb-4">
                                    Check out my GitHub profile for all my repositories, contributions, and open source work.
                                </p>
                            </div>
                            <Button size="lg" asChild>
                                <Link
                                    href={`https://github.com/${username}`}
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <Github className="h-5 w-5" />
                                    Visit GitHub Profile
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
