'use client';

import { useState } from "react";

const yogas = [
    {
        id: 'raj',
        name: 'Raj Yoga',
        conditions: [
            'Formed when a Kendra lord (1, 4, 7, 10) and a Trikon lord (1, 5, 9) are together (conjunction, aspect, or exchange).',
        ],
        effects: [
            'Gives authority, leadership, government success, fame, and social status.',
        ],
    },
    {
        id: 'gajkesari',
        name: 'Gaj Kesari Yoga',
        conditions: [
            'Formed when Jupiter is in Kendra (1st, 4th, 7th, or 10th) from the Moon.',
        ],
        effects: [
            'Gives wisdom, respect, status, and protection from major troubles.',
        ],
    },
    {
        id: 'vipreet',
        name: 'Vipreet Raj Yoga',
        conditions: [
            'Formed when lords of 6th, 8th, or 12th houses occupy these same houses.',
        ],
        effects: [
            'Gains and rise after adversity, hidden support, success through struggles.',
        ],
    },
    {
        id: 'mahabhagya',
        name: 'Mahabhagya Yoga',
        conditions: [
            'In a Male Chart:',
            '• Birth must occur during the daytime (when the Sun is visible).',
            '• Lagna must be in an odd sign: Aries, Gemini, Leo, Libra, Sagittarius, Aquarius.',
            '• Moon must also be in an odd sign (same as above).',
            '',
            'In a Female Chart:',
            '• Birth must occur during the night (when the Sun is not visible).',
            '• Lagna must be in an even sign: Taurus, Cancer, Virgo, Scorpio, Capricorn, Pisces.',
            '• Moon must also be in an even sign (same as above).'
        ],
        effects: [
            'These natives have an immense turning point in their life where their destiny explodes and takes them to great heights. Person enjoys rare luck, high status, fame, royal comforts, and success with little obstacles., It makes a person fortunate and influential in society.',
        ],
    },
    {
        id: 'malavya',
        name: 'Malavya Mahapurush Yoga (Venus)',
        conditions: [
            'When Venus is in its own sign or exalted in the Kendra houses (1st, 4th, 7th, 10th).',
            'Example: Venus in Pisces (exalted) in the 7th house or Venus in Libra (own sign) in the 4th house.',
        ],
        effects: [
            'Gives immense beauty, luxury, wealth, charm, and comforts of all kinds.',
        ],
    },
    {
        id: 'sasa',
        name: 'Sasa Mahapurush Yoga (Saturn)',
        conditions: [
            'When Saturn is in its own sign or exalted in the Kendra houses (1st, 4th, 7th, 10th).',
        ],
        effects: [
            'Gives discipline, justice, immense power and respect.',
            'Results usually mature later in life, often after the mid-30s, and depend on hard work.',
        ],
    },
    {
        id: 'hamsa',
        name: 'Hamsa Mahapurush Yoga (Jupiter)',
        conditions: [
            'When Jupiter is in its own sign or exalted in the Kendra houses (1st, 4th, 7th, 10th).',
        ],
        effects: [
            'Makes the native very knowledgeable, wise, generous, and spiritually inclined.',
            'Also brings wealth and power, but the focus is more on knowledge and spirituality.',
        ],
    },
    {
        id: 'bhadra',
        name: 'Bhadra Mahapurush Yoga (Mercury)',
        conditions: [
            'When Mercury is in its own sign or exalted in the Kendra houses (1st, 4th, 7th, 10th).',
        ],
        effects: [
            'Enhances communication, memory, and analytical abilities.',
            'Brings wealth and makes the native known for intelligence and speech.',
        ],
    },
    {
        id: 'ruchak',
        name: 'Ruchak Mahapurush Yoga (Mars)',
        conditions: [
            'When Mars is in its own sign or exalted in the Kendra houses (1st, 4th, 7th, 10th).',
        ],
        effects: [
            'Gives courage, fighting spirit, strategic thinking, and the ability to overcome obstacles logically.',
        ],
    },
    {
        id: 'dhan',
        name: 'Dhan Yoga',
        conditions: [
            'When lords of Trikona houses (1st, 5th, 9th), 2nd house lord, and 11th house lord form conjunction, mutual aspect, or exchange.',
        ],
        effects: [
            'Confers wealth and financial growth depending on the strength of the planets involved.',
        ],
    },
    {
        id: 'dharma-karma',
        name: 'Dharma-Karma-Adhipati Yoga',
        conditions: [
            'When the lords of the 9th house (Dharma) and 10th house (Karma) exchange places.',
        ],
        effects: [
            'Takes the person towards pious deeds, service to culture and heritage.',
            'Confers high respect, name and fame due to righteous actions.',
            'Also considered a Raj Yoga.',
        ],
    },
    {
        id: 'saraswati',
        name: 'Saraswati Yoga',
        conditions: [
            'The benefic planets Venus, Jupiter, and Mercury are placed in Lagna, 2nd, 4th, 5th, 7th, 9th, or 10th house.',
            'They may be together (conjunction) or occupy these houses individually.',
        ],
        effects: [
            'Gives wisdom, knowledge, learning, creative skills, and success in education, arts, or literature.',
        ],
    },
    {
        id: 'parivartana',
        name: 'Parivartana Yoga',
        conditions: [
            'Formed when the lords of two houses exchange their houses.',
            'Parivartana between Kendra lords (1st, 4th, 7th, 10th) and Trikon lords (1st, 5th, 9th) is best.',
            'Example: When the 2nd lord (wealth) and 11th lord (gains) exchange, it brings huge wealth.',
        ],
        effects: [
            'Results depend on the houses involved — native will get benefits related to those bhavas.',
        ],
    },
    {
        id: 'neechabhanga',
        name: 'Neechbanga Raj Yoga',
        conditions: [
            'When a planet is debilitated in a house but the lord of that house is exalted or an exalted planet occupies the same house.',
            'This partially cancels the debilitation.',
        ],
        effects: [
            'Brings a rise during the period of the exalted planet.',
            'The native still feels some effect of the debilitation too.',
        ],
    },
    {
        id: 'amala',
        name: 'Amala Yoga',
        conditions: [
            'When a benefic planet occupies the 10th house from either Lagna or Moon.',
        ],
        effects: [
            'Gives very high position, fame, respect, and a spotless reputation.',
            'Often seen in charts of political leaders and top executives.',
        ],
    },
    {
        id: 'chandramangala',
        name: 'Sasi Mangala Yoga / Chandra Mangala Yoga',
        conditions: [
            'Formed when Moon and Mars are in conjunction or in exact 180-degree aspect.',
            'When this occurs in the 11th house, it is especially powerful for wealth.',
        ],
        effects: [
            'Brings high financial status during Moon or Mars dasha or bukti.',
            'Makes the native financially strong, active, and entrepreneurial.',
        ],
    },
];

