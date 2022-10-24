import Image from "next/image";
import ProfilePic from "../images/1636693859327.jpg";
import { useRef } from "react";

function AboutMe() {
  const myRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen lg:mx-28">
      <h2 ref={myRef} className="pt-20 pb-10 md:pt-20">
        AboutMe
        <hr className="w-full h-[1px] border-[#008F11]" />
      </h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full">
          <div className="flex flex-col space-y-2 md:space-y-8 lg:space-y-12 lg:text-left">
            <p>
              Hello! My name is Umut and I enjoy creating things that live on
              the internet. My journey began when I tinker with website console
              to change colors of a button.
            </p>
            <p>
              Fast-forward to today, My main focus these days is building
              accessible, fast loading and scaleable web apps used by masses.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="relative w-4/5 text-left grid grid-cols-2 mx-auto">
              <li className="relative aboutlistitem">TypeScript</li>
              <li className="relative aboutlistitem">JavaScript</li>
              <li className="relative aboutlistitem">NodeJS</li>
              <li className="relative aboutlistitem">NextJS</li>
              <li className="relative aboutlistitem">React</li>
              <li className="relative aboutlistitem">Tailwind</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-3/4 sm:mx-auto md:w-3/5 pb-10 sm:px-4 md:px-1 lg:px-6">
          <Image
            src={ProfilePic}
            alt="picture of developer"
            sizes="(max-width: 500px) 80vw,(max-width: 500px) 60vw, 40vw"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
