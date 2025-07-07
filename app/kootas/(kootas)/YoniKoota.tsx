export default function YoniKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        4. Yoni Koota (Sexual Compatibility)
      </h2>

      {/* Explanation Card */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Yoni Koota evaluates the <strong>sexual and physical compatibility</strong> between partners.
            It assigns each Nakshatra an animal symbol (Yoni) and then determines compatibility based on whether
            the two Yoni animals are friendly, neutral, or hostile toward each other.
          </p>

          <p>
            This compatibility reflects <strong>physical attraction, intimacy, and biological harmony</strong>.
            There are 14 Yoni types, each mapped to specific Nakshatras:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>Ashwa (Horse)</strong> – Shatabhisha, Swati</li>
            <li><strong>Gaja (Elephant)</strong> – Bharani, Revati</li>
            <li><strong>Simha (Lion)</strong> – Purva Phalguni, Dhanishta</li>
            <li><strong>Vyaghra (Tiger)</strong> – Chitra, Vishakha</li>
            <li><strong>Mesh (Ram)</strong> – Pushya, Krittika</li>
            <li><strong>Sarpa (Snake)</strong> – Ashlesha</li>
            <li><strong>Marjara (Cat)</strong> – Magha, Purva Bhadrapada</li>
            <li><strong>Shwan (Dog)</strong> – Mrigashira, Ardra</li>
            <li><strong>Mooshak (Rat)</strong> – Anuradha, Jyeshtha</li>
            <li><strong>Go (Cow)</strong> – Rohini, Uttara Phalguni</li>
            <li><strong>Mahish (Buffalo)</strong> – Uttara Ashadha, Purva Ashadha</li>
            <li><strong>Mriga (Deer)</strong> – Hasta, Shravana</li>
            <li><strong>Vanar (Monkey)</strong> – Punarvasu, Uttarabhadrapada</li>
            <li><strong>Nakul (Mongoose)</strong> – Mula</li>
          </ul>

          <p>
            Friendly pairs get full points, hostile pairs score <strong>0</strong>, and neutral pairs get partial points.
            This Koota contributes a maximum of <strong>4 points</strong> in the compatibility chart.
          </p>
        </div>

        {/* Real Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
          <p>
            🧾 For example, if the boy’s Nakshatra is <strong>Hasta (Mriga Yoni)</strong> and the girl’s is
            <strong> Magha (Marjara Yoni)</strong>, the pairing is considered <strong>hostile</strong>,
            giving a Yoni Koota score of <strong>0</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}