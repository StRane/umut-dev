import Link from "next/link";

function WhatsNext() {
  return (
    <div className="min-h-[90vh] space-y-4">
      <h2 className="pt-40 pb-10 md:pt-20">
        Contact
        <hr className="w-full h-[1px] border-green-mdark" />
      </h2>
      <p>I am looking forward to hearing from you.</p>
      <p>Whether you have a question or just want to say hi,</p>
      <p className="pb-10">I’ll try my best to get back to you!</p>
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
          <a className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full">
            Line
          </a>
        </li>
        <li className="nextList">
          <Link href="mailto:umut.seber@gmail.com">
            <a className="before:content-[''] before:h-full before:inline-block before:align-middle align-middle block h-full">
              E-Mail
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WhatsNext;
