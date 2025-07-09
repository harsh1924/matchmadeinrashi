"use client"

import React from 'react'
import Navbar from '../(components)/Navbar'
import KootaInfoPanel from '../Matching/KootaInfoPanel'
import KootaBreakdown from '../(components)/KootaBreakdown'
import MangalDoshaCancellation from '../(components)/MangalDoshaCancellation'
import OtherConsiderations from '../(components)/OtherConsiderations'
import MajorYogas from '../(components)/MajorYogas'

const Me = () => {
    return (
        <div>
            <Navbar />
            <KootaBreakdown />
            <h2 className="text-3xl font-bold text-center text-[#ce9a48]">
                Koota Dosh Cancellation Rules
            </h2>
            <KootaInfoPanel />
            <MangalDoshaCancellation />
            <OtherConsiderations />
            <MajorYogas />
        </div>
    )
}

export default Me