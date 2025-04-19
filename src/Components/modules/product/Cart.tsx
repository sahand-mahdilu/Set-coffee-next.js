import { CartProps } from "@/app/types/types";
import Link from "next/link";
import {  CiSearch } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Cart({ name, price, score ,img,_id}: CartProps) {



 
 
  const validatedScore = Math.min(Math.max(score ?? 0, 0), 5); 

  return (
    <div className="flex flex-col justify-center font-semibold">
      <div className="hover:bg-black/75 relative group transition-all">
        <div>
          <img
            className="w-full group-hover:scale-110 transition-all duration-500 group-hover:brightness-50"
            src={
              img ||
              "https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
            }
            alt=""
          />
        </div> 
        
        <button className="invisible opacity-0 font-bold cursor-pointer group-hover:visible group-hover:opacity-100 text-white border p-1 absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 transition-all">
          


        <Link href={`/product/${_id}`}>
            <div className="flex items-center gap-2">
              <CiSearch className="size-9 hidden group-hover:block text-white cursor-pointer" />
              <p className="text-white hidden group-hover:block">مشاهده سریع</p>
            </div>
          </Link>



        </button>
      </div>

      <div className="flex flex-col gap-1 text-center p-1 justify-center">
        <Link className="mt-2" href={`/product/${_id}`}>
          {name}
        </Link>
        <div className="flex justify-center">
          {new Array(validatedScore).fill(0).map((item, index) => (
            <FaStar className="text-amber-500" key={index} />
          ))}
          {new Array(5 - validatedScore).fill(0).map((item, index) => (
            <FaRegStar className="text-amber-500" key={index} />
          ))}
        </div>
        <span>{price?.toLocaleString()} تومان</span>
      </div>
    </div>
  );
}