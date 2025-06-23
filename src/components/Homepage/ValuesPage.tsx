"use client";
import Baptism from "@/assets/Icons/Values/Baptism";
import Charitable from "@/assets/Icons/Values/Charitable";
import Events from "@/assets/Icons/Values/Events";
import Worship from "@/assets/Icons/Values/Worship";
import crowd from "@/assets/Images/crowd.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
// variants
import { fadeIn } from "@/variants";
import { hover, motion, useInView } from "framer-motion";
import { useRef } from "react";

const ValuesPage = () => {
  const values = [
    {
      name: "Events & Concerts",
      icon: <Events />,
      link: "/events",
    },
    {
      name: "Worship",
      icon: <Worship />,
      link: "/events",
    },
    {
      name: "Baptism",
      icon: <Baptism />,
      link: "/events",
    },
    {
      name: "Charitable Acts",
      icon: <Charitable />,
      link: "/donate",
    },
  ];

  const router = useRouter();

  const handleDiscoverMore = () => {
    router.push("/events");
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" flex flex-col bg-[#fff] gap-4 h-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
        transition={{ duration: 0.9, ease: "easeOut" }}
        className=" h-auto  my-auto flex flex-col gap-6 md:px-6 md:mt-8"
      >
        <p className="text-[#5D5D5D] text-2xl font-semibold text-center">
          OUR VALUES
        </p>
        <p className=" text-[#B3B3B3] text-center w-[70%] mx-auto ">
          we bring people together through inspiring events and concerts, offer
          faith-filled books in English, French, and German, and extend love
          through charity and Baptism. Join us in making a difference through
          worship, learning, and generosity
        </p>
        <div className=" flex md:gap-8 gap-4 mx-auto flex-wrap justify-center">
          {values.map((value, index) => (
            <div key={index} className="">
                <div
                className={`border border-[#B3B3B3] rounded-full min-md:w-50 min-md:h-50 w-20 h-20 flex justify-center items-center transition-colors duration-300 hover:bg-[#f3f3f3] hover:border-[#040725] hover:cursor-pointer`}
                >
                {value.icon}
                </div>
              <p className=" text-center md:text-[15px] text-[12px]">
                {value.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
       transition={{ duration: 0.8, ease: "easeOut" }}
        className=" min-h-[45%] my-auto min-md:p-10 p-4 "
      >
        <div className="relative   min-h-[75%] min-md:w-[70%] w-full mx-auto">
          <Image
            src={crowd}
            alt="crowd"
            className=" w-full h-[250px]  md:h-70 rounded-md blur-sm"
          />
          <div className=" h-[250px] md:h-70 absolute  top-10 left-10 max-sm:left-0 w-full rounded-md ">
            <Image
              src={crowd}
              alt="crowd"
              className=" w-full h-full rounded-md blur-sm"
            />
            <div className=" absolute flex flex-col gap-4 top-0 p-4 bg-[#0000008a] rounded-md h-full w-full ">
              <p className=" w-[35%] md:text-2xl font-[inter-bold] text-[#fff]">
                One Voice, One Spirit, One Worship
              </p>
              <p className=" text-[#fff] text-[12px] md:text-12px md:w-[60%] w-full">
                Join us for a powerful time of worship where hearts unite in
                praise and God's presence fills the atmosphere. Let’s lift our
                voices, raise our hands, and worship together in faith and love.
              </p>
              <button
                onClick={handleDiscoverMore}
                className="  py-3 px-4 w-30 md:mt-4 bg-[#FF0000] text-[#fff] text-[13px] rounded-md cursor-pointer "
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ValuesPage;
