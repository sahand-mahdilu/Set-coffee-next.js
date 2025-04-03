"use client";
import { showSwal } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

 function AddToWishlist() {
    const [user, setUser] = useState({});

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


  const addToWishlist = async (event) => {
    event.preventDefault();
    if (!user?._id) {
        return showSwal(
          "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
          "error",
          "ok"
        );
      }

      



  };

  return (
    <div onClick={addToWishlist}>
      <CiHeart />
      <a href="/">افزودن به علاقه مندی ها</a>
    </div>
  );
}

export default AddToWishlist;
