import React from "react";
import Image from "next/image";

import aboutImgYRMain from "../public/yroy/yr_main.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center w-full p-2 top-5 bottom-5 md:h-screen"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            A NeuroTech Expert branching out into Blockchain. I think we live in
            the best time in history. What a time to be alive!
          </p>
          <p className="py-2 text-gray-600">
            “If the brain were so simple we could understand it, we would be so
            simple we couldn’t.” -Lyall Watson
          </p>
          <div>
            <button className="p-4 mt-4 text-gray-100">
              Download Short CV
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            className="rounded-xl"
            src={aboutImgYRMain}
            width="455"
            height="521"
            alt="/"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
