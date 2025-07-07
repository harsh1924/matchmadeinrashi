export default function VarnaKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        1. Varna Koota (Spiritual Compatibility)
      </h2>

      {/* Card Content */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Images */}

        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Varna Koota represents the <strong>spiritual compatibility</strong> and dominance between the partners.
            It classifies individuals into four Varnas based on their Moon sign.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>Brahmin</strong> – Water signs (Cancer, Scorpio, Pisces)</li>
            <li><strong>Kshatriya</strong> – Fire signs (Aries, Leo, Sagittarius)</li>
            <li><strong>Vaishya</strong> – Air signs (Gemini, Libra, Aquarius)</li>
            <li><strong>Shudra</strong> – Earth signs (Taurus, Virgo, Capricorn)</li>
          </ul>

          <p>
            The system is hierarchical. The girl’s Varna should be the same or lower than the boy’s Varna for full points.
            If reversed (e.g. Brahmin girl and Shudra boy), the score is zero.
          </p>

          <p>
            This Koota carries <strong>1 point</strong> and contributes minimally, but symbolically to the overall score.
          </p>
        </div>

        {/* Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
          <p>
            🧾 Example: If the girl's Moon sign is Pisces (Brahmin) and the boy’s is Taurus (Shudra),
            the Varna Koota score will be <strong>0</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}