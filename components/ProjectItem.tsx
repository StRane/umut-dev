import Image from "next/image";

import { DiGithubBadge } from "react-icons/di";
import { HiExternalLink } from "react-icons/hi";

import Image1 from "../images/Old projects/Netf/Net1.webp";
import Image2 from "../images/Old projects/Chonburian/Chonburian1.webp";
import Image3 from "../images/Old projects/Quotes/Quotes1.webp";
import Image4 from "../images/Old projects/Food/Food1.webp";

function ProjectItem() {
  return (
    <>
      <div className="row translateOdd">
        <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
          <h4 className="text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore" data-text="Netflix Clone">
            Netflix Clone
          </h4>
          <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
            <p className="text-xs sm:text-sm md:text-base">
              A project i worked on to tackle Firebase OAuth and designed custom
              hooks and page directions dinamically on SSR pages experimentetd
              with DOM
            </p>
            <div>
              <p className="text-xs sm:text-sm md:text-base">
                NextJS Typescript MUI Firebase API Vercel
              </p>
              <div className="flex">
                <DiGithubBadge className="projectIcon" />
                <HiExternalLink className="projectIcon" />
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
      <div className="rowPic">
        <Image
          src={Image1}
          alt="picture of project netflix-clone"
          className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="rowPic justify-self-end">
        <Image
          src={Image2}
          alt="picture of project netflix-clone"
          className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="row translateEven">
        <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
          {/* Put some dim color as a theme */}
          <h4 className="text-shadow-row text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore" data-text="Chonburian">
            Chonburian
          </h4>
          <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
            <p className="text-xs sm:text-sm md:text-base">
              I’ve practiced with react router and Mongo DB to post some events
              and prepared form component. Practiced with react forms and even
              listeners and API requests.
            </p>
            <div>
              <p className="text-xs sm:text-sm md:text-base">
                React Router CSS MongoDB API
              </p>
              <div className="flex">
                <DiGithubBadge className="projectIcon" />
                <HiExternalLink className="projectIcon" />
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
      <div className="row translateOdd">
        <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
          {/* Put some dim color as a theme */}
          <h4 className="text-shadow-row text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore" data-text="Quotes">
            Quotes
          </h4>
          <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
            <p className="text-xs sm:text-sm md:text-base">
              In this project I’ve practiced get and post requests. Dynamic list
              that I can sort. Every comment have their own dynamic routes with
              author and their comment section.
            </p>
            <div>
              <p className="text-xs sm:text-sm md:text-base">
                React Router CSS Firebase API
              </p>
              <div className="flex">
                <DiGithubBadge className="projectIcon" />
                <HiExternalLink className="projectIcon" />
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
      <div className="rowPic">
        <Image
          src={Image3}
          alt="picture of project netflix-clone"
          className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="rowPic justify-self-end">
        <Image
          src={Image4}
          alt="picture of project netflix-clone"
          className="object-cover opacity-50 transition-opacity duration-200 ease-in hover:opacity-100"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="row translateEven">
        <div className="z-20 relative space-y-6 md:top-0 md:left-0 md:space-y-8 lg:w-2/3">
          <h4 className="text-shadow-row text-lg pt-10 md:pt-0 font-bold sm:text-2xl md:text-3xl glitch after:glitchafter before:glitchbefore" data-text="Food Order">
            Food Order
          </h4>
          <div className="mx-12 md:mx-0 space-y-3 md:space-y-5 text-left">
            <p className="text-xs sm:text-sm md:text-base">
              In this project I worked on React Context to design shopping cart.
              Designed reducer functions and form component. Items fetched from
              Firebase orders posted back.
            </p>
            <div>
              <p className="text-xs sm:text-sm md:text-base">
                React CSS Firebase API
              </p>
              <div className="flex">
                <DiGithubBadge className="projectIcon" />
                <HiExternalLink className="projectIcon" />
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
    </>
  );
}

export default ProjectItem;