export default function MajorYogas() {
    const [selectedYoga, setSelectedYoga] = useState(yogas[0]);

    return (
        <section className="pt-10 mb-10">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Major Yogas in Individual Chart
            </h2>

            <div className="bg-[#fefae0] rounded-2xl shadow p-6 mx-auto flex flex-col md:flex-row gap-6">
                {/* Left Panel */}
                <div className="md:w-1/3 space-y-4">
                    <div className="bg-[#fefae0] p-4 space-y-3">
                        <h3 className="text-xl font-semibold text-[#ce9a48] text-center">
                            Yoga List
                        </h3>
                        <div className="overflow-scroll no-scrollbar h-[600px] space-y-3">
                            {yogas.map((yoga) => (
                                <button
                                    key={yoga.id}
                                    onClick={() => setSelectedYoga(yoga)}
                                    className={`w-full cursor-pointer px-4 py-2 rounded-lg font-medium transition ${selectedYoga.id === yoga.id
                                        && 'bg-[#ce9a48] text-white'
                                        }`}
                                >
                                    {yoga.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="md:w-2/3 bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-4">
                    <h3 className="text-lg font-bold text-[#ce9a48]">{selectedYoga.name}</h3>
                    <div>
                        <h4 className="font-semibold text-[#ce9a48] mb-1">Formation Conditions:</h4>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            {selectedYoga.conditions.map((c, idx) => (
                                <li key={idx}>{c}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[#ce9a48] mb-1">Effects:</h4>
                        <ul className="list-disc list-inside space-y-2 text-base">
                            {selectedYoga.effects.map((e, idx) => (
                                <li key={idx}>{e}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <a
                    href="https://archive.org/details/ThreeHundredImportantCombinationsInVedicAstrology/page/n11/mode/1up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ce9a48] text-white px-6 py-2 rounded-lg shadow hover:bg-[#b8860b] transition"
                >
                    📚 Vedic Yogas Book (PDF)
                </a>
            </div>
        </section>
    );
}