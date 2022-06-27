import { Drawer, IconButton, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React from 'react'
import Button from '../utils/Button'
import { routeData } from '../dummyData'
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
                                <a href='/#contact'>
                                    <button className="transition duration-500 bg-gradient-to-r hover:shadow-button py-3 px-8 rounded-full hover:from-themeOrange hover:to-themePink from-themePink font-medium to-themeOrange text-white">Contact Me</button>
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