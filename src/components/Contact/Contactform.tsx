"use client";
import { useForm } from "@formspree/react";
import { Loader } from "lucide-react";
import React, { useState } from "react";

const Contactform = () => {
  const [state, handleSubmit] = useForm("manonrje");

  return (
    <div className="min-h-[100svh] min-md:p-20 bg-[#fff] ">
      <div className=" h-full  ">
        <div className="mx-auto min-lg:w-[50%] h-full">
          <div className="max-w-2xl mx-auto px-4 py-12">
            <h2 className="text-center text-lg mb-6">
              Please fill the form here
            </h2>

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
                <label className="block font-medium mb-1" htmlFor="fullAddress">
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
                <label className="block font-medium mb-1" htmlFor="phoneNumber">
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
                  Message:
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
                disabled={state.submitting}
                type="submit"
                className="w-full bg-[#040725] text-white cursor-pointer font-[inter-bold] py-4 rounded hover:bg-gray-800 transition"
              >
                {state.submitting ? <Loader /> : "Submit"}
              </button>
            </form>
            {state.succeeded && (
              <p className="text-green-500 text-center mt-4">
                Thank you for your message! We will get back to you soon.
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

export default Contactform;
