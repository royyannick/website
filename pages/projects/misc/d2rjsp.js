import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import projectImgHeader from "../../../public/projects/d2rjsp/D2RJSP.png";
import projectVideo from "../../../public/projects/d2rjsp/D2RJSP_Runes.mp4";

const D2RJSP = () => {
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
                    <h2>D2RJSP Runes</h2>
                    <h3>A Scraper for Arbitraging Runes in Diablo II Resurected</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>D2RJSP Runes</p>
                    <h2>Overview</h2>
                    <p className="py-4">
                        A small scraper to fetch data from d2jsp.org, a trading website for Diablo II. The idea was to discover arbitraging opportunities early on after a ladder reset.
                        What Runes are in demand, what is selling at what time.
                        The objective is to then use such insight to maximize my flash farming during the first hours of a ladder reset. (#TotalNerd)
                    </p>
                    <div>
                        <video width="750" height="500" controls>
                            <source src={projectVideo} type="video/mp4" />
                        </video>
                    </div>
                    <Link href=".">
                        <a>
                            <button className="px-8 py-2 mt-4 mr-8">Code Coming Soon</button>
                        </a>
                    </Link>
                </div>
                <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
                    <div className="p-2">
                        <p className="pb-2 font-bold text-center">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" />
                                Streamlit
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" />
                                BeautifulSoup
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" />
                                Python
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

export default D2RJSP;
