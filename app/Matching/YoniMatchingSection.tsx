import Image from "next/image";

export default function YoniMatchingSection() {
  return (
    <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
      <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
        Yoni Matching
      </h2>

      <div className="bg-[#fefae0] rounded-2xl p-6 max-w-6xl mx-auto space-y-4">
        <p className="text-lg leading-relaxed">
          Yoni Koot refers to sexual and biological compatibility between partners. It is determined by their respective <strong>Nakshatras</strong> (constellations), each associated with a specific <strong>Yoni (animal symbol)</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          The match is scored out of <strong>4 points</strong>. Higher points suggest stronger physical and psychological attraction.
        </p>

        <p className="text-lg leading-relaxed">
          The following table shows the compatibility score between Nakshatras. Use the girl’s Nakshatra on the left and the boy’s Nakshatra on top.
        </p>

        <div className="rounded-xl overflow-hidden border">
          <Image
            src="/images/Yoni.png"
            alt="Yoni Matching Table"
            width={1300}
            height={700}
            className="w-full"
          />
        </div>

        <p className="text-lg leading-relaxed pt-6">
          Each Nakshatra is mapped to a Yoni (animal symbol) which represents the nature and instinct of the individual. Below is the complete list:
        </p>

        <div className="rounded-xl overflow-hidden border">
          <Image
            src="/images/Yoni1.png"
            alt="Yoni Animal Mapping"
            width={600}
            height={600}
            className="w-full"
          />
        </div>

        <p className="text-lg font-medium pt-4 text-center">
          🧩 The more harmonious the Yoni pair, the better the relationship — physically, emotionally, and spiritually.
        </p>
      </div>
    </section>
  );
}
