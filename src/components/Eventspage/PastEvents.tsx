"use client";
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import pastEventsOne from "@/assets/Images/pastEvents/pastEvents (1).png";
import pastEventsTwo from "@/assets/Images/pastEvents/pastEvents (2).png";
import pastEventsThree from "@/assets/Images/pastEvents/pastEvents (3).png";
import pastEventsFour from "@/assets/Images/pastEvents/pastEvents (4).png";
import pastEventsFive from "@/assets/Images/pastEvents/pastEvents (5).png";
import pastEventsSix from "@/assets/Images/pastEvents/pastEvents (6).png";
import pastEventsSeven from "@/assets/Images/pastEvents/pastEvents (7).png";
import pastEventsEight from "@/assets/Images/pastEvents/pastEvents (8).png";
import pastEventsNine from "@/assets/Images/pastEvents/pastEvents (9).png";
import pastEventsTen from "@/assets/Images/pastEvents/pastEvents (10).png";

const PastEvents = () => {
  const eventImages = [
    pastEventsOne,
    pastEventsTwo,
    pastEventsThree,
    pastEventsFour,
    pastEventsFive,
    pastEventsSix,
    pastEventsSeven,
    pastEventsEight,
    pastEventsNine,
    pastEventsTen,
  ]

  return (
    <section className=" relative py-8 w-[80vw] min-h-[60vh] mx-auto my-8">
      <h2 className="text-center text-2xl md:text-3xl font-[inter-bold] mb-6">
        Some of our <span className="text-red-600">Past Events</span>
      </h2>
      <div className=" flex flex-col gap-4">
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {eventImages.map((src, index) => (
          <div
            key={index}
            className="mx-4   rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Event ${index + 1}`}
              width={300}
              height={200}
              className="w-fit h-auto "
            />
          </div>
        ))}
      </Marquee>
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {eventImages.map((src, index) => (
            <div
            key={eventImages.length - 1 - index}
            className="mx-4   rounded-lg overflow-hidden"
            >
            <Image
              src={src}
              alt={`Event ${eventImages.length - index}`}
              width={300}
              height={200}
              className="w-fit h-auto "
            />
            </div>
        ))}
      </Marquee>
      </div>
    </section>
  );
};

export default PastEvents;