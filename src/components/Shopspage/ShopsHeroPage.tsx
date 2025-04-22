import Image from "next/image";
import React from "react";
import shopsBg from "@/assets/Images/shopsBg.png";

const ShopsHeroPage = () => {
  return (
    <div className=" bg-[#040725E5] relative max-sm:h-[50svh] flex  ">
      <div className=" flex h-full my-auto relative justify-around w-full  ">
        <div className=" w-[27rem] z-[100]  flex-col md:justify-between lg:justify-around flex max-sm:gap-4  my-auto mx-6 h-[70%] ">
          <h1 className=" text-[#fff] font-[inter-bold] text-5xl leading-14 max-sm:text-4xl ">
            Get inspirational book and album filled with the Holy Spirit.
          </h1>
          <p className="text-[#CFCFCF] text-[12px] md:text-[15px]">
            We offer a myriad of products through which we believe the Holy
            Spirit can meet all types of needs.
          </p>
          <div className="">
            <button className=" red-button mt-6 font-[inter-bold] ">Buy Now</button>
          </div>
        </div>
        <Image src={shopsBg} alt="" className=" w-[40%] my-auto  mr-6 h-fit max-sm:hidden " />
        <div className="bg-[#040725E5] h-full w-full z-[10] absolute"> </div>
      </div>
    </div> 
  );
};

export default ShopsHeroPage;
