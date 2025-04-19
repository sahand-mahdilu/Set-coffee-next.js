"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image"; 

export default function Banner() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        rewind={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/slide-1.jpg"
            alt="اسلاید 1"
            width={1920} 
            height={600} 
            style={{ objectFit: 'cover' }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slide-2.jpg"
            alt="اسلاید 2"
            width={1920}
            height={600} 
            style={{ objectFit: 'cover' }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slide-3.jpg"
            alt="اسلاید 3"
            width={1920} 
            height={600} 
            style={{ objectFit: 'cover' }} 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}