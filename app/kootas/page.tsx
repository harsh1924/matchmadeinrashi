"use client"

import React from 'react'
import GanaKoota from './(kootas)/GanaKoota'
import Navbar from '../(components)/Navbar'
import VarnaKoota from './(kootas)/VarnaKoota'
import VashyaKoota from './(kootas)/VashyaKoota'
import TaraKoota from './(kootas)/TaraKoota'
import YoniKoota from './(kootas)/YoniKoota'
import GrahaMaitriKoota from './(kootas)/GrahaMaitriKoota'
import RashiKoota from './(kootas)/BhakootKoota'
import NadiKoota from './(kootas)/NadiKoota'

const Kootas = () => {
  return (
    <div>
        <Navbar />
        <VarnaKoota />
        <VashyaKoota />
        <TaraKoota />
        <YoniKoota />
        <GrahaMaitriKoota />
        <GanaKoota />
        <RashiKoota />
        <NadiKoota />
    </div>
  )
}

export default Kootas