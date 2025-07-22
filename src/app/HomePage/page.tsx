"use client"
import React from 'react'
import img2 from '../../../asset/img/section1.2.1.jpg'
import img3 from '../../../asset/img/imgi_72_image.jpg'
import dot from '../../../asset/img/dots.png'
import star from '../../../asset/img/starpatern.png'
import cash from '../../../asset/icon/dollar.381d2031.png'
import grap from '../../../asset/icon/marketing.89cce931.png'
import icon1 from '../../../asset/icon/icon-1.2a41a740.png'
// brandIcon
import facebook from '../../../asset/icon/brandIcon/facebook-f-brands.png'
import instagram from '../../../asset/icon/brandIcon/instagram-brands.png'
import twiter from '../../../asset/icon/brandIcon/twitter-brands.png'
import linkedin from '../../../asset/icon/brandIcon/linkedin-in-brands.png'


import img4 from '../../../asset/img/img-1.389b1aba (1).jpg'
import img5 from '../../../asset/img/img-1.389b1aba.jpg'
import profile from '../../../asset/img/webdigner.jpg'
import videoimg from '../../../asset/img/videoimg.jpg'


import sect41 from '../../../asset/img/section4 (1).jpg'
import sect42 from '../../../asset/img/section4 (2).jpg'
import sect43 from '../../../asset/img/section4 (3).jpg'
import profile11 from '../../../asset/img/profile/imgi_87_image.jpg'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Card from '../components/card/Card'
import CardOne from '../components/card/CardOne'
import AnimatedSection from '../components/AnimatedSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import Newheader from '../components/Navigation/Newheader'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

