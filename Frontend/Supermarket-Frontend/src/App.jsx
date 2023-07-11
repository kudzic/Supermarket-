import React from 'react'
import Navbar from './components/navbar';
import Landingpagelogo from './components/landingpagelogo';
import { Products } from './components/Products';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <Navbar  className='sticky top-0 bg-white z-10'/>
          <Routes>
           
            <Route path='/' element={<Landingpagelogo  className='z-0'/>}/>
            
          </Routes>

       
      </div>
    
  )
}

export default App;
