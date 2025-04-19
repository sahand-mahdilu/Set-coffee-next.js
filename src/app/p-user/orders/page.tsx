"use client"
import { OrderType } from '@/app/types/types';
import Order from '@/Components/templates/p-user/Order';
import React, { useEffect, useState } from 'react'

export default function Page() {
     const [orders, setOrders] = useState<OrderType[]>([]); 


      useEffect(() => {
       
        const storedOrders: OrderType[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setOrders(storedOrders);
      }, []);
  return (
    <div>
        <h1 className='p-6 pl-10 text-4xl font-bold animate-bounce '>سفارشات</h1>


        <div className='w-[80%] bg-amber-700 flex flex-col gap-2 p-4 mx-auto'>
        {orders.length > 0 ? (
        orders.map((order) => (
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
        <p className=" text-xl text-center text-white">سفارشی ثبت نشده</p>
      )}

        </div>


    </div>
  )
}
