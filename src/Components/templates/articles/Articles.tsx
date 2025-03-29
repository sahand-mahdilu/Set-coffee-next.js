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
    <div className=" container w-[90%]  ">
      <p className="text-3xl font-bold mt-16">مقالات ما</p>
      <span className="text-gray-400">دانستنی های جذاب دنیای قهوه</span>
      <main className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          dir="rtl"
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={
            {
              1024: { // زمانی که عرض به 1024 برسد
                slidesPerView: 3, // نمایش دو اسلاید
                spaceBetween: 20, // کاهش فاصله بین اسلایدها
              },
              768: { // می‌توانید برای عرض‌های کوچک‌تر نیز تنظیم کنید
                slidesPerView: 2, // نمایش یک اسلاید
              },
            }
          }
        >
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
          <SwiperSlide className="hover:brightness-70">
            <Article />{" "}
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
