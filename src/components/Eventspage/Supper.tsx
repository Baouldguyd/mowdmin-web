"use client";
import Image from "next/image";
import React from "react";
import pastors from "@/assets/Images/pastors.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Supper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" h-auto flex gap-6 px-4 justify-center my-20 "
    >
      <div className=" max-w-4xl flex gap-6 px-4 justify-center h-[70%] flex-col md:flex-row  ">
        {/* Image */}
        <div className="h-full  md:w-[50%]  w-fit bg-green-300 mx-auto   ">
          <Image src={pastors} alt="" className=" rounded-md h-full w-full  " />
        </div>
        <div className=" h-full md:w-[50%] w-fit ">
          <h1 className=" text-center font-[inter-bold] text-lg md:text-2xl">
            THE LAST SUPPER
          </h1>
          <p className=" text-[12px] md:text-[15px] leading-4 md:leading-5 mb-6">
            At the beginning of the new month and of course following the
            program “The Voice of the Presence of God”, we gather on the first
            Sunday of the month to break the bread and take the cup, as our Lord
            Jesus Christ commanded us to do so his memory in Luke 22:19.
            Communion takes place every first Sunday of the month at 9 p.m. To
            participate in the sacrament, please click on the Zoom link below.
            Remember that this takes place every first Sunday of the month at
            9pm. Don't forget to bring your bread and your non-alcoholic red
            wine.
          </p>
          <div className="font-[inter-bold] italic">
            <p>New Paragraph Meeting: Every last Sunday of the month</p>
            <p>ID: 891 2138 4589</p>
            <p>Passcode: twfHq8h</p>
          </div>
          <a
            href="https://us05web.zoom.us/j/89121384589?pwd=wVkJn7myqUvPWuD2YnFtjZbZ8r6t18.1#success"
            target="_blank"
            className="w-full flex justify-center"
          >
            <button className=" black-button cursor-pointer px-8 py-3 bg-[#040725] rounded-md text-[12px] text-[#fff] font-[inter-bold] mt-2 mx-auto flex">
              Join Zoom Link
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Supper;
