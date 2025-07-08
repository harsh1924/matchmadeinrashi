'use client';

import { useState, useEffect } from 'react';
import VarnaMatchingSection from './VarnaMatchingSection';
import VashyaMatchingSection from './VashyaMatchingSection';
import TaraMatchingSection from './TaraMatchingSection';
import YoniMatchingSection from './YoniMatchingSection';
import GrahMaitriSection from './GrahMaitriSection';
import GanaMatchingSection from './GanaMatchingSection';
import BhakootMatchingSection from './BhakootMatchingSection';
import NadiMatchingSection from './NadiMatchingSection';

const KOOTA_LIST = [
    'Varna',
    'Vashya',
    'Tara',
    'Yoni',
    'Graha Maitri',
    'Gana',
    'Bhakoot',
    'Nadi',
];

export default function KootaInfoPanel() {
    const [selectedKoota, setSelectedKoota] = useState('Varna');

    useEffect(() => {
        const storedKoota = localStorage.getItem("selectedKoota");
        if (storedKoota) setSelectedKoota(storedKoota);
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedKoota", selectedKoota);
    }, [selectedKoota]);

    const renderContent = () => {
        switch (selectedKoota) {
            case 'Varna':
                return <VarnaMatchingSection />
            case 'Vashya':
                return <VashyaMatchingSection />
            case 'Tara':
                return <TaraMatchingSection />
            case 'Yoni':
                return <YoniMatchingSection />
            case 'Graha Maitri':
                return <GrahMaitriSection />
            case 'Gana':
                return <GanaMatchingSection />
            case 'Bhakoot':
                return <BhakootMatchingSection />
            case 'Nadi':
                return <NadiMatchingSection />
            default:
                return <p className="text-lg">Details for {selectedKoota} will appear here.</p>;
        }
    };

    return (
        <section className="pt-10 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                {/* Left side: Koota list */}
                <div className="rounded-xl bg-[#fefae0] shadow p-4 space-y-2 border">
                    {KOOTA_LIST.map((koota) => (
                        <button
                            key={koota}
                            onClick={() => setSelectedKoota(koota)}
                            className={`w-full cursor-pointer text-left px-4 py-2 rounded-md font-medium transition ${selectedKoota === koota
                                ? 'bg-[#ce9a48] text-white'
                                : 'hover:bg-[#fefae0] text-[#333]'
                                }`}
                        >
                            {koota}
                        </button>
                    ))}
                </div>

                {/* Right side: Koota info */}
                <div className="md:col-span-2 bg-[#fefae0] rounded-xl shadow p-6">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
}