import styles from "@/styles/wishlist.module.css";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import connectedToDB from "../../../configs/db";

import Cart from "@/Components/modules/product/Cart";
import Navbar from "@/Components/modules/navbar/Navbar";
import Breadcrumb from "@/Components/modules/breadcrumb/BreadCrumb";
import WishListModel from "../../../models/WishList";
import Footer from "@/Components/modules/footer/Footer";
import { Wish } from "../types/types";
import { authUser } from "@/utils/severHelpers";

const page = async () => {
  
await connectedToDB()
 let wishes: Wish[] = [];
 const user = await authUser()

  if (user) {
    const rawWishes = await WishListModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();

    wishes = rawWishes.map((wish) => ({
      ...wish,
      _id: wish._id.toString(),
      product: {
        ...(wish.product as unknown as { name: string; price: number; score: number }),
      },
    }));
  }
  let islogin= null
  if (user){
    islogin = JSON.parse(JSON.stringify(user))
  }else{
    islogin= null
  }
  

  return (
    <>
      <Navbar isLogin={islogin} />
      <Breadcrumb route={"علاقه مندی ها"} />
      <main className={styles.container} data-aos="fade-up">
        <p className={styles.title}>محصولات مورد علاقه شما</p>
        <section className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {wishes.length > 0 &&
            wishes.map((wish) => (
              <Cart key={wish._id.toString()} {...wish.product} />
            ))}
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
