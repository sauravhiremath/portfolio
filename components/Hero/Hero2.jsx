import React, { createRef, useEffect, useState } from 'react'
import { BsMouse } from 'react-icons/bs'
import Button from '../utils/Button'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useTheme } from 'next-themes';
import { CurvedArrow, Highlighter } from './highlighter'

const Hero = ({ about }) => {

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
            className='w-full lg:max-h-[100%] mx-auto bg-fixed !overflow-hidden top-0 py-10 pt-16 max-h-screen rounded-lg min-h-[38rem]'
        >
            <div className="grid relative grid-cols-1 md:grid-cols-6 items-center">
                <div className="animation-rotate opacity-40 dark:opacity-5 absolute top-[-80%] right-0">
                    <img src='/images/ellipse-white.png' />
                </div>
                <div className="col-span-1 md:col-span-4 md:space-y-2 flex flex-col">
                    <h1 className='text-[27px] md:text-5xl xl:text-6xl firaCode relative text-coolGray-800 dark:text-blueGray-100' >
                        <span className='z-20 relative'>Work</span>
                        <div className="absolute bottom-0 z-10 hidden md:flex">
                            <Highlighter theme={theme} type='yellow' props={{ viewBox: "0 0 219 66", height: "48px" }} />
                        </div>
                        <div className="absolute bottom-2 z-10 md:hidden flex">
                            <Highlighter theme={theme} type='yellow' props={{ viewBox: "0 0 202 58", height: "21px" }} />
                        </div>
                        <span className='ml-2 md:ml-4'>
                            by Day.
                        </span>
                    </h1>
                    <h1 className='text-[27px] md:text-5xl xl:text-6xl firaCode relative text-coolGray-800 dark:text-white' >
                        <span className='z-20 relative'>Game</span>
                        <div className="absolute bottom-0 z-10 hidden md:flex">
                            <Highlighter theme={theme} type='red' props={{ viewBox: "0 0 202 58", height: "48px" }} />
                        </div>
                        <div className="absolute bottom-2 z-10 md:hidden flex">
                            <Highlighter theme={theme} type='red' props={{ viewBox: "0 0 202 58", height: "21px" }} />
                        </div>
                        <span className='ml-2 md:ml-4'>
                            by night.
                        </span>
                    </h1>
                    <h1 className='text-[27px] flex whitespace-nowrap md:flex-nowrap md:text-5xl xl:text-6xl firaCode text-coolGray-800 dark:text-white' >
                        <span className=' mr-2 md:mr-4'>
                            And a Full-time
                        </span>
                        <div className='relative'>
                            <span className='z-20 relative'>
                                Overthinker
                            </span>
                            <div className="absolute hidden md:flex bottom-0 z-10">
                                <Highlighter theme={theme} type='blue' props={{ viewBox: "0 0 421 70", height: "58px" }} />
                            </div>
                            <div className="absolute  md:hidden flex bottom-0 z-10">
                                <Highlighter theme={theme} type='blue' props={{ viewBox: "0 0 421 70", height: "38px" }} />
                            </div>
                        </div>
                    </h1>


                </div>
                <div className="mt-[-40px] md:mt-4 col-span-2 md:min-h-[25rem] flex items-center">
                    <div className='w-full  rotate-[-25deg] md:rotate-[25deg] flex flex-col '>
                        {mounted && <div className="md:hidden mr-auto flex rotate-[130deg]">
                            <CurvedArrow theme={theme} />
                        </div>}
                        <div className='flex space-x-4 items-center'>
                            <img alt='saurav profile pic' src='/images/saurav.png' className='h-10 w-10 rounded-full' />
                            <div className='text-2xl font-semibold caveat  my-6'>
                                {about.title}
                            </div>
                        </div>
                        <p className='text-2xl text-coolGray-800 dark:text-white font-semibold caveat max-w-[20rem] mb-4'>
                            {about.description[0]}
                        </p>
                        <div className="flex items-center text-coolGray-800 dark:text-white">
                            {about.description.slice(1, about.description.length)}
                        </div>
                        {mounted && <div className="hidden md:flex">
                            <CurvedArrow theme={theme} />
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero