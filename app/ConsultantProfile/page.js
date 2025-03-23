"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import HeroImage from "../assets/Consultantpage/heroImage.webp";
import { useSearchParams } from "next/navigation";
import ProfileDetailLayout from "../component/utilities/ProfileDetailLayout";
import { consultantData } from "../component/utilities/data/consultantData";
import ConsultantProfile from "../component/consultantDirectory/ConsultantProfile";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultantProfile />
    </Suspense>
  );
};

export default Page;
