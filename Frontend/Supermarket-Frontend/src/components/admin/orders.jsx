import React from 'react'
import Table from '../../components/table'

const orders = () => {

const data=[
    {
        id:1,
        Product:'Iphone 12',
        Orderid:1,
        Date: '10-10-2022',
        Customer:'Kudzai',
        Status:'Completed',
        Amount:'400'}
        ,{
            id:2,
            Product:'Iphone 13',
            Orderid:2,
            Date:'10-12-2023',
            Customer:'Tariro',
            Status:'Pending',
            Amount:'500'
        }
]

  return (
    <div>
        <div>
            <p style={{fontSize:'20px',fontWeight:'bold'}} className='ml-3 mb-5'>Orders</p>
        </div>
            <div>
              <Table data={data}/>
            </div>
        
    </div>
  )
}

export default orders 