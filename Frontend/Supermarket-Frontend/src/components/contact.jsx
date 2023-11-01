import React from 'react'

const contact = () => {
  return (
    <div className='flex ' >
      < div style={{width:'30%',margin:'10%'}}>
        <span style={{color:'#000',fontFamily:'Poppins',fontSize:'44px',width:'40%',fontWeight:'800' ,lineHeight:'64px'}}>Let's Talk</span>
        <p style={{marginTop:'40px'}}>We are committed to providing exceptional service and support to our valued customers. Whether you have questions about our products, need assistance with an order, or want to share feedback, we are here to help.
Please feel free to reach out to our dedicated customer support team using the following methods:</p>
      
      <div className='flex flex-col mt-9 mb-9'>
        <span style={{color:'#000',fontFamily:'Poppins',fontSize:'24px',width:'40%',fontWeight:'800' ,lineHeight:'64px'}}>Email:</span>
        <span>eTechSupport@gmail.com</span>
      </div>
     
     <div className='flex flex-col '>
      <span style={{color:'#000',fontFamily:'Poppins',fontSize:'24px',width:'40%',fontWeight:'800' ,lineHeight:'64px'}}>Socials:</span>
      <span className='mb-3'>
        <a href='http://instagram.com'>Instagram</a></span>
      
      <span className='mb-3'>
       <a href='http://facebook.com'>Facebook</a>
      </span>
      <span>
        <a href='href=://twitter.com'>Twitter</a>
      </span>
      </div>
      </div>
      <div className=' my-24 w-1/3'>

     
      <div className='flex flex-col mb-8'>
       <label>Name:</label>
       <input  type='text'  style={{background:'#F7F7F7',height:'46px'}}/>
      </div>
      <div className='flex flex-col mb-8'>
       <label>Email:</label>
       <input  type='text' placeholder='' style={{background:'#F7F7F7',height:'46px'}}/>
      </div>
      <div className='flex flex-col mb-8'>
       <label>Message:</label>
       <input  type='text'  style={{background:'#F7F7F7',height:'200px',textAlign:'left',verticalAlign:'top'}}/>
      </div>

      <div className='w-full' >
        <button type='submit' className=' pl-36 pr-36 pt-2 pb-2' style={{background:'#000',color:'#FFFFFF',textAlign:'center'}}>Submit</button>
      </div>


      </div>

    </div>
  )
}

export default contact;
