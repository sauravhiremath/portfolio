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
            link: '#'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: '#'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: '#'
        },
        {
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis.',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi cupiditate perferendis possimus itaque quas praesentium ex, ea odit fugit?',
            imageUrl: '/images/writing.png',
            link: '#'
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
                    <>
                        <div
                            className="md:p-3 pb-6 hover:bg-lightGray hover:border-gray-200 rounded-md border border-transparent dark:hover:bg-[#040915] dark:hover:border-slate-900 overflow-hidden transition-all duration-500 flex w-full flex-col space-y-4">
                            <img
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay={`${i + 1}00`}
                                src={post.imageUrl} className='object-cover' alt='img' />
                            <div className="flex flex-col space-y-3">
                                <Link href={post.link}>
                                    <a
                                        data-aos="fade-down"
                                        data-aos-duration="500"
                                        data-aos-delay={`${i + 2}00`}
                                        className='group hover:opacity-70 transition-all duration-500 text-lg md:text-2xl lg:text-2xl  flex font-semibold' ><span>{truncate(post.title, 55)}</span>
                                    </a>
                                </Link>
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-delay={`${i + 3}00`}
                                    className='text-sm md:text-base dark:text-[#808C9C]'>{truncate(post.description, 140)}</p>
                            </div>
                        </div>
                    </>
                ))
                }
            </Slider >
        </div >
    )
}

export default index