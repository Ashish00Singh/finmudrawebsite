import Image from 'next/image'
import React from 'react'
import Starsd from '../../../../asset/icon/sdsd.png'
import profile1 from '../../../../asset/img/__next_static_media_img-1.1a46b2b6.jpg'

function Card() {
  return (
    <div>
      <div className='card-container shadow-xl rounded-lg'>
              <Image className='imge1' alt='' src={profile1}></Image>
              <div className='iconImg2 p-1 flex justify-center items-center'>
                <Image className='iconImg' alt='' src={Starsd}></Image>
              </div>
              
              <div className='tp-service-content-2 flex flex-col gap-4'>
                <hr className='w-16 hovereff' />
                <p className='hovereff'>Our services</p>
                <h3 className='tp-service-title-2'>Mint Financial Management</h3>
              </div>
              <button className='tp-service-btn absolute z-1 p-4 rounded-full -bottom-7 bg-white' >
                <div className='w-3.5 h-3.5'>
                  <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

                </div>
              </button>
            </div>
    </div>
  )
}

export default Card
