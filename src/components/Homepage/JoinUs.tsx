import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const JoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" h-[100svh]"
    >
      <p className=" text-center text-2xl text-[#000] font-[inter-bold]">
        JOIN US FOR SERVICE
      </p>
      <p className=" text-center text-[#000] text-lg">
        EVERY SUNDAY 8:30 AM - 02:00 PM
      </p>
      <p className=" text-center w-[80%] mx-auto text-[#B3B3B3] mt-4">
        Join us for a uplifting and inspiring service every Sunday from 8:30 AM
        to 2:00 PM, where we come together in worship, prayer, and fellowship. A
        detailed map is provided below to help you find your way easily.
      </p>
      {/* Map */}
      <div className=" h-[80%] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.203605835179!2d7.722115376479326!3d51.656108471847475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b97329f2813457%3A0x9bb67cb6fd55b9b!2sMowdministries%20e.V!5e0!3m2!1sen!2sng!4v1743572569301!5m2!1sen!2sng"
          //   width="800"
          //   height="450"
          style={{ border: "0", width: "100%", height: "80%" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default JoinUs;
