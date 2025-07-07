export default function NadiKoota() {
    return (
        <div className="space-y-4 pt-10">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
                Nadi Koota (Genetic & Health Compatibility)
            </h2>

            {/* Explanation Card */}
            <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
                {/* Explanation */}
                <div className="space-y-3">
                    <p>
                        Nadi Koota is the most important and sensitive of all the Kootas. It deals with <strong>genetic compatibility, health, and progeny (children)</strong>. If both individuals belong to the same Nadi, it may result in serious doshas.
                    </p>

                    <p>
                        There are <strong>3 types of Nadi</strong> based on Nakshatra:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Aadi (First)</strong> – Ashwini, Bharani, Krittika (1st part), etc.</li>
                        <li><strong>Madhya (Middle)</strong> – Rohini, Mrigashira (2nd half), Ardra, etc.</li>
                        <li><strong>Antya (Last)</strong> – Pushya, Ashlesha, Magha, etc.</li>
                    </ul>

                    <p>
                        If both partners belong to the <strong>same Nadi</strong>, it is called <strong>Nadi Dosha</strong> and traditionally scores <strong>0 points</strong>. This is believed to affect fertility or children’s health.
                    </p>

                    <p>
                        If the Nadi is different, the couple gets <strong>full 8 points</strong>. In case of Nadi Dosha, some exceptions can cancel it (like same Gotra, strong horoscopes, etc.), but proper consultation is needed.
                    </p>
                </div>

                {/* Real Example Box */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
                    <p>
                        🧾 For example, if both the boy and girl have <strong>Ashwini Nakshatra</strong>, they both belong to
                        <strong> Aadi Nadi</strong> — this forms a <strong>Nadi Dosha</strong> and the score becomes <strong>0</strong>.
                    </p>
                </div>
            </div>
            <NadiLookupTable />
        </div>
    );
}


function NadiLookupTable() {
    return (
        <div className="space-y-4 pt-10">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
                Nadi Table by Category
            </h2>

            {/* Card */}
            <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 text-base leading-relaxed space-y-6">
                <p>
                    Nakshatras are divided into three groups based on their <strong>Nadi</strong>. Matching partners with the same Nadi can result in <strong>Nadi Dosha</strong>.
                </p>

                {/* Table-like UI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Aadi Nadi */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md space-y-2">
                        <h3 className="text-lg font-bold text-yellow-800">🌀 Aadi Nadi</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Ashwini</li>
                            <li>Bharani</li>
                            <li>Krittika</li>
                            <li>Magha</li>
                            <li>Purva Phalguni</li>
                            <li>Uttara Phalguni</li>
                            <li>Mula</li>
                            <li>Purva Ashadha</li>
                            <li>Uttara Ashadha</li>
                        </ul>
                    </div>

                    {/* Madhya Nadi */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md space-y-2">
                        <h3 className="text-lg font-bold text-yellow-800">🌗 Madhya Nadi</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Rohini</li>
                            <li>Mrigashira</li>
                            <li>Ardra</li>
                            <li>Hasta</li>
                            <li>Chitra</li>
                            <li>Swati</li>
                            <li>Shravana</li>
                            <li>Dhanishta</li>
                            <li>Shatabhisha</li>
                        </ul>
                    </div>

                    {/* Antya Nadi */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md space-y-2">
                        <h3 className="text-lg font-bold text-yellow-800">🌙 Antya Nadi</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Punarvasu</li>
                            <li>Pushya</li>
                            <li>Ashlesha</li>
                            <li>Vishakha</li>
                            <li>Anuradha</li>
                            <li>Jyeshtha</li>
                            <li>Purva Bhadrapada</li>
                            <li>Uttara Bhadrapada</li>
                            <li>Revati</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}