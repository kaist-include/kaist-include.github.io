import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionTitle: NextPage<Props> = (prop) => {
  return (
    <div className='font-mono text-3xl text-incl-400 mt-3 mb-3'>
      #include &lt;
      <span className='text-incl-600'>{prop.children}</span>
      &gt;
    </div>
  )
}

export default SectionTitle