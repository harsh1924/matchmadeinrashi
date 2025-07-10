import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-yellow-200">
            <Link
                href={'/'}
                className="text-2xl font-bold text-[#ce9a48] tracking-wider hidden md:flex"
            >
                MatchMade in Rashi
            </Link>
            <Link
                href={'/'}
                className="text-2xl font-bold text-[#ce9a48] tracking-wider md:hidden"
            >
                MMR
            </Link>
            {/* Optional Nav Items */}
            <div className="space-x-4">
                <Button
                    onClick={() => router.push("/me")}
                    className="cursor-pointer bg-[#ce9a48] hover:bg-[#5f4e33] transition-all duration-300"
                >
                    Me
                </Button>
                <Button
                    onClick={() => router.push("/match")}
                    className='cursor-pointer bg-[#ce9a48] hover:bg-[#5f4e33] transition-all duration-300'
                >
                    Match
                </Button>
                <Button
                    onClick={() => router.push("/yogas")}
                    className='cursor-pointer bg-[#ce9a48] hover:bg-[#5f4e33] transition-all duration-300'
                >
                    Yogas
                </Button>
            </div>
        </nav>
    )
}

export default Navbar