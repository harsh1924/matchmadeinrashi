import Image from "next/image";

export default function VashyaMatchingSection() {
  return (
    <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
      <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
        Vashya Matching
      </h2>

      <div className="bg-[#fefae0] rounded-2xl shadow p-6 max-w-5xl mx-auto space-y-4">
        <p className="text-lg leading-relaxed">
          Vashya Koot signifies the influence and control between two individuals in a relationship. It is based on their <strong>Moon Signs (Rashi)</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          The match is scored out of <strong>2 points</strong>. Higher values indicate better harmony. Some Rashi combinations get 2, 1, 0.5 or 0 depending on mutual attraction levels.
        </p>

        <p className="text-lg leading-relaxed">
          Special care is needed for <strong>Dhanu (Sagittarius)</strong> and <strong>Makar (Capricorn)</strong> signs — the degree of the Moon matters:
        </p>

        <ul className="list-disc list-inside text-lg pl-2">
          <li><strong>≤ 15°</strong> → Treated as first half of the sign</li>
          <li><strong> &gt;15°</strong> → Treated as second half</li>
        </ul>

        <div className="rounded-xl overflow-hidden border">
          <Image
            src="/images/Vashya.png"
            alt="Vashya Koota Table"
            width={1200}
            height={700}
            className="w-full"
          />
        </div>

        <p className="text-lg font-medium pt-4 text-center">
          👉 Refer to the table above to find the <strong>Vashya score</strong> for the couple based on Moon Signs and degrees.
        </p>
      </div>
    </section>
  );
}
