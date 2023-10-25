import React from 'react'
import DataTable from 'react-data-table-component'

const sales = () => {

  const columns=[
    {
      name:'Customer Name',
      selector: row => row.Customer,
      width:'fit-content',
      text:'center'
    },
    {
      name:"Product ID",
      selector: row=> row.Product,
      width:'fit-content',
      text:'center'
    },
    {
     name:'Date Completed',
     selector: row => row.Date ,
     width:'fit-content',
     text:'center'
    },
    {
      name:'Amount',
      selector: row => row.Amount,
      width:'fit-content',
      text:'center'
    }
  ]

  const data =
  [
    {
      id:1,
      Customer: 'Kudzai',
      Product: 'Macbook M1 2020',
      Date: '20-09-2022',
      Amount:'1200'
    }

  ]
  return (
    <div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default sales