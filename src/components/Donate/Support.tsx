"use client";
import Image from "next/image";
import React from "react";
import supportBg from "@/assets/Images/supportBg.jpg";
import ContactForm from "./Contactform";

const Support = () => {
  return (
    <div className=" min-h-[100svh] relative">
      {/* Image and bg */}
      <Image src={supportBg} alt="" className="w-full h-full absolute " />
      <div className=" bg-[#040725CC] text-white flex justify-center items-center  relative h-full flex-col gap-6 ">
        <h1 className=" text-white font-[inter-bold] w-[40%] mx-auto text-[2rem] text-center">
          Would you like to donate to support these charitable projects?
        </h1>
        <ContactForm />
        
      </div>
    </div>
  );
};

export default Support;
