import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-yellow-200">
            <h1 className="text-2xl font-bold text-[#ce9a48] tracking-wider">
                MatchMade in Rashi
            </h1>
            {/* Optional Nav Items */}
            <div className="space-x-4">
                <Button
                    onClick={() => router.push("/")}
                    className="cursor-pointer bg-[#ce9a48] hover:bg-[#5f4e33] transition-all duration-300"
                >
                    Home
                </Button>
                <Button
                    onClick={() => router.push("/match")}
                    className='cursor-pointer bg-[#ce9a48] hover:bg-[#5f4e33] transition-all duration-300'
                >
                    Match
                </Button>
            </div>
        </nav>
    )
}

export default Navbar