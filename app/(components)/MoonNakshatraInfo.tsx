'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function MoonNakshatraInfo() {
    const [selected, setSelected] = useState<'moon' | 'nakshatra'>('moon')

    const imageSrc =
        selected === 'moon'
            ? '/images/moon-chart.png'
            : '/images/nakshatra-chart.png'

    return (
        <div className="mx-auto my-16 p-6 bg-[#fefae0] rounded-2xl shadow border border-yellow-200 font-serif">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md mb-4 text-gray-800 text-base leading-relaxed">
                <strong className="text-[#b1812c]">Step 1:</strong>{' '}
                Visit{' '}
                <a
                    href="https://www.astrosage.com/kundli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    astrosage.com/kundli
                </a>{' '}
                and enter your Date of Birth, Time, and Place.
                <br />
                <strong className="text-[#b1812c]">Step 2:</strong> Download your free Kundli PDF from there.
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* LEFT: Selector Buttons */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h3 className="text-2xl font-bold text-[#ce9a48] mb-2">Choose Category</h3>

                    <button
                        onClick={() => setSelected('moon')}
                        className={cn(
                            'w-full text-left px-4 py-3 rounded-lg border font-medium transition-all cursor-pointer',
                            selected === 'moon'
                                ? 'bg-yellow-100 border-yellow-400 text-[#b1812c]'
                                : 'bg-white border-gray-300 hover:bg-yellow-50'
                        )}
                    >
                        🌓 Find Moon Sign
                    </button>

                    <button
                        onClick={() => setSelected('nakshatra')}
                        className={cn(
                            'w-full text-left px-4 py-3 rounded-lg border font-medium transition-all cursor-pointer',
                            selected === 'nakshatra'
                                ? 'bg-yellow-100 border-yellow-400 text-[#b1812c]'
                                : 'bg-white border-gray-300 hover:bg-yellow-50'
                        )}
                    >
                        ✴️ Find Nakshatra
                    </button>
                </div>

                {/* RIGHT: Optimized Image */}
                <>
                    {selected === "moon" ?
                        <div className="w-full md:w-2/3 bg-white rounded-xl p-4 border border-yellow-100 shadow-sm flex flex-col items-center justify-center">
                            <div className="relative w-full h-[400px] flex items-center justify-center">
                                <Image
                                    src={imageSrc}
                                    alt={selected === 'moon' ? 'Moon Chart' : 'Nakshatra Chart'}
                                    width={400}
                                    height={400}
                                    className="object-contain rounded-md"
                                    priority
                                />
                            </div>
                            <div className="bg-[#fefae0] p-4 rounded-md text-gray-800 space-y-2 text-base leading-relaxed">
                                <h4 className="text-lg font-semibold text-[#ce9a48]">How to find it in the Kundli:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>
                                        Look for the abbreviation <strong>“Mo”</strong> in the chart.
                                    </li>
                                    <li>
                                        The number next to <strong>“Mo”</strong> indicates the zodiac sign (1 for Aries, 2 for Taurus, ..., 12 for Pisces).
                                    </li>
                                    <li>
                                        The sign number corresponds to your <strong>Moon Sign</strong> (Rashi).
                                    </li>
                                    <li>
                                        🧾 In the Kundli chart shown above, the number next to <strong>“Mo”</strong> is <strong>6</strong>.
                                        <br />
                                        This means the Moon Sign (Rashi) is <strong className="text-[#b1812c]">Virgo (Kanya)</strong>.
                                    </li>
                                </ul>
                            </div>
                        </div> : (
                            <div className="w-full md:w-2/3 bg-white rounded-xl p-4 border border-yellow-100 shadow-sm flex flex-col items-center justify-center">
                                <div>
                                    <div className="relative w-full h-[400px] flex items-center justify-center">
                                        <Image
                                            src={imageSrc}
                                            alt={'Nakshatra Chart'}
                                            width={500}
                                            height={500}
                                            className="object-contain rounded-md"
                                            priority
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[#ce9a48]">How to Find Your Nakshatra:</h4>
                                    <ul className="list-disc list-inside space-y-1 mt-2">
                                        <li>
                                            In the Kundli PDF, scroll down to find a <strong>planetary table</strong> that lists all planets and their positions.
                                        </li>
                                        <li>
                                            Look for the row where <strong>Moon</strong> is mentioned.
                                        </li>
                                        <li>
                                            The <strong>Nakshatra</strong> listed in that row is your birth star.
                                        </li>
                                    </ul>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-500 mt-3 p-3 rounded-md">
                                        <p>
                                            🧾 In this chart, under the Moon row in the table, the Nakshatra is listed as <strong className="text-[#b1812c]">Chitra</strong>.<br />
                                            So your Nakshatra is <strong>Chitra</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                </>
            </div>
        </div>
    )
}
