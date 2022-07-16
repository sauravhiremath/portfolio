import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { routeData } from '../routeData'
import Link from 'next/link';
import NavDrawer from './NavDrawer';
import Logo from '../utils/Logo';
const index = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleDarkMode = function () {
        mounted && setTheme(resolvedTheme === 'dark' ? "light" : "dark")
    }
    useEffect(() => {
        console.log('theme', theme, 'resolvedTheme', resolvedTheme)
    }, [mounted])

    const [navOpen, setNavOpen] = useState(false)

    return mounted && (
        <div
            className='bg-white dark:bg-[#0D0F12] w-full z-50 h-full backdrop-blur-md sticky inset-0'>

            <div className="w-0">
                <NavDrawer open={navOpen} setOpen={setNavOpen} />
            </div>
            <div className="container flex items-center h-full py-2 md:py-3 lg:py-4 justify-between">
                <div className="flex items-center space-x-4">
                    <div onClick={() => setNavOpen(!navOpen)} className={`cursor-pointer flex lg:hidden  bg-gradient-to-r   from-themePink font-medium to-themeOrange text-white hover:rotate-180 text-lg  p-3 transition-all duration-300 rounded-full ml-4`}>
                        <RiMenu2Line />
                    </div>
                    <div className=""
                        data-aos="zoom-in-down"
                        data-aos-delay={`100`}
                        data-aos-duration="500"
                    >
                        <Logo theme={theme} />
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="pr-4 hidden lg:flex text-textDark space-x-4 xl:space-x-8 dark:text-white items-center cursor-pointer">
                        {routeData.map((route, i) => (
                            <li
                                key={i}
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay={`${i + 1}00`}
                                className='relative hover:bg-blue-200 dark:hover:bg-coolGray-700 px-3 py-2 rounded-md'>
                                <Link href={route.slug}>{route.label}</Link>
                            </li>
                        ))}
                        <li
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay={`800`}
                        >
                            <a href="/#contact" className="relative inline-flex text-md group">
                                <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-coolGray-800 dark:text-blueGray-100 transition-colors duration-300 ease-out border-2 border-coolGray-900 dark:border-coolGray-300 rounded-md group-hover:text-white dark:group-hover:text-coolGray-900">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-coolGray-50 dark:bg-darkColor"/>
                                    <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-coolGray-900 dark:bg-coolGray-300 group-hover:-rotate-180 ease"/>
                                    <span className="relative">Contact Me</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-coolGray-900 dark:bg-coolGray-300 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"/>
                            </a>
                        </li>
                    </ul>
                    <ul className='hidden sm:flex lg:hidden'>
                        <li
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay={`800`}
                        >
                            <a href="/#contact" className="relative inline-flex text-md group">
                                <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-coolGray-800 dark:text-blueGray-100 transition-colors duration-300 ease-out border-2 border-coolGray-900 dark:border-coolGray-300 rounded-md group-hover:text-white dark:group-hover:text-coolGray-900">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-coolGray-50 dark:bg-darkColor"/>
                                    <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-coolGray-900 dark:bg-coolGray-300 group-hover:-rotate-180 ease"/>
                                    <span className="relative">Contact Me</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-coolGray-900 dark:bg-coolGray-300 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"/>
                            </a>
                        </li>
                    </ul>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay={`900`}
                        onClick={toggleDarkMode} className="cursor-pointer text-lg p-3 mx-4 rounded-md text-darkColor dark:text-white bg-blue-100 hover:bg-blue-200 dark:bg-coolGray-300 dark:bg-opacity-60 dark:hover:bg-opacity-20">
                        {resolvedTheme === 'dark' ? <BsMoonStarsFill /> : <FiSun />}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index