"use client"
import Image from 'next/image'
import image from '../../../asset/img/finmudra.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <section className=' bg-[#0a5b61]'>
      <div className='asdf grid gap-5 lg:grid-cols-8 grid-cols-1 sm:grid-cols-2'>
        <div className='lg:col-span-3 pe-12 text-white'>
          <Image src={image} alt='logo' width={180} />
          <p className='mt-5 text-lg'>Payment processing is a critical component of any business that sells goods or se Payment processing is a critical component of any.</p>
          <div className='flex gap-2 mt-5 '>
            <a href="#">
              <div className='bg-white w-9 flex justify-center p-2 rounded-sm'>
                <FaFacebookF className='text-black text-xl' />
              </div>
            </a>
            <a href="">
              <div className='bg-white p-2 rounded-sm'>
               <FaTwitter className='text-black text-xl' />
              </div>
            </a>
            <a href="">
              <div className='bg-white p-2 rounded-sm'>
                <FaInstagram className='text-black text-xl' />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/finmudra/" target='_blank' >
              <div className='bg-white p-2 rounded-sm'>
                <FaLinkedinIn className='text-black text-xl' />
              </div>
            </a>
          </div>

        </div>

        {/* <div className='col-span-2 grid grid-cols-3 lg:mt-0 mt-5'> */}

        <div className=' lg:col-span-1 text-white'>
          <h3 className='mb-5 font-bold underline decoration-1 '>Quick links</h3>
          <ul className='flex flex-col gap-2'>
            <li className=' font-semibold text-lg hover:underline decoration-1 cursor-pointer' >About us</li>
            <li className=' font-semibold text-lg hover:underline decoration-1 cursor-pointer  ' >Categories</li>
            <li className=' font-semibold text-lg hover:underline decoration-1 cursor-pointer  ' >Services</li>
            <li className=' font-semibold text-lg hover:underline decoration-1 cursor-pointer  ' >Blog Grid</li>
            <li className=' font-semibold text-lg hover:underline decoration-1 cursor-pointer  ' >Contact Us</li>
          </ul>
        </div>

        <div className='lg:mx-auto mx-0  lg:col-span-2 text-white'>
          <h3 className='mb-5 font-bold underline decoration-1 '>Popular Post</h3>

          <div className='flex flex-col gap-4 '>
            <div>
              <h5 className='font-semibold hover:underline decoration-1 cursor-pointer'>Ished fact that a reader</h5>
              <div className=' flex items-center gap-2'>
                <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "white", }} />
                <span>October 19, 2025</span>
              </div>
            </div>

            <div>
              <h5 className='font-semibold hover:underline decoration-1 cursor-pointer'>Will distrol acted desig</h5>
              <div className=' flex gap-2 items-center'>
                <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "white", }} />
                <span>October 19, 2024</span>
              </div>
            </div>

            <div>
              <h5 className='font-semibold hover:underline decoration-1 cursor-pointer'>Transforming Business For You</h5>
              <div className=' flex gap-2 items-center'>
                <FontAwesomeIcon icon={faCalendarDays} className='w-4' style={{ color: "white", }} />
                <span>October 19, 2024</span>
              </div>
            </div>


          </div>
        </div>

        <div className='lg:mx-auto mx-0  lg:col-span-2 text-white'>
          <h3 className='mb-5 font-bold underline decoration-1 '>Contact us</h3>

          <div>
            <div className='flex gap-5 flex-col border p-5 rounded-md '>
              <div className='flex gap-5 items-center'>
                <FontAwesomeIcon size='xl' icon={faEnvelope} className=' color-bg' style={{ color: 'white' }} />
                <div>
                  <p className=' text-lg'>info@example.com</p>
                </div>
              </div>

              <div className='flex gap-5 items-center'>
                <FontAwesomeIcon size='xl' icon={faPhone} style={{ color: 'white' }} />
                <div>
                  <p className=' text-lg'>(629) 555-0129</p>
                </div>
              </div>

              <div className='flex gap-5 items-center'>
                <FontAwesomeIcon size='xl' icon={faLocationDot} className=' color-bg' style={{ color: 'white' }} />
                <div>
                  <p className=' text-lg'>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* </div> */}

      </div>

      <hr className='border-white' />
      <div className='max-w-[1400px] mx-auto py-8 text-white flex justify-between'>
        <p >© Finmudra 2025 | Markting with HMA </p>

        <ul className='flex gap-5 flex-wrap'>
          <li>About us</li>
          <li>Categories</li>
          <li>Services</li>
          <li>Blog Grid</li>
          <li>Contact Us</li>
        </ul>

      </div>
    </section>
  )
}

export default Footer
