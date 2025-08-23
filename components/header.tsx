import type { NextPage } from 'next'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import Config from './../libs/config'
import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { SiNotion, SiMedium } from "react-icons/si";

import SvgLogo from './../public/logo.svg'

const Header: NextPage = () => {
  return (
    <div className={clsx(
      'w-full h-16',
      'fixed top-0 z-50',
      'bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200 border-opacity-50',
      'transition-all duration-300'
    )}>
      <div className='w-full h-full max-w-4xl mx-auto px-6'>
        <header className='h-full flex items-center justify-between'>
          <Link href='/' passHref>
            <a className='flex items-center group transition-all duration-200 hover-lift'>
              <div className='w-8 h-8 relative flex items-center justify-center'>
                <Image
                  src={SvgLogo}
                  alt='Include Logo'
                  layout='fill'
                  objectFit='contain'
                  unoptimized
                />
              </div>
              <span className='pl-3 font-bold font-mono text-2xl text-accent tracking-tight'>
                Include
              </span>
            </a>
          </Link>

          <nav className='flex items-center gap-3'>
            <Link href={Config.github} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                <BsGithub className='text-xl' />
              </a>
            </Link>
            <Link href={Config.youtube} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                <BsYoutube className='text-xl' />
              </a>
            </Link>
            <Link href={Config.medium} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                <SiMedium className='text-xl' />
              </a>
            </Link>
            <Link href={`mailto:${Config.staffMail}`} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift'>
                <AiOutlineMail className='text-xl' />
              </a>
            </Link>
            <Link href={'https://include-kaist.notion.site/'} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                <SiNotion className='text-xl' />
              </a>
            </Link>
            <Link href={'https://www.instagram.com/include_kaist/'} passHref>
              <a className='p-2 text-accent hover:text-gray-600 transition-colors duration-200 hover-lift' target='_blank' rel='noopener noreferrer'>
                <BsInstagram className='text-xl' />
              </a>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header