import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineSwapLeft } from 'react-icons/ai'
import { useTheme } from 'next-themes'

const Index = ({ testimonials }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const settings = {
    infinite: false,
    dots: false,
    speed: 800,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SlickArrowRight theme={theme} mounted={mounted} />,
    prevArrow: <SlickArrowLeft theme={theme} mounted={mounted} />,
  }

  return (
    <>
      <div className="absolute left-0 w-fit -rotate-90 h-full whitespace-nowrap mr-auto top-32 z-0">
        <h1 className="text-[45px] ml-[200px] text-neutral-100 dark:text-[#1D1D1D] uppercase font-black">
          TESTIMONIALS
        </h1>
      </div>
      <Slider {...settings} className="flex container justify-center">
        {testimonials.map(
          ({ hidden, name, company, description, image }, i) =>
            !hidden && (
              <div key={i} className="flex overflow-hidden w-full group flex-col space-y-6">
                <div className="mx-auto px-4 py-8">
                  <section className="rounded-lg bg-gray-100 dark:bg-blueGray-400 dark:bg-opacity-5 p-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12 sm:items-center">
                      <div className="md:block hidden">
                        <img
                          alt={name}
                          src={image}
                          className="aspect-square w-full rounded-lg object-cover"
                        />
                      </div>

                      <blockquote className="sm:col-span-3">
                        <p className="lg:text-xl font-extralight text-lg whitespace-pre-line">
                          {description.replace(/<br\/>/g, '\n\n')}
                        </p>
                        <cite className="mt-8 inline-flex items-center not-italic">
                          <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                          <p className="text-sm sm:ml-3">
                            <strong>{name}</strong>, {company}.
                          </p>
                        </cite>
                      </blockquote>
                    </div>
                  </section>
                </div>
              </div>
            ),
        )}
      </Slider>
    </>
  )
}

const SlickArrowLeft = ({ slideCount, theme, mounted, className, ...props }) => (
  <button
    {...props}
    className='absolute group border dark:border-slate-900 shadow-md overflow-hidden z-30 py-6 flex items-center justify-center text-red-500 left-0 top-[40%] p-4'
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

const SlickArrowRight = ({ slideCount, theme, mounted, className, ...props }) => (
  <button
    {...props}
    className='absolute shadow-md border group dark:border-slate-900 rotate-180 overflow-hidden z-30 bg-white py-6 right-0 top-[40%] p-4'
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
export default Index
