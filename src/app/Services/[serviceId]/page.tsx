import React from 'react'
import RIghtSide from './RIghtSide'
import LeftSide from './LeftSide'
import { getServiceById } from '../ServisesData'



export default async function Page({ params }:any) {
  const { serviceId } =  await params;
  const servicesde = getServiceById(serviceId)
  console.log(servicesde, serviceId);
    return (
        <section className=' asdf'>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-center'>
                <div className=' md:mx-10 mx-0 col-span-2'> 
                    <LeftSide servicesde={servicesde} /> 
                    </div>
                <div > <RIghtSide /> </div>
            </div>
        </section>
    )
}

// export default Page
