import React from 'react'
import CommentModel from '../../../../models/comment'

export default  async function page() {

    const comments = await CommentModel.find({}).populate("productID").sort({ _id: -1 }) 

    console.log(comments);

    const allComments = JSON.parse(JSON.stringify(comments))




  return (
    <div>

        <div>
            <p>نام کاربری : سهند </p>
            <p>ایمیل کاربر : sahand@gamil.com</p>
            <p>متن کامنت : قهوه عالی بود</p>
        </div>


    </div>
  )
}
