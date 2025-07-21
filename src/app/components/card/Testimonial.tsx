import React from 'react'

function Testimonial({ img, about, name, type }: any) {
    return (
        <div className='grid grid-cols-3 items-center colorbg  border border-white rounded-lg overflow-hidden'>
            <div className=' col-span-1 '>
                <img src={img.src} alt=""  />
            </div>

            <div className=' col-span-2 flex flex-col gap-5 pe-16 text-white'>
                <p className='leading-8'>{about}</p>
                <h3>{name}</h3>
                <span>{type}</span>
            </div>
        </div>
    )
}

export default Testimonial
