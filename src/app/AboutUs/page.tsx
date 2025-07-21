"use client"
import Image from 'next/image'
import React from 'react'
import img from '../../../asset/img/about/image.jpeg'
import img1 from '../../../asset/img/about/image.png'
import img2 from '../../../asset/img/about/image_1.jpeg'
import img3 from '../../../asset/img/about/image_2.jpeg'
import img4 from '../../../asset/img/about/image_3.jpeg'
import img5 from '../../../asset/img/about/image_4.jpg'

import profile1 from '../../../asset/img/profile/img1.jpg'
import profile2 from '../../../asset/img/profile/img2.jpg'
import profile3 from '../../../asset/img/profile/img3.jpg'
import profile4 from '../../../asset/img/profile/img4.jpg'
// brandIcon
import facebook from '../../../asset/icon/brandIcon/facebook-f-brands.png'
import instagram from '../../../asset/icon/brandIcon/instagram-brands.png'
import twiter from '../../../asset/icon/brandIcon/twitter-brands.png'
import linkedin from '../../../asset/icon/brandIcon/linkedin-in-brands.png'
import { motion } from 'framer-motion';
import dot from '../../../asset/img/dots.png'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Testimonial from '../components/card/Testimonial'

// data
import TestimonialData from '../dataJs/Testimonial'


const icons = [facebook, instagram, twiter, linkedin];

