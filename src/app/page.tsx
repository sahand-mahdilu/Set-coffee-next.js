import Footer from '@/Components/modules/footer/Footer'
import Navbar from '@/Components/modules/navbar/Navbar'
import Articles from '@/Components/templates/articles/Articles'
import Banner from '@/Components/templates/Banner'
import Lastest from '@/Components/templates/Lastest'
import Promote from '@/Components/templates/Promote'
import { cookies } from 'next/headers'
import React from 'react'

export default async function Home() {


  const cookieInstant = cookies()

  const token = (await cookieInstant).get("token")?.value





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
