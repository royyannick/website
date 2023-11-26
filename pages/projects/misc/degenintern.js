import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import projectImgHeader from "../../../public/projects/degenintern/degenintern.png";

const DegenIntern = () => {
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
                    <h2>Degen Intern</h2>
                    <h3>Degen Trading Assistant</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Degen Intern</p>
                    <h2>Overview</h2>
                    <p className="py-4">Description Coming Soon...</p>
                    <Link href="https://degen-intern.streamlit.app/">
                        <a target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8">Website</button>
                        </a>
                    </Link>
                    <Link href="https://github.com/royyannick/degen-intern">
                        <a target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8">Code</button>
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
                                LangChain
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" />
                                ChatGPT
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

export default DegenIntern;
