"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import SwiperClass from "swiper";

const Gallery = ({ img }: { img: string }) => {
  let imgAddress = img?.slice(22);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const images = [imgAddress];

  return (
    <section className="w-[36%] max-md:w-[60%] max-sm:w-[70%]">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 gallery-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={`https://set-coffee-sahand.liara.run/${imgAddress}`} />
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
            <img src={`https://set-coffee-sahand.liara.run/${imgAddress}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
