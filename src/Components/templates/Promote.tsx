import Link from "next/link";
import React from "react";

export default function Promote() {
  return (
    <div className="bg-gray-200  flex flex-col items-center mt-16">
      <div
        className="max-w-[1222px] flex flex-col justify-center"
        data-aos="fade-up-right"
      >
        <main className="flex justify-between items-center">
          <section className="flex flex-col items-center">
            <span className="text-center text-3xl font-bold">
              خرید قهوه ، به سبک حرفه ای ها
            </span>
            <p className="text-center">زیبایی امروز رو با قهوه “ست” کنید</p>
            <img
              className="mt-16"
              data-aos="fade-left"
              src="/images/coffee-image-1.jpg"
              alt=""
            />
          </section>
          <section className="relative">
            <img src="/images/clubset1.jpg" alt="coffee" />
            <div className="absolute bg-white left-0 bottom-0 p-5 w-[60%]">
              <span className="text-3xl font-semibold">باشگاه مشتریان ست</span>
              <p className="text-lg mt-1">برای مشتریان وفادار قهوه ست</p>
            </div>
          </section>
        </main>
        <main className="flex mt-20 items-center gap-8">
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up">
            <div className="w-24">
             
              <img className="" src="/images/coffee-svg-2.svg" alt="" />
            </div>
            <p className="text-4xl text-red-900 font-bold ">چرا قهوه ست</p>
            <p className="my-5">
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div>
              <Link href="/about-us">
                <button className="text-white bg-red-900 px-3 p-2 cursor-pointer hover:bg-red-800">
                  بیشتر بخوانید
                </button>
              </Link>
              <Link href="/category">
                <button className="bg-white hover:bg-gray-300 p-2 px-3 border cursor-pointer">
                  فروشگاه
                </button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
