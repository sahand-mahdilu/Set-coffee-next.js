import styles from "@/styles/wishlist.module.css";
import {  verifyToken } from "@/utils/auth";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import connectedToDB from "../../../configs/db";
import { cookies } from "next/headers";
import { UserModel } from "../../../models/User";
import Cart from "@/Components/modules/product/Cart";
import Navbar from "@/Components/modules/navbar/Navbar";
import Breadcrumb from "@/Components/modules/breadcrumb/BreadCrumb";
import WishListModel from "../../../models/WishList";
import Footer from "@/Components/modules/footer/Footer";

const page = async () => {
  let wishes = [];
await connectedToDB()
 


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




  if (user) {
    wishes = await WishListModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

 

  return (
    <>
      <Navbar isLogin ={user}/>
      <Breadcrumb route={"علاقه مندی ها"} />
      <main className={styles.container} data-aos="fade-up">
        <p className={styles.title}>محصولات مورد علاقه شما</p>
        <section className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
          {wishes.length > 0 &&
            wishes.map((wish) => <Cart key={wish._id} {...wish.product} />)}
        </section>
      </main>

      {wishes.length === 0 && (
        <div className={styles.wishlist_empty} data-aos="fade-up">
          <FaRegHeart className="mx-auto" />
          <p>محصولی یافت نشد</p>
          <span>شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
          <span>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
          <div>
            <Link href="/">بازگشت به فروشگاه</Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default page;
