import { NextPage } from 'next'
import Image from './../components/image'
import ClubImage from './../public/include.png'

const Footer: NextPage = () => {
  return (
    <div className='mb-10'>
      <hr className='border-incl-300 border-1 max-w-6xl mx-auto my-4' />
      <div className='w-full flex flex-col items-center'>
        <div className='w-full max-w-3xl text-gray-400'>
          Contact to: <a href='mailto:kingdy2002@kaist.ac.kr'>2022 회장 김동영 (kingdy2002@kaist.ac.kr)</a>
          <div className='w-40 relative float-right'>
            <Image src={ClubImage} alt='Club Image' layout='responsive'/>
          </div>
          <br />
          Web developed in Include
        </div>
      </div>
    </div>
  )
}

export default Footer