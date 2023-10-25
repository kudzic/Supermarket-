import React from 'react'
import Instagram from '../images/ri_instagram-fill.svg'
import Facebook from '../images/gg_facebook.svg'
import Ellipse2 from '../images/Ellipse 2.svg'
import Twitter from '../images/Group 13.svg'


const footer = () => {
  return (
    <div >
        <div className=' w-full h-28 flex flex-row' style={{background:'#C1DCDC'}} >
          <div className='flex flex-col px-20' style={{gap:'24px'}}>
            <p className='' style={{color:'#1E1E1E',fontSize:'24px',fontWeight:'400',lineHeight:'normal',fontFamily:'Quella'}}>eTech</p>
            <p className='w-36'>We help you find your dream device</p>
            
          <span className='flex gap-3 p-3 '>
            <div className=' relative'>
            <img src={Ellipse2}/>
            <img src={Instagram} className='absolute top-4 ' style={{left:'13px'}}/>
            </div>

            <div className='relative'>
            <img src={Ellipse2}/>
            <img src={Facebook} className='absolute top-4 left-3' />
            </div>
            <div>
              <img src={Twitter}/>
            </div>
            
          </span>

          </div>
          
        </div>
    </div>
  )
}

export default footer;
