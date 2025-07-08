"use client"
import React, { useEffect, useState } from 'react'
import Mobilemenu from './Navigation/Mobilemenu'
import mobil from '../../../asset/icon/mobHam.svg'
import logo from '../../../asset/img/finmudra.png'
import callIcon from '../../../asset/icon/circle.svg'
import NavigationMenuDropdown from './Navigation/NavigationMenuDropdown'
import Image from 'next/image'
import { Divide } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';


export default function Header() {
  const [onClicks, setOnClicks] = useState(false)
  const [mobNav, setMobNav] = useState(false)


  const handleResize = () => {
    if (window.innerWidth <= 1080) {
      setMobNav(true)
    } else {
      setMobNav(false)
    }
  }

  // create an event listener
  useEffect(() => {
    setMobNav(window.innerWidth <= 1080);
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className='mainContainer max-w-[1500px] m-auto px-2'>
      {!mobNav && (<div className="grid grid-cols-10 gap-0 ">
        <div className='navlogo col-span-2 items-center '>
          <div>
            <Image
              priority
              src={logo}
              alt="Picture of the author"
              width={140}
              // height={50}
            />
          </div>
        </div>

        <div className=' col-span-6 grid items-center' >
          <div className='flex gap-x-2 gap-y-2 flex-wrap'>
            <NavigationMenuDropdown menu_Tile='home' />
            <NavigationMenuDropdown menu_Tile='About Us' />
            <NavigationMenuDropdown menu_Tile='Service' />
            <NavigationMenuDropdown menu_Tile='Blog' />
            <NavigationMenuDropdown menu_Tile='Apply Form' showDrop={false} />
            <NavigationMenuDropdown menu_Tile='Contact' />
          </div>


        </div>
        <div className='col-span-2 p-0 '>
          <div className='flex justify-end gap-5 p-2 flex-row'>
            <Image src={callIcon} alt="" className='imgCont' priority />

            <div className='flex flex-col'>
              <p className='font-semibold text-center'>
                Requesting A Call:</p>
              <a href='#' className='text-center hover:underline underline-offset-2 decoration-blue-500'>(629) 555-0129</a>
            </div>
          </div>




        </div>
      </div>)}

      {mobNav && (
        <div className='relative'>
          <div className='flex justify-between items-center '>

            <Image
              priority
              src={logo}
              alt="Picture of the author"
              width={120}
              style={{ height: '100%' }}
            />

            <button onClick={() => { setOnClicks(!onClicks) }}>
              <Image alt='hamberger' src={mobil} width={50} priority></Image> </button>
          </div>
          <AnimatePresence>
          {onClicks && (
           <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='mobileMenu absolute z-10 w-full overflow-hidden'
        >
              <Mobilemenu hideShow={mobNav} />
            </motion.div>
          )}
          </AnimatePresence>
          </div>

      )}

    </div>
  )
}
