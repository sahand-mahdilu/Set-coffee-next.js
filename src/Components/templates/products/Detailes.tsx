"use client";

import React, { useEffect, useState } from "react";
import styles from "./details.module.css";
import { FaFacebookF, FaStar, FaTwitter, FaRegStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";

import { showSwal } from "@/utils/helpers";
import { CartItem, DetailsProps } from "@/app/types/types";
import AddToWishlist from "./AddtoWishList";

const Details: React.FC<DetailsProps> = ({ product }) => {
  const [count, setCount] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);



 
  useEffect(() => {
    const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const addToCart = (): void => {
    const updatedCart = [...cart];
    const isInCart = updatedCart.some((item) => item.id === product._id);

    if (isInCart) {
      updatedCart.forEach((item) => {
        if (item.id === product._id) {
          item.count += count;
        }
      });
      showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
    } else {
      const newItem: CartItem = {
        id: product._id.toString(),
        name: product.name,
        price: product.price,
        count,
         img:product.img
      };
      updatedCart.push(newItem);
      showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
    }


    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb title={product.name} />

      <h2 className="text-2xl font-bold max-lg:text-xl">{product.name}</h2>

      <div className={styles.rating}>
        <div>
          {new Array(product.score).fill(0).map((_, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5 - product.score).fill(0).map((_, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p>(دیدگاه {product.comments.length} کاربر)</p>
      </div>

      <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      <span className={styles.description}>{product.shortDescription}</span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>موجود در انبار</p>
      </div>

      <div className={styles.cart}>
        <button onClick={addToCart}>افزودن به سبد خرید</button>
        <div>
          <span onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>-</span>
          {count}
          <span onClick={() => setCount((prev) => prev + 1)}>+</span>
        </div>
      </div>

      <section className={styles.wishlist}>
        <AddToWishlist productID={product._id.toString()} />
        <div>
          <TbSwitch3 />
          <a href="#">مقایسه</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>شناسه محصول: {product._id}</strong>

        <p>
          <strong>برچسب:</strong> {product.tags.join(" ,")}
        </p>
      </div>

      <div className={styles.share}>
        <p>به اشتراک گذاری: </p>
        <a href="#">
          <FaTelegram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaPinterest />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;