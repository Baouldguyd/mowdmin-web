"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import eventBg from "@/assets/Images/closeupBg.png";
import portraitImg from "@/assets/Images/Events/portraitEvent.png";
import landScapeImg from "@/assets/Images/Events/landscapeEvent.png";

const EventsHeroPage: React.FC = () => {
  // Set your fixed event date here (format: YYYY-MM-DDTHH:MM:SS)
  const eventDate = "2025-09-06T12:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countDown = [
    {
      period: timeLeft.days,
      time: "Days",
    },
    {
      period: timeLeft.hours,
      time: "Hours",
    },
    {
      period: timeLeft.minutes,
      time: "Minutes",
    },
    {
      period: timeLeft.seconds,
      time: "Seconds",
    },
  ]; 

  return (
    <div className="min-h-[90svh] relative flex items-end justify-center bg-[#040725AD]">
      <Image src={landScapeImg} alt="" className="absolute h-full w-full max-sm:hidden" />
            <Image src={portraitImg} alt="" className="absolute h-full w-full min-md:hidden " />

      {/* <div className=" h-[90svh] w-full z-[10]"></div> */}
      <div className="bg-[#040725AD] rounded-lg w-[90%] z-[100] absolute -bottom-60 min-md:-bottom-75 p-6 flex flex-col gap-4 h-auto">
        <p className="font-[inter-bold] text-center text-[22px] md:text-[2.2rem] text-[#fff]">
          Open air Evangelisation Hamm Westf. September 6, 2025
        </p>
        <p className="text-center text-[#fff] ">
         Event Countdown in:
        </p>
        <div className="flex gap-8 mx-auto w-fit ">
          {countDown.map((count, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-14 w-14 min-md:h-24 min-md:w-24 bg-[#FFFFFF] flex items-center justify-center rounded-full border-[#B3B3B3] border-4">
                <p className="min-md:text-[2.5rem] text-[1.4rem] font-[inter-bold]">
                  {String(count.period).padStart(2, "0")}
                </p>
              </div>
              <p className="text-[#fff] text-center text-[15px]">{count.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsHeroPage;
