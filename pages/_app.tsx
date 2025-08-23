import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/header'
import Footer from '../components/footer'
import RecruitmentPopupContainer from '../components/recruitment-popup'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Component {...pageProps} />
      </main>
      <Footer />
      <RecruitmentPopupContainer />
    </div>
  )
}

export default MyApp
