"use client";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import React from "react";
import Banner from "../../assets/globalpage/UKBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/UKOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import UKflag from "../../assets/globalpage/UKflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow UK</b>`,
    desc: "Trusted since 1999, we help businesses grow, expand, and lead — locally and globally.",
  };
  const officeSecHeading = "Our office in UK";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "London",
    address: "33, St James Square, London, SW1Y 4JS, UK",
    phone: "+44(0)1442 383361",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `We help UK firms grow and support global companies expanding into the UK. As a founding partner of The Taplow Group S.A., we bring global reach with local expertise — backed by in-house fluency in German, French, Danish, Swedish, Norwegian, and English`,
    Aboutheading: "Taplow UK:Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "Our focus is within the Executive Search sector, C level and Directorship roles, primarily within the Sales, Marketing, Manufacturing and Finance areas of a clients business, we aim to add value to clients recruitment processes, both strategically and administratively.",
    aboutContentpara2:
      "Clients are assured of continued communication throughout and after an assignment has been completed, we offer analysis tools to ensure candidates are the right fit as well as posses the credentials to be a success within the company and the role.",
    aboutContentpara3:
      " We work in partnership with our global colleges to ensure we find the right people regardless of there locality, international clients are assured they receive a seamless service when we recruit regional or global positions in conjunction with our Taplow partners. ",
    aboutContentpara4:
      "We have experience and expertise in working across Europe, Asia, Middle East and North America for clients in various sectors for UK based clients and also International based clients looking to expand in the UK.",
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
  const Successheading = "Recent Success Stories From UK";
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
        flag={UKflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="United Kingdom" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