function HomePage() {
  return (
    <>
    <Newheader />
      <section className='imageBg'>
        <div className='grid lg:grid-cols-2 grid-cols-1 asdf '>
          <div className='section_1'>
            <div className='section_1_1'>
              <h4>Be Invest</h4>
              <h1>Where your
                financial dreams
                become reality</h1>
              <p className='pstyle'>And In Order To Make A Business, Brand Advertising And Marketing Plays
                An Important Role. Similarly, In Making Cultivation Business A Brand, Good
                Slogans Are Necessary.</p>
              <div className='flex flex-wrap gap-y-3 lg:justify-start justify-center items-center'>
                <Button className='colorbg rounded-full p-5 me-10 text-white'>Get Started </Button>
                <div className='flex gap-5 items-center'>
                  <FontAwesomeIcon color='white' size='xl' className='colorbg p-3 rounded-full' icon={faPhoneVolume} />
                  
                  <p className='flex flex-col justify-center text-center'>Need help  <a href="tel:+919110065932" className='font-semibold text-xl'>+91 123 456 7890</a></p>

                </div>
              </div>
            </div>
          </div>

          <div className='section_1_2 flex flex-row relative justify-center'>

            <div className=' absolute bottom-10 z-2 postionAaasdf'>

              <span className='text-sm  text-amber-50 p-0 '>
                <span className='font-semibold text-lg'>Intelligent</span> Banking Solutions</span>


            </div>

            <div className='section_1_2_1 relative '>
              <Image src={img2} alt=""
                className='section_1_2_1Img z-1' />
              <Image src={dot} alt=""
                className='absolute bottom-3 left-14 z-0' />
            </div>
            <div className='section_1_2_2 relative'>
              <Image src={img3} alt=""
                className='section_1_2_2Img  z-1' />
              <Image className=' absolute z-1 top-0 right-0 animate-bounce ease-in-out w-30 sm:w-40' alt='star' src={star} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 asdf'>
          <div className='flex relative'>
            <div >
              <Image className='absolute rounded-xl' src={dot} alt='sd' />
              <Image
                className=' relative top-10 left-8  rounded-xl'
                src={img5} alt='sd' />
            </div>
            <div>
              <Image className='relative z-1' src={img4} alt='sd' />
              <Image src={dot} alt='sd' />
            </div>
          </div>
          <div>
            <p className='mb-2 subheading'>ABOUT US</p>

            <h2 className='textsize mb-8'>Elevating your payment experience</h2>
            <p className='pstyle'>Payment solutions enable businesses to accept payments Payment enable businesses to accept payments from ctly customers ctly securely. rom customers conveniently and securely Payment solutions enable inesses to</p>
            <div className='grid lg:grid-cols-2 gap-5 grid-cols-1 justify-items-center gap-y-5'>
              <div className='flex items-start gap-10 justify-items-center max-w-xs'>
                <Image src={grap} alt='sd' />
                
                <div>
                  <p className=' font-semibold mb-2'>Digital marketing</p>
                  <p className='pstyle'>Payment solutions enable to stand to accepts</p>
                </div>
              </div>

              <div className='flex items-start gap-10 justify-items-center max-w-xs'>
                <Image src={cash} alt='sd' />
                <div>
                  <p className=' font-semibold mb-2'>Digital marketing</p>
                  <p className='pstyle'>Payment solutions enable to stand to accept</p>
                </div>
              </div>
            </div>
            <hr />

            <div className='flex flex-wrap gap-y-3 lg:justify-start mt-8 justify-center items-center'>
              <Button className='colorbg rounded-full py-6 px-15 me-10 font-semibold text-base text-white'>Read more</Button>
              <div className='flex gap-5 items-center'>
                <Image src={profile} alt="call 24"
                  className='rounded-full'
                  width={50}
                  height={50} />
                <div className='flex flex-col justify-center text-center'>
                  <p >
                    Web Designer

                  </p><p className='font-semibold text-xl'>Leslie Alexander</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'rgb(244, 245, 250)' }}>
        <div className='asdf '>
          <div className='flex justify-center flex-col items-center mb-20 '>
            <p className='mb-5 subheading'> Our services</p>
            <h2 className='textsize mb-6'>Invest in your future
              with us</h2>
          </div>
          <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full justify-items-center  '>
              {/* <div className='card-container shadow-xl rounded-lg'>
                <Image className='imge1' alt='' src={profile1}></Image>
                <div className='iconImg2 p-1 flex justify-center'>
                  <Image className='iconImg' alt='' src={Starsd}></Image>
                </div>
                <div className='tp-service-content-2 flex flex-col gap-4'>
                  <hr className='w-16 hovereff' />
                  <p className='hovereff'>Our services</p>
                  <h3 className='tp-service-title-2'>Mint Financial Management</h3>
                </div>
                <button className='tp-service-btn absolute z-1 p-4 rounded-full -bottom-7 bg-white' >
                  <div className='w-3.5 h-3.5'>
                    <svg width={12} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

                  </div>
                </button>
              </div> */}
              <Card />

              <Card />

              <Card />

              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className='asdf '>
        <div className='flex flex-wrap gap-5 justify-around mb-10'>
          <div>
            <p className='subheading'>our latest project</p>
            <h2 className='textsize md:w-96 w-full mt-5 mb-0'>Building wealth together</h2>
          </div>

          <div className='flex flex-wrap gap-4 items-end'>
            <Button className='btnC px-7 py-5' style={{ background: 'linear-gradient(90deg, #004d6e, #00accc)', color: 'white' }}>Business</Button>
            <Button className='btnC px-7 py-5'>Architecher</Button>
            <Button className='btnC px-7 py-5'>Large</Button>
            <Button className='btnC px-7 py-5'>Interiour</Button>
            <Button className='btnC px-7 py-5'>House</Button>
          </div>

        </div>
        <div className='flex flex-wrap gap-6 justify-center'>
          <div>
            <Image className='mb-5' src={sect43} alt='asdf' />
            <div className='flex flex-wrap justify-between'>
              <Image src={sect41} alt='asdf'></Image>
              <Image src={sect42} alt='asdf'></Image>
            </div>
          </div>

          <div className='flex flex-wrap flex-col-reverse '>
            <Image className='mt-5' src={sect43} alt='asdf' />
            <div className='flex flex-wrap justify-between'>
              <Image src={sect41} alt='asdf' />
              <Image src={sect42} alt='asdf' />
            </div>
          </div>
        </div>
      </section>

      <section className='asdf '>
        <div>
          <p className='subheading'>our latest project</p>
          <h2 className='textsize  mt-5 mb-0'>Building wealth together</h2>
        </div>

        <div className='grid xl:grid-cols-4 mt-20 lg:grid justify-items-center-safe'>
          <AnimatedSection
            cards={[CardOne, CardOne, CardOne, CardOne]}
            animationVariant={fadeUp}
          />
        </div>
      </section>

      <section className='mt-12'>
        <div className=' relative '>
          <Image className='m-auto viodeImage' src={videoimg} alt='video Image' />
          <div className="tp-play-btn">
            <div className='blingAnimation animate-[ping_1.5s_ease-in-out_infinite]'></div>
            <a className="play-btn popup-video" >
              <FontAwesomeIcon icon={faPlay} />

            </a>
          </div>
        </div>
      </section>

      <section className='asdf '>
        <div className='flex justify-center flex-col items-center mb-20 '>
          <p className='subheading'>our team</p>
          <h2 className='textsize text-center mt-5 mb-0'>Our extreme <br />
            hardworking Member</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-10 '>

          {/* one */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* two */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* three */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:w-[85%] md:w-[90%] w-[100%] p-10 bradientcolor'>
        <div className='md:max-w-[1300px] ms-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  items-center'>
            {/* one */}
            <div className='flex flex-row gap-5 justify-center items-center p-5'>
              <Image src={icon1} width={80} alt='' ></Image>
              <div className='text-center'>
                <p className='text-5xl mb-2 text-white font-extrabold'>200+</p>
                <p className=' text-white'>Team member</p>
              </div>
            </div>

            {/* two */}
            <div className='flex flex-row gap-5 justify-center items-center p-5'>
              <Image src={icon1} width={80} alt='' ></Image>
              <div className='text-center'>
                <p className='text-5xl mb-2 text-white font-extrabold'>200+</p>
                <p className=' text-white'>Team member</p>
              </div>
            </div>
            {/* three */}

            <div className='flex flex-row gap-5 justify-center items-center p-5'>
              <Image src={icon1} width={80} alt='' ></Image>
              <div className='text-center'>
                <p className='text-5xl mb-2 text-white font-extrabold'>200+</p>
                <p className=' text-white'>Team member</p>
              </div>
            </div>

            {/* four */}
            <div className='flex flex-row gap-5 justify-center items-center p-5'>
              <Image src={icon1} width={80} alt='' ></Image>
              <div className='text-center'>
                <p className='text-5xl mb-2 text-white font-extrabold'>200+</p>
                <p className=' text-white'>Team member</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='grid md:grid-cols-2 md:gap-52 gap-10 mt-20 justify-items-end-safe grid-cols-1 '>
          <div className='formcontainer' >
            <h3 className='textsize'>Get in touch</h3>
            <div className='flex flex-col gap-7 mt-12'>
              <input id='eamil' name='email' className='border-b-black border-b-1 focus:outline-none focus:border-b-1 p-3 ' type="email" placeholder="Full name" />
              <input id='eamil' name='email' className='border-b-black border-b-1 focus:outline-none focus:border-b-1 p-3 ' type="email" placeholder="Full name" />

              <Select>
                <SelectTrigger className="w-full border rounded-md transition hover:border-green-600 hover:shadow-md hover:bg-green-50">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem className=' transition hover:bg-black hover:text-white' value="apple">Apple</SelectItem>
                    <SelectItem className=' transition hover:bg-black hover:text-white' value="banana">Banana</SelectItem>
                    <SelectItem className='transition hover:bg-black hover:text-white' value="blueberry">Blueberry</SelectItem>
                    <SelectItem className='transition hover:bg-black hover:text-white' value="grapes">Grapes</SelectItem>
                    <SelectItem className='transition hover:bg-black hover:text-white' value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <textarea className='border rounded-sm border-[#5a595960]' id="w3review" name="w3review" typeof='text' rows={4} cols={50}></textarea>

              <Button className='bradientcolor text-white font-semibold p-8 text-xl'>Submit Form</Button>
            </div>
          </div>

          <div>
            <img src="https://finbest-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact-1.4669b469.jpg&w=1080&q=75" alt="Get in touch" />
          </div>
        </div>
      </section>

      <section className='asdf '>
        <div className='flex justify-center flex-col items-center mb-20 '>
          <p className='subheading'>our team</p>
          <h2 className='textsize text-center mt-5 mb-0'>Our extreme <br />
            hardworking Member</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-10 '>

          {/* one */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* two */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* three */}
          <div className='temCardContainer'>
            <div className='relative flex items-center flex-col tp-team-item-thumb-2'>
              <Image src={profile11} alt='profle'></Image>
              <div className='flex items-center pb-10 gap-8 z-10 flex-col absolute bottom-0'>
                <div className='flex gap-2 brandIcons'>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={facebook} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={instagram} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={twiter} className='grandContainer' alt="" />
                  </div>
                  <div className='w-10 h-10 p-2 rounded-md bg-white '>
                    <Image src={linkedin} className='grandContainer' alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-2 z-10 flex-col'>
                  <p className='text-2xl text-white font-bold hover:underline'>Albert Flores</p>
                  <span className=' text-white'>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomePage
