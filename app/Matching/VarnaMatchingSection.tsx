import Image from "next/image";

export default function VarnaMatchingSection() {
    return (
        <section className="pt-10 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Varna Matching
            </h2>

            <div className="bg-[#fefae0] rounded-2xl shadow p-6 mx-auto space-y-4">
                <p className="text-lg leading-relaxed">
                    Ideally, the boy’s Varna should be the same or higher than the girl’s. If not, it is considered less favorable.
                </p>

                <div className="space-y-6">
                    {/* Image: Varna Matching Table */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#ce9a48] mb-2">Varna Compatibility Table (by Rashi)</h3>
                        <Image
                            src="/images/Varna.png"
                            alt="Varna Koot Table"
                            width={1000}
                            height={600}
                            className="rounded-xl border"
                        />
                    </div>
                    <p className="text-lg font-semibold pt-2">
                        👉 Based on their <strong>Moon Signs</strong>, if the combination is valid as per the Varna table, the couple scores <span className="text-green-600 font-bold">1</span> point. Otherwise, they get <span className="text-red-600 font-bold">0</span>.
                    </p>

                    {/* Image: Varna Classification by Sign */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#ce9a48] mb-2">Varna by Moon Sign</h3>
                        <Image
                            src="/images/Varna1.png"
                            alt="Varna Classification"
                            width={700}
                            height={500}
                            className="rounded-xl border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
