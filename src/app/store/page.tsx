import React from 'react'
import ProductModel from '../../../models/Product';
import Cart from '@/Components/modules/product/Cart';
import { Product } from '../types/types';
import connectedToDB from '../../../configs/db';

export default async function page() {

  await connectedToDB()

    const products = await ProductModel.find({}).sort({ _id: -1 }) // array

   

    const allProducts:Product[] = JSON.parse(JSON.stringify(products))

    


  return (
    <div>
        <h1 className='text-4xl font-bold p-5 pb-4 pr-10 animate-bounce '>محصولات</h1>

     <div className="grid grid-cols-4 gap-5 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-center p-4 ">
               {allProducts.map((product) => (
                 <Cart key={product._id} {...product} />
               ))}
             </div>


    </div>
  )
}
