import clsx from 'clsx'
import { NextPage } from 'next'
import Image from './../components/image'
import Link from 'next/link'
import SvgLogo from './../public/logo.svg'

const Header: NextPage = () => {
  return (
    <div className={clsx(
      'w-full h-16',
      'sticky top-0',
      'bg-white bg-opacity-90 backdrop-blur',
      {'border-b-2 border-b-incl-600': false},
      {'overflow-hidden': false},
    )}>
      <div className='w-full h-full max-w-5xl mx-auto'> {/* 좌우 정중앙으로 맞추기 */}
        <header className='h-full flex items-center'> {/* 상하 정중앙으로 맞추기 */}
          <Link href='/' passHref>
            <a className='flex items-center pl-2'>
              <div className='w-10 h-10 relative inline-block'>
                <Image src={SvgLogo} alt='Logo' layout='fill' unoptimized/>
              </div>
              <span className='pl-3 font-semibold font-mono text-3xl text-incl-600'>
                Include
              </span>
            </a>
          </Link>
          <nav></nav>
        </header>
      </div>
      
      <hr className='border-incl-600 bg-incl-600 border-2 max-w-6xl mx-auto mb-6' />
    </div>
  )
}

export default Header