import React from 'react'

const card = (props) => {
  return (
    <div>
      <div>
        <div>
          <img src={props.img} style={{width: '299.333px',height: '363px'}}/>
        </div>
        <div>
          <p className='text-center mt-3' style={{color: 'var(--color-2, #1E1E1E)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>{props.title}</p>
          <p className='text-center' style={{color: 'rgba(30, 30, 30, 0.50)',fontFamily: 'Poppins',fontSize: '18px',fontStyle: 'normal',fontWeight: '500',lineHeight: 'normal'}}>{props.price}</p>
        </div>
      </div>
    </div>
  )
}
export default card;
