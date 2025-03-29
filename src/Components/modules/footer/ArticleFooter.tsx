import { ArticleFooterProps } from '@/app/types/types'
import Link from 'next/link'
import React from 'react'

export default function ArticleFooter({ title, img, comments, date, href }:ArticleFooterProps) {
  return (
    <Link href={href} >
      <img width={75} height={65} src={img} alt="" />
      <div>
        <p >{title}</p>
        <div>
          <p>{comments}</p>
          <p dir="rtl">{date}</p>
        </div>
      </div>
    </Link>
  )
}
