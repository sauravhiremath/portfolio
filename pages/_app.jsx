import { Suspense } from 'react'

import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'

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
