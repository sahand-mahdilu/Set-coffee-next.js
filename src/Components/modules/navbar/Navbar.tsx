import Link from "next/link";
import React from "react";
import { FaBars, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="fixed z-40 w-full">
      <main className="bg-gray-100  flex items-center justify-between px-5 w-[80%] mx-auto py-5 mt-7 max-lg:w-full max-sm:py-1 ">
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>

        <ul className="flex items-center gap-4 max-xl:text-[13px] max-xl:gap-3 font-semibold max-md:hidden">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/category">فروشگاه</Link>
          </li>
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/rules">قوانین</Link>
          </li>
          <li>
            <Link href="/login-register">ورود / عضویت</Link>
          </li>

          {/* Start My-account section */}
          <div className="relative group">
            <Link href="/p-user">
              <div className="flex items-center  ">
                حساب کاربری
                <IoIosArrowDown />
              </div>
            </Link>
            <div className=" shadow-xl flex flex-col  invisible opacity-0  group-hover:visible group-hover:opacity-100 bg-white absolute p-3 w-44 gap-2 top-8 right-8 transition-all delay-75">
              <Link
                className="text-gray-400 hover:text-black"
                href="/p-user/orders"
              >
                سفارشات
              </Link>
              <Link
                className="text-gray-400 hover:text-black"
                href="/p-user/tickets"
              >
                تیکت های پشتیبانی
              </Link>
              <Link
                className="text-gray-400 hover:text-black"
                href="/p-user/comments"
              >
                کامنت‌ها
              </Link>
              <Link
                className="text-gray-400 hover:text-black"
                href="/p-user/wishlist"
              >
                علاقه‌مندی‌ها
              </Link>
              <Link
                className="text-gray-400 hover:text-black"
                href="/p-user/account-details"
              >
                جزئیات اکانت
              </Link>
            </div>
          </div>

          {/* Finish My-account section */}
        </ul>
        <div className="flex items-center gap-4">
          <div className=" relative flex items-center gap-5">
            <Link href="/cart">
              <FaShoppingCart />
              <span className="top-[-9px] right-[-9px]  absolute bg-black text-white font-bold px-1 rounded-[100%] text-[9px]">
                1
              </span>
            </Link>
            <Link href="/wishlist">
              <FaRegHeart />
              <span className="absolute top-[-9px] left-[11px] bg-black font-bold text-white px-1 rounded-[100%] text-[9px] ">
                1
              </span>
            </Link>
          </div>
        <FaBars className="md:hidden" />
        </div>
      </main>
    </nav>
  );
}
