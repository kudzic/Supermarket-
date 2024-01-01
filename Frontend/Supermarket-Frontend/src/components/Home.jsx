import React from 'react'
import {Outlet} from 'react-router-dom'
import navbar from './navbar'

const Home = () => {
  return (
    <div>
    <navbar/>
     <Outlet/>
    </div>
  )
}

export default Home