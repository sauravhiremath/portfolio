import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useTheme } from 'next-themes'

const Index = ({ children, highlightedLink, contact }) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="dark:bg-darkColor">
      <div
        style={{
          backgroundSize: `${mounted && resolvedTheme === 'light' ? '100%' : '45%'}`,
          // backgroundImage: `${mounted && resolvedTheme === 'light' ? '#f0faff' : 'transparent'}`,
          // backgroundImage: `${mounted && resolvedTheme === 'light' ? 'linear-gradient(135deg, rgba(243,92,107,0.2), #f8efff 55%, rgba(252,95,46,0.2))' : "url('https://uploads-ssl.webflow.com/61dde1260c66047f40c11259/61de307a2bf0a020f47290c8_Lines.svg')"}`,
        }}
        className="relative bg-fixed w-full "
      >
        <div
          style={
            {
              // backgroundImage: 'linear-gradient(132deg, #FC5F2D 20%, #F35C6A)'
            }
          }
          className=" !hidden lg:!flex  fixed ball z-10 hue-rotate bg-transparent min-w-[20rem] min-h-[20rem] "
        ></div>
        <div
          style={
            {
              // backgroundImage: 'linear-gradient(132deg, #FC5F2D 20%, #F35C6A)'
            }
          }
          className="!hidden lg:!flex  fixed ball z-10 right-0 bottom-0 hue-rotate bg-transparent min-w-[20rem] min-h-[20rem] "
        ></div>
        <Navbar highlightedLink={highlightedLink} />
        <main className="z-20 min-h-screen">{children}</main>
        <Footer contact={contact} />
      </div>
    </div>
  )
}

export default Index
