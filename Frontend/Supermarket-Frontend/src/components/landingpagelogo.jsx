import React from 'react'
import Vector186 from '../images/Vector 186.svg'
import Search from'../images/Search.svg';
import Arrow from '../images/ArrowRight.svg'
import Group1 from '../images/Group 1.svg'
import Telephone from '../images/Telephone.png'
import Laptop from '../images/laptop.png'
import Iphone from '../images/iphone.svg'
import Laptop1 from '../images/laptop2.svg'
import Ipad from '../images/ipad.svg'
import Ps5 from '../images/playstation5.svg'
import Data from '../data'
import Card from './card';
import { Link } from 'react-router-dom';

const landingpagelogo = () => {
  const data=Data.map(item=>{
    return(
      <Card 
      key={item.id}
      img={item.img}
      title={item.title}
      price={item.price}
      />
    )
  })
  return (
    <div>
        <div>
            <div style={{width:'93vw',marginTop:'30px',marginLeft:'43px',marginRight:'43px',backgroundColor:'#C1DCDC',borderRadius:'24px'}}>
                <div>
                <p className= 'mx-7 py-10 ' style={{color:'#000',fontFamily:'Poppins',fontSize:'64px',width:'40%',fontWeight:'800' ,lineHeight:'64px'}}>Buy your dream device</p>
               <div className='flex flex-row gap-10'>
                      <div>
                          <p className='mx-7 ' style={{fontFamily:'Poppins',fontSize:'32px',fontWeight:'500',lineHeight:'normal',fontStyle:'normal'}} >
                            50+
                          </p>
                          <p className='mx-7' style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',lineHeight:'normal',fontStyle:'normal,'}} >
                            Electronic Devices
                          </p>
      
                      </div>
                      <div>
                          <p style={{fontFamily:'Poppins',fontSize:'32px',fontWeight:'500',lineHeight:'normal',fontStyle:'normal'}}>
                            100+ 
                          </p>
                          <p  style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',lineHeight:'normal',fontStyle:'normal,'}} >
                            Customers
                          </p>
                     </div>
                
               </div>
                </div>
                <div className='flex flex-row ' >
                  <div className=' p-7 relative'>
                    <input className='px-4' type='text' placeholder='What are you looking for?' style={{width:'449px',height:'64px',borderRadius:'12px',fontFamily:"Poppins",fontSize:'18px',fontStyle:'normal',fontWeight:'500',lineHeight:'normal',color:''}}/>
                   <div className='absolute top-9 right-12 ' style={{backgroundColor:'#C1DCDC',width:'48px',height:'48px',borderRadius:'12px'}}>
                   <img src={Search} className='absolute top-4 right-4 pointer-events-none' />
                   </div>
                    
                    
                  </div>
                   <div style={{position:'relative',height:'100px',width:'184px'}}>
                      <img src={Vector186} style={{position:'absolute',left:'50%',width:'100px',height:'100px'}}/>      
                   </div>
                </div>

               

                
               
            </div>
            <div className='px-10 mt-32 mb-32  ' >
              <div className='flex'>
                <div>
                <p style={{width:'256px',color:'#1E1E1E',fontFamily:'Poppins',fontSize:'32px',fontStyle:'normal',fontWeight:'700',lineHeight:'normal',marginBottom:'24px'}}>Best Selling Products</p>
                  <p style={{width:'196px',fontFamily:'Poppins',fontSize:'18px',fontStyle:'normal',fontWeight:'500',lineHeight:'normal'}}>Experience the difference. Our devices offer superior sound quality, picture quality, and performance.</p>
                  <div className='relative'>
                  <Link to='/products'>
                  <button className='mb-10' style={{marginTop:'24px',fontFamily:'Poppins',fontSize:'18px',fontStyle:'normal',fontWeight:'500',lineHeight:'normal',backgroundColor:'#C1DCDC',width:'168px',height:'51px',paddingRight:'18px',paddingLeft:'10px',paddingTop:'12px',paddingBottom:'12px',borderRadius:'12px'}}>
                    See more 
                  </button>
                  </Link>
                  <img src={Arrow} className='absolute top-10' style={{left:'130px'}}/>
                  </div>
                </div>
  
                   <div id='data' className='flex flex-row justify-evenly ' style={{marginLeft:'auto',marginRight:'auto',width:'100%'}}>
                    {data}
                   </div>
                   </div>
                  

                </div>

            <div>
             <p className=' text-center' style={{color: '#1E1E1E',fontFamily: 'Poppins',fontSize: '32px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}}>About us</p>
             <p className=' text-center' style={{fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>Order now and appreciate the beauty of technology</p>

             <div className='flex' style={{height:'400px'}}>
              <div style={{width:'400px',marginLeft:'46px',marginTop:'48px'}} className=' content-center mx-auto'>
               <img src={Group1} className=' mx-auto mb-10'/> 
               <p style={{color: '#000',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}} className=' text-center'>Fast & Free Shipping</p>
               <p style={{color: 'rgba(30, 30, 30, 0.50)',textAlign: 'center',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal' }} className=' text-center' >4-day or less delivery time, free shipping and an expedited delivery option.</p>
              </div>
              <div style={{width:'400px' ,marginLeft:'36px',marginTop:'48px'}} className='mx-auto'>
               <img src={Laptop} className='mx-auto mb-10' style={{maxHeight:'25%'}} />
               <p style={{color: '#000',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}} className=' text-center'>Large Collection of Devices</p>
               <p style={{color: 'rgba(30, 30, 30, 0.50)',textAlign: 'center',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'
               }} className=' text-center'>we offer many different types of products with many variations in each category.</p>
              </div>
              <div  style={{width:'400px',marginLeft:'36px',marginTop:'48px'}} className='mx-auto'>
                <img src={Telephone} className='mx-auto mb-10' style={{maxHeight:'25%'}}/>
                <p style={{color: '#000',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}} className='text-center'>24/7 Support</p>
                <p style={{color: 'rgba(30, 30, 30, 0.50)',textAlign: 'center',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'
               }} className=' text-center'>answers to any business related inquiry 24/7 and in real-time.</p>
              </div>
              </div>  
            </div> 1

            
              <div>
                <p style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '32px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal',textAlign:'center',marginTop:'10px'}}>Categories</p>
                <p style={{color: 'var(--color-4, rgba(30, 30, 30, 0.50))',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight:'500',lineHeight: 'normal',textAlign:'center'}}>Find what you are looking for</p>
              </div>

            <div className='rounded-md' style={{backgroundColor:'#c1dcdc',marginLeft:'5%',marginRight:'5%'}}>
            <div className='w-full h-1/3 mt-10 flex gap-7 mx-auto' >
              <div className='mx-auto mt-6'>
              <img src={Iphone} style={{width:'250px',height:'363px',borderRadius:'12px'}} />
              <p className='text-center my-4' style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}}>Phones </p>
              </div>
              <div className='mx-auto mt-6'>
              <img src={Laptop1} style={{width:'250px',height:'363px',borderRadius:'12px'}} />
              <p className='text-center my-4' style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}}>Laptops </p>
              </div>
              <div className='mx-auto mt-6'>
              <img src={Ipad} style={{width:'250px',height:'363px',borderRadius:'12px'}} />
              <p className='text-center my-4' style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}}>Tablets </p>
              </div>
              <div className='mx-auto mt-6'>
              <img src={Ps5} style={{width:'250px',height:'363px',borderRadius:'12px'}} />
              <p className='text-center my-4' style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal'}}>Gaming Consoles </p>
              
              </div>

              </div>

              <div>
              <div className='relative mt-5 mx-auto ' style={{width:'150px'}}>
              <Link to='/products'>
              <button className=' bg-white py-3 mb-4' style={{width:'147px',height:'51',paddingLeft:'4px',paddingRight:'24px',borderRadius:'15px',color: 'var(--color-2, #1E1E1E)',textAlign: 'center',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontHeight: '500',lineHeight: 'normal'}} >Explore</button>
              </Link>
              <img src={Arrow} className='absolute top-4 left-28'/>
              </div>
              </div>

              
            </div>
         
            <div>
              <p className=' text-center m-10 text-gray-300'> &#169; Copyright of eTech 2023 </p>
            </div>
        </div>
    </div>
  )
}
export default landingpagelogo;
