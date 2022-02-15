import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full'>
      <Header />
      <div id='container'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
