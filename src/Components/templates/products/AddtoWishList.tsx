"use client";
import { UserType } from "@/app/types/types";
import { showSwal } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

 function AddToWishlist({productID}:{productID:string}) {
    const [user, setUser] = useState<UserType | null>(null)

    useEffect(()=>{

        const authUser = async ()=>{

            const res = await fetch("/api/auth/me")

            
            const data = await res.json()
         
            if (res.status === 200) {
               
                
                setUser({ ...data });
              }

        }
        authUser()


    },[])


  const addToWishlist = async (event:React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!user?._id) {
        return showSwal(
          "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
          "error",
          "ok"
        );
      }

      
      const wish = {
        user: user._id,
        product: productID,
      };
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wish),
      });
  
      console.log("Response ->", res);
  
      if (res.status === 201) {
        showSwal("محصول مورد نظر به علاقه‌مندی‌ها اضافه شد", "success", "ok");
      }


  


  };

  return (
    <div onClick={addToWishlist}>
      <CiHeart className="text-red-500 " />
      <a className="font-bold " href="/">افزودن به علاقه مندی ها</a>
    </div>
  );
}

export default AddToWishlist;
