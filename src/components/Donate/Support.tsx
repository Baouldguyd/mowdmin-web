"use client";
import Image from "next/image";
import React from "react";
import supportBg from "@/assets/Images/supportBg.jpg";
import ContactForm from "./Contactform";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // animate only once

  return (
    <div className=" min-h-[100svh] relative">
      {/* Image and bg */}
      <Image src={supportBg} alt="" className="w-full h-full absolute " />
      <div className=" bg-[#040725CC] text-white flex justify-center items-center  relative h-full flex-col gap-6 ">
        <h1 className=" m-8 text-white font-[inter-bold] min-md:w-[40%] mx-auto text-[2rem] text-center">
          Would you like to donate to support these charitable projects?
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
