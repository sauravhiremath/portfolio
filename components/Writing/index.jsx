import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { useTheme } from 'next-themes';



const SlickArrowLeft = ({ currentSlide, theme, mounted, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "absolute group shadow-md overflow-hidden z-30  py-6 flex items-center justify-center text-red-500 left-0 top-[30%] p-4" +
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
            "absolute shadow-md group rotate-180 overflow-hidden z-30 bg-white py-6 right-0 top-[30%] p-4" +
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
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SlickArrowRight theme={theme} mounted={mounted} />,
        prevArrow: <SlickArrowLeft theme={theme} mounted={mounted} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const writingPosts = [
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: 'https://blog.sauravmh.com/socket-io-games-the-right-way-using-nodejs-and-react-not-a-chat-app-part-1/'
        },
    ]
    const truncate = (text, sliceNumber) => {
        return (
            text.length > sliceNumber ?
                text.slice(0, sliceNumber) + '...'
                :
                text.slice(0, sliceNumber)

        )
    }


    return (
        <div>
            <Slider {...settings} className='flex container justify-center'>
                {writingPosts?.map((post, i) => (
                    <div className='w-full md:px-2'>
                        <div
                            className="dark:bg-[#202120] pb-6 bg-lightGray border-gray-200 rounded-lg border border-transparent dark:border-[#242424] overflow-hidden transition-all duration-500 flex w-full flex-col space-y-4">
                            <img
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay={`${i + 1}00`}
                                src={post.imageUrl} className='object-cover' alt='img' />
                            <div className="flex px-3 flex-col space-y-3">

                                <a
                                    target='_blank'
                                    href={post.link}
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-delay={`${i + 2}00`}
                                    className='group hover:opacity-70 transition-all duration-500 text-lg md:text-2xl lg:text-2xl  flex font-semibold' ><span>{truncate(post.title, 55)}</span>
                                </a>

                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-delay={`${i + 3}00`}
                                    className='text-sm md:text-base dark:text-[#808C9C]'>{truncate(post.description, 160)}</p>

                                <a
                                    target='_blank'
                                    href={post.link}
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-delay={`${i + 4}00`}
                                    className='text-themePink group flex items-center transition-all duration-500' ><span>Read more <span className='ml-1 transition-all duration-500 group-hover:ml-3 text-lg'>&#8594;</span></span>
                                </a>

                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    )
}

export default index