import Image from "next/image";

export default function BhakootMatchingSection() {
    return (
        <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Bhakoot Matching
            </h2>

            <div className="bg-[#fefae0] rounded-2xl p-6 max-w-6xl mx-auto space-y-6">
                <p className="text-lg leading-relaxed">
                    Bhakoot Koot helps understand how a couple will live together — both emotionally and practically. It checks the <strong>distance between their Moon Signs (Rashi)</strong>.
                </p>

                <p className="text-lg leading-relaxed">
                    If the Moon signs fall into inauspicious combinations like <strong>2–12, 6–8, or 5–9</strong>, it's called a <strong>Bhakoot Dosha</strong>, and the score becomes 0.
                </p>

                <p className="text-lg leading-relaxed">
                    The maximum score for Bhakoot is <strong>7 points</strong>. It is considered very important in the traditional 36-point matchmaking system.
                </p>

                {/* Image 1 */}
                {/* Image 1 */}
                <div className="rounded-xl overflow-hidden border">
                    <Image
                        src="/images/Bhakoot1.png"
                        alt="Bhakoot Rashi Table"
                        width={1100}
                        height={600}
                        className="w-full"
                    />
                </div>

                <p className="text-md font-medium text-center text-gray-700">
                    🧮 <strong>These are the points without cancellation. Now we will apply cancellation rules and see what changes.</strong>
                </p>

                <div className="bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                    <h3 className="text-lg font-bold text-[#ce9a48]">
                        ✅ Bhakoot Dosha Cancellation Rules
                    </h3>

                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            If <strong>Grah Maitri</strong> score is <strong>5/5</strong>, Bhakoot Dosha is usually <strong>cancelled</strong>. For lower scores, cancellation depends on other supporting factors.
                        </li>
                        <li>
                            If there is <strong>no Nadi Dosha</strong>, Bhakoot Dosha may be considered <strong>nullified</strong>.
                        </li>
                        <li>
                            If the <strong>D9 Lagna Lords</strong> (Navamsa Ascendants) of the boy and girl are <strong>friendly</strong>, Bhakoot Dosha can be cancelled.
                        </li>
                        <li>
                            If the couple has <strong>full 3/3 points in Tara Koot</strong> (Tara Suddhi), then Bhakoot Dosha is considered <strong>not applicable in some cases.</strong>.
                        </li>
                        <li>
                            If the <strong>girl’s Moon sign</strong> is in the <strong>9th house</strong> from the boy’s, and the <strong>boy’s Moon sign</strong> is in the <strong>5th house</strong> from the girl’s, Bhakoot Dosha is <strong>cancelled</strong> due to auspicious trine relationship.
                        </li>
                    </ul>
                </div>


                {/* Image 2 */}
                <div className="rounded-xl overflow-hidden border">
                    <Image
                        src="/images/Bhakoot2.png"
                        alt="Bhakoot Score Table"
                        width={1100}
                        height={600}
                        className="w-full"
                    />
                </div>

                <p className="text-lg font-medium text-center pt-4">
                    ⚠️ If Bhakoot Dosha is present, it can indicate emotional disconnection or life path mismatch — unless it's canceled by exceptions.
                </p>
            </div>

            {/* Image 3 - Final Exception / Separate Box */}
            <div className="mt-6 max-w-4xl mx-auto rounded-xl overflow-hidden border">
                <Image
                    src="/images/Bhakoot.png"
                    alt="Bhakoot Dosha Exceptions"
                    width={1000}
                    height={500}
                    className="w-full"
                />
            </div>

            <a
                href="/images/bhakoot-dosha-cancellation-chakra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto mt-4 w-fit bg-white border border-yellow-500 hover:border-yellow-600 text-yellow-700 hover:text-yellow-900 font-semibold px-6 py-3 rounded-xl shadow transition-all hover:shadow-lg"
            >
                📄 View Detailed Bhakoot Cancellation PDF
            </a>
            <p className="bg-yellow-50 text-gray-800 p-4 rounded-md text-sm leading-relaxed space-y-1">
                <strong>c1</strong> – Cancelled<br />
                <strong>c2</strong> – Boy to Girl distance 9<br />
                <strong>c3</strong> – Girl to Boy distance 5<br />
                <strong>c4</strong> – Tara Suddhi (blank cells imply c4)
            </p>

            <p className="text-sm italic text-center text-gray-600 mt-2">
                *In the PDF, blank spaces indicate cases where <span className="font-medium text-[#ce9a48]">Tara Suddhi</span> is required for cancellation.
            </p>


        </section>
    );
}