import React from "react";
import Image from "next/image";

import skillImgC from "../public/skills/c.png";
import skillImgCpp from "../public/skills/cpp.png";
import skillImgPython from "../public/skills/python.png";
import skillImgMatlab from "../public/skills/matlab.png";
import skillImgR from "../public/skills/r.png";
import skillImgSolidity from "../public/skills/Solidity.png";
import skillImgJavascript from "../public/skills/javascript.png";
import skillImgJupyter from "../public/skills/jupyter.png";
import skillImgGithub from "../public/skills/github.png";
import skillImgNextJS from "../public/skills/nextjs.png";
import skillImgReact from "../public/skills/react.png";
import skillImgTailwind from "../public/skills/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Tech Stack</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgPython}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgC}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgCpp}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgMatlab}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Matlab</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgR}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>R</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgSolidity}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgJavascript}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgNextJS}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgReact}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgTailwind}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgJupyter}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jupyter</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={skillImgGithub}
                  width="64px"
                  height="64px"
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
