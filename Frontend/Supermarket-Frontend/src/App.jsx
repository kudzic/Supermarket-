import React from 'react'
import Navbar from './components/navbar';
import Landingpagelogo from './components/landingpagelogo';
import Products from './components/Products'
import {Routes,Route} from 'react-router-dom'
import Login from './components/login';
import Cart from './components/cart';
import Contact from './components/contact';
import Signup from './components/signup';
import Dashboard from './components/admin/dashboard'

const App = () => {
  return (
    <div>
      
      <Navbar  className='sticky top-0 bg-white z-10'/>
          <Routes>
           
            <Route path='/' element={<Landingpagelogo  className='z-0'/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>

       
      </div>
    
  )
}

export default App;
