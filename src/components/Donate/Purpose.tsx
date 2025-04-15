import Image from "next/image";
import React from "react";

const Purpose = () => {

    const boxes = [
        {
          title: "Purpose Of Donations",
          info: "over 15 countries worldwide have benefited from our support",
        },
        {
          title: "Support Our Mission",
          info: "Your generous donations help us continue our work in evangelism, social support, and aid to the needy. Every contribution makes a difference.",
        },
        {
          title: "About US",
          info: "No completed projects, making a positive impact across the world",
        },
      ];
  return (
    <div className=" h-auto">
      <div className=" w-full flex gap-4 flex-wrap justify-center">
      {boxes.map((item, index) => (
          <div className=" flex">
            <div className=" p-10 text-center w-[384px] h-full " key={index}>
              <p className=" text-[2rem] font-[inter-bold]  ">{item.title}</p>
              <p className=" text-[#00000099]">{item.info}</p>
            </div>
            <div className=" h-[30%] my-auto flex w-[1px] bg-[#CFCFCF]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
