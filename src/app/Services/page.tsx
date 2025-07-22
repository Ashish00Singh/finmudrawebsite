
import React from 'react'
import Data from './ServisesData'
import Link from 'next/link'
import Image from 'next/image'

function page() {
    return (
        <>
            <main className='colorbg'>
                <div className=' asdf '>
                    <h1 className='text-5xl text-white mt-5 mb-0'>Service</h1>
                    <p className='text-white' >Ask Anything</p>
                </div>
            </main>

            <section className='asdf'>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-28'>
                    {Data.map((item, index) =>
                        <Link key={index} href={`/Services/${item.id}`}>
                            <div className='shadow-md inset-shadow-2xs pb-10 px-10 rounded-xl group'>

                            <Image
                            width={60}
                            height={60}
                                className='colorbg ms-auto relative bottom-9 p-2 rounded-md servicesIcom'
                                src={item.icon}
                                alt="sdghj"
                            />
                            <div className='grid gap-2 '>
                                <h1 className='text-2xl mb-0 hover:text-[#004d6e] transition-all duration-400'>{item.title} </h1>
                                <p className='' >{item.disc} </p>
                                <div
                                className='rounded-md overflow-hidden mt-5'
                                >
                                    <Image className='group-hover:scale-105 w-full transition-transform duration-600 transform ' src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                        </Link>
                    )}
                </div>

            </section>

        </>
    )
}

export default page
