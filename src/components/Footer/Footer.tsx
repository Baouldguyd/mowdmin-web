import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/assets/Images/newmowdlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#040725] text-white py-10 h-auto">
      <div className="">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section: Organization Info */}
          <div>
            <div className=" flex gap-2 items-center">
              <Image
                src={Logo}
                alt="Mowdministries Logo"
                className="w-16 mb-4"
              />
              <h2 className="text-lg font-[inter-semibold]">
                Mowdministries e.V (Gospel of Salvation)
              </h2>
            </div>
            <p className="text-sm mt-2 italic text-[#CFCFCF]">
              Non-profit religious organization, registered under VR 4773,
              Saarbrücken District Court.
            </p>
            <p className="text-sm mt-2 italic text-[#CFCFCF]">
              <strong className=" text-[#fff]">Supervisory Authority:</strong>{" "}
              Tax Office Hamm (Westphalia)
            </p>
            <p className="text-sm text-[#CFCFCF] ">
              <strong className=" text-[#fff]">Tax ID:</strong> 322/5938/1452
            </p>
            <p className="text-sm text-[#CFCFCF]">
              <strong className=" text-[#fff]">
                Economic Identification Number:
              </strong>{" "}
              322/5938/1452
            </p>
            <div className="mt-4 space-y-2 text-sm text-[#CFCFCF]">
              <a href="tel:+491744370644" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +49 174 437 0644
              </a>
              <a
                href="mailto:info@mowdministries.org"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> info@mowdministries.org
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 59077 Hamm, Germany
              </p>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-[inter-semibold] mb-2">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Event</li>
                <li><a href="/gallery">Gallery</a></li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-[inter-semibold] mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>FAQs</li>
                <li><a href="/donate">Donate</a></li>
                <li>Partnership</li>
                <li>Terms & Conditions</li>
                <li><a href="/privacy-policy">Privacy & Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section: Resources & Socials */}
          <div>
            <h3 className="font-[inter-semibold] mb-2">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Blogs</li>
              <li>Community</li>
              <li>Newsletter</li>
              <li><a href="mailto:info@mowdministries.org">Support</a></li>
              <li>Help center</li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-600 items-center justify-between mt-10 text-sm flex  py-4 md:px-6 max-sm:flex-col max-sm:gap-4">
          <p>© 2004 - 2024 Mowdministries e.V - All rights reserved</p>
          <div className=" flex justify-center gap-4">
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
          </div>
          <div className="flex gap-4 ">
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaXTwitter className="w-5 h-5 cursor-pointer" />
            <FaFacebook className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
