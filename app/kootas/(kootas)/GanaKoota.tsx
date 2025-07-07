export default function GanaKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        6. Gana Koota (Temperament Matching)
      </h2>

      {/* Card Content */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Image */}

        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Gana Koota evaluates the <strong>temperament and behavioral compatibility</strong> of two individuals
            based on their Nakshatra. There are 3 types of Gana:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Deva</strong> – Divine temperament, calm, spiritual</li>
            <li><strong>Manushya</strong> – Human-like, balanced, adaptable</li>
            <li><strong>Rakshasa</strong> – Aggressive, strong-willed, impulsive</li>
          </ul>

          <p>
            Ideally, both partners should belong to the <strong>same Gana</strong>, or a compatible pair (e.g. Deva–Manushya).
            Matches like <strong>Rakshasa–Deva</strong> are usually discouraged and may score 0.
          </p>

          <p>
            This Koota contributes up to <strong>6 points</strong> to the total score. Refer to the table above to check the score
            based on your Nakshatra Gana combination.
          </p>
        </div>

        {/* Real Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
          <p>
            🧾 For example, if the boy&apos;s Gana is <strong>Manushya</strong> and the girl’s is <strong>Rakshasa</strong>,
            the match score will be <strong>0</strong> (as per the chart above).
          </p>
        </div>
      </div>
    </div>
  )
}