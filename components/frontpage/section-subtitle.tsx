import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionSubtitle: NextPage<Props> = (prop) => {
  return (
    <h3 className='font-mono text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2 tracking-wide'>
      <span className='text-accent font-bold'>&gt;</span>
      <span className='font-semibold'>
        {prop.children}
      </span>
    </h3>
  )
}

export default SectionSubtitle