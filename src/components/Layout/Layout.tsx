"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Script from "next/script";
import { fetchLang } from "@/utils/fetchLang";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [langCode, setLangCode] = useState("en");

  useEffect(() => {
    const getLang = async () => {
      const lang = await fetchLang();
      const userLang = lang.split("-")[0]; // Get primary language
      setLangCode(userLang);
    };
    getLang();
  }, []);

  // Trigger translation once langCode is set and widget is ready
  useEffect(() => {
    if (langCode === "en") return;

    const interval = setInterval(() => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [langCode]);

  return (
    <div className={`relative flex flex-col min-h-screen pt-8`}>
      <div className="bg-transparent z-[100] absolute w-full h-[4rem]">
        <Header />
      </div>

      {/* Google Translate Element */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      ></div>

      {/* Load Translate API */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Init translate element with site base language = en */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                autoDisplay: false
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
