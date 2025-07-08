import Image from 'next/image'
import icon1 from '../../../../asset/icon/section5 (4).svg'

function CardOne() {
  return (
     <div className='flex flex-col items-center gap-5' style={{ width: '300px' }}>
              <div className='w-fit p-4 bg-[#f4f5fa] rounded-lg shadow-md relative mt-10 '>
                <i className='p-2 px-3 text-white rounded-sm absolute -top-5 -left-5 ' style={{ background: 'linear-gradient(90deg, #004d6e, #00accc)', }}>01</i>
                <Image className='' src={icon1} width={50} height={50} alt='asdfgh' />
              </div>
    
              <div className='flex flex-col items-center  gap-2'>
                <h3>Strategic Planning</h3>
                <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
    
            </div>
  )
}

export default CardOne
