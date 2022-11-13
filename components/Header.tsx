import { useState, useEffect } from "react";
import { BsMouse, BsChevronDown } from "react-icons/bs";
import styles from "./Header.module.scss";
import Typewriter from "typewriter-effect";
import { Transition } from "@headlessui/react";
import { DiGithubBadge, DiTerminal } from "react-icons/di";
import { FaLinkedin, FaLine, FaMailBulk } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowUp } from "react-icons/hi";
import Link from "next/link";

interface Props {
  positionAbout: number;
  positionProject: number;
  positionNext: number;
  footPosition: boolean;
  showing: boolean;
}

function Header({
  positionAbout,
  positionProject,
  positionNext,
  showing,
  footPosition,
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownAlot, setIsDownAlot] = useState(false);

  const clickHandler = (position: number) => {
    window.scroll({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  console.log(footPosition);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        if (window.scrollY > 500) {
          setIsDownAlot(true);
          if (footPosition) {
            setIsDownAlot(false);
          }
        } else {
          setIsDownAlot(false);
        }
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footPosition]);

  return (
    <>
      <nav
        className={`w-full z-30 fixed -translate-x-10 px-4 lg:px-20 bg-[#010204] ${
          isScrolled && `drop-shadow-nav`
        }`}
      >
        <>
          <Transition show={!showing}>
            <ul className="p-4 flex space-x-4 text-sm md:text-base lg:text-xl md:space-x-5 lg:space-x-7 items-center">
              <li className="flex-1 text-left">
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-0 duration-75 flex-1"
                  enterFrom="opacity-0 -translate-y-full flex-1"
                  enterTo="opacity-100 translate-y-0 flex-1"
                >
                  <button
                    className="flex-1 cursor-pointer"
                    aria-label="Top of the page"
                    onClick={() => clickHandler(0)}
                  >
                    <DiTerminal className="h-6 w-6 hover:fill-white cursor-pointer" />
                  </button>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-100 duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <button
                    data-text="About"
                    className="h-10 hover:glitch hover:after:glitchafter hover:before:glitchbefore cursor-pointer"
                    onClick={() => clickHandler(positionAbout)}
                    aria-label="Link to About part of the page"
                  >
                    About
                  </button>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-300 duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <button
                    data-text="Work"
                    className="h-10 hover:glitch hover:after:glitchafter hover:before:glitchbefore cursor-pointer"
                    onClick={() => clickHandler(positionProject)}
                    aria-label="Link to my projects"
                  >
                    Work
                  </button>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-500 duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <button
                    data-text="Contact"
                    className="h-10 hover:glitch  hover:after:glitchafter hover:before:glitchbefore cursor-pointer"
                    onClick={() => clickHandler(positionNext)}
                    aria-label="Link to my contact me part"
                  >
                    Contact
                  </button>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[700ms] duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <button
                    data-text="My Resume"
                    className="h-10 hover:glitch hover:after:glitchafter hover:before:glitchbefore cursor-pointer"
                  >
                    <Link href="https://drive.google.com/file/d/1f0GVAvPKr1gGJhOdvsTLDy_dfNbgkfTO/view?usp=share_link">
                      <a
                        target="_blank"
                        aria-label="Link to developers resume"
                      >
                        My Resume
                      </a>
                    </Link>
                  </button>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[900ms] duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <Link href="https://github.com/StRane">
                    <a
                      target="_blank"
                      aria-label="Link to developers Github page"
                    >
                      <DiGithubBadge className="h-6 w-6 hover:fill-white cursor-pointer" />
                    </a>
                  </Link>
                </Transition.Child>
              </li>
              <li>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1100ms] duration-75"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                >
                  <label htmlFor="my-modal-4">
                    <FaLine className="h-6 w-6 hover:fill-white cursor-pointer" />
                  </label>
                </Transition.Child>
              </li>
            </ul>
          </Transition>
        </>
      </nav>

      <div
        className={`fixed flex flex-col left-6 lg:left-12 bottom-0 xl:left-28 transition-all duration-500 ease-out ${
          isDownAlot ? `opacity-0 md:opacity-100` : `opacity-0 translate-y-1/3`
        }`}
      >
        <button
          className="cursor-pointer"
          onClick={() => clickHandler(0)}
          aria-label="Left Sidebar top of the page"
        >
          <HiArrowNarrowUp className="leftBarItem" />
        </button>

        <hr className="w-0 mx-auto border-l border-green-matrix h-[20px] mb-1" />
        <Link href="https://github.com/StRane">
          <a target="_blank" aria-label="Sidelink to developers Github page">
            <DiGithubBadge className="leftBarItem" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/umut-%C5%9Feber-5519b2183/">
          <a target="_blank">
            <FaLinkedin
              className="leftBarItem"
              aria-label="Sidelink to developers LinkedIn page"
            />
          </a>
        </Link>

        <label htmlFor="my-modal-4">
          <FaLine className="leftBarItem cursor-pointer" />
        </label>

        <Link href="mailto:umut.seber@gmail.com">
          <a aria-label="Mail to developer">
            <FaMailBulk className="leftBarItem" />
          </a>
        </Link>

        <hr className="w-0 mx-auto border-l border-green-matrix h-[100px] mb-6" />
      </div>

      <div
        className={`fixed bottom-32 -right-24 rotate-90 lg:-right-12 lg:bottom-36 xl:bottom-40 xl:-right-4 transition-all duration-500 ease-out ${
          isDownAlot ? `opacity-0 md:opacity-100` : `opacity-0 translate-y-full`
        }`}
      >
        <button
          className="cursor-pointer"
          onClick={() => clickHandler(0)}
          aria-label="Right sidebar top of the page"
        >
          <HiArrowNarrowLeft className="h-6 w-6 lg:w-7 lg:h-7 fill-green-matrix transition-transform hover:-translate-x-1 duration-150 inline-block mr-1 lg:mr-2" />
        </button>
        <hr className="h-1 w-10 inline-block mr-1 lg:mr-2 border-green-matrix" />
        <Link href="mailto:umut.seber@gmail.com">
          <a
            aria-label="Mail to developer"
            className="text-sm lg:text-base text-green-matrix inline-block mr-1 lg:mr-2 hover:-translate-x-0.5 transition-transform duration-200 ease-in"
          >
            umut.seber@gmail.com
          </a>
        </Link>
        <hr className="h-1 w-12 inline-block mr-1 lg:mr-2 border-green-matrix" />
      </div>
      <header className="h-[90vh] pt-40 md:pt-44 lg:pt-48 md:px-16 lg:px-44">
        <span className="lg:text-left pt-5">
          <Typewriter
            options={{ delay: 70, cursor: "" }}
            onInit={(typewriter) => {
              typewriter.typeString("Hi, my name is").start();
            }}
          />
        </span>
        <h1
          data-text="
UMUT SEBER"
          className={styles.glitching}
        >
          UMUT SEBER
          <br />
        </h1>
        <h2 className={styles.customexplanation}>I build things for web</h2>

        <Typewriter
          options={{ delay: 50, cursor: "" }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString(
                "<h3>a passionate Software Developer who delivers business results. I always take on diverse projects with a big smile. I am ready to collaborate with you on your next projects...</h3>"
              )
              .start();
          }}
        />
      </header>

      <BsMouse
        className={`h-12 w-12 out mx-auto stroke-0 pb-2 animate-bounce transition-all duration-700 ${
          isScrolled && "opacity-0 -translate-y-full"
        }`}
      />
      <BsChevronDown
        className={`h-7 w-7 stroke-1 mx-auto transition-all duration-700 ${
          isScrolled && "opacity-0 -translate-y-full"
        }`}
      />
    </>
  );
}

export default Header;
