import React from 'react'
import ProductCard from './productCard';
import axios from 'axios'
import { useState,useEffect } from 'react';

 const Products = () => {
  const [data,setData]=useState([])

  useEffect( () => {
      axios.get('http://localhost:8080/api/v1/product/products')
      .then(response => {
        
       setData(response.data)
      
      }).catch(err => {console.log("Error Occured")})
  },[data.length])

  console.log(data)
  
  const output = data.map(item=>{
    return(
      <ProductCard
      key={item.id}
      title={item.name}
      img={item.image}
      price={item.price}
      />
    )
  })

 
  

  return (
    <div>
       <div className='mx-7 mt-7  flex gap-20 '>
        <div className=' w-56'>
          <div className='border-b-2 mb-3 flex flex-col gap-2'>
            <span style={{color: 'var(--a, #003F62)',fontFamily: 'Poppins',fontSize: '16.09px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>Categories</span>
            <div><input type='checkbox'/> <span>All Categories</span> </div>
            <div><input type='checkbox'/> <span>Tablet</span> </div>
            <div><input type='checkbox'/> <span>Laptop</span> </div>
            <div><input type='checkbox'/> <span>Smartphones</span>  </div>
            <div><input type='checkbox'/> <span>Console</span> </div>
            <div><input type='checkbox'/> <span>Other</span> </div>
          </div>
          <div className='border-b-2 mb-3 flex flex-col gap-2'>
            <span style={{color: 'var(--a, #003F62)',fontFamily: 'Poppins',fontSize: '16.09px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>Availability</span>
            <div><input type='checkbox'/> <span>In Stock</span> </div>
            <div><input type='checkbox'/> <span>Out of stock</span> </div>
            
        </div>
        <div className='border-b-2 mb-3 flex flex-col gap-2'>
        <span  style={{color: 'var(--a, #003F62)',fontFamily: 'Poppins',fontSize: '16.09px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>Product Type</span>
            <div><input type='checkbox'/> <span>Iphones</span> </div>
            <div><input type='checkbox'/> <span>Macbook</span> </div>
            <div><input type='checkbox'/> <span>Ipad</span> </div>
            <div><input type='checkbox'/> <span>Samsung</span> </div>
            <div><input type='checkbox'/> <span>Apple SmartWatch</span> </div>
            <div><input type='checkbox'/> <span>Laptops</span> </div>
        </div>
      
       </div>
     <div className='flex flex-wrap gap-4 ' style={{justifyContent: 'center',gap: '26.556px'}}>
      {output}
      </div>
    </div>
    
    </div>
  )
}


export default Products;
