"use client"
import React from 'react'
import styles from "./articles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Articles() {
  return (
    <div >
      <p >مقالات ما</p>
      <span >دانستنی های جذاب دنیای قهوه</span>
      <main>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper articles_slider"
        >
       
        </Swiper>
      </main>
    </div>
  )
}
