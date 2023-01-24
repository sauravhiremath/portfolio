import { useTheme } from 'next-themes'
import {
  SiAmazonaws,
  SiApachekafka,
  SiGooglecloud,
  SiKubernetes,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
} from 'react-icons/si'
import React, { useEffect, useState } from 'react'
import { technologies } from '../../portfolio'

const technologies_components_map = {
  React: SiReact,
  GCP: SiGooglecloud,
  AWS: SiAmazonaws,
  Python: SiPython,
  Tensorflow: SiTensorflow,
  Kubernetes: SiKubernetes,
  Kafka: SiApachekafka,
  NodeJS: SiNodedotjs,
}

const Index = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="  w-full z-20 h-full backdrop-blur-md sticky inset-0">
      <section
        style={{
          background: `${
            theme && mounted && theme === 'light'
              ? 'linear-gradient(rgba(230,230,230,0.3),rgba(230,230,230,0.3))'
              : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
          }`,
        }}
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay={`200`}
            className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
          >
            Technolgies worked with
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {technologies.frameworks.map((framework, i) => (
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay={`${i + 1}00`}
                key={framework.name}
              >
                <Technology name={framework.name} theme={theme} mounted={mounted} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const Technology = ({ name, theme, mounted }) => {
  const TechnologyLogo = technologies_components_map[name]

  return (
    <>
      <a className="flex relative justify-center space-x-4 group opacity-60 hover:opacity-100 items-center cursor-pointer">
        <TechnologyLogo className="text-5xl md:!text-7xl text-[#222] dark:text-white" />
        <div
          style={{
            background: `${
              theme && mounted && theme === 'light'
                ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
                : 'linear-gradient(rgba(2,4,12,0.5), rgba(2,4,12,0.5))'
            }`,
          }}
          className="absolute backdrop-blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 top-[-120px] group-hover:top-[-60px] text-[#222] dark:text-white rounded-lg shadow-md border border-gray-200 dark:border-slate-900 py-2 px-8"
        >
          {name}
        </div>
      </a>
    </>
  )
}

export default Index
