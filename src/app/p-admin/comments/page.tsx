import React from 'react'
import CommentModel from '../../../../models/comment'
import { IComment } from '@/app/types/types';

export default  async function page() {

    const comments = await CommentModel.find({}).populate("productID").sort({ _id: -1 }) 

    console.log(comments);

    const allComments :IComment[] = JSON.parse(JSON.stringify(comments)) // array




  return (
    <div>

        <h1 className='text-4xl font-bold pt-10 pr-10 animate-bounce '>کامنت ها </h1>
        
    
    <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 items-center justify-center gap-10 p-10 text-white '>

        {allComments.map(comment =>{
            return(

                <div key={comment._id} className='bg-yellow-700 p-6 '>
                <p>نام کاربر : {comment.username} </p>
                <p>ایمیل کاربر : {comment.email}</p>
                <p>متن کامنت : {comment.body}</p>
                <p>کامنت برای محصول : {comment.productID.name}</p>
            </div>
        
            )
        })}

    


    </div>
    </div>
  )
}
