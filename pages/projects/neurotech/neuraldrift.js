import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import projectImgHeader from "../../../public/projects/neuraldrift/neuraldrift.png";

const NeuralDrift = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImgHeader}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  translate-y-[-50%] text-white z-10 p-2">
          <h2>NeuralDrift</h2>
          <h3>
            Hackathon project where you &lsquo;mind-control&lsquo; a small
            vehicle.
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>NeuralDrift</p>
          <h2>Overview</h2>
          <p className="py-4">Description Coming Soon...</p>
          {/*<a href="https://www.youtube.com/watch?v=UH2LKSBgD7o">
            Super Sayan 1
          </a>
          <a href="https://www.youtube.com/watch?v=dLvgMlT1gdQ">
            Super Sayan 2
          </a>
          <a href="https://www.youtube.com/watch?v=GLmQpLJhFfE">
            Super Sayan 3
          </a>*/}
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Matlab
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                EEG
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Machine Learning
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Muse (Headset)
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Lego Minstorm
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default NeuralDrift;
