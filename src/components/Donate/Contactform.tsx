"use client";

import { useState } from "react";
import mastercard from "@/assets/Images/mastercard.jpg";
import visa from "@/assets/Images/visa.jpg";
import americanExpress from "@/assets/Images/american-express.jpg";
import stripe from "@/assets/Images/stripe.jpg";
import discover from "@/assets/Images/discover.jpg";
// import paypal from "@/assets/Images/paypal.jpg";
import Image from "next/image";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Optional: Send to server, show toast, reset form, etc.
  };
  const paymentOptions = [
    {
      name: "MasterCard",
      icon: mastercard,
      bg: "bg-[#FFFFFF]",
    },
    {
      name: "Visa",
      icon: visa,
      bg: "bg-[#FFFFFF]",
    },
    // {
    //     name: "PayPal",
    //     icon: "/assets/Images/paypal.jpg",
    // },
    {
      name: "American Express",
      icon: americanExpress,
      bg: "bg-[#016FD0]",
    },
    {
      name: "Discover",
      icon: discover,
      bg: "bg-[#FFFFFF]",
    },
    {
      name: "Stripe",
      icon: stripe,
      bg: "bg-[#32364E]",
    },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="min-md:w-[40rem]  mx-auto font-[inter-regular] bg-white p-10 rounded-xl shadow-md space-y-6 text-[#000]"
    >
      <h2 className="text-2xl font-[inter-bold] text-center">
        Donate by Bank Transfer
      </h2>
      <span className=" flex mx-auto w-fit gap-2 text-[#5D5D5D] text-[14px] font-[inter-bold]">
        <p>IBAN: DE71 3506 0190 2100 5600 14</p>
        <p>Bank Name: KD Bank</p>
      </span>

      <span className=" w-full items-center flex gap-2">
        <div className=" h-[1px] bg-[#E6E6E6] w-[30%]"></div>
        <p className=" text-[14px] text-[#5D5D5D]">
          Or through a secure payment
        </p>
        <div className=" h-[1px] bg-[#E6E6E6] w-[30%]"></div>
      </span>

      <div className="">
        <div className="flex gap-4 mt-4">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className={`flex items-center border p-4 border-[#E6E6E6] gap-2  ${option.bg} rounded-md p-2`}
            >
              <Image
                width={"100"}
                height={"90"}
                src={option.icon}
                alt={option.name}
                className=" "
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" w-[80%] mx-auto text-center flex flex-col gap-2">
        <h1 className=" text-2xl font-[inter-bold]">Notification</h1>
        <p className=" text-[#5D5D5D] text-[14px] font-[inter-bold]">
          Please fill in this field to share your suggestions, receive updates,
          or provide additional information
        </p>
      </div>

      <div className=" font-[inter-regular]">
        <label htmlFor="name" className="block  mb-1">
          Full Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block  mb-1">
          Email address
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
       <div>
        <label htmlFor="phone" className="block  mb-1">
          Phone Number
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      

      <div>
        <label htmlFor="message" className="block  mb-1">
          Message <i>(Please indicate what your donation is intended for)</i>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#040725] text-white  py-4 rounded-md hover:bg-blue-700 cursor-pointer font-[inter-bold] transition"
      >
        Send Message
      </button>
      <div className="">
        <p className=" font-[inter-bold]">All donations are tax-deductible in Germany.</p>
        <i>P.S. You can request a donation receipt.</i>
        <p className=" font-[inter-bold]">If you would like a receipt, please specify the purpose of your donation.</p>

      </div>
    </form>
  );
};

export default ContactForm;
