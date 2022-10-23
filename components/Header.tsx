import { BsMouse, BsChevronDoubleDown } from "react-icons/bs";
import styles from "./Header.module.scss";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <>
      <nav className="w-full fixed border-b-[1px] border-white -translate-x-10 px-4 lg:px-20 backdrop-blur-sm">
        <ul className="flex space-x-4 text-base md:text-lg lg:text-xl py-4 md:space-x-5 lg:space-x-7 items-center">
          <li className="flex-1 text-left">Logo</li>
          <li>
            <button
              data-text="About"
              className="h-10 hover:glitch hover:after:glitchafter hover:before:glitchbefore"
            >
              About
            </button>
          </li>
          <li>
            <button
              data-text="Work"
              className="h-10 hover:glitch  hover:after:glitchafter hover:before:glitchbefore"
            >
              Work
            </button>
          </li>
          <li>
            <button
              data-text="Contact"
              className="h-10 hover:glitch  hover:after:glitchafter hover:before:glitchbefore"
            >
              Contact
            </button>
          </li>
          <li>Github</li>
          <li>Discord</li>
        </ul>
      </nav>
      <header className="h-[90vh] p-40">
        <span className="lg:text-left pt-5">
          <Typewriter
            options={{ delay: 70, cursor: "" }}
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I am").start();
            }}
          />
        </span>
        <h1
          data-text="
UMUT SEBER"
          className={styles.glitching}
        >
          UMUT SEBER
        </h1>

        <Typewriter
          options={{ delay: 70, cursor: "" }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                "<h3>a passionate Software Developer who delivers business results. I always take on diverse projects with a big smile. I am ready to collaborate with you on your next projects...</h3>"
              )
              .start();
          }}
        />
      </header>
      <BsMouse className="h-12 w-12 out mx-auto stroke-0 pb-2" />
      <BsChevronDoubleDown className="h-7 w-7 stroke-1 mx-auto animate-bounce" />
    </>
  );
}

export default Header;
