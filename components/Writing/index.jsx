import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AiOutlineSwapLeft } from 'react-icons/ai'
import { useTheme } from 'next-themes'

const SlickArrowLeft = ({ theme, mounted, className, ...props }) => (
  <button
    {...props}
    className='absolute group shadow-md overflow-hidden z-30  py-6 flex items-center justify-center text-red-500 left-0 top-[40%] p-4'
    style={{
      background: `${
        theme && mounted && theme === 'light'
          ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))'
          : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'
      }`,
      display: className?.includes("slick-disabled") ? "none" : undefined
    }}
    type="button"
  >
    <AiOutlineSwapLeft className="text-2xl" />
    <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
      <AiOutlineSwapLeft className="text-2xl z-20 text-white " />
    </div>
  </button>
)
const SlickArrowRight = ({ theme, mounted, className, ...props }) => (
  <button
    {...props}
    className='absolute shadow-md group rotate-180 overflow-hidden z-30 bg-white py-6 right-0 top-[40%] p-4'
    style={{
      background: `${
        theme && mounted && theme === 'light'
          ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))'
          : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'
      }`,
      display: className?.includes("slick-disabled") ? "none" : undefined
    }}
    type="button"
  >
    <AiOutlineSwapLeft className="text-2xl z-20 text-themePink " />
    <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
      <AiOutlineSwapLeft className="text-2xl z-20 text-white " />
    </div>
  </button>
)

const Index = ({ blogs }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const settings = {
    infinite: false,
    dots: false,
    speed: 800,
    slidesToShow: 3,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const truncate = (text, sliceNumber) => {
    return text.length > sliceNumber
      ? text.slice(0, sliceNumber) + '...'
      : text.slice(0, sliceNumber)
  }

  return (
    <div className="max-w-[90rem] w-full relative overflow-hidden mx-auto">
      <div className="absolute left-0 w-fit -rotate-90  h-full whitespace-nowrap mr-auto -top-8 z-0">
        <h1 className="text-[140px] ml-[-60px] text-neutral-100 dark:text-[#1D1D1D] uppercase font-black">
          Blogs
        </h1>
      </div>

      <Slider {...settings} className="flex container justify-center">
        {blogs?.map(({ description, heading, image, link }, i) => (
          <div className="w-full px-2" key={heading}>
            <div className="dark:bg-[#202120] bg-lightGray pb-6 backdrop-blur-lg border-gray-300 rounded-lg border border-transparent dark:border-[#343434] overflow-hidden transition-all duration-500 flex w-full flex-col space-y-4">
              <img
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay={`${i + 1}00`}
                src={image}
                className="object-cover  min-h-[15rem]"
                alt="blog-hero-image"
              />
              <div className="flex px-3 flex-col space-y-3">
                <a
                  target="_blank"
                  href={link}
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay={`${i + 2}00`}
                  className="group hover:opacity-70 transition-all duration-500 text-xl md:text-2xl flex font-semibold"
                  rel="noreferrer"
                >
                  <span>{truncate(heading, 55)}</span>
                </a>

                <p
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay={`${i + 3}00`}
                  className="text-sm md:text-base dark:text-[#808C9C] h-[5rem]"
                >
                  {truncate(description, 140)}
                </p>

                <a
                  target="_blank"
                  href={link}
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay={`${i + 4}00`}
                  className="text-themePink group flex items-center transition-all duration-500"
                  rel="noreferrer"
                >
                  <span>
                    Read more{' '}
                    <span className="ml-1 transition-all duration-500 group-hover:ml-3 text-lg">
                      &#8594;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Index
