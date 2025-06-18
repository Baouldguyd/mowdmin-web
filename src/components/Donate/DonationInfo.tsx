"use client";
import ArrowTopRight from "@/assets/Icons/Arrow/ArrowTopRight";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {aboutUs} from "@/data/constant"; 

const DonationInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // animate only once

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false }); // animate only once

  const statRef = useRef(null);
  const isStatInView = useInView(statRef, { once: false }); // animate only once

  const donateRef = useRef(null);
  const isDonateInView = useInView(donateRef, { once: false }); // animate only once

  const boxes = [
    {
      title: "15+",
      info: "over 15 countries worldwide have benefited from our support",
    },
    {
      title: "100k+",
      info: "No of supporters and volunteers across the globe",
    },
    {
      title: "86%",
      info: "No completed projects, making a positive impact across the world",
    },
  ];

  const donateImages = [
    "/donate/donate (1).jpg",
    "/donate/donate (2).jpg",
    "/donate/donate (3).jpg",
    "/donate/donate (4).jpg",
    "/donate/donate (5).jpg",
    "/donate/donate (6).jpg",
    "/donate/donate (7).jpg",
    "/donate/donate (8).jpg",
    "/donate/donate (9).jpg",
  ];



  return (
    <div className="min-h-[100svh] flex flex-col">
      {/* boxes */}
      <div className=" h-auto bg-[#F8F8F8] flex gap-2 flex-wrap justify-center">
        <div className="min-md:flex">
          {boxes.map((item, index) => (
            <div className=" flex">
              <div
                className=" p-10 text-center min-md:w-[384px] h-full "
                key={index}
              >
                <p className=" text-[4rem] font-[inter-bold]  ">{item.title}</p>
                <p className=" text-[#00000099]">{item.info}</p>
              </div>
              <div className=" h-[30%] my-auto flex w-[1px] bg-[#CFCFCF] max-sm:hidden"></div>
            </div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
            className=" p-10 text-left h-auto bg-[#040725] flex flex-col gap-4"
          >
            <div className="w-[30%] h-[1px] bg-[#fff]"></div>
            <p className=" text-[28px] font-[inter-bold] text-[#fff]  ">
              Our Goal Is To Help The Needy.
            </p>
            <p className=" text-[#fff]">
              Become a Partner <ArrowTopRight />
            </p>
          </motion.div>
        </div>
      </div>

      {/* About us */}
      <div className=" min-md:p-6  h-auto flex gap-4 px-8 my-20 max-sm:flex-col">
        {/* Images div */}
        <motion.div
          // ref={ref}
          ref={donateRef}
          initial={{ opacity: 0, x: -50 }} // start 50px to the left
          animate={isDonateInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" min-md:w-[50%] flex gap-4 flex-wrap justify-center h-auto"
        >
          {donateImages.map((image, index) => (
            <div
              key={index}
              className=" h-90 w-100 rounded-md min-md:h-70 min-md:w-70 "
            >
              <Image
                src={image}
                width={240}
                height={150}
                alt="image"
                className="h-full w-full rounded-md"
              />
            </div>
          ))}
        </motion.div>
        {/* ABout us DIv */}
        {/* <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, x: 50 }} // start 50px to the left
          animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" min-md:w-[50%] flex flex-col gap-4 h-auto"
        >
          <p className=" text-[#ff0000] text-[20px] min-md:text-[25px] font-[inter-bold] max-sm:text-center">
            About us
          </p>
          <h2 className=" text-[#040725] text-xl font-[inter-bold]">
            Mowdministries eV promotes the Gospel, supports evangelists, and
            help the needy.
          </h2>
          {aboutUs.map((item) => (
            <div className=" flex gap-2">
              <span className="">
                <FaCheckCircle />
              </span>{" "}
              <p>{item}</p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default DonationInfo;
