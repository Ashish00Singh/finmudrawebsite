import { Button } from '@/components/ui/button'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Page() {
    return (
        <>
            <section className='asdf'>
                <div className='shadow-xl p-20 rounded-xl' style={{boxShadow:'0px 0px 34px 1px #00000024'}}>
                    <p className='mb-2 subheading'>Contact</p>
                    <h2 className='textsize mb-2'>Get in touch </h2>
                    <p className='text-[#67687a] text-lg'>We are here for you! how can we help, We are here for you!</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                        <div className=' flex flex-col gap-5 py-3'>
                            <input className='p-4 rounded-md text-lg border ' placeholder='Name' />
                            <input className='p-4 rounded-md text-lg border ' placeholder='Email' />
                            <textarea rows={4} className='p-4 rounded-md text-lg border ' placeholder='message Here' />
                            <Button className='colorbg border border-[#0a5b61] h-14 text-lg text-white w-full' variant='secondary' >Submit</Button>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-5 border p-5 rounded-md'>
                                <FontAwesomeIcon icon={faLocationDot} className='w-10 color-bg' style={{ color:'#0a5b61', height:'60px'}} />
                                <div>
                                    <h3 className='text-[#67687a] text-lg'>Address</h3>
                                    <p className='text-[#67687a] text-md'>2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 border p-5 rounded-md'>
                                <FontAwesomeIcon icon={faEnvelope} className='w-10 color-bg' style={{ color:'#0a5b61', height:'60px'}}  />
                                <div>
                                    <h3 className='text-[#67687a] text-lg'>Mail Us</h3>
                                    <p className='text-[#67687a] text-md'>tanya.hill@example.com <br />
                                        sara.cruz@example.com</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 border p-5 rounded-md'>
                                <FontAwesomeIcon icon={faPhone} className='w-10 color-bg' style={{ color:'#0a5b61', height:'60px'}} />
                                <div>
                                    <h3 className='text-[#67687a] text-lg'>Telephone</h3>
                                    <p className='text-[#67687a] text-md'>(123) 456-7890 <br />
                                        (123) 456-7891</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
