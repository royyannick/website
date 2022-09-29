import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { SiMedium } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT */}
          <div className="w-auto h-full col-span-2 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Link href="/publicspeaking">
                  <Image
                    className="duration-300 ease-in rounded-xl hover:scale-105"
                    src="/../public/project1.jpg"
                    width="350"
                    height="350"
                    alt="/"
                  />
                </Link>
              </div>
              <div>
                <h2 className="py-2">Yannick Roy</h2>
                <p>NeuroTech and Blockchain Dev</p>
                <p className="py-4"></p>
              </div>
              <p className="pt-8 text-center uppercase">Connect With Me</p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <Link href="https://medium.com/@_yroy_">
                    <SiMedium />
                  </Link>
                </div>
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lq:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    ></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    type="email"
                  ></input>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    type="text"
                  ></input>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    rows="10"
                  ></textarea>
                </div>

                <button className="w-full p-4 mt-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
