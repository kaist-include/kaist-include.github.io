import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionTitle: NextPage<Props> = (prop) => {
  return (
    <div className='mb-8'>
      <h2 className='font-mono text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight'>
        <span className='font-medium text-gray-500'>#include</span>
        <span className='font-light text-gray-400 mx-2'>&lt;</span>
        <span className='text-accent font-extrabold'>
          {prop.children}
        </span>
        <span className='font-light text-gray-400 ml-2'>&gt;</span>
      </h2>
      <div className='h-0.5 w-16 bg-accent' />
    </div>
  )
}

export default SectionTitle