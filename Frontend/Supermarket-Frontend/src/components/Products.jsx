import React from 'react'
import ProductCard from './productCard';
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';

 const Products = () => {
  const [data,setData]=useState([])
  const [pagecount,setPageCount]=useState(1)
  const [page,setPage]=useState()
  sessionStorage.setItem('PageCount',pagecount)
  useEffect( () => {
      axios.get(`http://localhost:8081/api/v1/product/pagedproducts?pageNumber=${pagecount}`)
      .then(response => {
       setData(response.data)
      }).catch(err => {console.log("Error Occured")})
  },[pagecount])

  console.log(data)

  const next=() =>{
    if(pagecount <= Math.round(page/15))
    {
      setPageCount(pagecount+1)
     
    }
    sessionStorage.setItem('PageCount',pagecount+1)
  }

  const previous=() =>{
    if(pagecount >1){
    setPageCount(pagecount-1)
    }
    sessionStorage.setItem('PageCount',pagecount-1)
  }

  
 useEffect(()=> {
  axios.get('http://localhost:8081/api/v1/product/products')
  .then(response =>{
    setPage(response.data.length)
  })
  .catch(err => {console.log("Error Ocurred")})
 },[setPage])

  console.log(Math.round(page/15));
   console.log(page);

  const output = data.map(item=>{
    return( 
      <Link to={`/products/${item.id}`}>
     <ProductCard 
      key={item.id}
      title={item.name}
      img={item.image}
      price={item.price}
      />
      </Link>
   
    )
  })
  console.log(useParams());
  console.log(pagecount);

 
  

  return (
    <div>
       <div className='mx-7 mt-7 mb-6 flex gap-20 '>
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
       <div className='flex gap-3 mb-6 ' style={{justifyContent:"center",textAlign:'center'}}>
        <button className='border rounded-md p-2 hover:bg-gray-300' style={{width:'100px'}} onClick={previous}>Previous</button>
        <p className='my-auto px-3'>{pagecount}</p> 
        <button className='border rounded-md p-2 hover:bg-gray-300' style={{width:'100px'}} onClick={next}>Next</button>
       </div>
    </div>
  )
}


export default Products;
