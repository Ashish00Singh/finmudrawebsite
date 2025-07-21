import Image from 'next/image'
import React from 'react'
import image1 from '../../../../asset/img/serviceDetail/imga1.jpg'
import image2 from '../../../../asset/img/serviceDetail/img2.jpg'
import icon13 from '../../../../asset/icon/serviceIcon/icon (1).png'
import icon12 from '../../../../asset/icon/serviceIcon/icon (2).png'

function LeftSide({servicesde}:any) {
    return (
        <div className='' >
            <Image className=' rounded-xl fullWith' src={image1} alt='service hero icon' />

            <section className='mt-12 relative '>
                <h1 className='textsize mb-8 horiLine'> {servicesde.title}</h1>
                <p className='pstyle'>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non
                    <br /><br />
                    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis no vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo
                </p>
            </section>
            <section className=' mt-20'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 gap-y-28'>

                    <div className='shadow-md inset-shadow-2xs bg-[#f6f6f9] pb-10 px-10 rounded-xl group'>
                        <Image
                        width={50}
                            className=' border border-[#00a3c3] bg-white  ms-auto relative bottom-9 p-1 rounded-md servicesIcom'
                            src={icon13}
                            alt=""
                        />
                        <div className='grid gap-2 '>
                            <h1 className='text-2xl mb-0 hover:text-[#004d6e] transition-all duration-400'>Analysis Data </h1>
                            <p className='' >Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and is text Lorem Ipsum is simply design company text Lorem Ipsum </p>

                        </div>
                    </div>



                    <div className='shadow-md inset-shadow-2xs  bg-[#f6f6f9] pb-10 px-10 rounded-xl group'>
                        <Image
                         width={50}
                            className=' border border-[#00a3c3] bg-white ms-auto relative bottom-9 p-1 rounded-md servicesIcom'
                            src={icon12}
                            alt=""
                        />
                        <div className='grid gap-2 '>
                            <h1 className='text-2xl mb-0 hover:text-[#004d6e] transition-all duration-400'>Analysis Data </h1>
                            <p className='' >Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and is text Lorem Ipsum is simply design company text Lorem Ipsum </p>

                        </div>
                    </div>

                </div>
            </section>

            <section className='mt-12'>
                <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
                    <div>
                        <h1 className='text-2xl font-semibold mb-8 '>Expert test matters
                        <hr style={{ width: '120px', marginTop: '10px' }} />
                    </h1>
                        <p className='pstyle'>
                            Aliquam eros justo, posu ere loborti viver lao reet matti ullam corpe.Aliquam eros justo, posuere lobortis non <br /><br />

                            Aliquam eros justo, posuere loboh viverra laoreet matti ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper.
                        </p></div>
                    <Image className='rounded-xl' src={image2} alt="" />
                </div>





            </section>

            <p className='text-lg mt-10 font-semibold p-7 rounded-xl shadow-cyan-500/50 shadow-sm '>
                Aliquam eros justo, posuere loborti viverra laoreet matti uacorper posuere viverra .Aliquam eros no justo des posuere lobortis non, viverra laoreet ue mattis fermentum ullamcorper viverra laoreet. Aliquam eros industry posuere loborti viverra laoreet matti ullamcorpe
            </p>
        </div>
    )
}

export default LeftSide
