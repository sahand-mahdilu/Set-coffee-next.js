"use client"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

import Aos from "aos";



export default function AosInit() {

  useEffect(()=>{

    Aos.init()
  

  },[])

  return (
    null
  )
}
