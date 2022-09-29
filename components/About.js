import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"> I do stuff.</p>
          <p className="py-2 text-gray-600"> I do other stuff.</p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            className="rounded-xl"
            src="/../public/DL-EEG_WordCloud.png"
            width="500"
            height="400"
            alt="/"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
