export default function TaraKoota() {
  return (
    <div className="space-y-4 pt-10">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        3. Tara Koota (Star Compatibility)
      </h2>

      {/* Explanation Card */}
      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 space-y-6 text-base leading-relaxed">
        {/* Explanation */}
        <div className="space-y-3">
          <p>
            Tara Koota checks the compatibility of birth stars (Nakshatras) between the bride and groom. It is based on how each person’s Nakshatra relates to the other's through a set of 9 categories called <strong>Taras</strong>.
          </p>

          <p>These 9 Taras and their meanings are:</p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>1. Janma Tara</strong> – Birth star, represents mental compatibility</li>
            <li><strong>2. Sampat Tara</strong> – Brings prosperity</li>
            <li><strong>3. Vipat Tara</strong> – Indicates obstacles or instability</li>
            <li><strong>4. Kshema Tara</strong> – Suggests growth and wellness</li>
            <li><strong>5. Pratyari Tara</strong> – Reflects conflict or enmity</li>
            <li><strong>6. Sadhaka Tara</strong> – Represents achievement and support</li>
            <li><strong>7. Vadha Tara</strong> – Dangerous or destructive pairing</li>
            <li><strong>8. Mitra Tara</strong> – Friendly and harmonious</li>
            <li><strong>9. Ati-Mitra Tara</strong> – Deep friendship and bonding</li>
          </ul>

          <p>
            To calculate, start from the boy’s Nakshatra and count the number to the girl’s. Divide by 9 and note the remainder to get the Tara category. You can reverse and check from girl to boy too.
          </p>

          <p className="font-semibold">Example Tara mapping (for Rohini as boy’s Nakshatra):</p>

          <ul className="list-disc list-inside space-y-1">
            <li><strong>Janma Tara:</strong> Rohini</li>
            <li><strong>Sampat Tara:</strong> Mrigashira</li>
            <li><strong>Vipat Tara:</strong> Ardra</li>
            <li><strong>Kshema Tara:</strong> Punarvasu</li>
            <li><strong>Pratyari Tara:</strong> Pushya</li>
            <li><strong>Sadhaka Tara:</strong> Ashlesha</li>
            <li><strong>Vadha Tara:</strong> Magha</li>
            <li><strong>Mitra Tara:</strong> Purva Phalguni</li>
            <li><strong>Ati-Mitra Tara:</strong> Uttara Phalguni</li>
          </ul>

          <p>
            You can use such mappings from any starting Nakshatra and repeat the cycle of 9 to find the Tara between any two people.
          </p>

          <p>
            Tara Koota contributes a maximum of <strong>3 points</strong> to the total matching score.
          </p>
        </div>

        {/* Real Example Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
          <p>
            🧾 For example, if the boy’s Nakshatra is <strong>Rohini</strong> and the girl’s is <strong>Pushya</strong>,
            Pushya is the 5th star from Rohini — so it falls under <strong>Pratyari Tara</strong>, which gives <strong>0 points</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
