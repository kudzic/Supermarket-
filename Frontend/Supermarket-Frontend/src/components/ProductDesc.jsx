import React from 'react'
import {useParams} from 'react-router-dom'
import  axios  from 'axios'
import { useEffect,useState } from 'react'
import RelatedProducts from './RelatedProducts'
import { Link } from 'react-router-dom'


const ProductDesc = () => {
   const productId=useParams().productid
   const [data,setData]=useState({})
   const [related,setRelated]=useState([[]])
   const [url,setUrl]=useState(useParams())
   sessionStorage.setItem('Cart',{})
   const cart =sessionStorage.getItem('Cart')
 
   console.log("Cart" +  typeof(cart));
   const uurl=useParams()
  const pageCount=sessionStorage.getItem('PageCount')
   useEffect(()=>{
   axios.get(`http:///localhost:8081/api/v1/product/product?productId=${productId}`)
   .then(response=> setData(response.data))
   .catch(error => console.log(error))
   },[uurl])

   useEffect(()=>{
    axios.get(`http://localhost:8081/api/v1/product/pagedproducts?pageNumber=${pageCount}`)
    .then(response => setRelated(response.data))
    .catch(error => console.log(error.description))
   },[1])
  

 
   
  
   const output=related.map((item)=>{
    return(
      <Link to={`/products/${item.id}`}>
      <RelatedProducts 
      key={item.id}
      img={item.image}
      title={item.name}
      />
      </Link >
    )})
  
   const description=(data.description)
   console.log(description);
   console.log(typeof(description));
   console.log(data);
   console.log(useParams());

  

  return (
    <div className>
      
            <div className='flex w-full'>
            <div className='m-20 w-1/3'>
              <img src= {data.image} className='w-full '/>
            </div>
            <div className=' mt-2.5'>
                <p className=' text-2xl mt-20 '>{data.name}</p>
                <p>{data.description}</p>
                <p className=' font-bold text-lg my-4'>$ {data.price}</p>
                <button className=' bg-black text-white px-5 rounded-lg my-6 py-2' > Add to Cart</button>
            </div>
           
            </div>
            <div>
              <p className=' text-2xl mx-10'>Related Products</p>
              <div className='flex my-5 overflow-hidden overflow-scroll'>
                {output}
              </div>
            </div>
        
            <div>
              <p className=' text-center m-10 text-gray-300'> &#169; Copyright of eTech 2023 </p>
            </div>
    </div>
  )
}

export default ProductDesc