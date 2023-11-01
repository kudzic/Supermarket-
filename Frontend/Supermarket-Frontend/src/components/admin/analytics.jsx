import React from 'react'
import DataTable from 'react-data-table-component';
import {LineChart,Line} from 'recharts';
import Chart from 'chart.js/auto'



const analytics = () => {
const data=[{name:'Page A',uv:400,pv:2400,amt:2400},{name:'Page A',uv:350,pv:2500,amt:2300}];

const renderLineChart=(
  <LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke='#8884d8'/>
  </LineChart>
)  

  return (
    <div>{renderLineChart}</div>
  )
}

export default analytics