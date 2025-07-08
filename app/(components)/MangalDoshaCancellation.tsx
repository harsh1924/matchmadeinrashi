'use client';

import { useEffect, useState } from "react";

export default function MangalDoshaCancellation() {
    const [mode, setMode] = useState<"individual" | "matching">("individual");

    // Load from localStorage on first render
    useEffect(() => {
        const storedMode = localStorage.getItem("mangalMode");
        if (storedMode === "individual" || storedMode === "matching") {
            setMode(storedMode);
        }
    }, []);

    // Save to localStorage whenever mode changes
    useEffect(() => {
        localStorage.setItem("mangalMode", mode);
    }, [mode]);

    return (
        <section className="overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Mangal Dosh Cancellation Rules
            </h2>

            <div className="bg-[#fefae0] shadow p-6 mx-auto flex flex-col md:flex-row gap-6">
                {/* Left Panel */}
                <div className="md:w-1/3 space-y-4">
                    <div className="bg-[#fefae0] p-4 space-y-3">
                        <h3 className="text-xl font-semibold text-[#ce9a48] text-center">
                            Choose Mode
                        </h3>
                        <button
                            onClick={() => setMode("individual")}
                            className={`w-full cursor-pointer px-4 py-2 rounded-lg font-medium transition ${mode === "individual"
                                && "bg-[#ce9a48] text-white"
                                }`}
                        >
                            Individual Chart
                        </button>
                        <button
                            onClick={() => setMode("matching")}
                            className={`w-full cursor-pointer px-4 py-2 rounded-lg font-medium transition ${mode === "matching"
                                && "bg-[#ce9a48] text-white"
                                }`}
                        >
                            Matching Chart
                        </button>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="md:w-2/3 bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                    <h3 className="text-lg font-bold text-[#ce9a48]">
                        {mode === "individual"
                            ? "Mangal Dosh Cancellation in Individual Chart"
                            : "Mangal Dosh Cancellation in Matching"}
                    </h3>

                    <ul className="list-disc list-inside space-y-2 text-base">
                        {mode === "individual" ? (
                            <>
                                <li>
                                    If <strong>Mars</strong> is <strong>aspected by Jupiter</strong>, Mangal Dosh is considered cancelled.
                                </li>
                                <li>
                                    If Mars is placed in the signs of <strong>Leo</strong>, <strong>Cancer</strong>, <strong>Sagittarius</strong>, <strong>Pisces</strong>, the dosha is often nullified.
                                </li>
                                <li>
                                    In day births, <strong>Mars in the 1st house</strong> is generally ignored.
                                </li>
                                <li>
                                    If Mars is in the <strong>1st house in Aries sign</strong>, Mangal Dosh does not apply.
                                </li>
                                <li>
                                    If Mars is in the <strong>4th house in Scorpio</strong>, the dosha is cancelled.
                                </li>
                                <li>
                                    If Mars is in the <strong>7th house in Capricorn</strong>, it is not considered Manglik.
                                </li>
                                <li>
                                    If Mars is in the <strong>8th house in Cancer</strong>, dosha is cancelled.
                                </li>
                                <li>
                                    If Mars is in the <strong>12th house in Sagittarius</strong>, Mangal Dosh does not apply.
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    If <strong>both partners are Manglik</strong>, Mangal Dosh is <strong>nullified</strong>.
                                </li>
                                <li>
                                    If <strong>Grah Maitri</strong> is 5/5, or <strong>Bhakoot Dosha is absent</strong>, some astrologers ignore Mangal Dosh altogether.
                                </li>
                                <li>
                                    If <strong>Sun</strong>, <strong>Saturn</strong>, <strong>Rahu</strong>, or <strong>Ketu</strong> are placed in the <strong>same house</strong> in the Non-Manglik person’s chart as Mars in the Manglik person’s chart, the dosha is considered <strong>cancelled</strong>.
                                </li>
                                <li>
                                    If <strong>Mars</strong> is <strong>retrograde</strong>, <strong>debilitated</strong>, <strong>combust</strong>, or placed in an <strong>enemy sign</strong>, <em>and</em> if <strong>Jupiter</strong> and <strong>Venus</strong> are <strong>strongly placed in a Kendra</strong> (1st, 4th, 7th, or 10th house) in the <strong>boy’s chart</strong>, then Mangal Dosh is considered <strong>neutralized</strong>.
                                </li>
                                <li>
                                    If the couple scores between <strong>23–30 points</strong> in <strong>Ashtakoot matching</strong>, and have a strong <strong>Grah Maitri</strong> (5/5) and <strong>same Gana</strong>, Mangal Dosh is generally <strong>ignored</strong>.
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}