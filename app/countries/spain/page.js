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
import Success1 from "../../assets/globalpage/CaseStudies/spainCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/spainCase2.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Spain </b>`,
    desc: "TAPLOW SPAIN, founded in 1997 in Madrid, is an independent Human Resources Consulting and Executive Search firm, with a particular focus in the Financial, Professional Services, Real Estate, Retail and Infrastructure sectors. Our firm also provides Strategy Consulting Services in projects such as M&A, Restructuring, Board Advisory, etc",
  };
  const officeSecHeading = "Our Office in Spain";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Madrid",
    address: "Fernando el Santo 25-28010 Madrid-Spain",
    phone: "+34 656 844 582",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `TAPLOW SPAIN, founded in 1997 in Madrid, is an independent Human Resources Consulting and Executive Search firm, with a particular focus in the Financial, Professional Services, Real Estate, Retail and Manufacturing sectors`,
    Aboutheading: "Taplow Spain:Driving Leadership and Diversity Excellence",
    aboutContentpara1: `Our structure is based on three Senior Partners, with international experience and background. We operate in Iberia (Spain & Portugal) as well as in Latin American countries.`,
    aboutContentpara2: `Our client base is very wide and diverse, counting among them entrepreneurs, global firms, Private Equity firms and VCs. We search for candidates that can lead the growth and international expansion of the companies.`,
    aboutContentpara3:
      "Our advantage lies in a thorough understanding of our clients needs. We take great pride in our fast response and sharp analysis- all of which results in the quality of our services.",
    aboutContentpara4:
      "Our firm also provides Strategy Consulting Services in projects such as M&A, Restructuring, Board Advisory, etc. Recently our firm has been very involved in Digital projects and online start-ups and VC.",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Hiring in a Fully Inflated Market",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/spain/HiringinaFullyInflatedMarket.pdf",
    },
    {
      image: Success2,
      title: "Innovation and Growth in Mature Markets",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/spain/InnovationandGrowthinMatureMarkets.pdf",
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
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-2xl"
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
