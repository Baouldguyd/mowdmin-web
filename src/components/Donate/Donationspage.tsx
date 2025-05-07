import React from "react";
import HeroSection from "./Herosection";
import DonationInfo from "./DonationInfo";
import CharityActivities from "./CharityActivities ";
import Support from "./Support";
import Purpose from "./Purpose";

const Donationspage = () => {
  return (
    <div>
      <HeroSection />
      <DonationInfo />
      <CharityActivities />
      <Support />
      <Purpose/>
    </div>
  );
};

export default Donationspage;
