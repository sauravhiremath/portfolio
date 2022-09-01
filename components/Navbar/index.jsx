import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsMoonStarsFill } from 'react-icons/bs'
import { RiMenu2Line } from 'react-icons/ri'
import { routeData } from '../routeData'
import Link from 'next/link'
import NavDrawer from './NavDrawer'
import Logo from '../utils/Logo'

const Index = ({ highlightedLink }) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = function () {
    mounted && setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  const [navOpen, setNavOpen] = useState(false)

  return (
    mounted && (
      <div
        style={{
          background: `${
            theme && mounted && theme === 'light'
              ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
              : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
          }`,
        }}
        className="backdrop-blur-md py-1 w-full z-50 h-full sticky inset-0"
      >
        <div className="w-0">
          <NavDrawer
            toggleDarkMode={toggleDarkMode}
            resolvedTheme={resolvedTheme}
            setTheme={setTheme}
            open={navOpen}
            setOpen={setNavOpen}
          />
        </div>
        <div className="container flex items-center h-full py-2 md:py-3 lg:py-4 justify-between">
          <div className="flex items-center space-x-4">
            <div
              onClick={() => setNavOpen(!navOpen)}
              className={`cursor-pointer flex lg:hidden text-darkColor bg-blue-100 hover:bg-blue-200 dark:text-white dark:hover:bg-[#333] dark:border dark:border-[#444] dark:shadow-sm dark:bg-buttonDark dark:bg-opacity-60 dark:hover:bg-opacity-20 text-lg hover:rotate-180 p-3 transition-all duration-300 rounded-full `}
            >
              <RiMenu2Line />
            </div>

            <div className="">
              <Logo theme={theme} />
            </div>
          </div>
          <div className="flex items-center">
            <ul className="pr-4 hidden lg:flex text-textDark space-x-4 xl:space-x-8 dark:text-white items-center cursor-pointer">
              {routeData.map((route, i) => (
                <li
                  key={i}
                  className={`relative hover:bg-blue-200 ${
                    highlightedLink === route.slug ? 'dark:bg-gray-700' : 'bg-transparent'
                  } dark:hover:bg-gray-700 px-3 py-2 rounded-md`}
                >
                  <Link href={route.slug}>{route.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#contact">
                  <div className="relative inline-flex text-md group">
                    <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 dark:text-slate-100 transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-300 rounded-md group-hover:text-white dark:group-hover:text-gray-900">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-gray-50 dark:bg-darkColor" />
                      <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-300 group-hover:-rotate-180 ease" />
                      <span className="relative">Contact Me</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-300 rounded-md group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-md"
                    />
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="hidden sm:flex lg:hidden">
              <li>
                <Link href="/#contact">
                  <div className="relative inline-flex text-md group">
                    <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 dark:text-slate-100 transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-300 rounded-md group-hover:text-white dark:group-hover:text-gray-900">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-gray-50 dark:bg-darkColor" />
                      <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-300 group-hover:-rotate-180 ease" />
                      <span className="relative">Contact Me</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-300 rounded-md group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-md"
                    />
                  </div>
                </Link>
              </li>
            </ul>
            <div
              onClick={toggleDarkMode}
              className="cursor-pointer  hidden  lg:flex text-lg p-3 mx-4 rounded-md text-darkColor bg-blue-100 hover:bg-blue-200 dark:text-white dark:hover:bg-[#333] dark:border dark:border-[#444] dark:shadow-sm dark:bg-buttonDark dark:bg-opacity-60 dark:hover:bg-opacity-20"
            >
              {resolvedTheme === 'dark' ? <BsMoonStarsFill /> : <FiSun />}
            </div>
            <a
              href="mailto:contact@sauravmh.com"
              className="cursor-pointer flex sm:hidden text-lg p-2 rounded-md text-darkColor bg-blue-100 hover:bg-blue-200 dark:text-white dark:hover:bg-[#333] dark:border dark:border-[#444] dark:shadow-sm dark:bg-buttonDark dark:bg-opacity-60 dark:hover:bg-opacity-20"
            >
              <HiOutlineMailOpen className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    )
  )
}

export default Index
