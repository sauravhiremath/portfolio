import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <ParallaxProvider>
        <Suspense>
          <Component {...pageProps} />
        </Suspense>
      </ParallaxProvider>
    </ThemeProvider>
  )

}

export default MyApp
