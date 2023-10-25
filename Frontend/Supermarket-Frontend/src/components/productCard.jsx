import React from 'react'

const productCard = (props) => {
  return (
    <div>
      <div className='mx-3 ' style={{borderRadius: '19.671px',border: '0.984px solid #B6B6B6'}}>
        <img src={props.img} className=' p-4'  style={{display: 'flex',width: '282.275px',height: '168.185px',padding: '13.77px 12.786 126.876px 241.95px',justifyContent: 'flex-end',alignItems: 'center'}}/>
        <p className='ml-auto text-center' style={{color: 'var(--a, #003F62)',fontFamily: 'Poppins',fontSize: '17.094px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal',width:'250px'}}>{props.title}</p>
        <p className='text-center' style={{color: '#4A4A4A',fontFamily: 'Poppins',fontSize: '17.094px',fontStyle: 'normal',fontHeight: '600',lineHeight: 'normal'}}>$ {props.price}</p>
      </div>
    </div>
  )
}

export default productCard;
