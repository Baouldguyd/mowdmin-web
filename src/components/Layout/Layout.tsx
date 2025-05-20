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
      const userLang = lang.split("-")[0]; // Get the first language code
      console.log(userLang);
      setLangCode(userLang);

      console.log(lang);
      console.log("the user lang is", userLang);
    };

    getLang();
  }, []);

  useEffect(() => {
    if (langCode !== 'en') {
      console.log("The updated langCode is:", langCode);
    }
  }, [langCode]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="bg-transparent z-[100] absolute w-full h-[4rem]">
        <Header />
      </div>

      {/* Google Translate */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      ></div>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Inject langCode into the translate script after it's loaded */}
      {langCode && (
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: '${langCode}',
                  autoDisplay: true,
                },
                'google_translate_element'
              );
            }
          `}
        </Script>
      )}

      <main className="h-full">{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;