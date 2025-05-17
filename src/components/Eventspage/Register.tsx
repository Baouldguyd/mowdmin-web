"use client";
import React from "react";
import EventRegistrationForm from "./EventRegistrationForm";
import Image from "next/image";
import crowd from "@/assets/Images/crowdRegImg.png";
import folder from "@/assets/Images/folder.png";
import world from "@/assets/Images/world.png";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Register = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // animate only once

  return (
    <div className=" pt-12 bg-[#F8F8F8] md:min-h-screen h-auto grid grid-rows-[1fr_1fr] ">
      {/* Register Container */}
      <div className=" mx-6 mb-4 flex gap-2 flex-col md:flex-row  mt-4">
        {/* Form */}
        <div className=" rounded-md h-full bg-[#fff] md:w-[60%] flex items-center">
          <EventRegistrationForm />
        </div>
        <div className="  flex items-center md:w-[40%] rounded-md h-[37rem] ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }} // start 50px to the left
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className=" relative w-full h-[37rem]">
              <Image
                src={crowd}
                alt=""
                className="absolute h-full w-full rounded-md  "
              />
              <div className=" relative h-full flex flex-col gap-4 bg-[#00000071] rounded-md p-4 ">
                <p className=" text-[4rem]  text-[#fff] font-[kalam-bold] w-[10rem] m-auto  ">
                  New here?
                </p>
                <p className=" text-center text-[#fff] w-[80%] mx-auto my-8">
                  Please scroll down the page or click the button below to visit
                  our YouTube page to catch the plethora of past events.
                </p>
                <a
                  href="https://www.youtube.com/@mowdministries.e.vgospelofsalv"
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <button className=" text-[#fff]  mx-auto px-6 py-3 text-[12px] red-button rounded-md bg-[#ff0000] cursor-pointer min-md:text-lg font-[inter-bold] ">
                    Encore
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Card Container */}
      <div className="  h-auto mt-8  ">
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:grid md:grid-cols-2 gap-6 ">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-lg p-8 relative border border-gray-200"
          >
            <div className="absolute top-0 left-0 w-6 h-6 bg-white border-t-4 border-l-4 border-black rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-white border-b-4 border-r-4 border-black rounded-br-lg"></div>
            <div className="flex items-center space-x-3">
              <span className="">
                {" "}
                <Image src={folder} alt="" />{" "}
              </span>
              <p className="italic text-gray-500">
                Let us proclaim the miracles of the Lord!
              </p>
            </div>
            <h3 className="font-bold text-lg mt-2">1 Chronicles 16:23-24</h3>
            <p className="mt-2">
              <strong>23 —</strong> Sing to the LORD, all the earth; proclaim
              His salvation daily!
            </p>
            <p className="mt-2">
              <strong>24 —</strong> Declare His glory among the nations and His
              wonders among all peoples.
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-lg p-8 relative border border-gray-200"
          >
            <div className="absolute top-0 right-0 w-6 h-6 bg-white border-t-4 border-r-4 border-black rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-white border-b-4 border-l-4 border-black rounded-bl-lg"></div>
            <div className="flex items-center space-x-3 ">
              <span className="">
                <Image src={world} alt="" className="" />
              </span>
              <p className="italic text-gray-500">
                Go into all the world and preach the gospel to every creature.
              </p>
            </div>
            <h3 className="font-bold text-lg mt-2">Mark 16:15</h3>
            <p className="mt-2">
              — In response to this calling, we came together in 2017 to
              organize our first open-air evangelization in the city of Hamm
              (Westf), North Rhine-Westphalia.
            </p>
            <p className="mt-2">
              — This gathering is a time of unity and worship, where we lift our
              voices in praise to God Almighty. The event is enriched by
              uplifting gospel music, performed by various talented gospel
              singers, creating an atmosphere of inspiration and faith.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
