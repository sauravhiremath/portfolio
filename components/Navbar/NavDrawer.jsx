import { Drawer, IconButton, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React from 'react'
import Button from '../utils/Button'
import { routeData } from '../routeData'
import { RiCloseLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'


const NavDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const { theme } = useTheme()

    const socialLinks = [
        { icon: <AiOutlineInstagram />, href: 'https://www.instagram.com/sauravv_404/' },
        { icon: <AiOutlineLinkedin />, href: 'https://www.linkedin.com/in/sauravmh/' },
        { icon: <AiFillGithub />, href: 'https://github.com/sauravhiremath/' },
        { icon: <AiOutlineTwitter />, href: 'https://twitter.com/sauravmh/' },
    ]
    return (
        <div className='flex overflow-hidden lg:hidden'>
            <Drawer
                open={open}
                anchor='left'
                onClose={handleClose}
            >
                <div
                    style={{ backgroundImage: ` ${theme === 'light' ? 'linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))' : 'linear-gradient(rgba(2,4,12,0.3), rgba(2,4,12,0.3))'} ` }}
                    className="h-full border-r dark:border-slate-800 overflow-hidden max-h-screen ">
                    <div
                        className="min-w-[20rem] backdrop-blur-md  flex flex-col h-screen items-stretch py-4">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay={`300`}
                            onClick={() => setOpen(false)} className={`w-fit ml-auto m-2 mb-4 cursor-pointer flex lg:hidden bg-gradient-to-r hover:rotate-180 transition-all duration-500 from-themePink font-medium to-themeOrange text-white text-lg  p-3 transition-all duration-300 rounded-full`}>
                            <RiCloseLine />
                        </div>
                        <ul className="flex flex-col justify-center text-center space-y-8">
                            {routeData.map((route, i) => (
                                <li
                                    key={i}
                                    data-aos="fade-right"
                                    data-aos-duration="1300"
                                    data-aos-delay={`${i + 4}00`}
                                    className='w-fit dark:text-white text-center mx-auto link relative ' onClick={() => { setOpen(false) }}>
                                    <Link href={route.slug}>{route.label}</Link>
                                </li>

                            ))}
                            <li
                                data-aos="fade-right"
                                data-aos-duration="1300"
                                data-aos-delay={`1200`}
                            >
                                <a href="/#contact" className="relative inline-flex text-md group">
                                    <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-coolGray-800 dark:text-blueGray-100 transition-colors duration-300 ease-out border-2 border-coolGray-900 dark:border-coolGray-50 rounded-md group-hover:text-white dark:group-hover:text-coolGray-900">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-md bg-coolGray-50 dark:bg-darkColor"/>
                                        <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-coolGray-900 dark:bg-coolGray-50 group-hover:-rotate-180 ease"/>
                                        <span className="relative">Contact Me</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-coolGray-900 dark:bg-coolGray-50 rounded-md group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-md"/>
                                </a>
                            </li>

                        </ul>
                        <ul
                            className='mt-auto  mx-auto flex space-x-3 items-center  dark:text-white'>
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className={`w-fit mb-4 cursor-pointer flex lg:hidden bg-gradient-to-r hover:rotate-180 transition-all duration-500 from-themePink font-medium to-themeOrange text-white text-lg  p-3 transition-all duration-300 rounded-full`}>
                                    {link.icon}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default NavDrawer