import React from 'react'
import { Link } from 'react-router-dom';
import Loginlogo from '../images/loginlogo.png'
import { useState } from 'react';


const Signup = () => {
  const[jwt,setJwt]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  //const [confirmPassword,setConfirmPassword]=useState('')
  


 
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName= (event) => {
    setLastName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };



  const handleSignup=async(e)=>{
   e.preventDefault();
   

   const signUpData={
    firstName:firstName,
    lastName:lastName,
    password:password,
    email:email,
    role:0
   };
  
   try{
    const response= await fetch('http://localhost:8081/api/v1/auth/signup',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(signUpData)
    }
    )
    if(response.ok){
      const content = await response.json()
      setJwt(content.token)
      localStorage.setItem('jwt',content.token)
      return jwt
    }
    else{
      //
    }
   }
   catch(error){
   //
   }

  }
  
  return (
  
    <div>
     <div className='flex'>
      <div className='w-1/3 mx-40 my-20'>
     <h1 className='my-3' style={{color: '#000',fontFamily: 'Poppins',fontSize: '40px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal',letterSpacing: '0.5px'}}>Sign up</h1>
        <p style={{color: '#000',fontFamily: 'Poppins',fontSize: '22px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal',letterSpacing: '0.5px'}}>Hey,Enter yout details to create  your account</p>
       <form onSubmit={handleSignup}>
       <input className='my-5' type='text' onChange={handleFirstName} placeholder='FirstName' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px 16px 24px',alignItems: 'center',gap: '10px',borderRadius: '8px',border: '1px solid #5D5D5D'}}/>
       <input className='my-5' type='text' onChange={handleLastName} placeholder='LastName' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px 16px 24px',alignItems: 'center',gap: '10px',borderRadius: '8px',border: '1px solid #5D5D5D'}} />
       <input className='my-5' type='text' onChange={handleEmail} placeholder='Email' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px 16px 24px',alignItems: 'center',gap: '10px',borderRadius: '8px',border: '1px solid #5D5D5D'}} />
       <input className='my-5' type='password'  onChange={handlePassword} placeholder='Password' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px 16px 24px',alignItems: 'center',gap: '10px',borderRadius: '8px',border: '1px solid #5D5D5D'}} />
       <input className='my-5' type='password'   placeholder='Confirm Password' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px 16px 24px',alignItems: 'center',gap: '10px',borderRadius: '8px',border: '1px solid #5D5D5D'}} />
       <button type='submit' style={{display: 'flex',width: '376px',height: '48px',padding: '16px 30px',justifyContent: 'center',alignItems: 'center',gap: '10px',borderRadius: '8px',background: '#AED6B3'}} >Sign up</button>
       <p className='my-3 mx-16' style={{color: '#797979',fontFamily:'Poppins',fontSize: '12px',fontStyle: 'normal',fontWeight: '300',lineHeight: 'normal'}}><Link to='/login'>You have an account yet? <b>Login</b></Link></p>
       </form>
     </div>
     <div>
      <img src={Loginlogo}/>
     </div>
      </div>
    </div>
  )
}

export default Signup;