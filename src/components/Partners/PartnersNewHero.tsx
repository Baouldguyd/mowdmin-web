"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const PartnersNewHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <div className="">
      <div className="bg-[#040725] justify-center text-white h-[50svh] flex items-center pb-5">
        <div className="">
          <h1 className=" text-2xl min-md:text-5xl w-[65%] text-center mx-auto font-[inter-bold]">
            Helping people thrive through purpose-driven and inspiring
            partnership
          </h1>
          {/* <p className=" text-center text-[#CFCFCF] text-base min-md:text-[1.3rem] min-md:w-[75%] mx-auto mt-4">
            Are you interested in a partnership and would you like to undertake
            this task together with us?
          </p>
          <p className="text-[#CFCFCF] justify-center my-6 min-md:text-[1.3rem] font-[inter-bold] flex items-center gap-2">
            Kindly Fill the form below <BsArrowDownCircle />
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PartnersNewHero;
