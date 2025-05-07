"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Images/newmowdlogo.png";
import { useRouter } from "next/navigation";
import GermanIcon from "@/assets/Icons/Language/GermanIcon";
import EnglishIcon from "@/assets/Icons/Language/EnglishIcon";
import FrenchIcon from "@/assets/Icons/Language/FrenchIcon";
import English from "@/assets/Icons/Language/English.png";
import French from "@/assets/Icons/Language/French.png";
import German from "@/assets/Icons/Language/Germany.png";
import DropDown from "@/assets/Icons/Language/DropDown";
import DropUp from "@/assets/Icons/Language/DropUp";
import HamburgerIcon from "@/assets/Icons/Hamburger";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Events", href: "/events" },
    { name: "Shops", href: "/shops" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
    { name: "Partnership", href: "/partnership" },
  ];

  const languages = [
    { language: "English", icon: <EnglishIcon />, image: English },
    { language: "German", icon: <GermanIcon />, image: German },
    { language: "French", icon: <FrenchIcon />, image: French },
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]); // Default language
  const [openLanguages, setOpenLanguages] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState("");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentPath(window.location.pathname);
    }
  });

  return (
    <div className=" h-10 flex my-6  justify-between px-6 font-[inter-bold]   ">
      {/* Logo */}
      <div className="h-full">
        <Image src={Logo} alt="Logo" className="h-full w-10" />
      </div>

      <div className="flex gap-4 items-center ">
        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="inline-flex gap-6 justify-around ">
            {navItems.map((item, index) => {
              const activeLink = currentPath === item.href;
              return (
                <li
                  key={index}
                  onClick={() => router.push(item.href)}
                  className={`cursor-pointer  ${
                    activeLink ? " underline text-[#FFFFFF]" : "text-[#CFCFCF]"
                  }`}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language Selector (Custom Dropdown) */}
        <div className="relative border border-[#5D5D5D] rounded-md p-2">
          {/* Toggle Dropdown */}
          <button
            onClick={() => setOpenLanguages(!openLanguages)}
            className="flex cursor-pointer items-center gap-2 px-2 py-1 bg-transparent rounded-md shadow"
          >
            <Image
              src={selectedLang.image}
              alt={selectedLang.language}
              width={20}
              height={20}
            />

            {openLanguages ? <DropUp /> : <DropDown />}
          </button>

          {/* Language Dropdown */}
          {openLanguages && (
            <div className="absolute mt-2 bg-transparent shadow rounded-md w-full">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSelectedLang(lang); // Set the selected language
                    setOpenLanguages(false); // Close dropdown after selection
                  }}
                >
                  <Image
                    src={lang.image}
                    alt={lang.language}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="  flex items-center min-md:hidden relative">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="  cursor-pointer relative w-8 h-6 flex items-center justify-center"
          >
            {/* Top bar */}
            <motion.span
              animate={openMenu ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="absolute w-6 h-[2px] bg-white"
              transition={{ duration: 0.3 }}
            />
            {/* Middle bar */}
            <motion.span
              animate={openMenu ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-[2px] bg-white"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom bar */}
            <motion.span
              animate={openMenu ? { rotate: -45, y: -8 } : { rotate: 0, y: 16 }}
              className="absolute w-6 h-[2px] bg-white"
              transition={{ duration: 0.3 }}
            />
          </button>

          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="   bg-[#000] p-6 rounded-md absolute right-0 top-10 "
            >
              <ul className="flex flex-col gap-4 justify-center text-center ">
                {navItems.map((item, index) => {
                  const activeLink = currentPath === item.href;
                  return (
                    <li
                      key={index}
                      onClick={() => router.push(item.href)}
                      className={`cursor-pointer ${
                        activeLink
                          ? " underline text-[#FFFFFF]"
                          : "text-[#CFCFCF]"
                      }`}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
