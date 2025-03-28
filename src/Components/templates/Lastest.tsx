import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import Cart from '../modules/product/Cart'

export default function Lastest() {
  return (
    <div className='container w-[90%]'>
      <section  className='flex justify-between'>
        <div className='flex flex-col'>
          <p className='text-3xl font-semibold'>آخرین محصولات</p>
          <span className='mt-2'>Latest products</span>
        </div>
        <Link className='flex items-center'  href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main className='grid grid-cols-4 gap-5' >


    
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>

    {/* products */}
      </main>
    </div>
  )
}
