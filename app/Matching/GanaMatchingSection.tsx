import Image from "next/image";

export default function GanaMatchingSection() {
    return (
        <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Gana Matching
            </h2>

            <div className="bg-[#fefae0] rounded-2xl p-6 max-w-4xl mx-auto space-y-4">
                <p className="text-lg leading-relaxed">
                    Gana Koot helps determine the nature compatibility between the couple. It classifies individuals into three temperamental types — <strong>Deva</strong>, <strong>Manushya</strong>, and <strong>Rakshasa</strong> — based on their <strong>Nakshatra</strong>.
                </p><div className="rounded-xl overflow-hidden border">
                    <Image
                        src="/images/Gana.png"
                        alt="Grah Maitri Matching Table"
                        width={1100}
                        height={600}
                        className="w-full"
                    />
                </div>
                <p className="text-lg leading-relaxed">
                    The scoring is out of <strong>6 points</strong>. Couples with mismatched temperaments may face friction in long-term compatibility.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center border border-gray-300 rounded overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 border">Girl \ Boy</th>
                                <th className="p-2 border">Deva</th>
                                <th className="p-2 border">Manushya</th>
                                <th className="p-2 border">Rakshasa</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="p-2 border font-medium">Deva</td>
                                <td className="p-2 border">6</td>
                                <td className="p-2 border">6</td>
                                <td className="p-2 border">0 ❌</td>
                            </tr>
                            <tr>
                                <td className="p-2 border font-medium">Manushya</td>
                                <td className="p-2 border">6</td>
                                <td className="p-2 border">6</td>
                                <td className="p-2 border">0 ❌</td>
                            </tr>
                            <tr>
                                <td className="p-2 border font-medium">Rakshasa</td>
                                <td className="p-2 border">1</td>
                                <td className="p-2 border">0 ❌</td>
                                <td className="p-2 border">6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-lg font-medium pt-4 text-center">
                    ⚠️ Gana mismatch can cause temperament clashes — especially when <strong>Deva</strong> or <strong>Manushya</strong> girl is matched with a <strong>Rakshasa</strong> boy.
                </p>
            </div>
        </section>
    );
}
