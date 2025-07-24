import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import sect41 from '../../../asset/img/section4 (1).jpg'
import sect42 from '../../../asset/img/section4 (2).jpg'
import sect43 from '../../../asset/img/section4 (3).jpg'

import sect43a from '../../../asset/img/home/img11.jpg'
import sect43a1 from '../../../asset/img/home/img2.jpg'
import sect43a2 from '../../../asset/img/home/img3.jpg'

import sect43b from '../../../asset/img/home/img12.jpg'
import sect43b1 from '../../../asset/img/home/img4.jpg'
import sect43b2 from '../../../asset/img/home/img5.jpg'

import sect43c from '../../../asset/img/home/img13.jpg'
import sect43c1 from '../../../asset/img/home/img6.jpg'
import sect43c2 from '../../../asset/img/home/img1.jpg'


const Container = [
  {
    btntitle: "Business",
    id: 1,
    imgArray: [
      { one: sect41, one1: sect42, Two: sect43 },
      { one: sect41, one1: sect42, Two: sect43 }
    ]
  },

  {
    btntitle: "Architecher",
    id: 2,
     imgArray: [
      { one: sect43a1, one1: sect43a2, Two: sect43a },
      { one: sect43a2, one1: sect43a1, Two: sect43a }
    ]
  },
  {
    btntitle: "Large",
    id: 3,
     imgArray: [
      { one: sect43b1, one1: sect43b2, Two: sect43b },
      { one: sect43b2, one1: sect43b1, Two: sect43b }
    ]
  },

  {
    btntitle: "Interiour",
    id: 4,
     imgArray: [
      { one: sect43c1, one1: sect43c2, Two: sect43c },
      { one: sect43c2, one1: sect43c1, Two: sect43c }
    ]
  },
  {
    btntitle: "House",
    id: 5,
     imgArray: [
      { one: sect41, one1: sect42, Two: sect43 },
      { one: sect41, one1: sect42, Two: sect43 }
    ]
  },

]

export default function ButtonTes() {
  const [select, setSetect] = useState<any>(Container[0])

  const handleClick = (item: any) => {
    setSetect(item)
  }

  return (
    <section className='asdf '>
      <div className='flex flex-wrap gap-5 justify-around mb-10'>
        <div>
          <p className='subheading'>our latest project</p>
          <h2 className='textsize md:w-96 w-full mt-5 mb-0'>Building wealth together</h2>
        </div>
        <div className='flex flex-wrap gap-4 items-end'>
          {
            Container.map((item, index) =>
              <Button key={index + 1} className={`text-lg px-7 py-5  btnC ${select?.btntitle === item.btntitle ? ' bradientcolor text-white ' : ''} `} onClick={() => handleClick(item)}> {item.btntitle} </Button>
            )
          }
        </div>

      </div>
      

      <div className='flex flex-wrap gap-6 justify-center'>
        {select.imgArray.map((imgObj:any, index:number) => (
          
          <div key={index} className={`flex flex-wrap  ${index === 0 ? 'flex-col-reverse' : 'flex-col' }`}>
            <Image className={`${index === 0 ? 'mt-5' : 'mb-5' }`}  src={imgObj.Two} alt='Main Image' />
            <div className='flex flex-wrap justify-center gap-6 items-center'>
              <Image src={imgObj.one} alt='One' />
              <Image src={imgObj.one1} alt='One1' />
            </div>
          </div>
        ))}

        {/* {select.imgArray.map((imgObj:any, index:number) => (
          <div key={`reverse-${index}`} className='flex flex-wrap flex-col-reverse'>
            <Image className='mt-5'  src={imgObj.Two} alt='Main Image' />
            <div className='flex flex-wrap justify-between'>
              <Image src={imgObj.one} alt='One' />
              <Image src={imgObj.one1} alt='One1' />
            </div>
          </div>
        ))} */}
      </div>



    </section >
  )
}
