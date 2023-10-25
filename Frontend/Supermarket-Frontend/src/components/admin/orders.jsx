import React from 'react'
import DataTable from 'react-data-table-component'

const orders = () => {

const columns=[
  {
    name:'Products',
    selector: row => row.Product,
    sortable:true
  },
  {
   name:'Order ID',
   selector:row => row.Orderid,
   sortable:true,
   text:'center'
  },
  {
    name:'Date',
    selector:row => row.Date,
    sortable:true,
    text:'center'
  },
  {
    name:'Customer Name',
    selector:row => row.Customer,
    sortable:true,
    width:'fit-content',
    text:'center'
  },
  {
    name:'Status',
    selector: row => row.Status,
    sortable:true,
    text:'center'
  },
  {
    name:'Amount',
    selector: row => row.Amount,
    sortable:true,
    text:'center'
  }
];

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
              <DataTable
              columns={columns}
               data={data}
               selectableRows
               pagination
               />
            </div>
        
    </div>
  )
}

export default orders 