import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function Lastest() {
  return (
    <div >
      <section >
        <div>
          <p>آخرین محصولات</p>
          <span>Latest products</span>
        </div>
        <Link  href={"/category"}>
          مشاهده همه <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" >


    {/* products */}
      </main>
    </div>
  )
}
