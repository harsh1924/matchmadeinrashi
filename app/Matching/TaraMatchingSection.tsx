import Image from "next/image";

export default function TaraMatchingSection() {
  return (
    <section className="pt-10 px-4 h-[800px] overflow-scroll no-scrollbar">
      <h2 className="text-3xl font-bold text-center text-[#ce9a48] mb-6">
        Tara Matching
      </h2>

      <div className="bg-[#fefae0] rounded-2xl p-6 max-w-6xl mx-auto space-y-4">
        <p className="text-lg leading-relaxed">
          Tara Koot (also called <strong>Din Koot</strong>) is based on the Nakshatra (constellation) of the bride and groom. It checks the health, longevity, and well-being of the couple.
        </p>

        <p className="text-lg leading-relaxed">
          The Tara score is out of <strong>3 points</strong>. Higher scores indicate a stable and fortunate match.
        </p>

        <p className="text-lg leading-relaxed">
          This matching is done using the <strong>Nakshatra</strong> (not Rashi), and the compatibility is taken from the table below.
        </p>

        <div className="rounded-xl overflow-hidden border">
          <Image
            src="/images/Tara.png"
            alt="Tara Koota Table"
            width={1300}
            height={700}
            className="w-full"
          />
        </div>

        <p className="text-lg font-medium pt-4 text-center">
          ✅ If the couple gets a full score of <strong>3 points</strong>, it is called <span className="text-green-700 font-bold">Tara Suddhi</span>, which means complete compatibility of stars. Tara Suddhi is used to cancel <span className="text-red-700 font-bold">Bhakoot Dosha</span> in some cases.
        </p>
      </div>
    </section>
  );
}