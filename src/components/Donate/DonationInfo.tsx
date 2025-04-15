"use client";
import ArrowTopRight from "@/assets/Icons/Arrow/ArrowTopRight";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DonationInfo = () => {
  const boxes = [
    {
      title: "15+",
      info: "over 15 countries worldwide have benefited from our support",
    },
    {
      title: "100k+",
      info: "No of supporters and volunteers across the globe",
    },
    {
      title: "86%",
      info: "No completed projects, making a positive impact across the world",
    },
  ];

  const donateImages = [
    "/donate/donate (1).jpg",
    "/donate/donate (2).jpg",
    "/donate/donate (3).jpg",
    "/donate/donate (4).jpg",
    "/donate/donate (5).jpg",
    "/donate/donate (6).jpg",
    "/donate/donate (7).jpg",
    "/donate/donate (8).jpg",
    "/donate/donate (9).jpg",
  ];

  const aboutUs = [
    "MOWDMINISTRIES (The Gospel of Salvation) Pobé, Benin.",
    "MOWDMINISTRIES (The Gospel of Salvation) Gbokoto, Nigeria",
    "People interested in visiting churches and other reputable social organizations in Benin and Africa.",
    "Support people with social and psychological problems.",
    "Support the well-being of young and old.",
    "Education and training, including assistance to students.",
    "Promoting development cooperation.",
    "International evangelists from Benin, Togo, Nigeria and neighboring African countries who need our help.",
    "Welfare, in particular the purposes of the officially recognized independent welfare associations (Section 23 of the Sales Tax Implementation Ordinance), their sub-associations and their affiliated institutions and institutions.",
    "Help for those persecuted politically, racially or religiously, for refugees, displaced persons, repatriates, late repatriates, war victims, war survivors, and prisoners of war, civilian victims and disabled, as well as help for victims of crime. Promoting the memory of those persecuted and victims of war and disaster,also promoting the search service for missing persons.",
  ];

  return (
    <div className="min-h-[100svh] flex flex-col">
      {/* boxes */}
      <div className=" h-auto bg-[#F8F8F8] flex gap-2  ">
        {boxes.map((item, index) => (
          <div className=" flex">
            <div className=" p-10 text-center w-[384px] h-full " key={index}>
              <p className=" text-[4rem] font-[inter-bold]  ">{item.title}</p>
              <p className=" text-[#00000099]">{item.info}</p>
            </div>
            <div className=" h-[30%] my-auto flex w-[1px] bg-[#CFCFCF]"></div>
          </div>
        ))}
        <div className=" p-10 text-left h-full bg-[#040725] flex flex-col gap-4">
          <div className="w-[30%] h-[1px] bg-[#fff]"></div>
          <p className=" text-[28px] font-[inter-bold] text-[#fff]  ">
            Our Goal Is To Help The Needy.
          </p>
          <p className=" text-[#fff]">
            Become a Partner <ArrowTopRight />
          </p>
        </div>
      </div>
      {/* About us */}
      <div className=" p-6  h-auto flex gap-4 px-8 my-20">
        {/* Images div */}
        <div className=" w-[50%] flex gap-4 flex-wrap justify-center">
          {donateImages.map((image, index) => (
            <div key={index} className=" h-60 w-60 ">
              <Image src={image} width={240} height={150} alt="image" className="h-full w-full" />
            </div>
          ))}
        </div>
        {/* ABout us DIv */}
        <div className=" w-[50%] flex flex-col gap-4">
          <p className=" text-[#ff0000] text-[15px] md:text-[15px] font-[inter-bold]">
            About us
          </p>
          <h2 className=" text-[#040725] text-xl font-[inter-bold]">
            Mowdministries eV promotes the Gospel, supports evangelists, and
            help the needy.
          </h2>
          {aboutUs.map((item) => (
            <div className=" flex gap-2">
              <span className="">
                <FaCheckCircle />
              </span>{" "}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationInfo;
