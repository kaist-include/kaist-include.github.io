import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionSubtitle: NextPage<Props> = (prop) => {
  return (
    <div className='font-mono text-2xl text-incl-400 mt-3 mb-3'>
      &gt;&nbsp;
      <span className='text-incl-600'>{prop.children}</span>
    </div>
  )
}

export default SectionSubtitle