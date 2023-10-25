import React from 'react'
import Menu from '../../images/menu_open.png'
import Progress from '../../images/Progress.png'
import Avatar from '../../images/Avatar.png'
import Inbox from '../../images/inbox.png'
import Sales from '../../images/sell.png'
import Orders from '../../images/Orders.png'
import Analytics from '../../images/data_usage.png'
import InboxPage from '../admin/inbox'
import OrdersPage from '../admin/orders'
import SalesPage from '../admin/sales'
import AnalyticsPage from '../admin/analytics'
import {useState ,useEffect} from 'react'
import orders from './orders';





const dashboard = () => {

  const [order,setOrder]=useState(false)
  
  
  function setOrderPage(){
       setOrder(e=>!e)
       
       
      

       console.log(order);
   }


  return (
    <div>
      <div className='flex gap-4'>
        <div className='border-r-2' style={{height:'100vh'}}>
      <div className=' px-3 pt-10 pb-10 flex flex-col'>
          <div>
            <span className='flex gap-20' style={{width:'200px'}}> 
              <p style={{paddingLeft:'32px'}}>Dashboard</p>
              <img src={Menu} style={{paddingRight:'32px',marginRight:'0px'}}/>
            </span>
 

            
          </div>
          </div>
          <div>

          <div className='flex gap-5 px-8 pb-6 border-b-2 ml-4 ' style={{width:'232px'}}>
              <div style={{position:'relative'}}>
                <img src={Progress} style={{position:'absolute'}}/>
                <img src={Avatar} />
              </div>
              <div>
                <p>Nancy Martino</p>
                <p style={{fontSize:'11px',color:'gray'}}>Designer</p>
              </div>
            </div>
          <div className='ml-4 mt-6'>

            <div></div>
            <div>
              <span className='flex gap-5 px-7 pb-10 '>
                <img src={Inbox}/>
                <button>Incoming Orders</button>
              </span>
            </div>
            <div>
              <span className='flex gap-5 px-7  pb-10 '>
                <img src={Orders}/>
                <button onClick={setOrderPage}>Orders</button>
              </span>
            </div>
            <div>
              <span className='flex gap-5 px-7 pb-10'>
                <img src={Sales}/>
                <button>Sales</button>
              </span>
            </div>
            <div>
              <span className='flex gap-5 px-7 pb-10  '>
                <img src={Analytics}/>
                <button>Analytics</button>
              </span>
            </div>
            
          </div>

          </div> </div>
          <div id='gray-space'>
           {order && <OrderPage/>}
          </div>

      </div>
    </div>
     
    
  )
}

export default dashboard  