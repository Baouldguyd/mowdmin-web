"use client";
import { useEffect } from "react";

export default function DonationIframe() {
  useEffect(() => {
    // Configure the global _bp_iframe object
    (window as any)._bp_iframe = {
      project_id: 158552, // REQUIRED
      lang: "de", // Language of the form
      width: 600, // Custom iframe-tag-width
      color: "040725", // Button and banderole color
      background_color: "ffffff", // Background color
      default_amount: 50, // Donation amount
      recurring_interval: "single", // single | monthly | yearly
      bottom_logo: true,
    };

    // Dynamically load betterplace iframe script
    const script = document.createElement("script");
    script.src =
      "https://betterplace-assets.betterplace.org/assets/load_donation_iframe.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup script + iframe on unmount
      document.body.removeChild(script);
      const iframeDiv = document.getElementById("betterplace_donation_iframe");
      if (iframeDiv) iframeDiv.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="betterplace_donation_iframe"
      style={{
        background:
          "transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
      }}
    >
      <strong>
        <a href="https://www.betterplace.org/de/donate/platform/projects/158552-hamm-2025-open-air-evangelisation-gospelmusik-thema-ewige-hoffnung">
          Jetzt Spenden für „Hamm 2025 - Open Air Evangelisation & Gospelmusik“.
          Thema: EWIGE HOFFNUNG bei unserem Partner betterplace.org
        </a>
      </strong>
    </div>
  );
}
