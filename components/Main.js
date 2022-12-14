import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  SiMedium,
  SiFacebook,
  SiTwitter,
  SiGooglescholar,
} from "react-icons/si";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 upppercase">
            LET&apos;S SHAPE THE FUTURE TOGETHER!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Yannick</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            a <span className="text-[#5651e5]">NeuroTech</span> and{" "}
            <span className="text-[#5651e5]">Blockchain</span>
          </h1>
          <h2 className="py-4 text-gray-700">
            Developer / Researcher / Manager / Enthusiast
          </h2>

          <div className="py-4 text-gray-600 max-w-[70%] m-auto md:text-2xl">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I write code.")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("I do research.")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("I manage teams.")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="py-4 flex items-center justify-between sm:max-w-[60%] md:max-w-[60%] lg:max-w-[60%] sm:gap-2 lg:gap-4 m-auto">
            <Link href="https://www.linkedin.com/in/yannick-roy-8aa5286/">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>
            <Link href="https://twitter.com/@_yroy_">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <SiTwitter className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>
            <Link href="https://github.com/royyannick">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>
            <Link href="https://scholar.google.ca/citations?user=x5c5jRgAAAAJ">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <SiGooglescholar className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>

            <Link href="https://medium.com/@_yroy_">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <SiMedium className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>
            <Link href="https://www.facebook.com/yannick.roy.35">
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <SiFacebook className="duration-300 ease-in hover:scale-150" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
