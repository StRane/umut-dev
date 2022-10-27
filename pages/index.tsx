import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home: NextPage = () => {

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
        <Header />
        <AboutMe />
        <Projects />
      </main>

      <footer className="flex h-14 w-full items-center justify-center border-t">
        <p>Designed by umut</p>
      </footer>
    </div>
  );
};

export default Home;
