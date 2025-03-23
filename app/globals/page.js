"use client";
import React from "react";
import {
  GlobalLocation,
  GlobalpageBanner,
  SuccessStory,
} from "../component/globalpage/GlobalpageBanner";
import { SweadenTeamsec } from "../component/globalpage/SweadenTeamsec";
import OfficeSlider from "../component/globalpage/OfficeSlider";
import DrivingLeadership from "../component/globalpage/DrivingLeadership";
import IndustrySlider from "../component/home/Industries";

const Globals = () => {
  return (
    <>
      <GlobalpageBanner />
      <OfficeSlider />
      <DrivingLeadership />
      <IndustrySlider />
      <SweadenTeamsec />
      <SuccessStory />
      <GlobalLocation />
    </>
  );
};

export default Globals;
