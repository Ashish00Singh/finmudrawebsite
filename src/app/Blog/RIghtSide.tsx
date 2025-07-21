import { faCalendarDays, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../../asset/img/blog/img2.jpg'
import React from 'react'
import Image from 'next/image'

function RIghtSide() {
  return (
    <div>
      <section className='search'>
        <div className='relative'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 me-4 absolute right-0 top-4' />
          <input type="text" placeholder='Search' className='bg-[#f6f6f9] w-full p-3 shadow-sm rounded-md' />
        </div>
      </section>

      <section className='mt-8 shadow-lg rounded-xl p-8 '>
        <div>
          <h3 className='text-3xl'>Categories</h3>

          <ul className=' flex flex-col gap-3 pt-4'>
            <li className='flex gap-2'><FontAwesomeIcon icon={faChevronRight} className='w-2.5 text-[#0081a1] ' /> <span className='text-xl'>Agency</span></li>
            <hr />
            <li className='flex gap-2'><FontAwesomeIcon icon={faChevronRight} className='w-2.5 text-[#0081a1] ' /> <span className='text-xl'>Corporate</span></li>
            <hr />
            <li className='flex gap-2'><FontAwesomeIcon icon={faChevronRight} className='w-2.5 text-[#0081a1] ' /> <span className='text-xl'>Business</span></li>
          </ul>
        </div>
      </section>

      <section className='mt-8 shadow-lg rounded-xl p-8 '>
        <div>
          <h3 className='text-3xl'>Categories</h3>

          <ul className=' flex flex-col gap-4 pt-4'>
            <li className='flex gap-4'>
              <Image src={img} alt='imager' />
              <div>
                <h5 className='font-semibold'>Transforming businesses for the digital age</h5>
                <div className=' flex gap-2'>
                  <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "#8b98a9", }} />
                  <span>October 19, 2024</span>
                </div>
              </div>
            </li>
            <hr />
            <li className='flex gap-4'>
              <Image src={img} alt='imager' />
              <div>
                <h5 className='font-semibold'>Transforming businesses for the digital age</h5>
                <div className=' flex gap-2'>
                  <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "#8b98a9", }} />
                  <span>October 19, 2024</span>
                </div>
              </div>
            </li>
            <hr />
            <li className='flex gap-4'>
              <Image src={img} alt='imager' />
              <div>
                <h5 className='font-semibold'>Transforming businesses for the digital age</h5>
                <div className=' flex gap-2'>
                  <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "#8b98a9", }} />
                  <span>October 19, 2024</span>
                </div>
              </div>
            </li>
            <hr />
            <li className='flex gap-4'>
              <Image src={img} alt='imager' />
              <div>
                <h5 className='font-semibold'>Transforming businesses for the digital age</h5>
                <div className=' flex gap-2'>
                  <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "#8b98a9", }} />
                  <span>October 19, 2024</span>
                </div>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      </section>

      <section className='m-2 mt-8 rounded-sm'>
       <div className='rounded-lg overflow-hidden'>
         <div className='text-center text-2xl font-semibold bradientcolor text-white py-2'>Work with us</div>
        <div className='callUs'>
          <div className='relative w-90 text-center z-5 calldetail flex flex-col  justify-center items-center gap-2'>
            {/* <Image className='rounded-full p-3 bg-white' src={call} width={60} alt='call Icon' /> */}
            Aliquam posuere loborti viverra atti ullamcer posuere viverra . Aliquam er. Aliquam justo, posuere loborti viverra atti ullam <br />

          </div>
        </div>
       </div>
      </section>


    </div>
  )
}

export default RIghtSide
