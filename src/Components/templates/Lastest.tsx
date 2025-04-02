import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Cart from "../modules/product/Cart";

export default function Lastest() {
  return (
    <div className="container  max-lg:text-[14px] ">
      <section className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">آخرین محصولات</p>
          <span className="mt-2">Latest products</span>
        </div>
        <Link className="flex items-center" href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="zoom-in" className="flex justify-center" >

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-center">
        <Cart name="محصول ۱" price={100000} score={4} />
          <Cart name="محصول ۲" price={200000} score={5} />
          <Cart name="محصول ۳" price={150000} score={3} />
          <Cart name="محصول ۴" price={120000} score={2} />
          <Cart name="محصول ۵" price={300000} score={5} />
          <Cart name="محصول ۶" price={110000} score={4} />
          <Cart name="محصول ۷" price={170000} score={3} />
          <Cart name="محصول ۸" price={140000} score={4} />

        </div>

        {/* products */}
      </main>
    </div>
  );
}
