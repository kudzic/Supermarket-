import React from 'react'

const table = ({data}) => {
  return (
    <table style={{width:'70vw',margin:'10px',border:'solid',textAlign:'center'}}>
        <thead>
            <tr >
                <th>Products</th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer name</th>
                <th>Status</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.Product}</td>
                    <td>{item.Orderid}</td>
                    <td>{item.Date}</td>
                    <td>{item.Customer}</td>
                    <td>{item.Status}</td>
                    <td>{item.Amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default table