"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation,Autoplay } from 'swiper/modules';


export default function Banner() {

  return(

    <>
    <Swiper loop={true} autoplay={{delay:2000}} rewind={true} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
      <SwiperSlide><img src="/images/slide-1.jpg" alt="slide-1" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide-2.jpg" alt="slide-2" /></SwiperSlide>
      <SwiperSlide><img src="/images/slide-3.jpg" alt="slide-3" /></SwiperSlide>
     
  
    </Swiper>
  </>

  )
}
