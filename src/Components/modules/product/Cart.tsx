import Link from 'next/link'
import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function Cart() {
  return (
    <div className='flex flex-col justify-center font-semibold' >
      <div className='hover:bg-black/50 relative group'>
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          alt=""
        />
        <div dir='ltr' className='absolute top-2 left-2 ' >
          <Link href="/">
            <CiSearch className='size-9  hidden group-hover:block' />
            <p className='hidden'>مشاهده سریع</p>
          </Link>
          <div>
            <CiHeart className='size-9 cart-icon hidden group-hover:block' />
            <p className='hidden' >افزودن به علاقه مندی ها </p>
          </div>
        </div>
        <button className='hidden'>افزودن به سبد خرید</button>
      </div>

      <div className='flex flex-col gap-1 text-center p-1 justify-center' >
        <Link className='' href={"/"}>
          کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( RED ) 10 عددی LIMITED
          EDITION
        </Link>
        <div className='flex justify-center'>
          <FaStar className='text-amber-500' />
          <FaStar className='text-amber-500' />
          <FaStar className='text-amber-500' />
          <FaRegStar className='text-amber-500' />
          <FaRegStar className='text-amber-500' />
        </div>
        <span>825,000 تومان</span>
      </div>
    </div>
  )
}
