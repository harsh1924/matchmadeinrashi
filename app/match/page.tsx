"use client"

import React from 'react'
import Navbar from '../(components)/Navbar'
import MoonNakshatraInfo from '../(components)/MoonNakshatraInfo'
import KootaBreakdown from '../(components)/KootaBreakdown'
import MatchingIntro from '../Matching/MatchingIntro'
import KootaInfoPanel from '../Matching/KootaInfoPanel'

const page = () => {
    return (
        <div>
            <Navbar />
            {/* Old Belief Section */}
            <div className="bg-[#fef9e7] shadow-md p-8 space-y-6 w-full mx-auto mb-4">
                <h2 className="text-3xl font-bold text-[#ce9a48] tracking-tight font-serif text-center">
                    The Old Beliefs You’ve Probably Heard…
                </h2>

                <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 font-serif">
                    {/* <li>There are 8 fixed categories that determine compatibility</li> */}
                    <li>A score below 18 is considered bad for marriage</li>
                    <li>18 to 30 points means the match is generally good</li>
                    <li>30 to 36 points is said to be an excellent match</li>
                    <li>Bhakoot Dosh means mental and financial instability after marriage</li>
                    <li>Nadi Dosh can affect childbirth and marital harmony</li>
                    <li>Mangal Dosh (being Manglik) is believed to bring conflict or delay</li>
                    <li>If any of these doshas are present, the match is considered inauspicious</li>
                    <li>Being Manglik means marriage will be delayed, unlucky or one of the partner will die</li>
                    <li>If the Rashi or Nakshatra doesn’t match, it’s an automatic no.</li>
                </ul>
            </div>

            {/* Is this true section */}
            <div className="max-w-4xl mx-auto my-10 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#ce9a48] font-serif leading-tight">
                    But... Is This All Really True?
                </h2>
                <p className="mt-3 text-lg text-gray-700 font-serif max-w-3xl mx-auto">
                    You&apos;ve probably heard all these rules and warnings — but how much of it is accurate?
                    And how much is misunderstood tradition, outdated fear, or incomplete knowledge?
                </p>
            </div>

            {/* What is Kundali Milan */}
            <div className="bg-[#fefae0] border border-yellow-200 shadow-sm p-8 my-10 space-y-6 font-serif">
                <h2 className="text-3xl font-bold text-[#ce9a48] text-center">
                    What is Horoscope Matching?
                </h2>

                <p className="text-lg text-gray-800 leading-relaxed text-justify">
                    Horoscope matching is traditionally based on a 36-point system, evaluating compatibility across 8 distinct categories. This is known as <strong>Ashtkoot Milan</strong>.
                    It’s an ancient practice in Vedic astrology used to assess compatibility between two individuals for marriage by comparing their birth charts (Janam Kundlis) based on birth date, time, and place.
                </p>

                <p className="text-lg text-gray-800 leading-relaxed text-justify">
                    The system evaluates various aspects like personality, health, emotions, behavior, and family harmony. These are traditionally divided into 8 categories, contributing to a total score of 36 points. A higher score indicates stronger astrological compatibility.
                </p>

                <p className="text-lg text-gray-800 leading-relaxed text-justify">
                    While many families still rely heavily on this system, it’s important to understand how it works — and where modern interpretation allows flexibility. Knowing what each part really means can help you make informed decisions, not just traditional ones.
                </p>

                {/* 🌕 Highlighted Note */}
                <div className="bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                    <p className="text-gray-800 text-base leading-relaxed">
                        🔸 Matching can also be done based on just the <strong>Nakshatra</strong> (birth star) of the individuals — a simpler but widely used method.
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">
                        🔸 The <strong>Moon sign (Rashi)</strong> and <strong>Nakshatra</strong> of both people are <strong>extremely important</strong> in horoscope matching.
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">
                        🔸 Most of the major doshas — like <em>Mangal Dosh</em>, <em>Bhakoot</em>, and <em>Nadi Dosh</em> — are identified using the <strong>Moon sign</strong>.
                    </p>
                    <p className="text-gray-800 text-base leading-relaxed">
                        🔸 Matching for <strong>love marriages</strong> is slightly different — it focuses more on mental and emotional compatibility, rather than strict Guna score.
                    </p>
                </div>
            </div>

            {/* Find Moon sign and Nakshatra */}
            <MoonNakshatraInfo />

            {/* AsthKoota Explanation */}
            <KootaBreakdown />

            {/* Matching */}
            <MatchingIntro />
            <KootaInfoPanel />
        </div>
    )
}

export default page