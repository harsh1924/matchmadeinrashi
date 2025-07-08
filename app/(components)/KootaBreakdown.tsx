export default function KootaTable() {
    const kootas = [
        { name: "Varna", points: 1, desc: "Spiritual compatibility, social alignment & ego" },
        { name: "Vashya", points: 2, desc: "Mutual control or dominance - Who influences whom" },
        { name: "Tara", points: 3, desc: "Health and fortune compatibility" },
        { name: "Yoni", points: 4, desc: "Sexual and instinctive compatibility" },
        { name: "Graha Maitri", points: 5, desc: "Mental & friendship compatibility" },
        { name: "Gana", points: 6, desc: "Temperament and behavior match" },
        { name: "Bhakoot", points: 7, desc: "Emotional bonding and harmony - Critical for long-term compatibility" },
        { name: "Nadi", points: 8, desc: "Genetic and health compatibility" },
    ]

    return (
        <div className="my-10  font-serif">
            <h2 className="text-3xl text-[#ce9a48] font-bold text-center mb-8">
                Ashtkoot Milan – 8 Matching Categories
            </h2>

            <div className="overflow-x-auto bg-[#fefae0] border border-yellow-200 shadow-sm">
                <table className="w-full text-left table-auto text-gray-800">
                    <thead className="bg-yellow-100 text-[#b1812c]">
                        <tr>
                            <th className="py-3 px-4 text-sm font-semibold">#</th>
                            <th className="py-3 px-4 text-sm font-semibold">Koota</th>
                            <th className="py-3 px-4 text-sm font-semibold">Description</th>
                            <th className="py-3 px-4 text-sm font-semibold">Max Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kootas.map((koota, i) => (
                            <tr key={koota.name} className="border-t border-yellow-100">
                                <td className="py-3 px-4">{i + 1}</td>
                                <td className="py-3 px-4 font-medium text-[#b1812c]">{koota.name}</td>
                                <td className="py-3 px-4">{koota.desc}</td>
                                <td className="py-3 px-4 font-semibold">{koota.points}</td>
                            </tr>
                        ))}
                        <tr className="bg-yellow-50 font-bold border-t-2 border-yellow-300">
                            <td colSpan={3} className="py-3 px-4 text-right">Total</td>
                            <td className="py-3 px-4">36</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}