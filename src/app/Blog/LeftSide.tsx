import React from 'react'
import img from '../../../asset/img/blog/img1.jpg'
import Image from 'next/image'

function LeftSide() {
    return (
        <div className=' flex flex-col gap-10'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden '>
            <div className='bgblog relative bg-amber-300'>
                <div className='absolute p-2 px-3 border-t-2 border-t-[blue] rounded-md shadow-md left-5 top-5 bg-white '>
                    <p className='blogDate'>28</p>
                    <p>June</p>
                </div>
                <Image src={img} className='w-full' alt='asdfghj' />
            </div>
            <div className='pt-5 px-10 pb-5'>
                  <p>  blog owner</p>

                  <h1 className='pt-4 text-4xl mb-0 hover:text-[#004d6e] transition-all duration-400'>Building digital experiences that matter </h1>
                 <p className='mt-5 leading-7  text-[#67687a]' >
                    Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`
                 </p>

                 <a href="" className='blogDate pt-4' ><p className='font-semibold text-lg'><span className='text-2xl pe-1' >&#8594;</span> Read More</p> </a>
            </div>
        </div>


        {/* 2nd */}

        <div className='bg-white shadow-lg rounded-lg overflow-hidden '>
            <div className='bgblog relative bg-amber-300'>
                <div className='absolute p-2 px-3 border-t-2 border-t-[blue] rounded-md shadow-md left-5 top-5 bg-white '>
                    <p className='blogDate'>28</p>
                    <p>June</p>
                </div>
               <Image src={img} className='w-full' alt='asdfghj' />
            </div>
            <div className='pt-5 px-10 pb-5'>
                  <p>  blog owner</p>

                  <h1 className='pt-4 text-4xl mb-0 hover:text-[#004d6e] transition-all duration-400'>Building digital experiences that matter </h1>
                 <p className='mt-5 leading-7 text-[#67687a]'>
                    Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`
                 </p>

                 <a href="" className='blogDate pt-4' ><p className='font-semibold text-lg'><span className='text-2xl pe-1' >&#8594;</span> Read More</p> </a>
            </div>
        </div>
        
        </div>
    )
}

export default LeftSide
