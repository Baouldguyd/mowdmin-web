"use client";
import {useRef} from "react";
import background from "@/assets/Images/subscribeImgnew.jpg";
import Image from "next/image";
import { useForm } from "@formspree/react";
import "@/components/Loader/loader.css"; // Import your loader CSS here
import { motion, useInView } from "framer-motion";


const NewsLetter = () => {
  const [state, handleSubmit] = useForm("xrbqbnkn");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <div className=" h-auto  flex font-[inter-regular]   relative ">
      <Image src={background} alt="bg" className=" absolute top-0 h-full  blur-2xl" />
      <div className="bg-[#04072599] z-[10]  w-full h-full flex justify-center items-center">
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}className=" h-full py-5 max-sm:py-10 md:w-[50%] md:h-[50%]  flex flex-col gap-6">
          <p className=" text-4xl max-sm:text-2xl text-[#fff] font-[inter-bold] text-center mt-8 ">
            Subscribe to Our Church Newsletter!
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" h-[4.5rem] border-4 border-[#B3B3B3] relative">
              <input
                type="email"
                name="email"
                id="email"
                className=" w-full bg-white h-full p-4"
                placeholder="Enter email address"
                required
              />
              <button
                disabled={state.submitting}
                type="submit"
                className=" bg-[#040725] text-[#fff] absolute right-5 py-4 px-6 top-1 text-[15px] rounded-md font-[inter-bold] cursor-pointer "
              >
                {state.submitting ? <div className="loader"></div> : "Subscribe"}
              </button>
            </div>
          </form>

          {state.succeeded && (
            <p className=" text-[#fff] text-[16px] text-center">
              Thank you for subscribing!
            </p>
          )}
          <p className=" text-[#fff] text-[16px] text-center">
            By subscribing to our church newsletter, you agree to receive
            recurring automated messages, such as program reminders, news
            update, upcoming events and concerts, via automated technology
            including email.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
