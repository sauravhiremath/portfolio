import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Suspense>
        <Component {...pageProps} />
      </Suspense>
    </ThemeProvider>
  )
}

export default MyApp
