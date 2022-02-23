import { NextPage } from 'next'
import Config from './../libs/config'
import Image from './../components/image'
import ClubImage from './../public/include.png'

const Footer: NextPage = () => {
  return (
    <div className='mb-10'>
      <hr className='border-incl-300 bg-incl-300 border-8 lg:border-2 transition-all ease-in-out max-w-6xl mx-auto my-4' />
      <div className='w-full flex flex-col items-center pl-2'>
        <div className='w-full max-w-3xl text-gray-400'>
          Contact to: <a href={`mailto:${Config.staffMail}`}>{Config.staff} ({Config.staffMail})</a>
          <div className='w-40 relative float-right pr-2'>
            <Image src={ClubImage} alt='Club Image' layout='responsive' unoptimized/>
          </div>
          <br />
          Web developed in Include, since 2002
        </div>
      </div>
    </div>
  )
}

export default Footer