import { Suspense, useEffect, useState } from 'react'

import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero2 from '../components/Hero/Hero2'
import Journey from '../components/Journey'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Brands from '../components/Technologies'
import Testimonial from '../components/Testimonial'
import Writing from '../components/Writing'
import { about, blogs, contact, journey, testimonials, workExperience } from '../portfolio'

const Home = () => {
  const [offset, setOffset] = useState(0)
  typeof window != 'undefined' &&
    window.addEventListener('scroll', () => {
      window.pageYOffset < 100 && setOffset(window.pageYOffset)
    })

  useEffect(() => {
    AOS.init()
    AOS.refresh({
      duration: 500,
    })
  }, [offset])

  const [highlightedLink, setHighlighedtLink] = useState('')
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const sectionName = window.location.hash

      setHighlighedtLink(sectionName)
    }
    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])

  return (
    <>
      <Layout highlightedLink={highlightedLink} contact={contact}>
        <Head>
          <title>Saurav M. H · Software Developer · VIT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Suspense>
          <section id="home" className="container mx-auto">
            {/* <Hero /> */}
            <Hero2 about={about} />
          </section>
          <section id="work" className="max-w-[90rem] mx-auto pt-8 md:pt-16">
            <Projects workExperience={workExperience} />
          </section>
          <section id="technologies" className=" pt-8 md:pt-16">
            <Brands />
          </section>
          <section
            id="testimonials"
            className="pt-8 md:pt-16 max-w-[90rem] overflow-hidden mx-auto relative"
          >
            <Testimonial testimonials={testimonials} />
          </section>
          <section id="journey" className="max-w-[90rem] mx-auto pb-12 md:pb-32">
            <Journey journey={journey} />
          </section>
          <section id="blogs" className="py-8 md:py-16">
            <Writing blogs={blogs} />
          </section>
        </Suspense>
      </Layout>
      <GoogleAnalytics gaId="G-SNPDEZ3SBB" />
    </>
  )
}

export default Home
