import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import Writing from '../components/Home/Writing'
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
  }, [offset])
  return (
    <Layout>
      <Head>
        <title>Saurav M. H · Software Developer · VIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense>
        <div className=" w-10/12 mx-auto ">
          <Hero />
        </div>
        <section id='opensource' className=" lg:w-full mx-auto pt-16">
          <Projects />
        </section>
        <section id='experience' className=" lg:w-full mx-auto pt-16">
          <Brands />
        </section>
        <section id='writing' className=" lg:w-full mx-auto py-16">
          <Writing />
        </section>
      </Suspense>
    </Layout >


  )
}

export default Home
