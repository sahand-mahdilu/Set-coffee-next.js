import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineSms } from "react-icons/md";

export default function Article() {
  return (
    <div className="relative ">
      <Link className="relative" href={"/article/123"}>
        <img
          src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/-%D9%82%D9%87%D9%88%D9%87-%D8%A8%D8%A7-%D8%B4%DB%8C%D8%B1-qi8xuncj4ordgstrl43mbg5jfj1ezzamf6v9rnitn0.jpg"
          alt=""
        />
      </Link>
      <div className="flex flex-col bg-white text-lg font-bold absolute top-4 right-4 rounded-md p-2 justify-center text-center max-md:p-[2px] max-lg:text-sm">
        <span>24</span>
        <span>بهمن</span>
      </div>
      <div>
        <span className="bg-black p-2 text-center absolute text-white bottom-[60%] right-1/2 transform translate-x-1/2 translate-y-1/2 max-xl:text-[12px] max-lg:text-[10px]">
          قهوه
        </span>
        <Link
          className="absolute top-[45%] left-1/2  text-2xl text-white font-bold transform -translate-x-[60%] max-xl:text-lg max-lg:text-[14px] "
          href={"/article/123"}
        >
          مصرف قهوه با شیر برای کاهش التهاب
        </Link>
        <div className=" absolute  bottom-4 flex items-center gap-4 text-gray-100 left-1/2 transform -translate-x-1/2 ">
          <p>نویسنده</p>
          <img
            className="rounded-full size-9"
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
          />
          <p>Mohebi</p>
          <div className="relative ">
            <MdOutlineSms className="cursor-pointer"/>
            <span className="absolute text-[9px] flex justify-center items-center top-[-10px] right-[-10px] bg-black text-white p-1 font-bold size-4  text-center rounded-full">
              0
            </span>
          </div>
          <div className="group relative">
            
            <IoShareSocialOutline className=" group cursor-pointer " />
            <div className="absolute  right-[-20px] hidden gap-[6px] bg-black text-white p-1 group-hover:flex   ">
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
  );
}
