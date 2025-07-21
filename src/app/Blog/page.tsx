import React from 'react'
import LeftSide from './LeftSide'
import RIghtSide from './RIghtSide'

function Page() {
  return (
    <section className=' max-w-[1400px] mx-auto lg:pt-24 pt-10 lg:px-0 px-2'>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center'>
                <div className=' lg:mx-10 mx-0 col-span-2'> <LeftSide  /> </div>
                <div > <RIghtSide /> </div>
            </div>
        </section>
  )
}

export default Page
