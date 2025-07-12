"use client";
import Image from "next/image";
import React from "react";
import shopsBg from "@/assets/Images/shopsBg.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ebendbildes from "@/assets/Images/ebenbildes.png";
import { scroller } from "react-scroll";

const ShopsHeroPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once

  const router = useRouter();

  const handleBuyNow = () => {
  // Scroll to the target section
  scroller.scrollTo("book-store", {
    duration: 500,
    smooth: true,
    offset: -50, // Optional: adjust for fixed headers
  });

  // Push the bookid to the URL without scrolling
  router.push("/shops?bookid=10", { scroll: false });
};

  return (
    <div className=" bg-[#040725E5] relative max-sm:min-h-[50svh] flex min-h-[70svh]  ">
      <div className="bg-[#040725E5] h-full w-full z-[10] absolute"> </div>
      <div className=" flex min-md:h-[70svh] my-auto  relative justify-around w-full max-sm:p-12 max-md:p-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-[27rem] z-[50]  flex-col md:justify-between lg:justify-around flex max-sm:gap-4  my-auto mx-6 h-[70%] max-md:mt-14 max-sm:mt-6 "
        >
          <h1 className=" text-[#fff] font-[inter-bold] text-5xl leading-14 max-sm:text-4xl ">
            Get inspirational book and album filled with the Holy Spirit.
          </h1>
          <p className="text-[#CFCFCF] text-[12px] md:text-[15px]">
            We offer a myriad of products through which we believe the Holy
            Spirit can meet all types of needs.
          </p>
          <div className="">
             <button
                onClick={handleBuyNow}
                type="button"
                className=" red-button mt-6 font-[inter-bold] "
              >
                Buy Now
              </button>
          </div>
        </motion.div>
        {/* <div className=""></div> */}
        <Image
          src={ebendbildes}
          alt=""
          className=" w-[40%] my-auto  mr-6 h-full max-sm:hidden "
        />
      </div>
    </div>
  );
};

export default ShopsHeroPage;
