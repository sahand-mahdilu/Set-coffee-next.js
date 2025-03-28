"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';


export default function Banner() {

  return(

    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src="" alt="" /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
     
  
    </Swiper>
  </>

  )
}
