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
    <div className="text-center">
      <h2 className="text-lg font-bold">EVENTS BEGINS IN</h2>
      <div className="flex justify-center space-x-4 mt-2 text-red-500 text-2xl font-[inter-bold]">
        <div className=" p-4 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.days).padStart(2, "0")}<span className="block text-xs text-gray-500">Days</span></div>
        <div className=" py-4 px-6 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.hours).padStart(2, "0")}<span className="block text-xs text-gray-500">Hours</span></div>
        <div className=" p-4 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.minutes).padStart(2, "0")}<span className="block text-xs text-gray-500">Minutes</span></div>
        <div className=" p-4 rounded-full border border-[#B3B3B3] shadow-md">{String(timeLeft.seconds).padStart(2, "0")}<span className="block text-xs text-gray-500">Seconds</span></div>
      </div>
    </div>
  );
};

export default Countdown;
