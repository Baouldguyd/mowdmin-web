import React from "react";
import HeroSection from "./Herosection";
import DonationInfo from "./DonationInfo";
import CharityActivities from "./CharityActivities ";
import Support from "./Support";
import Purpose from "./Purpose";
import DonationsInfo from "./DonationsInfo";

const Donationspage = () => {
  return (
    <div>
      <HeroSection />
      {/* <DonationInfo /> */}
      <CharityActivities />
      {/* <Support /> */}
      <DonationsInfo/>
      <Purpose/>
    </div>
  );
};

export default Donationspage;
