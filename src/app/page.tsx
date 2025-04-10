import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Articles from "@/Components/templates/articles/Articles";
import Banner from "@/Components/templates/Banner";
import Lastest from "@/Components/templates/Lastest";
import Promote from "@/Components/templates/Promote";

import React from "react";
import { authUser } from "@/utils/severHelpers";
import ProductModel from "../../models/Product";

export default async function Home() {

  
    const user = await authUser()
    const latestProducts = await ProductModel.find({}).sort({ _id: -1 }).limit(8);
  

  return (
    <>
      <Navbar isLogin ={user||null} />
      <Banner />
      <Lastest  products={JSON.parse(JSON.stringify(latestProducts))}  />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
