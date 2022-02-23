import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Section: NextPage<Props> = (prop) => {
  return (
    <p className='text-lg ml-2 text-gray-600 mb-6'>
      {prop.children}
    </p>
  )
}

export default Section