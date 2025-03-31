import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Articles from "@/Components/templates/articles/Articles";
import Banner from "@/Components/templates/Banner";
import Lastest from "@/Components/templates/Lastest";
import Promote from "@/Components/templates/Promote";
import { verifyToken } from "@/utils/auth";
import { cookies } from "next/headers";
import React from "react";
import { UserModel } from "../../models/User";

export default async function Home() {

  //  getting token form cookies

  const cookieInstant = cookies();

  const token = (await cookieInstant).get("token")?.value;//string

  let user = null;

 


  //  checking if there is a token or not  logged in /notlogged in

  if (token) {

    // verifying token
    const tokenPayload = verifyToken(token);
  
    if (typeof tokenPayload === "object" && tokenPayload !== null && "username" in tokenPayload) {

      // finding user
      user = await UserModel.findOne({ username: tokenPayload.username });
  
      
    } else {
      console.log("Token payload is not valid or does not contain 'username'.");
    }
  }
  

  return (
    <>
      <Navbar isLogin ={user} />
      <Banner />
      <Lastest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
