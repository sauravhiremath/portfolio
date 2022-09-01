import { Drawer } from '@material-ui/core'
import Link from 'next/link'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai'
import React from 'react'
import { routeData } from '../routeData'
import { RiCloseLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'
import { FiSun } from 'react-icons/fi'
import { BsMoonStarsFill } from 'react-icons/bs'

const NavDrawer = ({ open, toggleDarkMode, resolvedTheme, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }
  const { theme } = useTheme()

  const socialLinks = [
    {
      icon: <AiOutlineInstagram />,
      href: 'https://www.instagram.com/sauravv_404/',
    },
    {
      icon: <AiOutlineLinkedin />,
      href: 'https://www.linkedin.com/in/sauravmh/',
    },
    { icon: <AiFillGithub />, href: 'https://github.com/sauravhiremath/' },
    { icon: <AiOutlineTwitter />, href: 'https://twitter.com/sauravmh/' },
  ]
  return (
    <div className="flex overflow-hidden lg:hidden">
      <Drawer open={open} anchor="left" onClose={handleClose}>
        <div
          style={{
            backgroundImage: ` ${
              theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))'
                : 'linear-gradient(rgba(2,4,12,0.3), rgba(2,4,12,0.3))'
            } `,
          }}
          className="h-full border-r dark:border-slate-800 overflow-hidden max-h-screen "
        >
          <div className="min-w-[100vw] pl-8  backdrop-blur-lg  flex flex-col h-screen items-stretch py-4">
            <div
              onClick={() => setOpen(false)}
              className={`w-fit ml-auto mr-6 mt-2 mb-4  cursor-pointer flex lg:hidden   hover:rotate-180  text-darkColor dark:text-white bg-blue-100 hover:bg-blue-200 dark:hover:bg-[#333]  dark:bg-buttonDark text-lg  p-3 transition-all duration-300 rounded-full`}
            >
              <RiCloseLine />
            </div>
            <ul className="flex flex-col text-center space-y-8">
              {routeData.map((route, i) => (
                <li
                  key={i}
                  className="w-fit dark:text-white link text-lg font-semibold relative "
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  <Link href={route.slug}>{route.label}</Link>
                </li>
              ))}
              <li className="mr-auto">
                <a href="/#contact" className="relative mr-auto inline-flex text-md group">
                  <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 dark:text-slate-100 transition-colors duration-300 ease-out border-2 border-gray-900 dark:border-gray-300 rounded-md group-hover:text-white dark:group-hover:text-gray-900">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-gray-50 dark:bg-darkColor" />
                    <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-300 group-hover:-rotate-180 ease" />
                    <span className="relative">Contact Me</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-300 rounded-md group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-md"
                  />
                </a>
              </li>
              <li>
                <div
                  onClick={toggleDarkMode}
                  className="cursor-pointer flex lg:hidden  text-lg p-3 w-fit rounded-md text-darkColor bg-blue-100 hover:bg-blue-200 dark:text-white dark:hover:bg-[#333] dark:border dark:border-[#444] dark:shadow-sm dark:bg-buttonDark dark:bg-opacity-60 dark:hover:bg-opacity-20"
                >
                  {resolvedTheme === 'dark' ? <BsMoonStarsFill /> : <FiSun />}
                </div>
              </li>
            </ul>

            <ul className="mt-auto  mr-auto flex space-x-3 items-center  dark:text-white">
              {socialLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-fit mb-4 cursor-pointer flex lg:hidden bg-gradient-to-r hover:rotate-180 transition-all duration-500  bg-blue-100 hover:bg-blue-200 dark:text-white dark:hover:bg-[#333]  dark:bg-buttonDark text-lg  p-3  rounded-full`}
                >
                  {link.icon}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default NavDrawer
