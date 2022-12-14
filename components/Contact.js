import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { useForm } from "react-hook-form";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { SiMedium, SiFacebook, SiTwitter } from "react-icons/si";

import contactImgYRSelfie from "../public/yroy/yr_selfie.jpeg";

function sendFormPipeDream(data) {
  axios
    .post("https://eozyu29kq6l6pbk.m.pipedream.net", data)
    .then((response) => {
      window.location.href = "/success";
    })
    .catch((e) => {
      console.error(e);
    });
}
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    document.getElementById("btnContactFormSubmit").disabled = true;
    //console.log(data, e);
    sendFormPipeDream(data);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid items-center gap-8 md:grid-cols-5">
          {/* LEFT */}
          <div className="h-full p-4 shadow-xl md:col-span-2 shadow-gray-400 rounded-xl">
            <div className="w-full h-full lg:p-4">
              <div className="flex justify-center">
                <Link href="/publicspeaking">
                  <a>
                    <Image
                      className="duration-300 ease-in rounded-full hover:scale-105"
                      src={contactImgYRSelfie}
                      width="275"
                      height="275"
                      alt="/"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h2 className="py-2 text-center">Yannick Roy</h2>
                <p className="text-center">NeuroTech and Blockchain</p>
                <p className="py-2 text-center">
                  Developer / Manager / Researcher
                </p>
                <p className="py-4"></p>
              </div>
              <p className="pt-8 text-center uppercase">Connect With Me</p>
              <div className="flex items-center justify-center gap-3 py-4 m-auto">
                <Link href="https://www.linkedin.com/in/yannick-roy-8aa5286/">
                  <a>
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <FaLinkedinIn className="duration-300 ease-in hover:scale-150" />
                    </div>
                  </a>
                </Link>
                <Link href="https://twitter.com/@_yroy_">
                  <a>
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <SiTwitter className="duration-300 ease-in hover:scale-150" />
                    </div>
                  </a>
                </Link>
                <Link href="https://www.facebook.com/yannick.roy.35">
                  <a>
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                      <SiFacebook className="duration-300 ease-in hover:scale-150" />
                    </div>
                  </a>
                </Link>
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <Link href="mailto:ymyannick+website@gmail.com">
                    <a>
                      <AiOutlineMail className="duration-300 ease-in hover:scale-150" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full h-auto shadow-xl md:col-span-3 shadow-gray-400 rounded-xl lq:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit(onSubmit, onError)}
                /*method="POST"
                action="/success"
                data-netlify="true"*/
                name="contact"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      id="name"
                      name="name"
                      {...register("name")}
                    ></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number (Optional)
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      id="phone"
                      name="phone"
                      {...register("phone")}
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                  ></input>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    type="text"
                    id="subject"
                    name="subject"
                    {...register("subject")}
                  ></input>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="flex p-3 border-2 rounded-lg b order-gray-300"
                    rows="10"
                    id="message"
                    name="message"
                    {...register("message")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full p-4 mt-4 text-gray-100"
                  id="btnContactFormSubmit"
                >
                  Send Message
                </button>
              </form>

              <input type="hidden" name="form-name" value="contact" />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <HiOutlineChevronDoubleUp className="text-[#5651e5]" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
