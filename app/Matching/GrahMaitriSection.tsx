import Image from "next/image";

export default function GrahMaitriSection() {
    return (
        <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Grah Maitri Matching
            </h2>

            <div className="bg-[#fefae0] rounded-2xl shadow p-6 max-w-6xl mx-auto space-y-4">
                <p className="text-lg leading-relaxed">
                    Grah Maitri (ग्रह मैत्री) checks the friendship between the ruling planets of the Moon signs (Rashi) of the bride and groom. It reflects their mental compatibility, harmony, and mutual understanding.
                </p>

                <p className="text-lg leading-relaxed">
                    The total score for Grah Maitri is <strong>5 points</strong>. A higher score suggests better understanding and cooperation between the couple.
                </p>

                <p className="text-lg leading-relaxed">
                    Use the <strong>Moon Signs</strong> of both individuals to find the corresponding compatibility score from the chart below:
                </p>

                <div className="rounded-xl overflow-hidden border">
                    <Image
                        src="/images/GrahMaitri.png"
                        alt="Grah Maitri Matching Table"
                        width={1100}
                        height={600}
                        className="w-full"
                    />
                </div>

                <p className="text-lg font-medium pt-4 text-center">
                    💫 Planetary friendships play a key role in emotional bonding and day-to-day understanding between partners.
                </p>

                <p className="text-lg font-semibold text-center text-green-700">
                    ✅ If the couple scores a full <strong>5/5</strong> in Grah Maitri, then <strong>Nadi Dosha</strong>, <strong>Bhakoot Dosha</strong>, and <strong>Gana Dosha</strong> are traditionally considered not applicable.
                </p>
            </div>
        </section>
    );
}
