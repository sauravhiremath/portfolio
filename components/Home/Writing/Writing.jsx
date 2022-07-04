import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow() {
    return (
        <div
            className={`className`}
            style={{ display: "block", background: "red" }}
        />
    );
}

function SamplePrevArrow() {
    return (
        <div
            className='p-4 '
            style={{ display: "block" }}
        />
    );
}

const index = () => {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
            <Slider {...settings} className='flex container md:!space-x-6 justify-center'>
                {writingPosts?.map((post, i) => (
                    <div className='w-full md:px-2'>
                        <div
                            className="dark:bg-[#121422] pb-6 bg-lightGray border-gray-200 rounded-lg border border-transparent dark:border-slate-800 overflow-hidden transition-all duration-500 flex w-full flex-col space-y-4">
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