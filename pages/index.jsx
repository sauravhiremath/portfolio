import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero/Hero2'
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
      window.pageYOffset < 100 && setOffset(window.pageYOffset)
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
        <section id='home' className="container mx-auto ">
          {/* <Hero /> */}
          <Hero2 />
        </section>
        <section id='opensource' className="container pt-8 md:pt-16">
          <Projects />
        </section>
        <section id='experience' className=" pt-8 md:pt-16">
          <Brands />
        </section>
        <section id='writing' className="container py-8 md:py-16">
          <Journey />
        </section>
        <section id='writing' className="container overflow-hidden py-8 md:py-16">
          <Writing />
        </section>
      </Suspense>
    </Layout >


  )
}

export default Home