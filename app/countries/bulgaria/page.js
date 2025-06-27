"use client";
import React from "react";

import Banner from "../../assets/globalpage/bulgaiaBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/BulgariaOffice.webp";
import Bulgariaflag from "../../assets/globalpage/bulgariaFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Bulgaria</b>`,
    desc: "Taplow Bulgaria has been operating on the Bulgarian market since 2015 and has been providing top-notch services ever since. We focus primarily on retained executive search and we also offer a wide range of other services.",
  };
  const officeSecHeading = "Our office in Bulgaria";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Sofia",
    address: "Petar Parchevich 9 Str.1000, Sofia, Bulgaria",
    // phone: "604-687-6464",
    // email: "eric@macdonaldsearchgroup.com",
  };
  const AboutContent = {
    greenDescription: `The majority of our clients are international companies based in Bulgaria and we’re collaborating with the global network of The Taplow partners to raise the pressence of Bulgaria as an ideal location for other growing companies. Our work philosophy is that the client should be at the very heart of everything we do. `,
    Aboutheading:
      "Taplow New Zealand:Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "Our consultants are top skilled specialists in the field of recruitment, with various levels of expertise in different market fields. We possess in-depth knowledge of the most sought-after industries and offer a personal touch and expert assistance. All our consultants keep up to date with the latest in the industry and are always on the lookout for new talent.",
    aboutContentpara4:
      "Our approach is to be, the most honest, transparent, and dedicated client partner, so we make sure that our work process is exactly that - to exceed clients expectations.",
    aboutContentpara3:
      "We’re experts in identifying the most suitable, skilled, reliable, and overall best professional for each management position. Our attention to detail, thinking always outside the box and innovative approach helps us navigate through the pool of potential candidates",
    aboutContentpara2:
      "Consultants in Taplow Bulgaria work in accordance to The Taplow Group core principles. We value the confidentiality and privacy of all our clients. As a result of our professionalism and diverse portfolio, we are a certified company according to ISO 9001:2015. Our client’s and candidate’s data are safe with us.",
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
  const Successheading = "Recent Success Stories From Bulgaria";

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
        flag={Bulgariaflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Bulgaria" />
      {/* <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      /> */}
    </>
  );
};

export default page;
