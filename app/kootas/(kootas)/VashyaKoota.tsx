export default function VashyaKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        2. Vashya Koota (Mutual Influence or Control)
      </h2>

      {/* Explanation Card */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Vashya Koota assesses how well one partner can influence or “control” the other in a marriage. It indicates the level of dominance, submission, or harmony between the couple.
          </p>

          <p>
            The Moon sign of each person is categorized into one of five Vashyas:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>Chatushpada</strong> (Quadruped) – Aries, Taurus, the second half of Sagittarius, and the first half of Capricorn</li>
            <li><strong>Dwipada</strong> (Biped) – Gemini, Virgo, Libra, Aquarius, and the second half of Sagittarius</li>
            <li><strong>Jalachara</strong> (Water-dwelling) – Cancer, Pisces, the first half of Capricorn</li>
            <li><strong>Vanachara</strong> (Forest-dwelling) – Leo</li>
            <li><strong>Keeta</strong> (Insect) – Scorpio</li>
          </ul>

          <p>
            The compatibility is scored based on the relationship between the Vashyas of both partners. Some combinations yield high harmony, while others suggest conflict or imbalance.
          </p>

          <p>
            This Koota contributes a maximum of <strong>2 points</strong> to the overall score.
          </p>
        </div>

        {/* Real Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
          <p>
            🧾 For example, if one partner has a Moon sign in <strong>Chatushpada</strong> (e.g., Taurus) and the other in <strong>Dwipada</strong> (e.g., Libra), the match is moderately compatible and may score <strong>1</strong> or <strong>2</strong> points based on traditional tables.
          </p>
        </div>
      </div>
    </div>
  );
}
