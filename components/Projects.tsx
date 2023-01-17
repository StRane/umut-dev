import Image from "next/image";

import { DiGithubBadge } from "react-icons/di";
import { HiExternalLink } from "react-icons/hi";

import Image1 from "../images/Old projects/Netf/Net1.webp";
import Image2 from "../images/Old projects/Chonburian/Chonburian1.webp";
import Image3 from "../images/Old projects/Quotes/Quotes1.webp";
import Image4 from "../images/Old projects/Food/Food1.webp";
import Link from "next/link";

import { Transition } from "@headlessui/react";

import { useEffect, useState } from "react";

interface Props {
  position: number;
}

function Projects({ position }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    let fix = window.screen.height;
    
    const handleScroll = () => {
      if (window.scrollY > position - (fix * 10) / 11) {
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
    <div className="lg:mx-28 min-h-[250vh] md:min-h-[240vh] xl:min-h-[220vh] 2xl:min-h-[200vh]">
      <Transition show={isScrolled}>
        <Transition.Child
          appear={true}
          enter="transition-all flex-1"
          enterFrom="opacity-0 flex-1"
          enterTo="animate-flipIN opacity-100 flex-1"
        >
          <h2 className="pt-20 pb-10 md:pt-20">Projects</h2>
        </Transition.Child>
        <hr className="w-full h-[1px] border-green-mdark -translate-y-8" />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-20 pt-10">
            <Transition.Child
              appear={true}
              enter="transition-all delay-300 duration-500 flex-1"
              enterFrom="opacity-0 -translate-x-4 xl:-translate-x-1/4 flex-1 z-20"
              enterTo="opacity-100 translate-x-0 lg:-translate-x-6 flex-1 z-20"
            >
              <div className="row translateOdd pb-8">
                <div className="relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  <h3
                    className="text-lg text-center w-full pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="Netflix Clone"
                  >
                    Netflix Clone
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      A project i worked on to tackle Firebase OAuth and
                      designed custom hooks and page directions dinamically on
                      SSR pages experimentetd with DOM
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        NextJS Typescript MUI Firebase API Vercel
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  src={Image1}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-30 md:opacity-0"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
              <div className="flex row translateOdd mx-10 md:mx-0 xl:mx-[4.5rem] text-left -translate-y-8">
                <Link href="https://github.com/StRane/netflix-clone-tsx-tailwind-next">
                  <a
                    target="_blank"
                    aria-label="Link to project Netflix clone Github repo"
                  >
                    <DiGithubBadge className="projectIcon" />
                  </a>
                </Link>
                <Link href="https://netflix-clone-tsx-tailwind-next.vercel.app/">
                  <a
                    target="_blank"
                    aria-label="Link to project Netflix clone webpage"
                  >
                    <HiExternalLink className="projectIcon" />
                  </a>
                </Link>
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-300 duration-500 flex-1"
              enterFrom="opacity-0 translate-x-0 flex-1"
              enterTo="opacity-100 -translate-x-1/5 flex-1"
            >
              <div className="rowPic">
                <Image
                  src={Image1}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-500 duration-500 flex-1"
              enterFrom="opacity-0 translate-x-0 flex-1 z-20"
              enterTo="opacity-100 translate-x-4 xl:translate-x-1/4 flex-1 z-20"
            >
              <div className="rowPic justify-self-end">
                <Image
                  src={Image2}
                  alt="picture of project chonburian meetup"
                  className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-500 duration-500 flex-1"
              enterFrom="opacity-0 translate-x-4 xl:translate-x-1/4 flex-1 z-20 "
              enterTo="opacity-100 translate-x-0 lg:translate-x-6 flex-1 z-20 "
            >
              <div className="row translateEven pb-8">
                <div className="relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  {/* Put some dim color as a theme */}
                  <h3
                    className="text-shadow-row text-center w-full text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="Chonburian"
                  >
                    Chonburian
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      I’ve practiced with react router and Mongo DB to post some
                      events and prepared form component. Practiced with react
                      forms and even listeners and API requests.
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        React Router CSS MongoDB API
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  src={Image2}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-30 md:opacity-0"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
              <div className="flex row mx-10 md:mx-0 -translate-y-8 md:-translate-x-10 lg:-translate-x-12 xl:-translate-x-[3.5rem]">
                <Link href="https://github.com/StRane/nextJs-course-demo-chonBurian">
                  <a
                    target="_blank"
                    aria-label="Github repo of project Chonburian webpage"
                  >
                    <DiGithubBadge className="projectIcon" />
                  </a>
                </Link>
                <Link href="https://next-js-course-demo-chon-burian.vercel.app/">
                  <a
                    target="_blank"
                    aria-label="Link to project Chonburian webpage"
                  >
                    <HiExternalLink className="projectIcon" />
                  </a>
                </Link>
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-700 duration-500 flex-1"
              enterFrom="opacity-0 -translate-x-4 xl:-translate-x-1/4 flex-1 z-20"
              enterTo="opacity-100 translate-x-0 lg:-translate-x-6 flex-1 z-20"
            >
              <div className="row translateOdd">
                <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  {/* Put some dim color as a theme */}
                  <h3
                    className="text-shadow-row text-center w-full text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="Quotes"
                  >
                    Quotes
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      In this project I’ve practiced get and post requests.
                      Dynamic list that I can sort. Every comment have their own
                      dynamic routes with author and their comment section.
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        React Router CSS Firebase API
                      </p>
                      <div className="flex">
                        <Link href="https://deployed-c03e9.web.app/quotes">
                          <a
                            target="_blank"
                            aria-label="Link to project Quotes webpage"
                          >
                            <HiExternalLink className="projectIcon" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={Image3}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-30 md:opacity-0"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-700 duration-500 flex-1"
              enterFrom="opacity-0 translate-x-0 flex-1"
              enterTo="opacity-100 -translate-x-1/5 flex-1"
            >
              <div className="rowPic">
                <Image
                  src={Image3}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-[900ms] duration-500 flex-1"
              enterFrom="opacity-0 translate-x-0 flex-1 z-20"
              enterTo="opacity-100 translate-x-1/4 flex-1 z-20"
            >
              <div className="rowPic justify-self-end">
                <Image
                  src={Image4}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
            <Transition.Child
              appear={true}
              enter="transition-all delay-[900ms] duration-500 flex-1"
              enterFrom="opacity-0 translate-x-4 xl:translate-x-1/4 flex-1 z-20"
              enterTo="opacity-100 translate-x-0 lg:translate-x-6 flex-1 z-20"
            >
              <div className="row translateEven">
                <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  <h3
                    className="text-shadow-row text-center w-full text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="Food Order"
                  >
                    Food Order
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      In this project I worked on React Context to design
                      shopping cart. Designed reducer functions and form
                      component. Items fetched from Firebase orders posted back.
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        React CSS Firebase API
                      </p>
                      <div className="flex">
                        <Link href="https://food-order-bf370.web.app/">
                          <a
                            target="_blank"
                            aria-label="Link to project Food Order website"
                          >
                            <HiExternalLink className="projectIcon" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={Image4}
                  alt="picture of project netflix-clone"
                  className="object-cover opacity-30 md:opacity-0"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Projects;
