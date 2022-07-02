import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import Writing from '../components/Home/Writing/Writing'
import Journey from '../components/Home/Journey'
import { Suspense, useEffect, useState } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Brands from "../components/Brands";

const Home = () => {
  const [offset, setOffset] = useState(0)
  typeof window != 'undefined' &&
    window.addEventListener('scroll', () => {
      window.pageYOffset < 1000 && setOffset(window.pageYOffset)
    })
  useEffect(() => {
    AOS.init();
    AOS.refresh({
      duration: 500
    });
    console.log('calld')
  }, [offset])
  return (
    <Layout>
      <Head>
        <title>Saurav M. H · Software Developer · VIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense>
        <section id='home' className="w-11/12 lg:w-10/12 mx-auto ">
          <Hero />
        </section>
        <section id='opensource' className="w-11/12 mx-auto lg:w-10/12 pt-8 md:pt-16">
          <Projects />
        </section>
        <section id='experience' className="w-11/12 mx-auto lg:w-full pt-8 md:pt-16">
          <Brands />
        </section>
        <section id='writing' className="md:w-11/12 mx-auto lg:w-full py-8 md:py-16">
          <Journey />
        </section>
        <section id='writing' className="md:w-11/12 mx-auto lg:w-full py-8 md:py-16">
          <Writing />
        </section>
      </Suspense>
    </Layout >


  )
}

export default Home
