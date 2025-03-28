import Link from 'next/link'
import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function Cart() {
  return (
    <div >
      <div >
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          alt=""
        />
        <div >
          <Link href="/">
            <CiSearch />
            <p >مشاهده سریع</p>
          </Link>
          <div>
            <CiHeart />
            <p >افزودن به علاقه مندی ها </p>
          </div>
        </div>
        <button>افزودن به سبد خرید</button>
      </div>

      <div >
        <Link href={"/"}>
          کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( RED ) 10 عددی LIMITED
          EDITION
        </Link>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>825,000 تومان</span>
      </div>
    </div>
  )
}
