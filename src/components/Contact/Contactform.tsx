"use client";
import React, { useState } from "react";

const Contactform = () => {
  const [form, setForm] = useState({
    fullName: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
    news: "",
    captchaChecked: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.captchaChecked) {
      alert("Please verify that you are not a robot.");
      return;
    }
    console.log("Submitted form:", form);
    // Here you can post data to your API or third-party integration
  };

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
                  value={form.fullName}
                  onChange={handleChange}
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
                  value={form.fullAddress}
                  onChange={handleChange}
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
                  value={form.phoneNumber}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.news}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Simulated reCAPTCHA */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="captchaChecked"
                  checked={form.captchaChecked}
                  onChange={handleChange}
                  id="captcha"
                  className="w-5 h-5"
                />
                <label htmlFor="captcha" className="text-sm">
                  I'm not a robot
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#040725] text-white cursor-pointer font-[inter-bold] py-4 rounded hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
