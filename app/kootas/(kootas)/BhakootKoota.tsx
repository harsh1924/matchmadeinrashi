export default function RashiKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        7. Bhakoot Koota (Rashi – Emotional Bonding)
      </h2>

      {/* Explanation Card */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Rashi Koota, also known as <strong>Bhakoot</strong>, evaluates the <strong>emotional bonding</strong>,
            <strong> domestic peace</strong>, and <strong>longevity of the relationship</strong>. It is based on the
            distance (in signs) between the Moon signs (Rashis) of both individuals.
          </p>

          <p>
            Certain sign distances cause what is called <strong>Bhakoot Dosha</strong>. These are considered inauspicious
            and may negatively affect the couple's married life unless canceled by other factors.
          </p>

          <p className="font-semibold">Key Bhakoot Dosha Combinations:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>6–8</strong> → Indicates health issues or separation</li>
            <li><strong>2–12</strong> → Financial instability or misunderstandings</li>
            <li><strong>5–9</strong> → Clashes in values and children-related issues</li>
          </ul>

          <p>
            If none of these combinations are present, the couple gets the full <strong>7 points</strong>.
          </p>
        </div>

        {/* Bhakoot Table */}
        <div className="space-y-2">
          <p className="font-semibold pt-4">Moon Sign Distance Table (Boy to Girl):</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-yellow-400">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="border px-3 py-2">Distance (Signs Apart)</th>
                  <th className="border px-3 py-2">Combination</th>
                  <th className="border px-3 py-2">Bhakoot Dosha?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dist: 1, combo: "1–1", dosha: "No" },
                  { dist: 2, combo: "2–12", dosha: "Yes" },
                  { dist: 3, combo: "3–11", dosha: "No" },
                  { dist: 4, combo: "4–10", dosha: "No" },
                  { dist: 5, combo: "5–9", dosha: "Yes" },
                  { dist: 6, combo: "6–8", dosha: "Yes" },
                  { dist: 7, combo: "7–7", dosha: "No" },
                  { dist: 8, combo: "8–6", dosha: "Yes" },
                  { dist: 9, combo: "9–5", dosha: "Yes" },
                  { dist: 10, combo: "10–4", dosha: "No" },
                  { dist: 11, combo: "11–3", dosha: "No" },
                  { dist: 12, combo: "12–2", dosha: "Yes" },
                ].map(({ dist, combo, dosha }) => (
                  <tr key={dist} className={dosha === "Yes" ? "bg-red-50" : ""}>
                    <td className="border px-3 py-2 text-center">{dist}</td>
                    <td className="border px-3 py-2 text-center">{combo}</td>
                    <td className="border px-3 py-2 text-center font-semibold">
                      {dosha === "Yes" ? "❌ Yes" : "✅ No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md mt-4">
          <p>
            🧾 For example, if the boy’s Moon sign is <strong>Gemini</strong> and the girl’s is <strong>Capricorn</strong>,
            the distance is 8 signs — this is a <strong>6–8 Bhakoot Dosha</strong>, and the score would be <strong>0</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}