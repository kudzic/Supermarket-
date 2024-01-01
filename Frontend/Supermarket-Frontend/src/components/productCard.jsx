import React from 'react'

const productCard = (props) => {
  return (
    <div className=' hover:border'>
      <div className='mx-3 rounded-md' style={{}}  >
        <img src={props.img} className=' p-4 mx-auto'  style={{display: 'flex',width: '218px',height: '184px',padding: '13.77px 12.786 126.876px 241.95px',justifyContent: 'center',alignItems: 'center'}}/>
        <p className='ml-auto text-center' style={{color: 'var(--a, #003F62)',fontFamily: 'Poppins',fontSize: '17px',fontStyle: 'normal',fontWeight: 'bold',lineHeight: 'normal',width:'250px'}}>{props.title}</p>
       <p className='text-center ml-5 mt-5' style={{color: '#4A4A4A',fontFamily: 'Poppins',fontSize: '17.094px',fontStyle: 'normal',fontHeight: '600',lineHeight: 'normal',fontWeight:'bold'}}>$ {props.price}</p>
      
       
      </div>
    </div>
  )
}

export default productCard;
