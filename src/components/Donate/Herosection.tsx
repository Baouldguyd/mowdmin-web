import Image from "next/image";
import donateBg from "@/assets/Images/donateBg.jpg";
import ArrowTopRight from "@/assets/Icons/Arrow/ArrowTopRight";

export default function HeroSection() {
  return (
    <div className=" relative  w-full h-[90svh]">
      <Image
        src={donateBg} // Save your image in `public/images/hero-man.png`
        alt="Donation hero"
        className="w-full h-full absolute"
      />
      <section className="bg-[#040725CC] text-white py-16 px-6 md:px-20 relative h-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <div>
            <p className="text-sm text-[#94864E] font-semibold uppercase mb-2">
              Charitable deeds
            </p>
            <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight mb-6">
              Only by supporting one <br />
              another can we make the <br />
              world a better place.
            </h1>
            <p className="text-[#CFCFCF] border-l-4 border-red-600 pl-4 text-base mb-8 md:text-[1.3rem] font-[inter-bold]">
              Mowdministries exclusively and directly pursues <br />
              charitable and religious purposes within the meaning of the tax
              code.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="red-button text-white px-6 py-3 rounded-md font-[inter-bold] hover:bg-red-700 transition">
                Donate Now
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md font-[inter-bold] flex items-center gap-2 hover:bg-gray-200 transition">
                Become a Partner
                <ArrowTopRight/>
                {/* <ArrowRight className="w-4 h-4" /> */}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="">
            
          </div>
        </div>
      </section>
    </div>
  );
}
