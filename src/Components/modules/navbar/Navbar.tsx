"use client";
import { NavbarProps } from "@/app/types/types";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC<NavbarProps> = ({ isLogin }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const role= isLogin?.role

  


  
  

  const openSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <nav className="fixed z-40 w-full ">
        <main className=" bg-gray-100  flex items-center justify-between px-5 w-[80%] mx-auto py-5 mt-7 max-lg:w-full max-sm:py-1 ">
          <div>
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>

          <ul className="flex items-center gap-4 max-xl:text-[13px] max-xl:gap-3 font-semibold max-md:hidden max-lg:gap-2">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/store">فروشگاه</Link>
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
            {!isLogin ? (
              <li>
                <Link href="/login-register">ورود / عضویت</Link>
              </li>
              
            ) : (
              

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
                    href="/wishlist"
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
               
            )}
            {role === "ADMIN" ? <Link className="text-blue-600" href={"/p-admin"}>پنل ادمین</Link> : null}

            {/* Start My-account section */}

            {/* Finish My-account section */}
          </ul>
          <div className="flex items-center gap-4 ">
            <div className=" relative flex items-center gap-5">
              <Link href="/cart">
                <FaShoppingCart />
               
              </Link>
              <Link href="/wishlist">
                <FaRegHeart />
               
              </Link>
            </div>
            <FaBars onClick={openSidebar} className="md:hidden" />
          </div>
        </main>

        {/* sidebar */}

        <div
          className={` ${
            isSideBarOpen
              ? "bg-gray-300 left-0 top-0 fixed  w-[280px] p-8 transition-all  text-xl h-[100vh] "
              : "bg-white transition-all  -left-[280px] top-0 fixed  w-[280px] p-8  text-xl h-[100vh] "
          }`}
        >
          <FaXmark onClick={openSidebar} className="cursor-pointer" />

          <ul className="  flex flex-col items-end  gap-4  font-semibold ">
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
            {!isLogin ? (
              <li>
                <Link href="/login-register">ورود / عضویت</Link>
              </li>
            ) : (
              <div className="relative group">
                <Link href="/p-user">
                  <div className="flex items-center  ">
                    حساب کاربری
                    <IoIosArrowDown />
                  </div>
                </Link>
                <div className=" shadow-xl flex flex-col  invisible opacity-0  group-hover:visible group-hover:opacity-100 bg-amber-100  absolute p-3 w-60 gap-2 top-10 left-0 transition-all delay-75">
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
                    href="/wishlist"
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
            )}
            {role === "ADMIN" ? <Link className="text-blue-600" href={"/p-admin"}>پنل ادمین</Link> : null}

            {/* Start My-account section */}

            {/* Finish My-account section */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
