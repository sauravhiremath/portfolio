import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero/Hero2'
import Projects from '../components/Projects'
import Writing from '../components/Writing'
import Testimonial from '../components/Testimonial'
import Journey from '../components/Journey'
import { Suspense, useEffect, useState } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Brands from "../components/Brands";
import { testimonials, journey, workExperience, blogs, about, contact } from '../portfolio'
const Home = () => {
  const [offset, setOffset] = useState(0)
  typeof window != 'undefined' &&
    window.addEventListener('scroll', () => {
      window.pageYOffset < 100 && setOffset(window.pageYOffset)
    })
  useEffect(() => {
    AOS.init();
    AOS.refresh({
      duration: 500
    });
  }, [offset])
  return (
    <Layout contact={contact}>
      <Head>
        <title>Saurav M. H · Software Developer · VIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense>
        <section id='home' className="container mx-auto ">
          {/* <Hero /> */}
          <Hero2 about={about} />
        </section>
        <section id='opensource' className="max-w-[90rem] mx-auto pt-8 md:pt-16">
          <Projects workExperience={workExperience} />
        </section>
        <section id='experience' className=" pt-8 md:pt-16">
          <Brands />
        </section>
        <section id='clients' className="pt-8 md:pt-16 max-w-[90rem] overflow-hidden mx-auto relative">
          <Testimonial testimonials={testimonials} />
        </section>
        <section id='writing' className="max-w-[90rem] mx-auto py-8 md:py-32">
          <Journey journey={journey} />
        </section>
        <section id='writing' className="py-8 md:py-16">
          <Writing blogs={blogs} />
        </section>
      </Suspense>
    </Layout >


  )
}

export default Home
