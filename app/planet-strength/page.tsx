'use client';

import { useState } from "react";
import Navbar from "../(components)/Navbar";

export default function PlanetStrengthInZodiac() {
    const planets = [
        'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'
    ];

    // Strength data only for Mars (sample)
    const planetStrengths: Record<string, Record<string, string[]>> = {
        Moon: {
            Exalted: ['Taurus'],
            Strong: ['Cancer'],
            Friendly: ['Aries', 'Leo', 'Sagittarius', 'Pisces'],
            Enemy: ['Gemini', 'Virgo', 'Libra', 'Capricorn', 'Aquarius'],
            Debilitated: ['Scorpoio'],
        },
        Mars: {
            Exalted: ['Capricorn'],
            Strong: ['Aries', 'Scorpio'],
            Friendly: ['Leo', 'Sagittarius', 'Pisces'],
            Enemy: ['Taurus', 'Gemini', 'Virgo'],
            Debilitated: ['Cancer'],
        },
        // other planets can be added similarly
    };

    const [selectedPlanet, setSelectedPlanet] = useState<string>('Moon');

    return (
        <>
            <Navbar />
            <section className="overflow-scroll no-scrollbar pt-10">
                <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                    Planet Strength in Various Zodiac Signs
                </h2>

                <div className="bg-[#fefae0] shadow p-6 mx-auto flex flex-col md:flex-row gap-6">
                    {/* Left Panel: Planets */}
                    <div className="md:w-1/3 space-y-4">
                        <div className="bg-[#fefae0] p-4 space-y-3">
                            <h3 className="text-xl font-semibold text-[#ce9a48] text-center">
                                Select Planet
                            </h3>
                            {planets.map((planet) => (
                                <button
                                    key={planet}
                                    onClick={() => setSelectedPlanet(planet)}
                                    className={`w-full cursor-pointer px-4 py-2 rounded-lg font-medium transition ${selectedPlanet === planet
                                        ? 'bg-[#ce9a48] text-white'
                                        : ''
                                        }`}
                                >
                                    {planet}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Strength Categories */}
                    <div className="md:w-2/3 bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                        <h3 className="text-lg font-bold text-[#ce9a48] text-center">
                            Strength in Zodiac Signs: {selectedPlanet}
                        </h3>

                        <ul className="space-y-2">
                            {['Exalted', 'Strong', 'Friendly', 'Enemy', 'Debilitated'].map((category) => (
                                <li key={category}>
                                    <div className="font-semibold text-[#ce9a48]">
                                        {category}
                                    </div>
                                    <div className="ml-4">
                                        {planetStrengths[selectedPlanet]?.[category]?.length ? (
                                            <span>
                                                {planetStrengths[selectedPlanet][category].join(', ')}
                                            </span>
                                        ) : (
                                            <span className="text-gray-500">-</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
