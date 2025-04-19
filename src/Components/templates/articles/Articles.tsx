"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Article from "./Article";

export default function Articles() {
  return (
    <div className=" container w-[90%]  ">
      <p className="text-3xl font-bold mt-16">مقالات ما</p>
      <span className="text-gray-400">دانستنی های جذاب دنیای قهوه</span>
      <main className="mt-10">
        <Swiper
        
          dir="rtl"
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={
            {
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 20, 
              },
              768: { 
                slidesPerView: 2, 
                spaceBetween: 15, 
              },
              640:{
                slidesPerView: 1, 
              }
            }
          }
        >
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