export default function page() {
  return (
    <>
      <section className='asdf '>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
          <div className='relative'>
            <Image className='absolute right-14 top-40' src={img1} alt="" />
            <div className='absolute z-2 right-36 top-10 bounce-x'>
              <div className='flex flex-row gap-3 justify-center bradientcolor rounded-lg items-center py-4 px-10'>
                <p className='text-5xl mb-2 text-white font-extrabold'>25</p>
                <div className='text-center'>
                  <p className=' text-white'>Year of </p>
                  <p className=' text-white'>experience</p>
                </div>
              </div>
            </div>
            <Image src={img3} width={520} className='relative z-1 rounded-2xl' alt="" />

            <Image src={img2} className='absolute -bottom-20 z-2 right-10 rounded-2xl' alt="" />
            <Image src={dot} className='absolute -bottom-10 -left-16 z-0 ' alt="" />
          </div>
          <div className='grid gap-1 pt-20'>
            <div>
              <p className='subheading'>our latest project</p>
              <h2 className='textsize  mt-5 mb-0'>Solutions That Make a Difference</h2>
            </div>
            <div className='grid gap-6'>
              <p className='pe-5'>Payment stions enable businesses to accept payments from ctly customers ctly securely. stions enable businesses to accept payments from ctly customers ctly securely</p>
              <ul className='grid md:grid-cols-2 grid-cols-1 gap-2' style={{ listStyleType: "circle" }}>
                <li className="font-semibold text-lg">Mistakes To Avoid to dum Auam.</li>
                <li className="font-semibold text-lg">Avoid to the dumy mistakes</li>
                <li className="font-semibold text-lg">Your Startup industry stan</li>
                <li className="font-semibold text-lg">Our Startup industry Here</li>
              </ul>
            </div>
            <Button className='colorbg rounded-full mt-10 p-8 text-xl w-fit me-10 text-white'>About Us  + </Button>
          </div>
        </div>
      </section>

      <section className='relative z-10'>
        <div className='bgroundcolorImage '></div>
        <div className='bgroundcolorImage1'>
          <div className='asdf  grid md:grid-cols-5 grid-cols-1 '>
            <div className='grid gap-5 pt-20 col-span-2 text-white h-fit'>
              <div>
                <p className='text-white '>ask anything</p>
                <h2 className='text-5xl text-white  mt-5 mb-0'>You can contact us for any question</h2>
              </div>
              <div className='grid gap-6'>
                <p className='pe-5'>Fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader ished fact that</p>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='bg-white flex  flex-row gap-3 justify-evenly rounded-lg items-center border border-[#00000048] py-4 px-5'>
                    <div className='rounded-full p-4 bradientcolor w-fit h-fit'>
                      <Image width={30} height={30} src={'https://finbest-nextjs.netlify.app/_next/static/media/icon-1.9a5379f6.svg'} alt='sdh'></Image>
                    </div>
                    <div className='text-black'>
                      <p className='font-extrabold text-2xl'>10 +</p>
                      <p className='font-semibold text-xl '>Experiences</p>
                    </div>
                  </div>

                  <div className='flex bg-white flex-row gap-3 justify-evenly rounded-lg items-center border border-[#00000048] py-4 px-5'>
                    <div className='rounded-full p-4 bradientcolor w-fit h-fit'>
                      <Image width={30} height={30} src={'https://finbest-nextjs.netlify.app/_next/static/media/icon-1.9a5379f6.svg'} alt='sdh'></Image>
                    </div>
                    <div className='text-black'>
                      <p className='font-extrabold text-2xl'>500 +</p>
                      <p className='font-semibold text-xl '>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-3 pt-20  justify-items-center'>
              <div className='bg-white border px-15 py-10 rounded-lg w-[80%]'>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full flex flex-col gap-6 hover:no-underline"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1 ">
                    <AccordionTrigger className='hover:no-underline text-lg '>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-base">
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                      </p>
                      <p className="text-base">
                        Key features include advanced processing capabilities, and an
                        intuitive user interface designed for both beginners and experts.
                      </p>
                    </AccordionContent>
                  </AccordionItem>


                  <AccordionItem value="item-2">
                    <AccordionTrigger className='hover:no-underline text-lg'>Shipping Details</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-base">
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                      </p>
                      <p className="text-base">
                        All orders are carefully packaged and fully insured. Track your
                        shipment in real-time through our dedicated tracking portal.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className='hover:no-underline text-lg'>Return Policy</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-base">
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                      </p>
                      <p className="text-base">
                        Our hassle-free return process includes free return shipping and
                        full refunds processed within 48 hours of receiving the returned
                        item.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" >
                    <AccordionTrigger className='hover:no-underline text-lg'>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-base">
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                      </p>
                      <p className="text-base">
                        Key features include advanced processing capabilities, and an
                        intuitive user interface designed for both beginners and experts.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </div>
            </div>
          </div>
        </div>



      </section>

      <section className='asdf '>
        <div className='grid  md:grid-cols-2 grid-cols-1 gap-10'>
          <div className='relative order-2 h-fit'>

            <div className='absolute z-5 right-36 top-26 postionAaasdf'>
              <span className='text-2xl  text-amber-50 p-0 '>
                <span className='font-semibold text-base '>Trusted</span> <br /> 2550</span>
            </div>
            <Image src={img5} width={450} className='relative z-1 rounded-2xl' alt="" />

            <Image src={img4} className='absolute top-70 z-0 right-10 rounded-2xl' alt="" />
            <div className='absolute -bottom-60 left-10 z-10 animate-bounce'>
              <div className='flex flex-row gap-3 justify-center bradientcolor rounded-lg items-center py-4 px-10'>
                <p className='text-5xl mb-2 text-white font-extrabold'>25</p>
                <div className='text-center'>
                  <p className=' text-white'>Year of </p>
                  <p className=' text-white'>experience</p>
                </div>
              </div>
            </div>

          </div>

          <div className='grid gap-1 order-1'>
            <div>
              <p className='subheading'>our latest project</p>
              <h2 className='textsize  mt-5 mb-0'>Solutions That Make a Difference</h2>
            </div>

            <div className='flex flex-col gap-10 mt-12'>

              <div className='flex'>
                <div className='w-64  p-6 border-l-2 border-[#66636363] '>
                  <img style={{ width: '100%' }} src="https://finbest-nextjs.netlify.app/_next/static/media/icon-1.8b70227d.svg" alt="" />
                </div>
                <div>
                  <h4 className='text-2xl font-semibold'>Best emplementation</h4>
                  <p>
                    Best emplementation
                    Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.</p>
                </div>
              </div>

              <div className='flex'>
                <div className='w-52 p-4 border-l-2 border-[#66636363] '>
                  <img style={{ width: '100%' }} src="https://finbest-nextjs.netlify.app/_next/static/media/icon-1.8b70227d.svg" alt="" />
                </div>
                <div>
                  <h4 className='text-2xl font-semibold'>Design make for you</h4>
                  <p>
                    Best emplementation
                    Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.</p>
                </div>
              </div>

              <div className='flex'>
                <div className='w-52 p-4 border-l-2 border-[#66636363] '>
                  <img style={{ width: '100%', height: '100%' }} src="https://finbest-nextjs.netlify.app/_next/static/media/icon-1.8b70227d.svg" alt="" />
                </div>
                <div>
                  <h4 className='text-2xl font-semibold'>Finished the process</h4>
                  <p>
                    Best emplementation
                    Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.</p>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className='relative TestimonialS'>
        <div className='TestimonialSbg'>
          <img alt="image-title-here" loading="lazy" width="558" height="492" decoding="async" data-nimg="1" 
          src="https://finbest-nextjs.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fbg-shape.8411c19e.png?url=%2F_next%2Fstatic%2Fmedia%2Fbg-shape.8411c19e.png&w=640&q=75"></img>
        </div>
       <div className='asdf'>
         <div>
          <p className='subheading'>Clients Testomonial</p>
          <h2 className='textsize  mt-5 mb-0'>Unleashing the power of <br /> your business</h2>
        </div>

        <div className='mt-10'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full ">
            <CarouselContent>
              <>
                {TestimonialData.map((item, index) => (
                  <CarouselItem className='basis-1/2' key={index}>
                    <Testimonial key={index} img={item.img} about={item.about} name={item.name} type={item.type} />
                  </CarouselItem>
                ))}

              </>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
       </div>
      </section>

      <section className='asdf '>
        <div>
          <p className='subheading w-full text-center'>Clients Testomonial</p>
          <h2 className='textsize text-center mt-5 mb-0'>Leading the way in business transformation</h2>
        </div>
        <div className='flex justify-around pt-20 '>


          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className='relative ashish group h-fit rounded-lg'>
            <Image src={profile1} alt='profile' />

            <div className='absolute z-10 w-full flex flex-col items-center bottom-0 py-14'>
              <h4 className='text-white'>Albert Flores</h4>
              <p className='text-white'>Designer</p>
            </div>

            <div

              className="flex flex-col gap-2 top-5 right-8 z-10 absolute hoverCardEff group-hover:flex"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='w-8 h-8 p-2 rounded-md bg-white'
                >
                  <img src={icon.src} className='grandContainer' alt="" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className='relative ashish group mt-10 rounded-lg'>
            <Image src={profile2} alt='profile' />

            <div className='absolute z-10 w-full flex flex-col items-center bottom-0 py-14'>
              <h4 className='text-white'>Albert Flores</h4>
              <p className='text-white'>Designer</p>
            </div>

            <div

              className="flex flex-col gap-2 top-5 right-8 z-10 absolute hoverCardEff group-hover:flex"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='w-8 h-8 p-2 rounded-md bg-white'
                >
                  <img src={icon.src} className='grandContainer' alt="" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className='relative ashish group h-fit rounded-lg'>
            <Image src={profile3} alt='profile' />

            <div className='absolute z-10 w-full flex flex-col items-center bottom-0 py-14'>
              <h4 className='text-white'>Albert Flores</h4>
              <p className='text-white'>Designer</p>
            </div>

            <div

              className="flex flex-col gap-2 top-5 right-8 z-10 absolute hoverCardEff group-hover:flex"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='w-8 h-8 p-2 rounded-md bg-white'
                >
                  <img src={icon.src} className='grandContainer' alt="" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className='relative ashish group mt-10 rounded-lg'>
            <Image src={profile4} alt='profile' />

            <div className='absolute z-10 w-full flex flex-col items-center bottom-0 py-14'>
              <h4 className='text-white'>Albert Flores</h4>
              <p className='text-white'>Designer</p>
            </div>

            <div

              className="flex flex-col gap-2 top-5 right-8 z-10 absolute hoverCardEff group-hover:flex"
            >
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className='w-8 h-8 p-2 rounded-md bg-white'
                >
                  <img src={icon.src} className='grandContainer' alt="" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


    </>
  )
}
