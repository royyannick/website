import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

//import projectImgHeader from "../../../public/projects/d2rjsp/D2RJSP.png";
import projectImgHeader from "../../../public/projects/d2rjsp/D2RJSP_Runes.gif";

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
                        A small scraper to fetch data from <a href="d2jsp.org">d2jsp.org</a>, a trading website for Diablo II (video game). The idea was to discover arbitraging opportunities early on after a ladder reset.
                        What Runes are in demand, what is selling at a premium and how does the value fluctuate over the first 24 to 48h of the ladder reset.
                    </p>
                    <p className="py-4">
                        The objective is to then use such insight to maximize my flash farming during the first hours of a ladder reset. (#TotalNerd)
                    </p>
                    <p className="py-4">
                        <i>You&apos;re probably thinking, really? What a nerd. And you&apos;d be right because I coded it on a Saturday evening instead of going out...</i>
                    </p>
                    <div align="center">
                        <iframe width="800" height="600" src="https://www.youtube.com/embed/b4u6R3uE7eI?si=YnAl29eERaZzDiUO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <iframe
                        src="https://d2r-jsp.streamlit.app/?embed=true"
                        height="800" width="100%" frameborder="0"
                        className="max-w-[1240px]"
                    ></iframe>
                    <br />
                    <Link href="/#projects">
                        <p className="underline cursor-pointer gap-6">Back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default D2RJSP;
