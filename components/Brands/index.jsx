import { useTheme } from 'next-themes'
import { SiAmazonaws, SiGooglecloud, SiPython, SiReact, SiTensorflow } from 'react-icons/si'
import React, { useEffect, useState } from 'react'

const Index = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  const brands = [
    <Python key="python" theme={theme} mounted={mounted} />,
    <ReactLogo key="react" theme={theme} mounted={mounted} />,
    <AWS key="aws" theme={theme} mounted={mounted} />,
    <Tensorflow key="tensorflow" theme={theme} mounted={mounted} />,
    <GCP key="gcp" theme={theme} mounted={mounted} />,
    <Golang key="golang" theme={theme} mounted={mounted} />,
  ]
  return (
    <div className="  w-full z-20 h-full backdrop-blur-md sticky inset-0">
      <section
        style={{
          background: `${
            theme && mounted && theme === 'light'
              ? 'linear-gradient(rgba(230,230,230,0.3),rgba(230,230,230,0.3))'
              : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
          }`,
        }}
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay={`200`}
            className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
          >
            Technolgies worked with
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {brands?.map((brand, i) => (
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay={`${i + 1}00`}
                key={brand.key}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const Python = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex relative justify-center space-x-4 group opacity-60 hover:opacity-100 items-center cursor-pointer">
        <SiPython className="text-5xl md:!text-7xl text-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          Python
        </div>
      </a>
    </>
  )
}
const ReactLogo = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex relative justify-center group space-x-4 opacity-60 hover:opacity-100 items-center cursor-pointer">
        <SiReact className="text-5xl md:!text-7xl ttext-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          React
        </div>
      </a>
    </>
  )
}
const AWS = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex relative justify-center group space-x-4 opacity-60 hover:opacity-100 items-center cursor-pointer">
        <SiAmazonaws className="text-5xl md:!text-7xl text-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))'
                : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          AWS
        </div>
      </a>
    </>
  )
}
const Tensorflow = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex relative justify-center group space-x-4 opacity-60 hover:opacity-100 items-center cursor-pointer">
        <SiTensorflow className="text-5xl md:!text-7xl z-10 text-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          Tensorflow
        </div>
      </a>
    </>
  )
}
const GCP = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex relative justify-center group space-x-4 opacity-60 hover:opacity-100 items-center cursor-pointer">
        <SiGooglecloud className="text-5xl md:!text-7xl  z-10 text-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          GCP
        </div>
      </a>
    </>
  )
}
const Golang = ({ theme, mounted }) => {
  return (
    <>
      <a className="flex md:hidden relative mt-2 justify-center group space-x-4 opacity-60 hover:opacity-100 space-y-[-2px] items-center cursor-pointer">
        <svg
          height="30"
          viewBox="16.8 16.1 72.9 27.6"
          width="2500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <switch>
            <g fill="#fff">
              <path d="m22.3 24.7c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h12.6c.1 0 .2.1.1.2l-.6.9c-.1.1-.2.2-.4.2zm-5.3 3.2c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h16.1c.1 0 .2.1.2.2l-.3 1c0 .1-.2.2-.3.2zm8.5 3.3c-.1 0-.2-.1-.1-.2l.5-.9c.1-.1.2-.2.4-.2h7c.1 0 .2.1.2.2l-.1.8c0 .1-.1.2-.2.2zm36.6-7.2-5.9 1.5c-.5.1-.6.2-1-.4-.5-.6-.9-1-1.7-1.3-2.2-1.1-4.4-.8-6.4.5-2.4 1.5-3.6 3.8-3.6 6.7 0 2.8 2 5.1 4.8 5.5 2.4.3 4.4-.5 6-2.3.3-.4.6-.8 1-1.3h-6.8c-.7 0-.9-.5-.7-1.1.5-1.1 1.3-2.9 1.8-3.8.1-.2.4-.6.9-.6h12.8c-.1 1-.1 1.9-.2 2.9-.4 2.5-1.3 4.9-2.9 6.9-2.5 3.3-5.8 5.4-10 6-3.5.5-6.7-.2-9.5-2.3-2.6-2-4.1-4.6-4.5-7.8-.5-3.8.7-7.3 3-10.3 2.5-3.3 5.8-5.4 9.9-6.1 3.3-.6 6.5-.2 9.3 1.7 1.9 1.2 3.2 2.9 4.1 5 .1.4 0 .5-.4.6z" />
              <path d="m73.7 43.5c-3.2-.1-6.1-1-8.6-3.1-2.1-1.8-3.4-4.1-3.8-6.8-.6-4 .5-7.5 2.9-10.6 2.6-3.4 5.7-5.1 9.9-5.9 3.6-.6 7-.3 10 1.8 2.8 1.9 4.5 4.5 5 7.9.6 4.8-.8 8.6-4 11.9-2.3 2.4-5.2 3.8-8.4 4.5-1.1.2-2.1.2-3 .3zm8.4-14.2c0-.5 0-.8-.1-1.2-.6-3.5-3.8-5.5-7.2-4.7-3.3.7-5.4 2.8-6.2 6.1-.6 2.7.7 5.5 3.2 6.7 1.9.8 3.9.7 5.7-.2 2.9-1.4 4.4-3.7 4.6-6.7z" />
            </g>
          </switch>
        </svg>
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          Golang
        </div>
      </a>
      <a className="md:flex hidden relative mt-2 justify-center group space-x-4 opacity-60 hover:opacity-100 space-y-[-2px] items-center cursor-pointer">
        <svg
          height="50"
          viewBox="16.8 16.1 72.9 27.6"
          width="2500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <switch>
            <g fill="#fff">
              <path d="m22.3 24.7c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h12.6c.1 0 .2.1.1.2l-.6.9c-.1.1-.2.2-.4.2zm-5.3 3.2c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h16.1c.1 0 .2.1.2.2l-.3 1c0 .1-.2.2-.3.2zm8.5 3.3c-.1 0-.2-.1-.1-.2l.5-.9c.1-.1.2-.2.4-.2h7c.1 0 .2.1.2.2l-.1.8c0 .1-.1.2-.2.2zm36.6-7.2-5.9 1.5c-.5.1-.6.2-1-.4-.5-.6-.9-1-1.7-1.3-2.2-1.1-4.4-.8-6.4.5-2.4 1.5-3.6 3.8-3.6 6.7 0 2.8 2 5.1 4.8 5.5 2.4.3 4.4-.5 6-2.3.3-.4.6-.8 1-1.3h-6.8c-.7 0-.9-.5-.7-1.1.5-1.1 1.3-2.9 1.8-3.8.1-.2.4-.6.9-.6h12.8c-.1 1-.1 1.9-.2 2.9-.4 2.5-1.3 4.9-2.9 6.9-2.5 3.3-5.8 5.4-10 6-3.5.5-6.7-.2-9.5-2.3-2.6-2-4.1-4.6-4.5-7.8-.5-3.8.7-7.3 3-10.3 2.5-3.3 5.8-5.4 9.9-6.1 3.3-.6 6.5-.2 9.3 1.7 1.9 1.2 3.2 2.9 4.1 5 .1.4 0 .5-.4.6z" />
              <path d="m73.7 43.5c-3.2-.1-6.1-1-8.6-3.1-2.1-1.8-3.4-4.1-3.8-6.8-.6-4 .5-7.5 2.9-10.6 2.6-3.4 5.7-5.1 9.9-5.9 3.6-.6 7-.3 10 1.8 2.8 1.9 4.5 4.5 5 7.9.6 4.8-.8 8.6-4 11.9-2.3 2.4-5.2 3.8-8.4 4.5-1.1.2-2.1.2-3 .3zm8.4-14.2c0-.5 0-.8-.1-1.2-.6-3.5-3.8-5.5-7.2-4.7-3.3.7-5.4 2.8-6.2 6.1-.6 2.7.7 5.5 3.2 6.7 1.9.8 3.9.7 5.7-.2 2.9-1.4 4.4-3.7 4.6-6.7z" />
            </g>
          </switch>
        </svg>
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          Golang
        </div>
      </a>
    </>
  )
}
export default Index
