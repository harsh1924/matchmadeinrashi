export default function GrahaMaitriKoota() {
    return (
        <div className="space-y-4 pt-10">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
                5. Graha Maitri Koota (Planetary Friendship)
            </h2>

            {/* Explanation Card */}
            <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
                {/* Explanation */}
                <div className="space-y-3">
                    <p>
                        Graha Maitri Koota measures the <strong>emotional and mental compatibility</strong> between partners by comparing the ruling planets (lords) of their Moon signs.
                    </p>

                    <p>
                        Every zodiac sign is ruled by a specific planet, and planets have defined relationships with each other — they can be <strong>friends</strong>, <strong>neutrals</strong>, or <strong>enemies</strong>. This relationship directly impacts the match score. It is <strong>very important</strong> koota in kundali milan.
                    </p>

                    {/* Planet Rulership Table */}
                    <p className="font-semibold">Zodiac Sign and Ruling Planet:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Aries – Mars</li>
                        <li>Taurus – Venus</li>
                        <li>Gemini – Mercury</li>
                        <li>Cancer – Moon</li>
                        <li>Leo – Sun</li>
                        <li>Virgo – Mercury</li>
                        <li>Libra – Venus</li>
                        <li>Scorpio – Mars</li>
                        <li>Sagittarius – Jupiter</li>
                        <li>Capricorn – Saturn</li>
                        <li>Aquarius – Saturn</li>
                        <li>Pisces – Jupiter</li>
                    </ul>

                    {/* Planetary Relationship Table */}
                    <p className="font-semibold pt-4">Planetary Friendships:</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border border-yellow-400 text-sm">
                            <thead className="bg-yellow-100">
                                <tr>
                                    <th className="border border-yellow-300 px-3 py-2">Planet</th>
                                    <th className="border border-yellow-300 px-3 py-2">Friends</th>
                                    <th className="border border-yellow-300 px-3 py-2">Neutrals</th>
                                    <th className="border border-yellow-300 px-3 py-2">Enemies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Sun</td>
                                    <td className="border px-3 py-2">Moon, Mars, Jupiter</td>
                                    <td className="border px-3 py-2">Mercury</td>
                                    <td className="border px-3 py-2">Venus, Saturn</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Moon</td>
                                    <td className="border px-3 py-2">Sun, Mercury</td>
                                    <td className="border px-3 py-2">None</td>
                                    <td className="border px-3 py-2">None</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Mars</td>
                                    <td className="border px-3 py-2">Sun, Moon, Jupiter</td>
                                    <td className="border px-3 py-2">Venus, Saturn</td>
                                    <td className="border px-3 py-2">Mercury</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Mercury</td>
                                    <td className="border px-3 py-2">Sun, Venus</td>
                                    <td className="border px-3 py-2">Mars, Jupiter, Saturn</td>
                                    <td className="border px-3 py-2">Moon</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Jupiter</td>
                                    <td className="border px-3 py-2">Sun, Moon, Mars</td>
                                    <td className="border px-3 py-2">Saturn</td>
                                    <td className="border px-3 py-2">Mercury, Venus</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Venus</td>
                                    <td className="border px-3 py-2">Mercury, Saturn</td>
                                    <td className="border px-3 py-2">Mars, Jupiter</td>
                                    <td className="border px-3 py-2">Sun, Moon</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Saturn</td>
                                    <td className="border px-3 py-2">Mercury, Venus</td>
                                    <td className="border px-3 py-2">Jupiter</td>
                                    <td className="border px-3 py-2">Sun, Moon, Mars</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        Full 5 points are given for mutual friendship between ruling planets, 3 points for one-way friendship or neutral relationships, and 0 points if both planets are enemies.
                    </p>

                    <p>
                        This Koota contributes a maximum of <strong>5 points</strong> to the total compatibility score.
                    </p>
                </div>

                {/* Real Example Box */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
                    <p>
                        🧾 For example, if the boy’s Moon sign is <strong>Gemini (ruled by Mercury)</strong> and the girl’s is
                        <strong> Libra (ruled by Venus)</strong>, Mercury and Venus are friends — the Graha Maitri score is <strong>5</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}