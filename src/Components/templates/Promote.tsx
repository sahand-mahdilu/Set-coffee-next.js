import Link from 'next/link'
import React from 'react'

export default function Promote() {
  return (
    <div className='bg-gray-200 flex flex-col items-center m-16'>
      <div className='max-w-[1222px] flex flex-col justify-center' data-aos="fade-up-right">
        <main className='flex justify-between'>
          <section >
            <span>خرید قهوه ، به سبک حرفه ای ها</span>
            <p>زیبایی امروز رو با قهوه “ست” کنید</p>
            <img data-aos="fade-left" src="/images/coffee-image-1.jpg" alt="" />
          </section>
          <section >
            <img src="/images/clubset1.jpg" alt="" />
            <div>
              <span>باشگاه مشتریان ست</span>
              <p>برای مشتریان وفادار قهوه ست</p>
            </div>
          </section>
        </main>
        <main >
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up" >
            <img
              
              src="/images/coffee-svg-2.svg"
              alt=""
            />
            <p >چرا قهوه ست</p>
            <p>
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div>
              <Link href="/about-us">
                <button >بیشتر بخوانید</button>
              </Link>
              <Link href="/category">
                <button>فروشگاه</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
