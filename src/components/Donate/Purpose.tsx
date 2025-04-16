import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

const Purpose = () => {
  const boxes = [
    {
      title: "Purpose Of Donations",
      titleColor: "text-[#040725]",
      // info: "over 15 countries worldwide have benefited from our support",
      purpose: [
        "Open Air Evangelism",
        "Support for Orphans and the Needy (Orphans and disadvantaged children / Aux orphelins et aux démunis)",
        "Help for Individuals with Social and Psychological Challenges",
      ],
      bg: "bg-[#F8F8F8]",
    },
    {
      title: "Support Our Mission",
      titleColor: "text-[#FFFFFF]",
      info: "Your generous donations help us continue our work in evangelism, social support, and aid to the needy. Every contribution makes a difference.",
      bg: "bg-[#040725]",
    },
    {
      title: "About US",
      titleColor: "text-[#040725]",
      // info: "No completed projects, making a positive impact across the world",
      purpose: [
        "Supporting Association: Mowdministries e.V",
        "Administrative Headquarters: Rosenstr. 57, 59077 Hamm, Deutschland",
        "Legal Status: Non-profit religious organization",
        "Registration Number: VR 4773, District Court Saarbrücken",
        "Tax Number: 322/5938/1452",
      ],
      bg: "bg-[#F8F8F8]",
    },
  ];
  return (
    <div className=" h-auto">
      <div className=" w-full flex gap-4 flex-wrap justify-center">
        {boxes.map((item, index) => (
          <div className={`flex ${item.bg} ${item.titleColor}`} key={index}>
            <div className=" p-8 text-left w-[450px] h-full flex flex-col gap-4" >
            {item.info && <div className=" w-[20%] bg-[#FFFFFF] h-[1px]"></div> }

              <p className={`text-[2.5rem] font-[inter-bold] ${item.info && `text-left`}`}>{item.title}</p>
              {item.info && <p className=" ">{item.info}</p>}
              {item.purpose &&
                item.purpose.map((purpose) => (
                  <p className="text-left">{purpose}</p>
                ))}
            </div>
            <div className=" h-[30%] my-auto flex w-[1px] bg-[#CFCFCF]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
