import { ArticleFooterProps } from '@/app/types/types'
import Link from 'next/link'
import React from 'react'

export default function ArticleFooter({ title, img, comments, href }:ArticleFooterProps) {
  return (
    <Link className='flex justify-center gap-4' href={href} >
      <img width={75} height={65} src={img} alt="img" />
      <div>
        <p >{title}</p>
        <div>
          <p className='text-gray-400 mt-1'>{comments}</p>
         
        </div>
      </div>
    </Link>
  )
}
