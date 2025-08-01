'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Navbar from "./(components)/Navbar"

export default function HomePage() {
    const router = useRouter()

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#fefce8] via-[#fdf6e3] to-[#fef3c7] flex flex-col">

            {/* 🔝 Navbar */}
            <Navbar />

            {/* 🌟 Hero Content */}
            <div className="flex-grow flex justify-center px-6 py-10">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <h2 className="uppercase text-5xl md:text-6xl font-bold tracking-tight text-[#ce9a48]">
                        Match Your Horoscope for Marriage
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl font-semibold mx-auto">
                        Unlock the secrets of compatibility through Rashi and Nakshatra-based matching.
                        Learn how horoscope matching works — and do it yourself with clear, step-by-step guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={() => router.push("/match")}
                            className="px-8 py-6 cursor-pointer text-lg font-semibold rounded-md"
                            variant={"red"}
                        >
                            Matching
                        </Button>
                        <Button
                            onClick={() => router.push("/me")}
                            className="px-8 py-6 cursor-pointer text-lg font-semibold rounded-md"
                            variant={"red"}
                        >
                            Me
                        </Button>
                        <Button
                            onClick={() => router.push("/yogas")}
                            className="px-8 py-6 cursor-pointer text-lg font-semibold rounded-md"
                            variant={"red"}
                        >
                            Yogas
                        </Button>
                        <Button
                            onClick={() => router.push("/planet-strength")}
                            className="px-8 py-6 cursor-pointer text-lg font-semibold rounded-md"
                            variant={"red"}
                        >
                            Planets Strength
                        </Button>
                        <Button
                            onClick={() => router.push("/muhurat")}
                            className="px-8 py-6 cursor-pointer text-lg font-semibold rounded-md"
                            variant={"red"}
                        >
                            Tithi Muhurat
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}