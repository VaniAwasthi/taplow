"use client";
import React from "react";
import Banner from "../../assets/globalpage/indiaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/India/Success1.webp";
import Success2 from "../../assets/globalpage/India/Success2.webp";
import Success3 from "../../assets/globalpage/India/Success3.webp";
import Success4 from "../../assets/globalpage/India/Success4.webp";
import Success5 from "../../assets/globalpage/India/Success5.webp";
import Success6 from "../../assets/globalpage/India/Success6.webp";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import {
  AboutSect,
  CommitmentSec,
  Flagship,
  OfficeSlider,
} from "@/app/component/indiaCountrylayouts/officeSlider";
import {
  OurGoalSection,
  SectorSlider,
  WhyChooseIndia,
} from "@/app/component/indiaCountrylayouts/GoalIndustryWhyTaplow";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow India</b>`,
    desc: "India is on a major growth trajectory, and is currently the fastest growing economy in the world. The Taplow Group established itself in India to assist organizations in building people capacity in this very fast paced growth environment.",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Rebuilding Strategic Leadership in Global Energy",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupRe-EstablishingStrategicLeadershipCaseStudy-India.pdf",
    },
    {
      image: Success2,
      title: "Manufacturing Head for Vikram Solar",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupManufacturingHeadSolarCaseStudy-India.pdf",
    },
    {
      image: Success3,
      title: "Director, Education & Protection | Global Philanthropy",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupDirectorEducation0ProtectionforanInternationalPrivatePhilanthropyCaseStudy%20-India.pdf",
    },
    {
      image: Success4,
      title: "Sales leadership mapping in India’s AlcoBev sector",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupTalentMappingforConsumerProductsCaseStudy%20-India.pdf",
    },
    {
      image: Success5,
      title: "To hire a Vice Chancellor for a Multi-Disciplinary University",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplo%20Group%20PrivateMultiDisciplinaryUniversityCaseStudy-India.pdf",
    },
    {
      image: Success6,
      title: "Workforce Onboarding Guide for India Entry",
      link: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupEmployeeHandbookDevelopementCaseStudyIndia.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From India";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />

      <OfficeSlider />
      <AboutSect />
      <Flagship />
      <CommitmentSec />
      <OurGoalSection />
      <SectorSlider />
      <WhyChooseIndia />
      <TeamSection country="India" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-sm md:text-lg"
      />
    </>
  );
};
export default page;
