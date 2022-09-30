import Image from "next/image";
import Link from "next/link";
import React from "react";

const PublicationItem = ({ title, backgroundImg, projectUrl, tech, year }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        width="450"
        height="375"
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-widest text-center text-white">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white">{tech}</p>
        <p className="pt-2 pb-4 text-center text-white">({year})</p>
        <Link href={projectUrl}>
          <p className="px-2 py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PublicationItem;
