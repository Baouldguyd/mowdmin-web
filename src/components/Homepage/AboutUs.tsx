"use client";
import { aboutUs } from "@/data/constant";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false }); // animate only once
  return (
    <div className=" p-6 flex  bg-[#fff] justify-center items-center flex-col gap-6 min-md:flex-row">
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, x: 50 }} // start 50px to the left
        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" min-md:w-[50%] flex flex-col gap-4 h-auto"
      >
        <p className=" text-[#ff0000] text-[20px] min-md:text-[25px] font-[inter-bold] text-center">
          About us
        </p>
        <h2 className=" text-[#040725] text-xl font-[inter-bold]">
          Mowdministries eV promotes the Gospel, supports evangelists, and help
          the needy.
        </h2>
        {aboutUs.map((item) => (
          <div className=" flex gap-2">
            <span className="">
              <FaCheckCircle />
            </span>{" "}
            <p>{item}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
