import Image from "next/image";
import Link from "next/link";
import React from "react";

const PublicationItem = ({
  title,
  backgroundImg,
  publicationUrl,
  keywords,
  year,
}) => {
  return (
    <div className="relative flex justify-start h-auto w-full border-stone-700 rounded-xl group hover:bg-gradient-to-r from-[#bfbec8] to-[#a1afce] py-3">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        width="300"
        height="225"
        alt="/"
      />
      <div>
        <h3 className="p-2 text-white">{title}</h3>
        <p className="p-2 text-lg">Paper Title</p>
        <p className="p-2 ">Paper Authors</p>
        <p className="pt-2 pb-4 text-center text-white">({year})</p>
        <p className="p-2">{keywords}</p>
        <p className="p-4">Paper Description</p>
      </div>
      <div>
        <Link href={publicationUrl}>
          <a>
            <p className="px-2 py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
              More Info
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PublicationItem;
