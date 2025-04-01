"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import SwiperClass from "swiper"; 

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const images = [
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-DG-700x700.jpg",
    "https://set-coffee.com/wp-content/uploads/2020/12/Gold-box-DG--150x150.jpg",
  ];

  return (
    <section style={{ width: "36%" }}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 gallery-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery-slider-2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;