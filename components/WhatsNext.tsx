import Link from "next/link";

import Image from "next/image";
import Image1 from "../images/line.jpg";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi/";

function WhatsNext() {
  function linkCopy() {
    navigator.clipboard.writeText("https://line.me/ti/p/-C3OoTrXVN");
    alert("Link Copied!");
  }
  return (
    <div className="min-h-[90vh] space-y-4">
      <h2 className="pt-40 pb-10 md:pt-20">
        Contact
        <hr className="w-full h-[1px] border-green-mdark" />
      </h2>
      <p>I am looking forward to hearing from you.</p>
      <p>Whether you have a question or just want to say hi,</p>
      <p>I’ll try my best to get back to you!</p>
      <p className="pb-10">My most used profiles...</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 grid-rows-[6rem_6rem_6rem] mx-0 lg:grid-rows-[6rem]  xl:mx-56 place-content-center">
        <li className="nextList">
          <Link href="https://www.linkedin.com/in/umut-%C5%9Feber-5519b2183/">
            <a
              className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full"
              target="_blank"
            >
              Linkedin
            </a>
          </Link>
        </li>
        <li className="nextList">
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
        </li>
        <li className="nextList">
          <Link href="mailto:umut.seber@gmail.com">
            <a className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full">
              Say Hello
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WhatsNext;
