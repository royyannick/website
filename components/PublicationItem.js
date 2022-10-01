import Image from "next/image";
import Link from "next/link";
import React from "react";

const PublicationItem = ({
  title,
  backgroundImg,
  publicationUrl,
  authors,
  keywords,
  year,
}) => {
  return (
    <Link href={publicationUrl}>
      <a target="_blank">
        <div className="relative flex justify-start h-auto w-full border-stone-700 rounded-xl group hover:bg-gradient-to-r from-[#bfbec8] to-[#a1afce] py-4">
          <div className="w-[20%] h-[180px] flex flex-auto items-center">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={backgroundImg}
              width="200"
              height="180"
              alt="/"
            />
          </div>
          <div className="w-[80%] h-[160px] p-2 flex flex-col justify-between">
            <h3 className="py-3 text-sm md:text-base">{title}</h3>
            <div>
              <p>{authors}</p>
              <p>
                {year} | <i>{keywords}</i>
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PublicationItem;
