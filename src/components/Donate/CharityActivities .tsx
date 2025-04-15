"use client";

import { useState } from "react";
import Image from "next/image";

const activities = {
  "2022": [
    {
      src: "/charity/donation2022-1.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2022-2.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2022-3.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2022-1.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2022-2.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2022-3.jpg",
      alt: "Donation of school supplies for 2022 to orphans and disadvantaged children",
    },
  ],
  "2023": [
    {
      src: "/charity/donation2023-1.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2023-2.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2023-1.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2023-2.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2023-1.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
    {
      src: "/charity/donation2023-2.jpg",
      alt: "Donation of school materials for 2023 to orphans and disadvantaged children",
    },
  ],
  "2024": [
    {
      src: "/charity/donation-2024-1.jpg",
      alt: "Wheelchair donation for the Saint Paul Clinic in Pobé in the Benin Republic",
    },
    {
      src: "/charity/donation-2024-2.jpg",
      alt: "Assisting with medical care for Ms. Rebecca",
    },
    {
      src: "/charity/donation-2024-1.jpg",
      alt: "Wheelchair donation for the Saint Paul Clinic in Pobé in the Benin Republic",
    },
    {
      src: "/charity/donation-2024-2.jpg",
      alt: "Assisting with medical care for Ms. Rebecca",
    },
    {
      src: "/charity/donation-2024-1.jpg",
      alt: "Wheelchair donation for the Saint Paul Clinic in Pobé in the Benin Republic",
    },
    {
      src: "/charity/donation-2024-2.jpg",
      alt: "Assisting with medical care for Ms. Rebecca",
    },
  ],
};

const CharityActivities = () => {
  const [activeYear, setActiveYear] = useState<keyof typeof activities>("2022");

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-[inter-bold] text-center mb-8">
        Charity Activities
      </h2>

      {/* Year Tabs */}
      <div className="flex justify-center gap-8 mb-12 cursor-ponter text-lg font-semibold">
        {(["2022", "2023", "2024"] as const).map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`pb-2 border-b-4 transition  ${
              activeYear === year
                ? "border-red-600 text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities[activeYear].length > 0 ? (
          activities[activeYear].map((img, idx) => (
            <div key={idx} className="text-center">
              <div className="rounded-lg overflow-hidden mb-4 ">
                <Image
                  src={img.src}
                  alt={`Donation ${activeYear}`}
                  width={300}
                  height={300}
                  className=" object-cover mx-auto flex rounded-md"
                />
              </div>
              <h3 className="font-semibold text-lg">Donation {activeYear}</h3>
              <p className="text-gray-600 text-sm w-[70%] mx-auto">
               {img.alt}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No charity activities recorded for {activeYear}.
          </p>
        )}
      </div>
    </section>
  );
};
export default CharityActivities;
