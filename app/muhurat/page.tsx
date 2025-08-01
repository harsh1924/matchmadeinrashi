'use client';

import { JSX, useState } from "react";
import Navbar from "../(components)/Navbar";

export default function PanchangShuddhiAndMuhurat() {
    const options = ['Tithi', 'Nakshatra', 'Vaar', 'Karan', 'Yog'];
    const [selectedOption, setSelectedOption] = useState<string>('Tithi');

    const explanations: Record<string, JSX.Element> = {
        Tithi: (
            <>
                <p>
                    Tithi refers to the lunar day and is one of the most important elements in Panchang. It indicates the relationship between the Sun and Moon and influences the nature of the day, auspiciousness, and suitability for different ceremonies.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li>
                        ✅ <strong>Dwitiya, Tritiya, Panchami, Saptami, Ekadashi and Trayodashi</strong> are generally considered <strong>auspicious</strong> for starting new activities.
                    </li>
                    <li>
                        ❌ <strong>Amavasya</strong> (new moon) and <strong>Purnima</strong> (full moon) are generally considered <strong>inauspicious</strong> and are usually avoided.
                    </li>
                    <li>
                        ❌ Remaining Tithis are typically <strong>avoided in both Shukla Paksha and Krishna Paksha</strong> unless strengthened by other factors.
                    </li>
                </ul>
            </>
        ),
        Nakshatra: (
            <div>
                <p>
                    Nakshatra is the constellation in which the Moon is placed at a given time. It affects the qualities of the day and is very important when choosing Muhurat, especially for marriage and other major life events.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li>❌ <strong>Bharani, Kritika, Ashlesha, Purva Phalguni, Vishaka</strong> are generally <strong>not good</strong> for most important activities.</li>
                    <li>❌ <strong>Ashwini, Mrigshira, Punarvasu, Magha, Rohini, Hasta, Chitra, Moola, Anuradha, Uttar Phalguni, Uttarashada, Uttar Bhadrapad, Shravan, Rewati, Vishakha, Pushya</strong> are <strong>not preferred for marriage</strong> as they may cause instability or challenges.</li>
                    <li>✅ Nakshatras that bring <strong>stability, prosperity, and wealth</strong> are generally preferred. Examples include <strong>Rohini, Uttara Phalguni, Uttarashada, Uttarabhadrapada, Anuradha</strong>.</li>
                </ul>
                <p className="mt-2">
                    📜 Nakshatra suitability can also be checked using the <strong>Panch Drisang</strong> method, or by matching the Nakshatra with the couple’s Janma Nakshatra to enhance harmony and auspiciousness.
                </p>
            </div>

        ),
        Vaar: (
            <div>
                <p>
                    Vaar means the weekday (Sunday to Saturday). Each day is ruled by a planet, and carries certain qualities that affect the suitability for different activities.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li>✅ <strong>Monday, Wednesday, Thursday, and Friday</strong> are generally <strong>good for most auspicious works</strong> including marriage, travel, and starting new ventures.</li>
                    <li>❌ <strong>Tuesday and Saturday</strong> are usually <strong>avoided</strong> for marriage, travel, or any major auspicious work, as they can bring obstacles or health issues.</li>
                    <li>⚠️ <strong>Sunday</strong> is <strong>not ideal for very auspicious ceremonies</strong>, but can be used for normal, routine, or less critical tasks.</li>
                </ul>
            </div>

        ),
        Karan: (
            <div>
                <p>
                    Karan is half of a Tithi and helps refine the auspiciousness of a Muhurat. There are 11 Karans in total, and each carries its own influence over the activity being planned.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li>✅ <strong>Bava, Balava, Kaulava, Taitila, Garaja, Vanija, </strong> are generally considered <strong>good for starting new works</strong>, with Bava, Balava, Kaulava, and Taitila being especially auspicious.</li>
                    <li>❌ <strong>Shakuni, Chatushpada, Nagava, and Kimstughna</strong> are usually <strong>inauspicious</strong> and should be avoided for major ceremonies like marriage, housewarming, or travel.</li>
                    <li>⚠️ <strong>Vishti (Bhadra)</strong> can sometimes be used for competitive, aggressive, or legal matters, but is generally avoided for auspicious works.</li>
                </ul>
            </div>

        ),
        Yog: (
            <div>
                <p>
                    Yog is formed by the sum of the longitudes of the Sun and Moon, divided into 27 parts (each of 13°20′). Each Yog carries specific qualities that influence the overall auspiciousness of a day.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li>✅ <strong>Amrita, Siddhi, Brahma, Shubha, Shukla, Dhriti, Harsha, Saubhagya</strong> and similar Yogas are considered <strong>highly auspicious</strong> and bring prosperity, harmony, and success.</li>
                    <li>❌ <strong>Vyatipata, Vaidhriti, Ganda, Atiganda, Shoola, Vyaghata, Parigha</strong> and some others are <strong>generally inauspicious</strong> and should be avoided for marriage, travel, or starting new work.</li>
                    <li>⚠️ Some neutral Yogas may turn favorable if supported by strong Tithi, Nakshatra, and planetary positions.</li>
                </ul>
            </div>

        )
    };

    return (
        <>
            <Navbar />
            <section className="overflow-scroll no-scrollbar space-y-6 w-full">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
                    Panchang Shuddhi
                </h2>

                {/* Paragraph explaining Panchang Shuddhi */}
                <div className="bg-[#fefae0] shadow p-6 rounded-md text-base w-full">
                    <p>
                        <strong>Panchang Shuddhi</strong> is the process of ensuring the purity and suitability of a chosen Muhurat (auspicious time) by examining five key elements of the Hindu calendar:
                        <strong> Tithi</strong> (lunar day), <strong>Nakshatra</strong> (constellation), <strong>Vaar</strong> (weekday), <strong>Karan</strong> (half lunar day), and <strong>Yog</strong> (specific combination of the Sun and Moon).
                        By checking these five elements, astrologers identify the most auspicious moments for ceremonies like marriage, housewarming, starting a business, and other important life events.
                    </p>
                </div>

                {/* Muhurat Finder UI */}
                <div className="bg-[#fefae0] shadow p-6 mx-auto flex flex-col md:flex-row gap-6">
                    {/* Left Panel: Options */}
                    <div className="md:w-1/3 space-y-4">
                        <div className="bg-[#fefae0] p-4 space-y-3">
                            <h3 className="text-xl font-semibold text-[#ce9a48] text-center">
                                Select Panchang Element
                            </h3>
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedOption(option)}
                                    className={`w-full cursor-pointer px-4 py-2 rounded-lg font-medium transition ${selectedOption === option
                                        ? 'bg-[#ce9a48] text-white'
                                        : ''
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Explanation */}
                    <div className="md:w-2/3 bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                        <h3 className="text-lg font-bold text-[#ce9a48] text-center">
                            {selectedOption}
                        </h3>
                        {explanations[selectedOption]}
                    </div>
                </div>
            </section>
            <div className="bg-[#fefae0] shadow p-6 mx-auto rounded-md space-y-3 mt-6">
                <h3 className="text-lg font-bold text-[#ce9a48] text-center">
                    📜 Additional Considerations
                </h3>
                <p>
                    Along with the five Panchang elements — <strong>Tithi, Nakshatra, Vaar, Karan</strong> and <strong>Yog</strong> — astrologers also carefully check other factors to finalize an auspicious Muhurat:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li>🌙 <strong>Chandrabala</strong> (strength of the Moon on that day)</li>
                    <li>⭐ <strong>Tarabala</strong> (compatibility of the day's Nakshatra with the person's birth Nakshatra)</li>
                    <li>🪐 Overall situation and dignity of key planets like Jupiter and Venus</li>
                    <li>⚠️ Avoidance of special inauspicious periods such as:
                        <ul className="list-disc list-inside ml-5 space-y-1">
                            <li><strong>Panchak</strong></li>
                            <li><strong>Holasthak</strong></li>
                            <li><strong>Shukra Ast</strong> (combustion of Venus)</li>
                            <li><strong>Guru Ast</strong> (combustion of Jupiter)</li>
                            <li><strong>Adhik Maas</strong> (extra lunar month)</li>
                            <li><strong>Chaturmas / Malmas</strong></li>
                        </ul>
                    </li>
                </ul>
                <p>
                    ✨ For example, even if the Panchang shows an auspicious Yog like <em>Siddhi</em>, but the person’s Moon is <strong>weak</strong> or aspected by malefic planets, astrologers may suggest remedies or pick a different Muhurat to ensure better results.
                </p>
            </div>

        </>
    );
}
