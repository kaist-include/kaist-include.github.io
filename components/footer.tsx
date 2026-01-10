import type { NextPage } from 'next'
import Config from './../libs/config'
import Link from 'next/link'
import Image from 'next/image'
import SvgLogo from './../public/logo.svg'
import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { SiNotion, SiMedium } from "react-icons/si";

const Footer: NextPage = () => {
  return (
    <footer className='mt-20 py-12 bg-gray-50 border-t border-gray-200'>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <h3 className='text-lg font-semibold text-accent mb-4 tracking-wide'>Connect with Us</h3>
            
            {/* Social Links - Horizontal Layout */}
            <div className='flex flex-wrap gap-6 mb-6'>
              <Link href={Config.github} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                  <BsGithub className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>GitHub</span>
                </a>
              </Link>
              <Link href={Config.youtube} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                  <BsYoutube className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>YouTube</span>
                </a>
              </Link>
              <Link href={Config.medium} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                  <SiMedium className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>Medium</span>
                </a>
              </Link>
              <Link href={`mailto:${Config.staffMail}`} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift'>
                  <AiOutlineMail className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>Email</span>
                </a>
              </Link>
              <Link href={'https://include-kaist.notion.site/'} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                  <SiNotion className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>Notion</span>
                </a>
              </Link>
              <Link href={'https://www.instagram.com/include_kaist/'} passHref>
                <a className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                  <BsInstagram className='text-lg flex-shrink-0' />
                  <span className='text-sm font-medium'>Instagram</span>
                </a>
              </Link>
            </div>
            
            {/* President Info */}
            <div className='mb-4'>
              <p className='font-normal text-gray-600'>
                {Config.year} 회장 {Config.staff}
              </p>
            </div>
            
            <p className='text-sm text-gray-500 font-light'>
              Web developed in Include, since 2002
            </p>
          </div>
          
          {/* Club Logo */}
          <div className='flex justify-center md:justify-end'>
            <div className='w-24 h-24 relative flex items-center justify-center hover:drop-shadow-lg transition-all duration-300'>
              <Image
                src={SvgLogo}
                alt='Include Logo'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className='mt-8 pt-6 border-t border-gray-200'>
          <div className='text-center'>
            <p className='text-gray-500 text-sm font-light tracking-wide'>
              © {Config.year} KAIST Include. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer