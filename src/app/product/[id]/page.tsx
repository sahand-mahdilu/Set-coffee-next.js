import styles from "@/styles/product.module.css";

import { verifyToken } from "@/utils/auth";
import { UserModel } from "../../../../models/User";
import { cookies } from "next/headers";
import Navbar from "@/Components/modules/navbar/Navbar";
import Footer from "@/Components/modules/footer/Footer";
import Gallery from "@/Components/templates/products/Gallery";
import Detailes from "@/Components/templates/products/Detailes";
import MoreProducts from "@/Components/templates/products/MoreProducts";
import Tabs from "@/Components/templates/products/Tabs";
import connectedToDB from "../../../../configs/db";
import ProductModel from "../../../../models/product";
import { Params } from "@/app/types/types";


const product = async ({params}:{params:Params}) => {

  
  
  //  getting token form cookies
  
  const cookieInstant = cookies();
  
  const token = (await cookieInstant).get("token")?.value; //string
  
  let user = null;
  
  //  checking if there is a token or not  logged in /notlogged in
  
  if (token) {
    // verifying token
    const tokenPayload = verifyToken(token);
    
    if (
      typeof tokenPayload === "object" &&
      tokenPayload !== null &&
      "username" in tokenPayload
    ) {
      // finding user
      user = await UserModel.findOne({ username: tokenPayload.username });
    } else {
      console.log("Token payload is not valid or does not contain 'username'.");
    }
  }
  
  await connectedToDB()

  const productID = params.id;
  const product = await ProductModel.findOne({ _id: productID }).populate(
    "comments"
  );

  
  

  return (
    <div className={styles.container}>
      <Navbar isLogin={user} />
      <div data-aos="fade-up" className={styles.contents}>
        <div
          className={`${styles.main} flex   max-md:flex-col max-md:items-center`}
        >
          <Gallery />
          <Detailes product={JSON.parse(JSON.stringify(product))} />
        </div>
        <Tabs product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default product;
