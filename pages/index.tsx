import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Projects from "../components/Projects";
import WhatsNext from "../components/WhatsNext";


const Home: NextPage = () => {
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLInputElement>(null);

  const [initializing, setInitializing] = useState(true);

  const [aboutPosition, setAboutPosition] = useState(0);
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [nextPosition, setNextPosition] = useState(0);

  useEffect(() => {
    setAboutPosition(aboutRef.current!.getBoundingClientRect().y);
    setProjectsPosition(projectsRef.current!.getBoundingClientRect().y);
    setNextPosition(nextRef.current!.getBoundingClientRect().y);
    setInterval(()=>setInitializing(false),1000)  
  }, []);


  return (
    <div className="relative">
      <Head>
        <title>Umut_Dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Umut Seber" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJs, Tailwind, Sass, SSR"
        />
        <meta
          name="description"
          content="Displaying projects and capabilities"
        />
        <meta name="theme-color" content="dark" />
      </Head>

          <main className="flex w-full flex-col text-center">
            <Header
              positionAbout={aboutPosition}
              positionProject={projectsPosition}
              positionNext={nextPosition}
              showing= {initializing}
            />
            <section ref={aboutRef}>
              <AboutMe />
            </section>
            <section ref={projectsRef}>
              <Projects />
            </section>
            <section ref={nextRef}>
              <WhatsNext />
            </section>
          </main>

          <footer className="flex h-14 w-full items-center justify-center">
            <p>Designed & build by Umut Seber</p>
          </footer>

    </div>
  );
};

export default Home;
