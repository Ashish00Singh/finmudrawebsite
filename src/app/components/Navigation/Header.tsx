"use client"
import React, { useEffect, useState } from 'react'
import Mobilemenu from './Mobilemenu'
import mobil from '../../../../asset/icon/mobHam.png'
import logo from '../../../../asset/img/finmudra.png'
import callIcon from '../../../../asset/icon/circle.png'
import NavigationMenuDropdown from './NavigationMenuDropdown'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import { Login } from '@/components/cusComponent/dilofBox'


export default function Header() {
  const [onClicks, setOnClicks] = useState(false)
  const [mobNav, setMobNav] = useState(false)

  const subnavitem = [
    {
      url: './Blog',
      navName: 'Blog'
    },
    {
      url: '#',
      navName: 'services detail-1'
    },
  ]
  
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
    <div className=' max-w-[1500px] m-auto px-2'>
      {!mobNav && (<div className="grid grid-cols-10 gap-0 ">
        <div className='navlogo col-span-1 items-center '>
          
            <Link href="/">
              <Image
                priority
                src={logo}
                alt="Picture of the author"
                width={140}
              /></Link>
          
        </div>

        <div className=' col-span-6 grid items-center' >
          <div className='flex gap-x-2 gap-y-2 flex-wrap justify-center'>
            <NavigationMenuDropdown menu_Tile='Home' showDrop={false} titleLink={'/'} />
            <NavigationMenuDropdown menu_Tile='About Us' showDrop={false} titleLink={'/AboutUs'} />
            <NavigationMenuDropdown menu_Tile='Service' showDrop={false} titleLink={'/Services'} />
            <NavigationMenuDropdown menu_Tile='Blog' subnavitem={subnavitem} />
            <NavigationMenuDropdown menu_Tile='Apply Form' showDrop={false} />
            <NavigationMenuDropdown menu_Tile='Contact' showDrop={false} titleLink={'/Contact'} />
          </div>


        </div>
        <div className='col-span-3 p-0 '>
          <div className='flex justify-end justify-items-center items-center gap-5 p-4 flex-row'>
           <Login/>
            <Image width={40} height={40} src={callIcon} alt="" className='imgCont' />

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
