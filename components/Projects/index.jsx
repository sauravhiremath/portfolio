import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsArrow90DegRight } from 'react-icons/bs'
import { Waypoint } from 'react-waypoint'
import Image from 'next/image'

const Projects = ({ workExperience }) => {
  // const allProjects = [
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  //     {
  //         shortTitle: 'AIRBNB EXPERIENCE DESIGN INTERN',
  //         detailedTitle: 'Summer 2019 Internship with Airbnb Plus Internal Tools team',
  //         desc: 'Designing internal tools and visual systems to improve the employee onboarding experience and workflow efficiency',
  //         badge: {
  //             color: 'text-[#ee7675]',
  //             bgColor: 'bg-[#f7e6e6]',
  //             innerText: 'lorem ipsum dolor',
  //         },
  //         imageUrl: 'https://dl.dropboxusercontent.com/s/v6m5rfky69w8ffm/airbnbhomecover.mp4?dl=0'

  //     },
  // ]

  const [projects, setProjects] = useState([])
  const [slice, setSlice] = useState(2)
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setProjects(workExperience.experiences.slice(0, slice))
  }, [slice])

  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const [hovered, setHovered] = useState(false)
  const handleEnter = () => {
    setAnimate(true)
  }
  return (
    <Waypoint onEnter={handleEnter}>
      <div className="relative">
        <div className={`sticky  top-56`}>
          <svg
            width="166"
            height="624"
            viewBox="0 0 166 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M164 572.78L9.99999 623.16V586.2L146.4 542.42V560.9L9.99999 515.14V482.14L146.4 438.14V455.96L9.99999 411.08V376.98L164 427.36V465.64L44.32 504.58V494.46L164 534.5V572.78ZM165.76 311.992C165.76 324.606 163.12 335.826 157.84 345.652C152.56 355.332 145.373 363.032 136.28 368.752C127.04 374.326 116.553 377.112 104.82 377.112C92.94 377.112 82.4533 374.326 73.36 368.752C64.12 363.032 56.9333 355.332 51.8 345.652C46.52 335.826 43.88 324.606 43.88 311.992C43.88 299.526 46.52 288.379 51.8 278.552C56.9333 268.726 64.0467 261.026 73.14 255.452C82.2333 249.879 92.7933 247.092 104.82 247.092C116.553 247.092 127.04 249.879 136.28 255.452C145.373 261.026 152.56 268.726 157.84 278.552C163.12 288.379 165.76 299.526 165.76 311.992ZM137.6 311.992C137.6 306.272 136.28 301.139 133.64 296.592C131 292.046 127.26 288.452 122.42 285.812C117.433 283.172 111.567 281.852 104.82 281.852C97.9267 281.852 92.06 283.172 87.22 285.812C82.38 288.452 78.64 292.046 76 296.592C73.36 301.139 72.04 306.272 72.04 311.992C72.04 317.712 73.36 322.846 76 327.392C78.64 331.939 82.38 335.606 87.22 338.392C92.06 341.032 97.9267 342.352 104.82 342.352C111.567 342.352 117.433 341.032 122.42 338.392C127.26 335.606 131 331.939 133.64 327.392C136.28 322.846 137.6 317.712 137.6 311.992ZM164 224.152H45.64V191.372H79.08L69.4 195.992C61.04 192.472 54.7333 186.826 50.48 179.052C46.08 171.279 43.88 161.819 43.88 150.672H75.56C75.4133 152.139 75.34 153.459 75.34 154.632C75.1933 155.806 75.12 157.052 75.12 158.372C75.12 167.759 77.8333 175.386 83.26 181.252C88.54 186.972 96.8267 189.832 108.12 189.832H164V224.152ZM139.8 101.671L98 100.791L45.64 45.5706V4.65062L99.54 57.6706L114.06 75.4906L139.8 101.671ZM164 130.051H0.75999L0.75999 95.7306H164V130.051ZM164 41.8306L114.28 81.8706L87.66 60.3106L164 0.250612V41.8306Z"
              fill="#B3AEAE"
              fillOpacity={resolvedTheme && mounted && theme === 'light' ? 0.1 : 0.02}
            />
          </svg>
        </div>
        <div className="container bg-fixed mt-[-65vh] rounded-lg lg:py-12 overflow-hidden mx-auto space-y-16">
          {projects.map((project, i) => (
            <>
              <div className="max-w-[30rem] mx-auto md:max-w-full">
                <ProjectItem key={i} i={i + 1} projectData={project} />
              </div>
            </>
          ))}
          {projects.length != workExperience.experiences.length && (
            <div className="container">
              <div data-aos="fade-down" data-aos-delay={`100`} data-aos-duration="700">
                <div className="w-fit ml-auto cursor-pointer" onClick={() => setSlice(10)}>
                  <div className="group transition-all duration-500 items-end flex space-x-2 hover:space-x-4">
                    <p className="text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-neutral-500 font-semibold">
                      View More
                    </p>
                    <div className=" right-0 transition-all duration-500 rotate-90 text-xl">
                      <BsArrow90DegRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Waypoint>
  )
}

const ProjectItem = ({ projectData, i }) => {
  const { title, heading, description, colors, media, tags } = projectData
  const minimal_tags = tags.slice(0, 3)
  const { source, is_video } = media
  return (
    <>
      <div
        className={`${
          i % 2 === 0 && 'hidden'
        } overflow-hidden grid place-items-center grid-cols-1 md:grid-cols-2 gap-12 lg:min-h-[40vh]`}
      >
        <div className=" lg:hidden flex w-full h-full gap-12">
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            className="flex-1 w-full relative"
          >
            {is_video && (
              <video autoPlay={true} loop={true} preload="autoplay">
                <source src={source} type="video/mp4" />
              </video>
            )}
            {!is_video && <Image src={source} alt={title} layout="fill" objectFit="cover" />}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
            className="h-full hidden lg:flex min-w-[6rem] bg-red-500"
          ></div>
        </div>
        <div className=" flex flex-col space-y-5">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-neutral-500 font-semibold"
          >
            {title}
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            className="text-xl font-semibold lg:max-w-[80%] text-[#444] dark:text-white md:text-2xl lg:text-3xl"
          >
            {heading}
          </h1>
          {minimal_tags.length > 1 && (
            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <div className="flex flex-wrap">
                {minimal_tags.map(tag => (
                  <>
                    <div className="mr-4 my-2 cursor-s-resize">
                      <ProjectBadge innerText={tag} bgColor="bg-[#f7e6e6]" color="text-[#ee7675]" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="500"
            className="text-base lg:text-xl pr-2 md:pr-0 lg:w-3/4 text-neutral-500 dark:text-neutral-500 tracking-wide"
          >
            {description}
          </p>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="500"
            className="w-fit flex uppercase group cursor-pointer hover:opacity-90 transition-all duration-500 hover:ml-2 text-[#7e7e7e] font-semibold items-center dark:text-neutral-500 text-lg lg:text-xl"
          >
            View Work <span className="ml-3 group-hover:ml-6 transition-all duration-500">➞</span>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-full gap-10">
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            className="flex-1 w-full relative"
          >
            {is_video && (
              <video autoPlay={true} loop={true} preload="autoplay">
                <source src={source} type="video/mp4" />
              </video>
            )}
            {!is_video && <Image src={source} alt={title} layout="fill" />}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className={`h-full hidden lg:flex min-w-[4rem] bg-gradient-to-t from-${colors[0]} via-${colors[1]} to-${colors[2]}`}
          ></div>
        </div>
      </div>
      <div
        className={`${
          i % 2 === 1 && 'hidden'
        } overflow-hidden grid place-items-center grid-cols-1 md:grid-cols-2 gap-12 lg:min-h-[40vh]`}
      >
        <div className="flex w-full h-full gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className={`h-full hidden lg:flex min-w-[4rem] bg-gradient-to-t from-${colors[0]} via-${colors[1]} to-${colors[2]}`}
          ></div>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            className="flex-1 w-full relative"
          >
            {is_video && (
              <video autoPlay={true} loop={true} preload="autoplay">
                <source src={source} type="video/mp4" />
              </video>
            )}
            {!is_video && <Image src={source} alt={title} layout="fill" objectFit="contain" />}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h1
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-sm lg:text-base tracking-widest uppercase text-[#7e7e7e] dark:text-neutral-500 font-semibold"
          >
            {title}
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            className="text-xl font-semibold lg:max-w-[80%] text-[#444] dark:text-white md:text-2xl lg:text-3xl"
          >
            {heading}
          </h1>
          {minimal_tags.length > 1 && (
            <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <div className="flex flex-wrap">
                {minimal_tags.map(tag => (
                  <>
                    <div className="mr-4 my-2">
                      <ProjectBadge innerText={tag} bgColor="bg-[#f7e6e6]" color="text-[#ee7675]" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          )}
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
            className="text-base lg:text-xl pr-2 md:pr-0 lg:w-3/4 text-neutral-500 tracking-wide "
          >
            {description}
          </p>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
            className="w-fit flex uppercase group cursor-pointer hover:opacity-90 transition-all duration-500 hover:ml-2 text-[#7e7e7e] font-semibold items-center dark:text-neutral-500 text-lg lg:text-xl"
          >
            View Work <span className="ml-3 group-hover:ml-6 transition-all duration-500">➞</span>
          </div>
        </div>
      </div>
    </>
  )
}

const ProjectBadge = ({ innerText, bgColor, color }) => {
  return (
    <div
      className={`font-semibold w-fit rounded-sm py-1 px-2 uppercase text-sm tracking-widest ${color} ${bgColor}`}
    >
      {innerText}
    </div>
  )
}
export default Projects
