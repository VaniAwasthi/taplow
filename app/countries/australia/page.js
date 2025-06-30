"use client";
import React from "react";
import Banner from "../../assets/globalpage/australiaBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/AustraliaOffice.webp";
import Australiaflag from "../../assets/globalpage/australiaflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import generalImg from "../../assets/globalpage/generalImg.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/austriliaCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/austriliaCase2.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Australia</b>`,
    desc: "The Taplow Group was established in Australia in 2002 and brings both traditional and contemporary recruitment methodologies to clients. Our focus is on delivering a service that identifies the best talent for your business.",
  };
  const officeSecHeading = "Our office in Australia";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Melbourne",
    address:
      "Melbourne Quarter, Building Two, Level 3, #309, 697 Collins Street, Melbourne, Victoria, Australia, 3008.",
    // phone: "+44(0)1442 383361",
    email: "eric@macdonaldsearchgroup.com",
  };
  const greenDescriptionBox =
    "The Taplow Group was established in Australia in 2002 and brings to clients both traditional and contemporary recruitment methodologies. Our focus is on delivering a service that identifies the best talent for your business.";
  const AboutContent = {
    general: {
      title: "General Information",
      paragraphs: [
        "We hold the values of trust, quality, professionalism, integrity, honesty, and commitment to customer service in the highest esteem; these are clearly apparent in our day-to-day work.",
        "Our industry knowledge, gathered over more than 25 years, and our candidate networks, are second to none, ensuring the right candidate fit, first time every time.",
        "Taplow Australia stands apart from its competitors due to our long-standing business relationships, developed over more than 25 years. These relationships provide clients and candidates with wide access to a significant pool of talent and employers of choice.",
        "Taplow Australia – delivering exceptional, personalised service for executive level and board appointments.",
      ],
      image: DiversityImg, // replace with your actual image path
    },
    specific: {
      title: "Specific Information",
      heading: "Taplow Australia: Vision & Mission",
      image: generalImg,
      services: [
        {
          title: "Executive Search",
          content: `<p>Senior level appointments can often be complex and require a careful, discreet approach. Taplow Australia uses both traditional and contemporary recruitment methods focused on identifying the best talent for your business.</p>`,
        },
        {
          title: "Human Capital Services",
          content: `<p>Taplow Group partners offer Human Capital Services including executive search, interim management, and board services to fully utilize the talent within organizations.</p>`,
        },
        {
          title: "CEO Services",
          content: `<p> Taplow specializes in identifying and placing talented candidates at top levels in public and private organizations through its global partner network.</p>`,
        },
        {
          title: "Board Appointments",
          content: `<p> Organisations can access our extensive board candidate network and assessment support for suitable board appointments with confidence.</p>`,
        },
      ],
    },
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Producer of Polypropylene and Polyolefin Films",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/austrilia/ProducerofPolypropyleneandPolyolefinFilms.pdf",
    },
    {
      image: Success2,
      title: "Leadership Development Across Multi-Brand Teams",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/austrilia/LeadershipDevelopmentAcrossMultiBrandTeams.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From Australia";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OneOffice officeData={officeData} heading={officeSecHeading} />
      <TaplowInfoSection
        isGeneralImage={true}
        {...AboutContent}
        isImage={true}
        greenDescription={greenDescriptionBox}
        flag={Australiaflag}
      />
      <IndustrySlider />
      <TeamSection country="Australia" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-base"
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
