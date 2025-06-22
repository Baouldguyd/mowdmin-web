import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/assets/Images/newmowdlogo.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040725] text-white py-10 h-auto">
      <div className="">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section: Organization Info */}
          <div>
            <div className=" flex gap-2 items-center">
               <div className="h-full" style={{ perspective: '1000px' }}>
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-16 mb-4 flip-horizontal-360"
                />
              </div>
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
                <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                 href="https://www.google.com/maps/place/Mowdministries+e.V/@51.656108,7.72469,17z/data=!4m6!3m5!1s0x47b97329f2813457:0x9bb67cb6fd55b9b!8m2!3d51.6561085!4d7.7246903!16s%2Fg%2F11sn7nn_tr?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D">
                  <MapPin className="w-4 h-4" /> 59077 Hamm, Germany
                </a>
              </p>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-[inter-semibold] mb-2">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/donate">Donate</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-[inter-semibold] mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>

                <li>
                  <a href="/privacy-policy">Privacy & Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Resources & Socials */}
          <div>
            <h3 className="font-[inter-semibold] mb-2">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>Blogs</li>
              <li>Community</li>
              <li>Newsletter</li> */}
              <li>
                <a href="mailto:info@mowdministries.org">Support</a>
              </li>
              {/* <li>Help center</li> */}
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-600 items-center justify-between mt-10 text-sm flex  py-4 md:px-6 max-sm:flex-col max-sm:gap-4">
          <p>© 2004 - {currentYear} Mowdministries e.V - All rights reserved</p>
          <div className=" flex justify-center gap-4">
            <span>
              <a href="/privacy-policy">Privacy & Policy</a>
            </span>
            {/* <span><a href="https://isabitech.com.ng" target="_blank" referrerPolicy="no-referrer">  Powered by iSabi Technologies</a></span> */}
          </div>
          <div className="flex gap-4 ">
            <a
              href="https://www.instagram.com/mowdministries_e.v/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaInstagram className="w-5 h-5 cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/@mowdministries"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaTiktok className="w-5 h-5 cursor-pointer" />
            </a>
            <a
              href="https://facebook.com/GospleofSalvation"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaFacebook className="w-5 h-5 cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLEcq4XDtqcWSDys7_fmvYw"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaYoutube className="w-5 h-5 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
