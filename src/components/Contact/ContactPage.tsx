"use client";
import React from "react";
import Contactform from "./Contactform";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <div className=" min-h-[100svh]">
      <div className="bg-[#040725] justify-center text-white h-[50svh] flex items-end pb-10">
        <div className="">
          <h1 className=" text-2xl min-md:text-5xl text-center font-[inter-bold]">
            Contact Us
          </h1>
          <p className=" text-center text-[#CFCFCF] text-base min-md:text-[1.3rem] min-md:w-[75%] mx-auto mt-4">
            Do you have any questions? our team is happy to be there for you.
            Simply fill out the contact form and we will get back to you as
            quickly as possible. Of course, you can also reach us by phone or
            via email at{" "}
            <a href="mailto:contact@mowdministries.org" className=" underline">
              contact@mowdministries.org
            </a>
            . We look forward to seeing you!
          </p>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >
        <Contactform />
      </motion.div>
    </div>
  );
};

export default ContactPage;
