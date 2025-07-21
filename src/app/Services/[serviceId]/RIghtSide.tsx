import React from 'react'
import image2 from '../../../asset/img/serviceDetail/img3.jpg'
import call from '../../../../asset/icon/phoneCall.png'
import download from '../../../../asset/icon/download.png'
import Image from 'next/image'

export default function RIghtSide() {
  return (
    <>
      <section>
        <div className='px-8 py-10 shadow-xl bg-white m-2 rounded-md'>
          <h1>Our service</h1>

          <ul className='relative'>
            <li className='p-2 text-lg bg-[#f6f6f9] activeli mt-2 rounded-lg shadow-md'>Finance & Banking</li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadows'>Business Advice</li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadow-sm'>Stock market</li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadow-sm'>Regular start</li>
            <li className='p-2 text-lg bg-[#f6f6f9] mt-2 rounded-lg shadow-sm'>Precious metal</li>
          </ul>
        </div>
      </section>

      <section className='m-2 mt-8'>

        <div className='callUs rounded-sm overflow-hidden'>
          <div className='relative z-5 calldetail flex flex-col  justify-center items-center gap-2'>
            <Image className=' p-3 rounded-full bg-white' src={call} width={60} alt='call Icon' />
            Requesting A Call: <br />

          <span>000 555-0129</span>
          </div>
        </div>
      </section>

      <section className='relative shadow-md pb-8 roundedsm overflow-hidden mt-10'>
        <div className='flex justify-between bg-[#f6f6f9] py-4 horiLine rounded-md px-5' >
        <h5>  <a href="£" className='font-semibold text-xl'>Download Profile</a></h5>
          <Image src={download} alt="" />
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
