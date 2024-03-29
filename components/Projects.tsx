import Image from "next/image";

import { DiGithubBadge } from "react-icons/di";
import { HiExternalLink } from "react-icons/hi";

import Image1 from "../images/Old projects/Netf/Net1.webp";
import Image2 from "../images/Old projects/Chonburian/Chonburian1.webp";
import Image3 from "../images/Old projects/Mosquitopay/mosquitopay.webp";
import Image4 from "../images/Old projects/Bpis/bpis.webp";

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
    <div className="lg:mx-28 min-h-[230vh] xl:min-h-[220vh] 2xl:min-h-[215vh]">
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
              enter="transition-all delay-700 duration-500 flex-1"
              enterFrom="opacity-0 -translate-x-4 xl:-translate-x-1/4 flex-1 z-20"
              enterTo="opacity-100 translate-x-0 lg:-translate-x-6 flex-1 z-20"
            >
              <div className="row translateOdd">
                <div className="z-20 relative py-10 sm:py-0 space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  {/* Put some dim color as a theme */}
                  <h3
                    className="text-shadow-row text-center w-full text-lg md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="Mosquito Pay"
                  >
                    Mosquito Pay
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      I’ve practiced with design, react tools to generate unique
                      qr for a given crypto payment method. Connected to server
                      with socketio.
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        IOTARESTAPI wallet.rs client.rs NodeJS React Typescript Tailwind Azure
                      </p>
                      <div className="flex">
                        <Link href="https://mosquitopay.io/">
                          <a
                            target="_blank"
                            aria-label="Link to project Mosquitopay webpage"
                          >
                            <HiExternalLink className="projectIcon" />
                          </a>
                        </Link>
                        <Link href="https://demo.mosquitopay.io/pfe/">
                          <a
                            target="_blank"
                            aria-label="Link to project Mosquitopay wallet"
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
                  alt="picture of mosquitopay"
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
                  alt="picture of mosquitopay"
                  className="object-contain opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
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
                  alt="picture of bpis website"
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
                <div className="z-20 relative space-y-6 py-10 sm:py-0 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
                  <h3
                    className="text-shadow-row text-center w-full text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore"
                    data-text="BPIS website"
                  >
                    BPIS website
                  </h3>
                  <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
                    <p className="text-xs sm:text-sm md:text-base">
                      Designed website for International School in Pattaya.
                      Utilized various design packages and created dynamic pages
                      and navigation with Context.
                    </p>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base">
                        NextJS Tailwind Google Maps API
                      </p>
                      <div className="flex">
                        <Link href="https://github.com/StRane/bpis-app">
                          <a
                            target="_blank"
                            aria-label="Link to project Netflix clone Github repo"
                          >
                            <DiGithubBadge className="projectIcon" />
                          </a>
                        </Link>
                        <Link href="https://www.bpis.ac.th/">
                          <a
                            target="_blank"
                            aria-label="Link to project BPIS website"
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
                  alt="picture of bpis website"
                  className="object-cover opacity-30 md:opacity-0"
                  layout="fill"
                  placeholder="blur"
                />
              </div>
            </Transition.Child>
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
                      <div className="flex">
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
                      <div className="flex">
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
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Projects;
