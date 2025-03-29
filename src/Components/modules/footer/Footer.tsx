import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import ArticleFooter from "./ArticleFooter";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-20 max-xl:p-16 max-lg:p-14 max-md:p-14 max-sm:p-8  ">
      <main className="grid grid-cols-4 items-center justify-center gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:text-[12px]">
        <section className="flex flex-col ">
          <img className="max-w-48" src="/images/logo_light.png" alt="logo" />
          <p>شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست</p>

          <div className="flex items-center gap-2">
            <FaRegHeart style={{ fontSize: "2rem" }} />
            <p>
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p>پیگیری سفارشات : 02188305827</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p>support [at] set-coffee.com</p>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h4 className="mb-5">جدیدترین نوشته ها</h4>
          <ArticleFooter
            href={"/article/123"}
            date="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
          />

          <hr />

          <ArticleFooter
            href={"/article/123"}
            date="۱۷ آبان ۱۴۰۲ "
            comments="بدون دیدگاه"
            img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
            title="افزایش انرژی با پودر قهوه فوری"
          />
        </section>

        <ul className="flex  gap-8 text-gray-400">
          <div>
            <h4 className="text-xl font-bold text-white">منوی فوتر</h4>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما </Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">دسترسی سریع</h4>
            <li>
              <Link href={"/category"}> فروشگاه </Link>
            </li>
            <li>
              <Link href={"/articles"}> مقالات </Link>
            </li>
            <li>
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li>
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </div>
        </ul>
        <div className="grid grid-cols-2 ">
          <img src="/images/license4.htm" width={76} height={76} alt="logo" />
          <img src="/images/license1.png" width={85} height={85} alt="logo" />
          <img src="/images/license3.png" alt="logo" />
          <img src="/images/license2.svg" width={62} height={95} alt="logo" />
        </div>
      </main>
      <br />
      <br />
      <hr />
      <div className="mt-10 max-sm:text-[6px]">
        <p className="flex items-cente">
          {" "}
          2023
          <MdOutlineCopyright /> تمام حقوق متعلق است به <strong>
            قهوه ست
          </strong>{" "}
          | طراحی و اجرا <strong>نیلامارکتینگ</strong>
        </p>
      </div>
    </footer>
  );
}
