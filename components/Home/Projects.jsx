import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import { BsArrow90DegRight, BsArrowRight } from 'react-icons/bs'
import { RiArrowRightLine } from 'react-icons/ri'
import Button from '../utils/Button'

const Projects = () => {
    const allProjects = [
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
        {
            shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
            detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
            desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
            badge: {
                color: 'text-[#ee7675]',
                bgColor: 'bg-[#f7e6e6]',
                innerText: 'lorem ipsum dolor',
            },
            imageUrl: '/images/airbnb.webp'

        },
    ]

    const [projects, setProjects] = useState([])
    const [slice, setSlice] = useState(2)
    useEffect(() => {
        setProjects(allProjects.slice(0, slice))
    }, [slice])

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme, theme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Suspense>
            <div
                style={{
                    backgroundImage: `${mounted && resolvedTheme && theme === 'light' ? 'linear-gradient(#F9FAFB,#F9FAFB)' : ` linear-gradient(135deg, rgba(11,36,58, 0.5), #030611 45%,  rgba(11,36,58, 0.5))`}`,
                }}
                className='bg-lightGray bg-fixed  dark:border dark:border-slate-900 rounded-lg dark:bg-[#080c1a] py-8 lg:py-12 overflow-hidden mx-auto space-y-16 container'>
                {projects.map((project, i) => (
                    <>
                        <div className="max-w-[30rem] mx-auto md:max-w-full">
                            <ProjectItem key={i} i={i + 1} projectData={project} />
                        </div>
                    </>
                ))}
                {projects.length != allProjects?.length &&
                    <div className="container">
                        <div
                            data-aos="fade-down"
                            data-aos-delay={`100`}
                            data-aos-duration="700"
                        >
                            <div className='w-fit ml-auto cursor-pointer' onClick={() => setSlice(10)}>
                                <div className="group transition-all duration-500 items-end flex space-x-2 hover:space-x-4">
                                    <p
                                        className='text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-[#efefef] font-semibold'>View More</p>
                                    <div className=" right-0 transition-all duration-500 rotate-90 text-xl">
                                        <BsArrow90DegRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Suspense>
    )
}

const ProjectItem = ({ projectData, i }) => {


    console.log(i % 2)
    return (
        <>
            <div className={`${i % 2 === 0 && 'hidden'} grid place-items-center grid-cols-1 md:grid-cols-2 gap-12`}>
                <div className=" lg:hidden flex w-full h-full  gap-12">
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        className="flex-1 w-full relative">
                        <img src={projectData.imageUrl} layout='fill' />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="400"
                        className="h-full hidden lg:flex min-w-[6rem] bg-red-500">
                    </div>
                </div>
                <div className=" flex flex-col space-y-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className='text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-[#efefef] font-semibold'>
                        {projectData?.shortTitle}
                    </h1>
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        className='text-xl  font-semibold lg:max-w-[80%] text-[#444] dark:text-white md:text-2xl lg:text-3xl'>
                        {projectData?.detailedTitle}
                    </h1>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >

                        <ProjectBadge
                            innerText={projectData?.badge?.innerText}
                            bgColor={projectData?.badge?.bgColor}
                            color={projectData?.badge?.color}
                            borderColor={projectData?.badge?.borderColor}
                        />

                    </div>
                    <p
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="500"
                        className='text-lg lg:text-xl'>
                        {projectData.desc}
                    </p>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="500"
                        className="w-fit flex uppercase group cursor-pointer hover:opacity-90 transition-all duration-500 hover:ml-2 text-[#7e7e7e] font-semibold items-center dark:text-[#efefef] text-lg lg:text-xl">
                        View Work <span className='ml-3 group-hover:ml-6 transition-all duration-500'>➞</span>
                    </div>

                </div>
                <div className="hidden lg:flex w-full h-full  gap-12">
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        className="flex-1 w-full relative">
                        <img src={projectData.imageUrl} layout='fill' />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="400"
                        className="h-full hidden lg:flex min-w-[6rem] bg-red-500">
                    </div>
                </div>
            </div>
            <div className={`${i % 2 === 1 && 'hidden'} grid place-items-center grid-cols-1 md:grid-cols-2 gap-12`}>

                <div className="flex   w-full h-full  gap-12">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="h-full hidden lg:flex min-w-[6rem] bg-red-500">
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        className="flex-1 w-full relative"
                    >
                        <img src={projectData.imageUrl} layout='fill' />
                    </div>

                </div>
                <div className="flex flex-col space-y-5">
                    <h1
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className='text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-[#efefef] font-semibold'>
                        {projectData?.shortTitle}
                    </h1>
                    <h1
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        className='text-xl font-semibold lg:max-w-[80%] text-[#444] dark:text-white md:text-2xl lg:text-3xl'>
                        {projectData?.detailedTitle}
                    </h1>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >

                        <ProjectBadge
                            innerText={projectData?.badge?.innerText}
                            bgColor={projectData?.badge?.bgColor}
                            color={projectData?.badge?.color}
                            borderColor={projectData?.badge?.borderColor}
                        />

                    </div>
                    <p
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="500"
                        className='text-lg lg:text-xl'>
                        {projectData.desc}
                    </p>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="500" className="w-fit flex uppercase group cursor-pointer hover:opacity-90 transition-all duration-500 hover:ml-2 text-[#7e7e7e] font-semibold items-center dark:text-[#efefef] text-lg lg:text-xl">
                        View Work <span className='ml-3 group-hover:ml-6 transition-all duration-500'>➞</span>
                    </div>

                </div>
            </div>

        </>
    )
}


const ProjectBadge = ({ innerText, bgColor, color }) => {
    return (
        <div className={`font-semibold border w-fit rounded-sm py-1 px-2 uppercase text-sm tracking-widest ${color} ${bgColor}`}>
            {innerText}
        </div>
    )
}
export default Projects