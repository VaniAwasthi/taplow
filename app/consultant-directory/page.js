"use client";
import React from "react";
import { ConsultantBanner } from "../component/consultantDirectory/ConsultantBanner";
import OurConsultant from "../component/consultantDirectory/OurConsultant";

const ConsultantDirectory = () => {
  return (
    <>
      <ConsultantBanner />
      <OurConsultant />
    </>
  );
};

export default ConsultantDirectory;
