import Image from "next/image";

import { Transition } from "@headlessui/react";

import { useRef, useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import ProfilePic from "../images/1636693859327.jpg";

interface Props {
  position: number;
}

function AboutMe({ position }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let fix = window.screen.height / 2;
    const handleScroll = () => {
      if (window.scrollY > position - fix) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <div className="min-h-screen lg:mx-28">
      <Transition show={true} appear={isScrolled}>
        <Transition.Child
          appear={true}
          enter="transition-all opacity-0 flex-1"
          enterFrom=" flex-1"
          enterTo="animate-flipIN opacity-100 flex-1"
        >
          <h2 className="pt-20 pb-10 md:pt-20">AboutMe</h2>
        </Transition.Child>
        <hr className="w-full h-[1px] border-green-mdark -translate-y-10" />

        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full xl:pl-40">
            <div className="flex flex-col space-y-2 md:space-y-8 lg:space-y-12 lg:text-left">
              <Transition.Child
                appear={true}
                enter="transition-all delay-500 flex-1"
                enterFrom="opacity-0 flex-1"
                enterTo="opacity-100 animate-flipIN flex-1"
              >
                <p>
                  Hello! My name is Umut and I enjoy creating things that live
                  on the internet. My journey began when I tinker with website
                  console to change colors of a button.
                </p>
              </Transition.Child>
              <Transition.Child
                appear={true}
                enter="transition-all delay-700 flex-1"
                enterFrom="opacity-0 flex-1"
                enterTo="opacity-100 animate-flipIN flex-1"
              >
                <p>
                  Fast-forward to today, My main focus these days is building
                  accessible, fast loading and scaleable web apps used by
                  masses.
                </p>
              </Transition.Child>
              <Transition.Child
                appear={true}
                enter="transition-all delay-[900ms] flex-1"
                enterFrom="opacity-0 flex-1"
                enterTo="opacity-100 animate-flipIN flex-1"
              >
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </Transition.Child>
              <ul className="relative w-4/5 text-left grid grid-cols-2 mx-auto">
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1100ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">TypeScript</li>
                </Transition.Child>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1300ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">JavaScript</li>
                </Transition.Child>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1500ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">NodeJS</li>
                </Transition.Child>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1700ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">NextJS</li>
                </Transition.Child>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[1900ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">React</li>
                </Transition.Child>
                <Transition.Child
                  appear={true}
                  enter="transition-all delay-[2100ms] duration-200 flex-1"
                  enterFrom="opacity-0 flex-1"
                  enterTo="opacity-100 animate-flipIN flex-1"
                >
                  <li className="relative aboutlistitem">Tailwind</li>
                </Transition.Child>
              </ul>
            </div>
          </div>
          <div className="w-4/5 sm:w-3/5 mx-auto md:w-7/12 pb-10 sm:px-4 md:px-1 lg:px-6 xl:pr-40">
            <Transition.Child
              appear={true}
              enter="transition-all delay-500 duration-300 ease-in flex-1"
              enterFrom="opacity-0 flex-1"
              enterTo="opacity-100 flex-1"
            >
              <Image
                src={ProfilePic}
                alt="picture of developer"
                sizes="(max-width: 500px) 80vw,(max-width: 500px) 60vw, 40vw"
                layout="responsive"
                placeholder="blur"
              />
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default AboutMe;
