"use client";
import React from "react";
import Banner from "../../assets/globalpage/spainBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/spainOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import SpainFlag from "../../assets/globalpage/spainFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import {
  GlobalLocation,
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Spain </b>`,
    desc: "TAPLOW SPAIN, founded in 1997 in Madrid, is an independent Human Resources Consulting and Executive Search firm, with a particular focus in the Financial, Professional Services, Real Estate, Retail and Infrastructure sectors. Our firm also provides Strategy Consulting Services in projects such as M&amp;A, Restructuring, Board Advisory, etc",
  };
  const officeSecHeading = "Our office in Spain";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "MAdrid",
    address: "Fernando el Santo 25, 4º dcha - 28010 Madrid, Spain",
    phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `TAPLOW SPAIN, founded in 1997 in Madrid, is an independent Human Resources Consulting and Executive Search firm, with a particular focus in the Financial, Professional Services, Real Estate, Retail and Manufacturing sectors`,
    Aboutheading: "Taplow Spain:Driving Leadership and Diversity Excellence",
    aboutContentpara1: `Our structure is based on three Senior Partners, with international experience and background. We operate in Iberia (Spain &amp; Portugal) as well as in Latin American countries.`,
    aboutContentpara2: `Our client base is very wide and diverse, counting among them entrepreneurs, global firms and Private Equity firms and VCs. We search for candidates that can lead the growth and international expansion of the companies.`,
    aboutContentpara3:
      "Our advantage lies in a thorough understanding of our clients&#39; needs. We take great pride in our fast response and sharp analysis, all of this, with at results in the quality of our services.",
    aboutContentpara4:
      "Our firm also provides Strategy Consulting Services in projects such as M&amp;A, Restructuring, Board Advisory, etc. Recently our firm has been very involved in Digital projects and online start-ups and VC.",
  };
  const SuccessStoryslidesData = [
    {
      image: Ethical1,
      title: "Compliance with global laws and best practices.",
    },
    {
      image: Ethical2,
      title: "A professional, inclusive, and respectful workplace.",
    },
    {
      image: Ethical3,
      title: "Trust-based relationships with clients and candidates.",
    },
    {
      image: Ethical4,
      title: "Confidentiality, fairness, and anti-corruption standards.",
    },
    {
      image: Ethical1,
      title: "Trust-based relationships with clients and candidates.",
    },
    {
      image: Ethical2,
      title: "Confidentiality, fairness, and anti-corruption standards.",
    },
  ];
  const Successheading = "Recent Success Stories From Spain";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OneOffice officeData={officeData} heading={officeSecHeading} />
      <DrivingLeadership
        greenDescription={AboutContent.greenDescription}
        Aboutheading={AboutContent.Aboutheading}
        flag={SpainFlag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Spain" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
