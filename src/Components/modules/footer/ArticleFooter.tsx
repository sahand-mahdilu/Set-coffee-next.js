import { ArticleFooterProps } from '@/app/types/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

export default function ArticleFooter({ title, img, comments, href }: ArticleFooterProps) {
  return (
    <Link className='flex justify-center gap-4' href={href} >
      <Image
        src={img}
        alt={title} 
        width={75}
        height={65}
      />
      <div>
        <p>{title}</p>
        <div>
          <p className='text-gray-400 mt-1'>{comments}</p>
        </div>
      </div>
    </Link>
  );
}