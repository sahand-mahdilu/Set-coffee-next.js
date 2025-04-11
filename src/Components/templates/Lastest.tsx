import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Cart from "../modules/product/Cart";
import { LastestProps } from "@/app/types/types";




const Lastest: React.FC<LastestProps> = ({ products }) => {
  return (
    <div className="container  max-lg:text-[14px] ">
      <section className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">آخرین محصولات</p>
          <span className="mt-2">Latest products</span>
        </div>
        <Link className="flex items-center" href={"/store"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="zoom-in" className="flex justify-center">
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-center">
          {products.map((product) => (
            <Cart key={product._id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Lastest;