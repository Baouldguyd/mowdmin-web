import React from "react";

const Locate = () => {
  return (
    <div className=" h-[100svh] bg-[#fff]  flex flex-col gap-4">
      <div className=" w-[70%] mx-auto flex flex-col gap-2">
      <h1 className="font-[inter-bold] text-center text-2xl min-md:text-4xl ">YOU'LL FIND US HERE</h1>
      <span className=" text-center flex mx-auto ">
        <p className=" font-[inter-bold] ">OPENING HOURS:</p> Mon - Fri 09:00 AM
        - 05:00 PM, Sat 09:00 AM - 12:00 PM, Sun 12:00 PM - 03:00 PM
      </span>
      </div>
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
    </div>
  );
};

export default Locate;
