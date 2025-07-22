import React from 'react'
import call from '../../../../asset/icon/phoneCall.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'



const services = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Loan Against Property",
  "CIBIL Score Guidance"
];

export default function RIghtSide({ title }: any) {
  return (
    <>
      <section>
        <div className='px-8 py-10 shadow-xl bg-white m-2 rounded-md'>
          <h1>Our service</h1>

          <ul className=''>
            {services.map((item, index) =>
              <li key={index} className={`p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg relative cursor-pointer transition-all duration-200 ${
            item === title ? 'activeli shadow-md' : 'shadow-sm'
          }`}>
                <p>{item}</p>
              </li>

            )}
          </ul >


          {/* <ul className=''>
            <li className='p-2 text-lg bg-[#f6f6f9]  mt-2 rounded-lg shadow-md'>
              <p>Home Loan</p>
            </li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 relative rounded-lg shadow-sm hover:shadow-md'>
              <p className='activeli'>Personal Loan</p>
            </li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 relative rounded-lg shadow-sm hover:shadow-md'>
              <p className=''>Business Loan</p>
            </li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadow-sm hover:shadow-md'>
              <p>Loan Against Property</p>
            </li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadow-sm hover:shadow-md'>
              <p>CIBLE Score Guidencess</p>
            </li>
          </ul> */}
        </div>
      </section>

      <section className='m-2 mt-8'>

        <div className='callUs rounded-sm overflow-hidden'>
          <div className='relative z-5 calldetail flex flex-col  justify-center items-center gap-2'>
            <Image className=' p-4 rounded-full bg-white' src={call} width={60} alt='call Icon' />
            Requesting A Call: <br />

            <span>000 555-0129</span>
          </div>
        </div>
      </section>

      <section className='relative shadow-md pb-8 roundedsm overflow-hidden mt-10'>
        <div className='flex justify-between bg-[#f6f6f9] py-4 horiLine rounded-md px-5' >
          <h5>  <a href="£" className='font-semibold text-xl'>Download Profile</a></h5>
          <FontAwesomeIcon icon={faFileArrowDown} size='2xl' style={{ color: "#005d7d" }} />
        </div>

        <ul className='p-5 mt-5 flex flex-col gap-2 '>
          <li> <span className='me-2'>&#10003;</span> Mistakes To Avoid to dum</li>
          <li> <span className='me-2'>&#10003;</span>Startup industry stan Aliquam</li>
          <li> <span className='me-2'>&#10003;</span>Knew About Fots text posuere</li>
        </ul>

      </section>


    </>
  )
}
