import React, { createRef, useEffect, useState } from 'react'
import { BsMouse } from 'react-icons/bs'
import Button from '../utils/Button'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useTheme } from 'next-themes';

const Hero = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const [screen, setScreen] = useState(0)

    useEffect(() => {
        if (typeof window != 'undefined') {
            const width = document.documentElement.clientWidth
            setScreen(width)
        }
    }, [typeof window != 'undefined' && window])


    const imageRef = createRef()

    return (

        <div
            className='w-full  max-h-[70vh] lg:max-h-[100%] mx-auto bg-fixed !overflow-hidden top-0 py-10 mt-6 rounded-lg min-h-[30rem]'
        // style={{
        //     backgroundImage: `${mounted && resolvedTheme && theme === 'light' ? 'linear-gradient(135deg, rgba(243,92,107,0.2), #f8efff 55%, rgba(252,95,46,0.2))' : ` linear-gradient(135deg, rgba(11,36,58, 0.5), #030611 45%,  rgba(11,36,58, 0.5))`}`,
        // }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
                <div className="flex min-h-[22rem] max-w-[80%] ml-auto md:hidden items-center">
                    <div className='w-full  rotate-[-20deg] flex flex-col '>
                        <div className='flex space-x-4 items-center'>
                            <img src='/images/saurav.png' className='h-10 w-10 rounded-full' />
                            <div className='text-lg font-semibold indie  my-6'>
                                Hi My name is Saurav hiremath
                            </div>
                        </div>
                        <p className='text-base md:text-lg font-semibold indie   mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio explicabo officiis error alias minima deleniti! Aliquam voluptatum rem.
                        </p>
                        <img src={`${mounted && resolvedTheme && theme === 'light' ? '/images/hero/dark.png' : '/images/hero/white.png'}`} className='rotate-[-40deg] w-20' alt="line" />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col">
                    <h1 className='text-4xl text-center md:text-left lg:text-6xl font-bold mt-3 text-[#222] !z-10 dark:text-white'><span className='relative dark:text-[#ff6122] bg-yellowish'>Work</span> by day.</h1>
                    <h1 className='text-4xl text-center md:text-left lg:text-6xl font-bold mt-3 text-[#222] dark:text-white'><span className='relative bg-reddish'>Game</span> by night.</h1>
                    <h1 className='text-4xl text-center md:text-left lg:text-6xl font-bold mt-3 text-[#222] dark:text-white'>and a Full-time <span className=' relative bg-blueish'>Overthinker.</span></h1>
                </div>
                <div className="hidden col-span-1 min-h-[25rem] md:flex items-center">
                    <div className='w-full  rotate-[25deg] flex flex-col '>
                        <div className='flex space-x-4 items-center'>
                            <img src='/images/saurav.png' className='h-10 w-10 rounded-full' />
                            <div className='text-lg font-semibold indie  my-6'>
                                Hi My name is Saurav hiremath
                            </div>
                        </div>
                        <p className='text-base md:text-lg font-semibold indie   mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio explicabo officiis error alias minima deleniti! Aliquam voluptatum rem.
                        </p>
                        <img src={`${mounted && resolvedTheme && theme === 'light' ? '/images/hero/dark.png' : '/images/hero/white.png'}`} className='rotate-[-25deg] w-20' alt="line" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero