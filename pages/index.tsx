import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Umut_Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Header />
        <AboutMe />
        <Projects />       
      </main>

      <footer className="flex h-14 w-full items-center justify-center border-t">
        <p>Designed by umut</p>
      </footer>
    </div>
  )
}

export default Home
