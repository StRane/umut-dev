import Link from "next/link";

import Image from "next/image";
import Image1 from "../images/line.jpg";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi/";

import { Transition } from "@headlessui/react";

import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

function WhatsNext() {
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const entryAbout = useIntersectionObserver(intersectionRef, {});
  const isNextVisible = !!entryAbout?.isIntersecting;

  function linkCopy() {
    navigator.clipboard.writeText("https://line.me/ti/p/-C3OoTrXVN");
    alert("Link Copied!");
  }
  return (
    <div className="min-h-[90vh] space-y-4 lg:mx-28" ref={intersectionRef}>
      <h2 className="pt-40 pb-10 md:pt-20">
        Contact
        <hr className="w-full h-[1px] border-green-mdark" />
      </h2>
      <Transition show={isNextVisible} unmount={true}>
        <Transition.Child
          as="p"
          appear={true}
          enter="transition-all ease-in delay-300 duration-300 flex-1"
          enterFrom="-translate-x-1/5 opacity-0"
          enterTo="translate-x-0 opacity-1"
        >
          I am looking forward to hearing from you.
        </Transition.Child>
        <Transition.Child
          as="p"
          appear={true}
          enter="transition-all ease-in delay-[400ms] duration-300 flex-1"
          enterFrom="translate-x-1/5 opacity-0"
          enterTo="translate-x-0 opacity-1"
        >
          Whether you have a question or just want to say hi,
        </Transition.Child>
        <Transition.Child
          as="p"
          appear={true}
          enter="transition-all ease-in delay-500 duration-300 flex-1"
          enterFrom="-translate-x-1/5 opacity-0"
          enterTo="translate-x-0 opacity-1"
        >
          I’ll try my best to get back to you!
        </Transition.Child>
        <Transition.Child
          as="p"
          appear={true}
          enter="transition-all ease-in delay-[600ms] duration-300 flex-1"
          enterFrom="translate-x-1/5 opacity-0 pb-10"
          enterTo="translate-x-0 opacity-1 pb-10"
        >
          My most used profiles...
        </Transition.Child>

        <ul className="grid grid-cols-1 md:grid-cols-3 grid-rows-[6rem_6rem_6rem] mx-0 lg:grid-rows-[6rem]  xl:mx-56 place-content-center">
          <Transition.Child
            as="li"
            appear={true}
            enter="transition-all delay-300 flex-1"
            enterFrom="nextList opacity-0"
            enterTo="nextList opacity-100 animate-flipIN"
          >
            <Link href="https://www.linkedin.com/in/umut-%C5%9Feber-5519b2183/">
              <a
                className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full"
                target="_blank"
              >
                Linkedin
              </a>
            </Link>
          </Transition.Child>
          <Transition.Child
            as="li"
            appear={true}
            enter="transition-all delay-500 flex-1"
            enterFrom="nextList opacity-0"
            enterTo="nextList opacity-100 animate-flipIN"
          >
            <label
              htmlFor="my-modal-4"
              className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full cursor-pointer"
            >
              Line
            </label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <Image
                  src={Image1.src}
                  alt="https://line.me/ti/p/-C3OoTrXVN"
                  height={300}
                  width={300}
                />
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full text-center">
                        <span>Line Link</span>
                        <HiChevronDown
                          className={`${
                            open
                              ? "rotate-180 transform inline-block"
                              : "inline-block"
                          } h-5 w-5`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-sm">
                        ID: umut_dev
                        <div onClick={() => linkCopy()}>
                          https://line.me/ti/p/-C3OoTrXVN
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </label>
            </label>
          </Transition.Child>
          <Transition.Child
            as="li"
            appear={true}
            enter="transition-all delay-700 flex-1"
            enterFrom="nextList opacity-0"
            enterTo="nextList opacity-100 animate-flipIN"
          >
            <Link href="mailto:umut.seber@gmail.com">
              <a className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full">
                Say Hello
              </a>
            </Link>
          </Transition.Child>
        </ul>
      </Transition>
    </div>
  );
}

export default WhatsNext;
