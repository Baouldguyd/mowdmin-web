"use client";
import { useForm } from "@formspree/react";
import "@/components/Loader/loader.css"; // Import your loader CSS here
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PartnersForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  const [state, handleSubmit] = useForm("xqaqarbq");

  return (
    <div className="min-h-[100svh] min-md:p-20 bg-[#fff] ">
      <div className=" h-full  ">
        <div className="mx-auto min-lg:w-[50%] h-full">
          <div className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-[inter-bold] text-center mb-2">
              PARTNER WITH US
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Would you like to become a partner of Mowdministries? Make sure
              you fill the partnership form. As a partner, you'll be joining a
              community committed to service, growth, and transformation.
              Together, we can make a lasting impact and bring hope to countless
              lives. We look forward to welcoming you into our midst!
            </p>

            <h2 className="text-center font-[inter-bold] text-lg mb-6">
              Please fill out the partnership form here
            </h2>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-6 rounded-lg shadow-md"
              >
                <div>
                  <label className="block font-medium mb-1" htmlFor="fullName">
                    Full name:
                  </label>
                  <input
                    name="fullName"
                    id="fullName"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="fullAddress"
                  >
                    Full address:
                  </label>
                  <input
                    name="fullAddress"
                    id="fullAddress"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    className="block font-medium mb-1"
                    htmlFor="phoneNumber"
                  >
                    Phone number:
                  </label>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="email">
                    E-mail address:
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1" htmlFor="news">
                    News:
                  </label>
                  <textarea
                    name="news"
                    id="news"
                    rows={4}
                    className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Simulated reCAPTCHA */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="captchaChecked"
                    id="captcha"
                    className="w-5 h-5"
                  />
                  <label htmlFor="captcha" className="text-sm">
                    I'm not a robot
                  </label>
                </div>

                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  type="submit"
                  className="w-full bg-[#040725] text-white cursor-pointer font-[inter-bold] py-4 rounded hover:bg-gray-800 transition"
                >
                  {state.submitting ? <div className="loader"></div> : "Submit"}
                </button>
              </form>
            </motion.div>
            {state.succeeded && (
              <p className="text-green-500 text-center mt-4">
                Thank you for your interest in partnering with us! We will get
                back to you soon.
              </p>
            )}
            {state.errors && (
              <p className="text-red-500 text-center mt-4">
                There was an error submitting the form. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersForm;
