import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTelegram, FaTwitter } from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'
import { MdOutlineSms } from 'react-icons/md'

export default function Article() {
  return (
    <div >
      <Link  href={"/article/123"}>
        <img
          src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/-%D9%82%D9%87%D9%88%D9%87-%D8%A8%D8%A7-%D8%B4%DB%8C%D8%B1-qi8xuncj4ordgstrl43mbg5jfj1ezzamf6v9rnitn0.jpg"
          alt=""
        />
      </Link>
      <div >
        <span>24</span>
        <span>بهمن</span>
      </div>
      <div >
        <span >قهوه</span>
        <Link href={"/article/123"} >
          مصرف قهوه با شیر برای کاهش التهاب
        </Link>
        <div>
          <p>نویسنده</p>
          <img
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
          />
          <p>Mohebi</p>
          <div>
            <MdOutlineSms />
            <span>0</span>
          </div>
          <div >
            <IoShareSocialOutline />
            <div >
              <Link href={"/"}>
                <FaTelegram />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn />
              </Link>
              <Link href={"/"}>
                <FaPinterest />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
