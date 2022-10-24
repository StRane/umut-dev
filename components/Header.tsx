import { BsMouse, BsChevronDown } from "react-icons/bs";
import styles from "./Header.module.scss";
import Typewriter from "typewriter-effect";

function Header() {
  const clickhandler = () => {
    window.scrollBy({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="w-full z-50 fixed border-b-[1px] border-[#008F11] -translate-x-10 px-4 lg:px-20 backdrop-blur-sm">
        <ul className="flex space-x-4 text-base md:text-lg lg:text-xl py-4 md:space-x-5 lg:space-x-7 items-center">
          <li className="flex-1 text-left">Logo</li>
          <li>
            <button
              data-text="About"
              className="h-10 hover:glitch hover:after:glitchafter hover:before:glitchbefore"
              onClick={() => {
                clickhandler();
              }}
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
      <BsMouse className="h-12 w-12 out mx-auto stroke-0 pb-2 animate-bounce" />
      <BsChevronDown className="h-7 w-7 stroke-1 mx-auto" />
    </>
  );
}

export default Header;
