'use client';

export default function OtherConsiderations() {
    return (
        <section className="pt-10 h-[800px] overflow-scroll no-scrollbar">
            <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
                Other Factors Also Considered
            </h2>

            <div className="bg-[#fefae0] shadow p-6">
                <div className="bg-[#fff4d8] border-l-4 border-yellow-500 p-4 rounded-md space-y-3">
                    <h4 className="text-lg font-semibold text-[#ce9a48]">
                        📌 Additional Rules & Exceptions
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li>
                            <strong>Lagna Lord strength</strong> and <strong>7th house lord strength</strong> are also factored while judging dosha impact.
                        </li>
                        <li>
                            Marriage delay or denial from other doshas (like Shrapit, Kemdrum) must also be ruled out.
                        </li>
                        <li>
                            Check <strong>Venus in boy’s chart</strong> and <strong>Mars + Jupiter in girl’s chart</strong>. They should not form <strong>2-12</strong> or <strong>6-8</strong> combinations — in both <strong>D1 and D9 charts</strong>.
                        </li>
                        <li>
                            Evaluate the <strong>7th lord</strong> of each person in both <strong>D1 and D9</strong> charts:
                            <ul className="list-disc list-inside ml-6 space-y-1">
                                <li>
                                    Example: If boy’s 7th lord is <strong>Venus</strong>, then check where it is placed in the girl’s chart. It should not be in the <strong>6th, 8th, or 12th houses</strong>.
                                </li>
                                <li>
                                    It should not be <strong>debilitated</strong>, heavily conjunct with <strong>malefics</strong>, or combust.
                                </li>
                                <li>
                                    Repeat the same check for girl's 7th lord in boy’s chart.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Similarly, check the <strong>Lagnesh (Ascendant lord)</strong> of both partners in each other’s chart (D1 and D9), using the same rules as 7th lord evaluation.
                        </li>
                        <li>
                            If the <strong>7th lord is placed in 6th, 8th, or 12th house</strong> in either chart, it generally gives <strong>negative results</strong> — particularly during the <strong>Mahadasha or Antardasha</strong> of the lord of that house.
                        </li>
                        <li>
                            ⚠️ <strong>Exception:</strong> If there is <strong>Vipreet Raj Yoga</strong> or <strong>Neech Bhang Yoga</strong>, then the negativity is usually <strong>nullified</strong>.
                        </li>
                        <li>
                            🔮 <strong>Remedy Tip:</strong> Donate things related to the planet ruling the house where the 7th lord is placed (if it's in 6/8/12) to reduce its negative impact.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}