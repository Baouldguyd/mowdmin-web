"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Concert: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the CAPTCHA");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
      <input type="text" name="fullName" placeholder="Full name" onChange={handleChange} required className="w-full border p-2 rounded"/>
      <input type="text" name="fullAddress" placeholder="Full address" onChange={handleChange} required className="w-full border p-2 rounded"/>
      <input type="tel" name="phoneNumber" placeholder="Phone number" onChange={handleChange} required className="w-full border p-2 rounded"/>
      <input type="email" name="email" placeholder="E-mail address" onChange={handleChange} required className="w-full border p-2 rounded"/>

      {/* <ReCAPTCHA
        sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
        onChange={() => setCaptchaVerified(true)}
      /> */}

      <button type="submit" className="w-full bg-[#040725] black-button text-white py-2 rounded font-[inter-bold]">Submit</button>
    </form>
  );
};

export default Concert;
