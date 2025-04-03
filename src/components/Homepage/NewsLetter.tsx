import React from "react";
import background from "@/assets/Images/subscribeImgnew.jpg";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <div className=" h-[50vh] flex font-[inter-regular]   relative ">
      <Image src={background} alt="bg" className=" absolute top-0 h-full " />
      <div className="bg-[#04072599] z-[10]  w-full h-full flex justify-center items-center">
        <div className=" h-full md:w-[50%] md:h-[50%]  flex flex-col gap-6">
          <p className=" text-4xl text-[#fff] font-[inter-bold] text-center mt-8 ">
            Subscribe to Our Church Newsletter!
          </p>
          <div className=" h-[4.5rem] border-4 border-[#B3B3B3] relative">
            <input
              type="email"
              name="email"
              id="email"
              className=" w-full bg-white h-full p-4"
              placeholder="Enter email address"
            />
            <button className=" bg-[#040725] text-[#fff] absolute right-5 py-4 px-6 top-1 text-[15px] rounded-md font-[inter-bold] cursor-pointer ">
              Subscribe
            </button>
          </div>
          <p className=" text-[#fff] text-[16px] text-center">
            By subscribing to our church newsletter, you agree to receive
            recurring automated messages, such as program reminders, news
            update, upcoming events and concerts, via automated technology
            including email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
