"use client"
import React from 'react'
import RIghtSide from './RIghtSide'
import LeftSide from './LeftSide'
import { useParams } from 'next/navigation'
import { getServiceById } from '../ServisesData'



function Page() {
    const params = useParams();
    const id = params?.serviceId;
    const servicesde = getServiceById(id)

    console.log(servicesde?.title);
    return (
        <section className=' asdf'>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-center'>
                <div className=' md:mx-10 mx-0 col-span-2'>
                    <LeftSide
                        servicesde={servicesde}
                    />
                </div>
                <div > <RIghtSide title={servicesde?.title}  /> </div>
            </div>
        </section>
    )
}

export default Page
