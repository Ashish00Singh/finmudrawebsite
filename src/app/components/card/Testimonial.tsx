import React from 'react'

function Testimonial({ img, about, name, type }: any) {
    return (
        <div className='select-none grid lg:grid-cols-3 grid-cols-1 lg:justify-items-start w-fit overflow-hidden justify-items-center colorbg border border-white rounded-lg '>
            <div className=' col-span-1 '>
                <img src={img.src} alt=""  />
            </div>

            <div className=' lg:col-span-2 col-span-1 flex flex-col lg:items-start items-center p-2 lg:gap-5 lg:pe-16 text-white'>
                <p className='lg:leading-8 leading-5 p-2 lg:text-left text-center'>{about}</p>
                <h3>{name}</h3>
                <span>{type}</span>
            </div>
        </div>
    )
}

export default Testimonial
