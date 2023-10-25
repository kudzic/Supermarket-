import React from 'react'
import Menu from '../../images/menu_open.png'
import Progress from '../../images/Progress.png'
import Avatar from '../../images/Avatar.png'
import Inbox from '../../images/inbox.png'
import Sales from '../../images/sell.png'
import Orders from '../../images/Orders.png'
import Analytics from '../../images/data_usage.png'
import IncomingPage from '../admin/inbox'
import OrdersPage from '../admin/orders'
import SalesPage from '../admin/sales'
import AnalyticsPage from '../admin/analytics'
import {useState ,useEffect} from 'react'
import orders from './orders';





const dashboard = () => {

  const [order,setOrder]=useState(false)
  const [sales,setSales]=useState(false)
  const [analytics,setAnalytics]=useState(false)
  const [incoming,setIncoming]=useState(false)
  
  function setOrderPage(){
       setOrder(true)
       setAnalytics(false)
       setSales(false)
       setIncoming(false)
       console.log(order);
   }
   function setSalesPage(){
    setSales(true)
    setOrder(false)
    setAnalytics(false)
    setIncoming(false)
    console.log(order);
}
function setAnalyticsPage(){
  setAnalytics(true)
  setOrder(false)
  setSales(false)
  setIncoming(false)
  console.log(order);
}
function setIncomingPage(){
  setIncoming(true)
  setOrder(false)
  setAnalytics(false)
  setSales(false)
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
                <button onClick={setIncomingPage}>Incoming Orders</button>
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
                <button onClick={setSalesPage}>Sales</button>
              </span>
            </div>
            <div>
              <span className='flex gap-5 px-7 pb-10  '>
                <img src={Analytics}/>
                <button onClick={setAnalyticsPage}>Analytics</button>
              </span>
            </div>
            
          </div>

          </div> </div>
          <div id='gray-space'>
           {order && <OrdersPage/> || incoming && <IncomingPage/> || sales && <SalesPage/> || analytics && <AnalyticsPage/>}
          </div>

      </div>
    </div>
     
    
  )
}

export default dashboard  