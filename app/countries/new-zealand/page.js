"use client";
import React from "react";
import Banner from "../../assets/globalpage/nzBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/NZOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import NZflag from "../../assets/globalpage/NZflag.webp";
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
    title: `Welcome to <b>Taplow New Zealand</b>`,
    desc: "Our New Zealand office has established and grown from merging the skills, experience and resources of SandriWalsh, Rosenberg Executive Search and as of 1st April 2019 Rothley Executive Search.  ",
  };
  const officeSecHeading = "Our office in New Zealand";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Wellington",
    address: "L7, Equinox House, 111 The Terrace, Wellington 6011, New Zealand",
    phone: "+44(0)1442 383361",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `Our New Zealand office has established and grown from merging the skills, experience and resources of SandriWalsh, Rosenberg Executive Search and as of 1st April 2019 Rothley Executive Search`,
    Aboutheading:
      "Taplow New Zealand:Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "Leadership is about inspiring the team to achieve more than they could as individuals.  Finding those leaders is what we do. The leaders who dream big and deliver results. Leaders with a track record for success built on hard work and team effort.",
    aboutContentpara2:
      "They’re busy getting on with what they do, not necessarily looking for their next move. That’s where we come in – we find them, we inspire them and get them excited about the opportunity.",
    aboutContentpara3:
      "With over 70 years of combined experience, we have been instrumental in helping hundreds of New Zealand clients build leadership capability.  We are in it for the long-haul and we work in partnership with our clients to help them bring their vision to life.",
    aboutContentpara4:
      "Our New Zealand office has established and grown from merging the skills, experience and resources of SandriWalsh, Rosenberg Executive Search and as of 1st April 2019 Rothley Executive Search.  Our shared passion for finding and appointing leaders is now matched by our ability to generate exceptional results, nationwide.",
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
  const Successheading = "Recent Success Stories From New Zealand";
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
        flag={NZflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="New Zealand" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
