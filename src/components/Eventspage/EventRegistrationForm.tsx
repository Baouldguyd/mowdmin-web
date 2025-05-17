"use client";

import { useForm } from "@formspree/react";
import { Loader } from "lucide-react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const EventRegistrationForm = () => {
  const [state, handleSubmit] = useForm("xzzrznga");
   const ref = useRef(null);
    const isInView = useInView(ref, { once: false }); // animate only once
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }} // start 50px to the left
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg w-full"
    >
      <h2 className="text-lg font-[inter-bold] mb-4 text-center">
        Please register for the upcoming event
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First name:</label>
            <input
              name="firstName"
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last name:</label>
            <input
              name="lastName"
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Land:</label>
            <input
              name="land"
              type="text"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium">
              Zip:
            </label>
            <input
              name="zip"
              type="text"
              id="zip"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">
              Street and Number:
            </label>
            <input
              required
              name="streetAndNumber"
              id="streetAndNumber"
              type="text"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Phone number:</label>
            <input
              required
              name="phoneNumber"
              type="text"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">E-mail:</label>
            <input
              name="email"
              type="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Short message:</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded-md"
            rows={3}
          ></textarea>
        </div>

        <div className="flex justify-center md:justify-end">
          <button
            disabled={state.submitting}
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="bg-[#040725] black-button text-white px-6 py-2 rounded-md w-full md:w-auto font-[inter-bold]"
          >
            {state.submitting ? <Loader /> : "Submit"}
          </button>
        </div>

        {state.succeeded && (
          <p className="text-green-500 mt-4">Form submitted successfully!</p>
        )}
        {state.errors && (
          <p className="text-red-500 mt-4">
            There was an error submitting the form. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default EventRegistrationForm;
