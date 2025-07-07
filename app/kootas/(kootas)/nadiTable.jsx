export default function NadiLookupTable() {
  const nadiData = [
    { nakshatra: "Ashwini", nadi: "Aadi" },
    { nakshatra: "Bharani", nadi: "Aadi" },
    { nakshatra: "Krittika", nadi: "Aadi" },
    { nakshatra: "Rohini", nadi: "Madhya" },
    { nakshatra: "Mrigashira", nadi: "Madhya" },
    { nakshatra: "Ardra", nadi: "Madhya" },
    { nakshatra: "Punarvasu", nadi: "Antya" },
    { nakshatra: "Pushya", nadi: "Antya" },
    { nakshatra: "Ashlesha", nadi: "Antya" },
    { nakshatra: "Magha", nadi: "Aadi" },
    { nakshatra: "Purva Phalguni", nadi: "Aadi" },
    { nakshatra: "Uttara Phalguni", nadi: "Aadi" },
    { nakshatra: "Hasta", nadi: "Madhya" },
    { nakshatra: "Chitra", nadi: "Madhya" },
    { nakshatra: "Swati", nadi: "Madhya" },
    { nakshatra: "Vishakha", nadi: "Antya" },
    { nakshatra: "Anuradha", nadi: "Antya" },
    { nakshatra: "Jyeshtha", nadi: "Antya" },
    { nakshatra: "Mula", nadi: "Aadi" },
    { nakshatra: "Purva Ashadha", nadi: "Aadi" },
    { nakshatra: "Uttara Ashadha", nadi: "Aadi" },
    { nakshatra: "Shravana", nadi: "Madhya" },
    { nakshatra: "Dhanishta", nadi: "Madhya" },
    { nakshatra: "Shatabhisha", nadi: "Madhya" },
    { nakshatra: "Purva Bhadrapada", nadi: "Antya" },
    { nakshatra: "Uttara Bhadrapada", nadi: "Antya" },
    { nakshatra: "Revati", nadi: "Antya" },
  ];

  return (
    <div className="space-y-4 pt-10">
      <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
        Nadi Table by Nakshatra
      </h2>

      <div className="bg-[#fefae0] p-6 rounded-md text-gray-800 text-base leading-relaxed">
        <p className="mb-4">
          Use this table to find the <strong>Nadi</strong> type of a person based on their Nakshatra.
          Matching partners with the <strong>same Nadi</strong> can result in Nadi Dosha.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-yellow-400 text-sm">
            <thead className="bg-yellow-100">
              <tr>
                <th className="border border-yellow-300 px-3 py-2 text-left">Nakshatra</th>
                <th className="border border-yellow-300 px-3 py-2 text-left">Nadi</th>
              </tr>
            </thead>
            <tbody>
              {nadiData.map(({ nakshatra, nadi }) => (
                <tr key={nakshatra}>
                  <td className="border px-3 py-2">{nakshatra}</td>
                  <td className="border px-3 py-2 font-semibold">{nadi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}