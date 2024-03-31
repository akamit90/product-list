import React, { useState } from 'react'
import './Products.css'
import Data from './Data/Data';
function Products() {

 const [productItem,setProductItem]=useState(Data)


 const handelFilter=()=>{
     const filterItem=productItem.filter((item)=>{
     return(
      item.price>30
     )
  })
  setProductItem(filterItem)
}
const handelRating=()=>{
  const filterItem=productItem.filter((item)=>{
  return(
   item.rating>4
  )
})
setProductItem(filterItem)
}
  return (
    <>
    <p className='filter ' onClick={handelFilter}>Filter by price</p>
    <p className='filter ' onClick={handelRating}>Filter by rating</p>
   <div className='cart'>
   {
    productItem.map((product)=>{
      return(
        <div className='product'key={product.id}>
              
                <div className='product-image'>
                    <img src={product.thumbnail} alt=""  style={{width:"50%"}}/>
                </div>
                <div className='prduct-details'>

                <p className='product-title'>{product.title}</p>
                <p className='product-price'>{product.price}</p>
                </div>
                <button>Add</button>
            </div>
        )})}

   </div>
    </>
  )
}

export default Products
