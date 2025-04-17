"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  eventDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ eventDate }) => {
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

  return (
    <div className="text-center w-full  ">
      <h2 className="min-md:text-lg  font-[inter-bold]">EVENTS BEGINS IN</h2>
      <div className="flex justify-center space-x-4 mt-2 text-red-500 min-md:text-2xl font-[inter-bold] flex-wrap">
        <div className=" min-md:p4 p-3 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.days).padStart(2, "0")}<span className="block  text-[10px] min-md:text-xs text-gray-500">Days</span></div>
        <div className=" min-md:py-4 min-md:px-4 py-3 px-3 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.hours).padStart(2, "0")}<span className="block text-[10px] min-md:text-xs text-gray-500">Hours</span></div>
        <div className=" min-md:p4 p-3 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.minutes).padStart(2, "0")}<span className="block text-[10px] min-md:text-xs text-gray-500">Minutes</span></div>
        <div className=" min-md:p4 p-3 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.seconds).padStart(2, "0")}<span className="block text-[10px] min-md:text-xs text-gray-500">Seconds</span></div>
      </div>
    </div>
  );
};

export default Countdown;
