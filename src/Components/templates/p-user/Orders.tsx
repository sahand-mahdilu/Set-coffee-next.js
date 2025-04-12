"use client"
import Link from "next/link";
import Order from "./Order";
import styles from "./orders.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { OrderType } from "@/app/types/types";




const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]); 

  useEffect(() => {
   
    const storedOrders: OrderType[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setOrders(storedOrders);
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p className="max-sm:text-[10px] font-bold">سفارش های اخیر</p>
        <Link className="max-sm:text-[10px] font-bold" href="/p-user/orders">
          همه سفارش ها <FaArrowLeft />
        </Link>
      </div>
      {orders.length > 0 ? (
        orders.slice(0,3).map((order) => (
          <Order
            key={order.id}
            id={order.id}
            name={order.name}
            price={order.price}
            count={order.count}
            img={order.img}
      
          />
        ))
      ) : (
        <p className={styles.empty}>سفارشی ثبت نشده</p>
      )}
    </div>
  );
};

export default Orders;