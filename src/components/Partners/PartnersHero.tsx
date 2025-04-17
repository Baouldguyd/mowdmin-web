"use client";
import Image from "next/image";
import partnersBg from "@/assets/Images/partnersBg.jpg";

const PartnersHero = () => {
  return (
    <div className=" relative  w-full h-[90svh]">
      <Image
        src={partnersBg} // Save your image in `public/images/hero-man.png`
        alt="Donation hero"
        className="w-full h-full absolute"
      />
      <section className="bg-[#040725CC] text-white py-16 px-6 md:px-20 relative h-full">
        <div className=" h-full  flex md:items-center">
          {/* Left Text */}
          <div className=" md:h-[60%] my-auto min-lg:w-[50%]  ">
            <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight mb-6">
              Helping people thrive through purpose-driven and inspiring
              partnership
            </h1>
            <p className="text-[#CFCFCF]   text-base mb-8 md:text-[1.3rem] font-[inter-bold]">
              Are you interested in a partnership and would you like to
              undertake this task together with us?
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="red-button text-white px-6 py-3 rounded-md font-[inter-bold] hover:bg-red-700 transition">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersHero;
