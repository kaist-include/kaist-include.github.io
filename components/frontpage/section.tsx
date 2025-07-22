import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Section: NextPage<Props> = (prop) => {
  return (
    <div className='text-base font-normal leading-relaxed text-gray-700'>
      {prop.children}
    </div>
  )
}

export default Section