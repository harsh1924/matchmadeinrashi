import Image from "next/image";

export default function NadiMatchingSection() {
    return (
        <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Nadi Matching
            </h2>

            <div className="bg-[#fefae0] rounded-2xl p-6 max-w-5xl mx-auto space-y-6">
                <p className="text-lg leading-relaxed">
                    Nadi Koot is one of the most important aspects in horoscope matching. It represents <strong>Pranic compatibility</strong> — the flow of life energy between the couple.
                </p>

                <p className="text-lg leading-relaxed">
                    All Nakshatras are divided into three Nadis — <strong>Adi</strong> (start), <strong>Madhya</strong> (middle), and <strong>Antya</strong> (end). If both partners belong to the same Nadi, a <strong>Nadi Dosha</strong> is formed.
                </p>

                <p className="text-lg leading-relaxed">
                    Nadi Dosha can lead to health or fertility issues and traditionally results in a score of <strong>0 out of 8</strong>. If the Nadis are different, the couple gets full <strong>8/8</strong> points.
                </p>

                {/* Image */}
                <div className="rounded-xl overflow-hidden border">
                    <Image
                        src="/images/Nadi.png"
                        alt="Nadi Compatibility Table"
                        width={1000}
                        height={500}
                        className="w-full"
                    />
                </div>

                <div className="bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                    <h3 className="text-lg font-bold text-[#ce9a48]">
                        ✅ Nadi Dosha Cancellation Rules
                    </h3>

                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            If <strong>Grah Maitri</strong> score is <strong>5/5</strong>, Nadi Dosha is often considered <strong>cancelled</strong>.
                        </li>
                        <li>
                            If the <strong>Varna</strong> of both boy and girl is <strong>not Brahmin</strong>, then Nadi Dosha may not apply.
                        </li>
                        <li>
                            If the <strong>Nakshatra lords</strong> of both partners are <strong>same</strong> or are <strong>friendly planets</strong>, the Dosha is considered nullified.
                        </li>
                        <li>
                            If the <strong>girl’s Nakshatra</strong> is one of the following: <strong>Rohini</strong>, <strong>Ardra</strong>, <strong>Mrigashira</strong>, <strong>Vishakha</strong>, <strong>Pushya</strong>, <strong>Shravan</strong>, <strong>Revati</strong>, or <strong>Uttara Bhadrapada</strong>, then Nadi Dosha is considered <strong>cancelled</strong>.
                        </li>
                        <li>
                            If both the <strong>Rashi lords</strong> of the couple are either <strong>Jupiter</strong>, <strong>Venus</strong>, or <strong>Mercury</strong>, Nadi Dosha does not apply.
                        </li>
                    </ul>
                </div>

                <p className="text-lg font-medium text-center pt-4">
                    ⚠️ If Nadi Dosha is present, it must be carefully analyzed or cancelled through exceptions (like same Gotra, Grah Maitri 5/5, etc.).
                </p>
            </div>

            <a
                href="/images/nadi-dosh-cancellation-matrix.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto mt-4 w-fit bg-white border border-yellow-500 hover:border-yellow-600 text-yellow-700 hover:text-yellow-900 font-semibold px-6 py-3 rounded-xl shadow transition-all hover:shadow-lg"
            >
                📄 View Detailed Nadi Cancellation PDF
            </a>
            <p className="text-sm italic text-center text-gray-600 mt-2">
                *In the PDF, blank spaces indicate cases where <span className="font-medium text-[#ce9a48]">Tara Suddhi</span> is required for cancellation.
            </p>
        </section>
    );
}
