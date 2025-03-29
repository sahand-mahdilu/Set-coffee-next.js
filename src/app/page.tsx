import Footer from '@/Components/modules/footer/Footer'
import Navbar from '@/Components/modules/navbar/Navbar'
import Articles from '@/Components/templates/articles/Articles'
import Banner from '@/Components/templates/Banner'
import Lastest from '@/Components/templates/Lastest'
import Promote from '@/Components/templates/Promote'
import React from 'react'

export default function Home() {
  return (
  <>
    <Navbar/>
    <Banner/>
    <Lastest/>
    <Promote/>
    <Articles/>
    <Footer/>
  </>
  )
}
