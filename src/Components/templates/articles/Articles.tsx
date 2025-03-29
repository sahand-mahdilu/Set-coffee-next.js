"use client";
import React from "react";
import styles from "./articles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Article from "./Article";

export default function Articles() {
  return (
    <div className=" container w-[90%]">
      <p className="text-3xl font-bold">مقالات ما</p>
      <span className="text-gray-400">دانستنی های جذاب دنیای قهوه</span>
      <main className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          dir="rtl"
        //   autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide ><Article/> </SwiperSlide>
          <SwiperSlide>sdfsd </SwiperSlide>
          <SwiperSlide>sfdsd </SwiperSlide>
          <SwiperSlide>sdf </SwiperSlide>
          <SwiperSlide>sdf </SwiperSlide>
          <SwiperSlide>dsf </SwiperSlide>
          <SwiperSlide>dsaf </SwiperSlide>
          <SwiperSlide>sadf </SwiperSlide>
          <SwiperSlide>dsaf </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
