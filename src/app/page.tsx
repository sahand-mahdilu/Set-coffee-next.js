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
  const cookieInstant = cookies();

  const token = (await cookieInstant).get("token")?.value;

  let user = null;

  console.log(token);




  if (token) {
    const tokenPayload = verifyToken(token);
  
    if (typeof tokenPayload === "object" && tokenPayload !== null && "username" in tokenPayload) {
      user = await UserModel.findOne({ username: tokenPayload.username });
  
      console.log(user);
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
