import React, { useEffect, useState } from 'react'
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
    return (

        <div

            className='bg-fixed  dark:border dark:border-slate-900 dark:shadow-2xl top-0 w-full py-10 mt-6 rounded-lg min-h-[30rem]'
            style={{
                backgroundImage: `${mounted && resolvedTheme && theme === 'light' ? 'linear-gradient(135deg, rgba(243,92,107,0.2), #f8efff 55%, rgba(252,95,46,0.2))' : ` linear-gradient(135deg, rgba(11,36,58, 0.5), #030611 45%,  rgba(11,36,58, 0.5))`}`,
            }}>
            <div className='container relative h-full flex justify-between items-start w-full'>
                <div className="flex w-full items-center pt-4 md:pt-12 pl-10 flex-col ">
                    <div className="flex items-start w-full  justify-center h-full flex-col space-y-6">
                        {/* <h2
                            data-aos="fade-down"
                            data-aos-delay={`2200`}
                            data-aos-duration="1500"
                            className='text-sm md:text-base font-medium uppercase dark:text-darkThemeTextColor mb-[-10px]'>Hi, there</h2> */}
                        <div className="flex">
                            <div
                                data-aos="zoom-in-down"
                                data-aos-delay={`200`}
                                data-aos-duration="800"
                                className='text-2xl lg:text-5xl font-bold leading-relaxed'>
                                I'm Saurav
                            </div>
                        </div>
                        <p
                            data-aos="zoom-in-up"
                            data-aos-delay={`300`}
                            data-aos-duration="800"
                            className='text-lg font-bold max-w-[95%] md:text-xl lg:text-2xl md:max-w-[30rem] dark:text-darkThemeTextColor'>
                            I am a Software Engineer @Orca.
                        </p>
                        {/* <h2
                            data-aos="fade-down"
                            data-aos-delay={`2500`}
                            data-aos-duration="1500"
                            className='text-sm md:text-base font-medium uppercase  dark:text-darkThemeTextColor'>FULL STACK DEVELOPER</h2> */}
                        {/* <p
                            data-aos="fade-down"
                            data-aos-delay={`800`}
                            data-aos-duration="500"
                            className='text-lg max-w-[95%] md:text-xl lg:text-2xl text-center md:max-w-[50rem] dark:text-darkThemeTextColor'>
                            Your friendly neighbourhood Software Developer 🚀 with experience building Full-Stack Web and Security applications. Shh... secretly a DevOps Ninja
                        </p> */}
                        {/* <div
                            data-aos="fade-down"
                            data-aos-delay={`3000`}
                            data-aos-duration="1500"
                        >
                            <Button text='See my Resume' />
                        </div> */}
                    </div>
                    {/* <div className="mt-auto flex cursor-pointer items-center relative flex-col group space-y-12">
                        <div className="absolute h-[0px] group-hover:h-full w-[1px] transition-all duration-700 bg-darkColor top-0 dark:bg-white"></div>
                        <div className="uppercase rotate-90">Scroll</div>
                        <BsMouse className='text-2xl md:text-4xl animate-bounce' />
                    </div> */}
                </div>
                {/* <div style={{ backgroundImage: 'url(/images/hero.png)' }} className="!bg-cover flex min-h-[25rem] min-w-[30rem] flex-col h-full w-full flex-1 space-y-6">

                </div> */}
                <img src='/images/hero.png' className='absolute md:right-12 md:min-w-[30rem] object-contain md:min-h-[32rem] bottom-[-22rem] md:top-[-3rem] ' />
            </div>
        </div >
    )
}

export default Hero