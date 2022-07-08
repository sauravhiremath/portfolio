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
            className='w-full lg:max-h-[100%] mx-auto bg-fixed !overflow-hidden top-0 py-10 mt-6 rounded-lg min-h-[30rem]'
        // style={{
        //     backgroundImage: `${mounted && resolvedTheme && theme === 'light' ? 'linear-gradient(135deg, rgba(243,92,107,0.2), #f8efff 55%, rgba(252,95,46,0.2))' : ` linear-gradient(135deg, rgba(11,36,58, 0.5), #030611 45%,  rgba(11,36,58, 0.5))`}`,
        // }}
        >
            <div className="grid grid-cols-1 md:grid-cols-6 items-center ">
                <div className="col-span-1 md:col-span-4 flex flex-col">

                    <h1 className='text4xl md:text-6xl firaCode relative tracking-tight text-[#222] dark:text-white' >
                        <span className='z-20 relative'>Work</span>
                        <div className="absolute bottom-0 z-10">
                            <svg width="170" height="58" viewBox="0 0 219 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2274 0.321133C-0.0413398 1.58609 -1.43031 3.35678 2.04197 12.7175C5.86144 23.0901 13.8478 25.6208 75.8858 29.9216C4.24113 32.9573 -2.35631 36.4991 0.537258 48.3897C4.24102 63.3162 27.9683 61.7983 143.479 62.3042C178.086 62.5572 197.3 66.8581 207.138 65.8461C220.795 64.3282 217.439 52.6906 211.767 47.3778L214.892 46.1128C223.11 42.8239 218.133 22.0789 207.601 16.0071C198.341 10.6943 145.1 5.12797 93.826 4.116C26.0008 3.10404 26.2323 -1.19681 12.2274 0.321133Z" fill="#FAEF91" fillOpacity="0.6" />
                            </svg>
                        </div>
                        <span className='ml-6 '>
                            by Day
                        </span>
                    </h1>
                    <h1 className='text4xl md:text-6xl firaCode relative tracking-tight text-[#222] dark:text-white' >
                        <span className='z-20 relative'>Game</span>
                        <div className="absolute bottom-0 z-10">


                            <svg width="202" height="58" viewBox="0 0 202 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2782 0.282208C-0.0381308 1.39384 -1.31928 2.9499 1.88346 11.1759C5.40644 20.2913 12.7729 22.5152 69.9952 26.2948C3.91191 28.9624 -2.1734 32.075 0.495553 42.5243C3.91181 55.6415 25.7972 54.3076 132.342 54.7522C164.262 54.9745 181.984 58.7541 191.058 57.8648C203.656 56.5308 200.56 46.3038 195.329 41.635L198.211 40.5234C205.791 37.6331 201.2 19.4027 191.486 14.0668C182.945 9.39801 133.836 4.50639 86.5427 3.61709C23.9825 2.72779 24.196 -1.05175 11.2782 0.282208Z" fill="#FA9191" fillOpacity="0.6" />
                            </svg>
                        </div>
                        <span className='ml-6 '>
                            by night.
                        </span>
                    </h1>

                    <h1 className='text-4xl firaCode text-center md:text-left lg:text-6xl mt-3 text-[#222] tracking-tight dark:text-white'>and a Full-time <span
                        style={{
                            backgroundImage: `url(/images/hero/blueish.png)`
                        }}
                        className=' relative bg-blueish'>
                        Overthinker.</span></h1>

                </div>
                <div className="hidden col-span-2 min-h-[25rem] md:flex items-center">
                    <div className='w-full  rotate-[25deg] flex flex-col '>
                        <div className='flex space-x-4 items-center'>
                            <img src='/images/saurav.png' className='h-10 w-10 rounded-full' />
                            <div className='text-lg font-semibold caveat  my-6'>
                                Hi My name is Saurav hiremath
                            </div>
                        </div>
                        <p className='text-base md:text-lg font-semibold caveat   mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio explicabo officiis error alias minima deleniti! Aliquam voluptatum rem.
                        </p>
                        <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.1602 97.0416C37.0242 97.1679 51.3457 98.8862 53.3755 99.822C54.5173 100.348 55.7345 100.294 56.0123 99.6916C56.6264 98.3595 52.8006 95.9805 48.6804 95.1578C45.9433 94.5882 45.9288 94.6198 49.7141 93.7498C58.4773 91.675 73.7093 83.6605 75.4274 80.184C75.9417 79.1519 92.6194 80.7643 108.753 58.7821C113.635 52.1111 115.868 42.18 112.726 41.1545C112.189 40.9839 111.65 41.2355 111.399 41.6966L109.118 46.144C96.8687 69.8782 79.535 74.1935 79.4887 74.2106C79.5251 73.8813 83.7665 67.1837 76.7334 60.2496C73.6367 57.2068 69.2527 55.4549 65.0235 56.6203C51.4679 60.3314 52.3281 75.1496 66.2503 78.5681C68.1238 79.0088 68.2433 78.8331 64.5733 81.3715C58.2576 85.7283 47.6779 89.6577 37.4827 91.4184C33.69 92.0543 33.6924 92.1324 37.8694 88.8279C47.7351 81.1083 50.7011 75.0918 43.5965 77.239C41.9868 77.7275 41.4211 78.1204 34.8449 83.6262C32.3335 85.7372 28.3051 88.8028 25.9032 90.4259C21.4066 93.5062 21.0459 93.9551 22.1757 95.0912C23.6106 96.4834 25.4695 96.9558 30.1602 97.0416ZM61.4619 72.4378C57.9427 68.3927 61.9746 62.4831 69.494 60.604C73.2768 59.6559 75.9297 62.9941 75.2074 67.8143C74.7671 70.6879 71.9007 75.4042 70.5274 75.4634C67.3004 75.7063 63.036 74.2788 61.4619 72.4378Z" fill="black" />
                        </svg>

                        {/* <img src={`${mounted && resolvedTheme && theme === 'light' ? '/images/hero/dark.png' : '/images/hero/white.png'}`} className='rotate-[-25deg] w-20' alt="line" /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero