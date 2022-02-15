import type { NextPage } from 'next'

const Index: NextPage = () => {
  let x: JSX.Element[] = []
  for (let i = 0; i < 20; i++) {
    x.push(<span key={i}>An empty line <br /></span>)
  }
  return (
    <div>
    <h1 className='text-6xl'>소개</h1>
    {x}
      <h1 className='text-6xl'>주요 활동</h1>
      {x}
      <h1 className='text-5xl'>프로젝트</h1>
      {x}
      <h1 className='text-5xl'>스터디</h1>
      {x}
      <h1 className='text-5xl'>Contact</h1>
      {x}
    </div>
  )
}

export default Index
