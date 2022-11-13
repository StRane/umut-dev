import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-24 xl:px-28  text-center text-white bg-green-mdark m-0 w-full">
      <div className="pb-5">
        <p className="pb-3 pt-5 text-shadow-footer">Social</p>
        <div className="flex flex-col justify-center space-y-3 text-sm">
          <button className="cursor-pointer py-1 px-2 rounded-md">
            <Link href="https://www.linkedin.com/in/umut-%C5%9Feber-5519b2183/">
              <a
                data-text="LinkedIn"
                className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full hover:glitchFoot hover:after:glitchafterFoot hover:before:glitchbeforeFoot"
                target="_blank"
                aria-label="Footer link to developers LinkedIn page"
              >
                Linkedin
              </a>
            </Link>
          </button>

          <button className="cursor-pointer py-1 px-2 rounded-md">
            <Link href="https://github.com/StRane">
              <a
                data-text="Github"
                target="_blank"
                className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full hover:glitchFoot hover:after:glitchafterFoot hover:before:glitchbeforeFoot"
                aria-label="Footer link to developers Github page"
              >
                Github
              </a>
            </Link>
          </button>
          <button className="cursor-pointer py-1 px-2 rounded-md">
            <Link href="https://discord.com/users/283694054661816326">
              <a
                data-text="Discord"
                target="_blank"
                className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full hover:glitchFoot hover:after:glitchafterFoot hover:before:glitchbeforeFoot"
                aria-label="Footer link to developers discord account"
              >
                Discord
              </a>
            </Link>
          </button>
        </div>
      </div>
      <div>
        <p className="pb-3 pt-5 text-shadow-footer md:text-left">Contact</p>
        <div className="flex flex-col space-y-5 pb-5 sm:items-center md:items-start text-sm">
          <div>Phone: +66 929 390 362</div>
          <div>
            <button className="inline-block">
              <label
                htmlFor="my-modal-4"
                className="cursor-pointer hover:text-black hover:text-shadow-md transition-colors duration-200 ease-in"
              >
                Line:
              </label>
            </button>
            <div className="inline"> umut_dev</div>
          </div>
          <div>
            <div className="inline">Mail: </div>
            <button className="inline-block">
              <Link href="mailto:umut.seber@gmail.com">
                <a
                  aria-label="Mail to developer"
                  className="hover:text-black hover:text-shadow-md transition-colors duration-200 ease-in"
                >
                  {" "}
                  umut.seber@gmail.com
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5 sm:text-center md:text-left ">
        <Link href="https://github.com/StRane/umut-dev">
          <a target="_blank" className="group">
            <p className="pb-3 text-shadow-footer group-hover:text-black group-hover:text-shadow-md transition-colors duration-200 ease-in">
              Designed & build by Umut Seber
            </p>
          </a>
        </Link>
        <div className="text-xs">
          <p className="text-xs">Copyright &#169; 2022 Umut Seber.</p>
          <p className="text-xs">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
