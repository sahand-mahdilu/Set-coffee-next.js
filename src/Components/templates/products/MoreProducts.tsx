"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Cart from "@/Components/modules/product/Cart";
import { IProduct } from "@/app/types/types";

const MoreProducts = ({relatedProducts}:{relatedProducts:IProduct [] }) => {
  return (
    <div className="p-12  " data-aos="fade-right">
      <section>
        <h2 className="text-xl font-bold">محصولات مرتبط</h2>
        <div
          style={{
            height: "2px",
            width: "70px",
            background: "black",
            marginTop: "10px",
          }}
        ></div>
      </section>
      <Swiper
       
        spaceBetween={30}
        dir="rtl"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
        breakpoints={
          {
            1280:{
              slidesPerView: 4, 
              spaceBetween: 20,
            },
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

{relatedProducts.map((product) => (
          <SwiperSlide key={String(product._id) }>
            <Cart {...product} />
          </SwiperSlide>
        ))}
   
      </Swiper>
    </div>
  );
};

export default MoreProducts;
