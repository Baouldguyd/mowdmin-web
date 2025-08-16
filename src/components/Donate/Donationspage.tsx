import React from "react";
import HeroSection from "./Herosection";
import DonationInfo from "./DonationInfo";
import CharityActivities from "./CharityActivities ";
import Support from "./Support";
import Purpose from "./Purpose";
import DonationsInfo from "./DonationsInfo";
import DonationIframe from "../Eventspage/BetterCard";

const Donationspage = () => {
  return (
    <div>
      <HeroSection />
      {/* <DonationInfo /> */}
      <CharityActivities />
      {/* <Support /> */}
      <DonationIframe/>
      <DonationsInfo/>
      <Purpose/>
    </div>
  );
};

export default Donationspage;
