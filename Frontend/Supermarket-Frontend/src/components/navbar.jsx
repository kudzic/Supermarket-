import React from 'react'
import Cart from '../images/Cart.svg';
import Person from '../images/Person.svg';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
        <div className='flex flex-row z-10'>
        
        <div className='my-5 mx-10'> <h1  style={{color:'#1E1E1E',fontSize:'30px',fontWeight:'400',lineHeight:'normal',fontFamily:'Quella'}}><Link to={'/'}>eTech</Link></h1></div>
        <div className='my-7 flex gap-7 ' style={{marginLeft:'auto',marginRight:'30px'}}>
        <p style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',fontStyle:'normal',lineHeight:'normal',color:'#1E1E1E'}}><Link to={'/'}>Home</Link></p>
        <p style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',fontStyle:'normal',lineHeight:'normal',color:'#1E1E1E'}}><Link to={'/products'}>Products</Link></p>
        <p style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',fontStyle:'normal',lineHeight:'normal',color:'#1E1E1E'}}><Link to='/contact'>Contacts</Link></p>
        <p style={{fontFamily:'Poppins',fontSize:'18px',fontWeight:'500',fontStyle:'normal',lineHeight:'normal',color:'#1E1E1E'}}><Link to='/dashboard'>Dashboard</Link></p>
        </div>
        
        <div className='my-7 flex flex-row gap-10' style={{marginLeft:'auto',marginRight:'40px'}}>
        <p><Link to='/cart'><img src={Cart}/></Link></p>
        <p><Link to="/login"><img src={Person}/></Link></p>
        </div>
         
    
        </div>
       
    </div>
  )
}

export default navbar;
