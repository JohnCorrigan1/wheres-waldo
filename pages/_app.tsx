import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { TimerProvider } from '../lib/timerContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TimerProvider>
  <Component {...pageProps} />
  <Toaster />
  </TimerProvider>
  </>
  )
}

export default MyApp
