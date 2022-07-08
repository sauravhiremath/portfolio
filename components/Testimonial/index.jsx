import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { GoQuote } from 'react-icons/go';

const SlickArrowLeft = ({ currentSlide, theme, mounted, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "absolute group border dark:border-slate-900 shadow-md overflow-hidden z-30  py-6 flex items-center justify-center text-red-500 left-0 top-[60%] p-4" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        style={{
            background: `${theme && mounted && theme === 'light' ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))' : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'}`
        }}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <AiOutlineSwapLeft className='text-2xl' />
        <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
            <AiOutlineSwapLeft className='text-2xl z-20 text-white ' />
        </div>
    </button>
);
const SlickArrowRight = ({ currentSlide, theme, mounted, slideCount, ...props }) => (
    <button

        {...props}
        className={
            "absolute shadow-md border group dark:border-slate-900 rotate-180 overflow-hidden z-30 bg-white py-6 right-0 top-[60%] p-4" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        style={{
            background: `${theme && mounted && theme === 'light' ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))' : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'}`
        }}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <AiOutlineSwapLeft className='text-2xl z-20 text-themePink ' />
        <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
            <AiOutlineSwapLeft className='text-2xl z-20 text-white ' />
        </div>
    </button>
);
const index = () => {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SlickArrowRight theme={theme} mounted={mounted} />,
        prevArrow: <SlickArrowLeft theme={theme} mounted={mounted} />,
    }
    return (
        <>
            <Slider {...settings} className='flex container justify-center'>
                {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className='w-full group flex flex-col  space-y-6'>
                        <div className="max-w-[50rem] py-20 h-full mx-auto grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
                            <div className="col-span-2 relative">
                                <div className="w-[70%] z-[-1] h-[80%] group-hover:top-[40%] transition-all duration-700 delay-100 bg-gradient-to-r from-themeOrange to-themePink absolute rounded-full top-[-2rem] left-[-5rem]"></div>
                                <div className="absolute  transition-all duration-700 delay-100 group-hover:bottom-[60%] w-32 bottom-[-1rem] right-4 h-32 z-[-1] rounded-full shadow-lg bg-gradient-to-r from-themeOrange to-themePink"></div>
                                <img src='/images/girl.png' className='max-w-[13rem] max-h-[13rem] md:max-w-[18rem] object-cover w-full h-full md:max-h-[18rem] rounded-full' />
                            </div>
                            <div className="col-span-3 relative h-full flex flex-col">
                                <div className="relative max-w-[30rem]">
                                    <div className="absolute opacity-60 dark:text-neutral-500 top-[-3rem] text-4xl left-0">
                                        <GoQuote />
                                    </div>
                                    <p className='dark:text-neutral-500 text-base md:text-lg italic '>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas culpa corporis beatae ipsa eius, libero maxime impedit cumque nisi consectetur doloribus eos sunt iusto dolorem! Iure, eos? Ducimus, eum odio. Lorem ipsum dolor.
                                    </p>
                                    <div className="absolute opacity-60 dark:text-neutral-500 bottom-[-3rem] text-4xl right-0">
                                        <GoQuote />
                                    </div>
                                </div>
                                <div className="ml-auto mt-auto">
                                    <h1 className='text-2xl font-semibold md:text-4xl text-themeOrange'>Heather Bennett</h1>
                                    <p className="text-xs md:text-sm text-left dark:text-neutral-400 italic mt-2">Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider >
        </>
    )
}

export default index