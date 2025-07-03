"use client";
import React from "react";
import Banner from "../../assets/globalpage/norwayBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/Norwayoffice.webp";
import generalImg from "../../assets/globalpage/generalImg.webp";
import Norwayflag from "../../assets/globalpage/norwayflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Norway</b>`,
    desc: "We focus on Executive Search and selection. We also support our clients with Executive Interim and assist in general Human Capital related Challenges. Taplow has operated in the Norwegian market since 2004. ",
  };
  const officeSecHeading = "Our Office in Norway";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Oslo",
    address: `Henrik Ibsens gate 90, <br/> 0255 Oslo, Norway`,
    // phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription:
      "Taplow Nordic consists of four strong companies working together to provide integrated and insightful support in Executive Search, Board Services, and Executive Interim. With deep knowledge of the Nordic market we help organizations identify, attract, and develop leaders and specialists who drive growth and create long-term value. If you partner with us you will benefit not only from local expertise but also from the strength of a Nordic network with global reach through The Taplow Group.",
    Aboutheading: "Taplow Norway:Driving Leadership and Diversity Excellence",
    aboutContentpara3:
      "Taplow Norway apply well targeted processes to find the best candidate in every search we undertake. We still work hard to improve - and make sure that every candidate has a positive and learning experience, weather employed by our client or not. The Assignment shall be a positive experience to the employer as well – a professional and effective process, and good “Employer Branding”. ",
    aboutContentpara4:
      "We aim on recruiting the best candidate for the position, and that the new hire stays in the company for years.  We succeed well – and we deliver our assignments with a guarantee.",
    aboutContentpara2:
      "We know the companies in our focus-industries, and we understand the positioning among the companies. This is important in a fast-changing market were technology effect the way we do business, the organization of the companies, and the positions to be filled.",
    aboutContentpara1:
      "Our experienced consultants have former practice from leading Norwegian and International companies, and are thus able to advice our clients beyond the ordinary recruitment process.The consultants keep up to date in their focus-industries to be able to find the best candidates, give the employers feedback from the market, and build a strong network",
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
  const Successheading = "Recent Success Stories From Norway";
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
        flag={Norwayflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Norway" />
      {/* <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      /> */}
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
