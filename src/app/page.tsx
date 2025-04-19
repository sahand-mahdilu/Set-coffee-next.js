import Footer from "@/Components/modules/footer/Footer";
import Navbar from "@/Components/modules/navbar/Navbar";
import Articles from "@/Components/templates/articles/Articles";
import Banner from "@/Components/templates/Banner";
import Lastest from "@/Components/templates/Lastest";
import Promote from "@/Components/templates/Promote";

import React from "react";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../configs/db";
import ProductModel from "../models/Product";

export default async function Home() {
  await connectedToDB();
  const user = await authUser();

  const latestProducts = await ProductModel.find({}).sort({ _id: -1 }).limit(8);

  let islogin = null;
  if (user) {
    islogin = JSON.parse(JSON.stringify(user));
  } else {
    islogin = null;
  }

  return (
    <>
      <Navbar isLogin={islogin} />
      <Banner />
      <Lastest products={JSON.parse(JSON.stringify(latestProducts))} />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
