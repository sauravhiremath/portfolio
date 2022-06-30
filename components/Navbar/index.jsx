import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { BsMoonFill, BsMoonStarsFill } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { routeData } from '../dummyData'
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
    return (
        <div
            style={{
                background: `${theme && mounted && theme === 'light' ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))' : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'}`
            }}
            className='border-b dark:border-slate-900 w-full z-50 h-full backdrop-blur-md sticky inset-0'>

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
                        <Logo />
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className=" pr-4 border-r hidden lg:flex text-textDark space-x-4 xl:space-x-8 dark:text-white items-center">
                        {routeData.map((route, i) => (
                            <li
                                key={i}
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay={`${i + 1}00`}
                                className='link relative '>
                                <Link href={route.slug}>{route.label}</Link>
                            </li>
                        ))}
                        <li
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay={`800`}
                        >

                            <a href='/#contact'>
                                <button className="transition duration-500 bg-gradient-to-r hover:shadow-button py-3 px-8 rounded-lg hover:from-themeOrange hover:to-themePink from-themePink font-medium to-themeOrange text-white">Contact Me</button>
                            </a>
                        </li>
                    </ul>
                    <ul className='hidden sm:flex lg:hidden'>
                        <li
                            data-aos="fade-down"
                            data-aos-duration="500"
                            data-aos-delay={`800`}
                        >
                            <a href='/#contact'>
                                <button
                                    className="transition duration-500 bg-gradient-to-r hover:shadow-button py-2.5 px-8 rounded-lg hover:from-themeOrange hover:to-themePink from-themePink font-medium to-themeOrange text-white"

                                >Contact Me</button>
                            </a>
                        </li>
                    </ul>
                    <div
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay={`900`}
                        style={{
                            backgroundImage: `${mounted && resolvedTheme && theme === 'light' ? '' : ` linear-gradient(135deg, #061120, #061120)`}`,
                        }}
                        onClick={toggleDarkMode} className="dark:border dark:border-slate-900 cursor-pointer text-lg p-3 mx-4 rounded-md text-darkColor dark:text-white bg-blue-100 hover:bg-blue-200 dark:bg-opacity-40 dark:hover:bg-opacity-20">
                        {resolvedTheme === 'dark' ? <BsMoonFill /> :
                            <FiSun />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index