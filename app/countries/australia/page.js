"use client";
import React from "react";

import Banner from "../../assets/globalpage/australiaBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/AustraliaOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import Australiaflag from "../../assets/globalpage/australiaflag.webp";
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
    title: `Welcome to <b>Taplow Australia</b>`,
    desc: "The Taplow Group was established in Australia in 2002 and brings to clients both traditional and contemporary recruitment methodologies. Our focus is on delivering a service that identifies the best talent for your business.",
  };
  const officeSecHeading = "Our office in Australia";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Melbourne",
    address:
      "Melbourne Quarter, Building Two, Level 3, #309, 697 Collins Street, Melbourne, Victoria, Australia, 3008.",
    phone: "+44(0)1442 383361",
    email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `Taplow Australia is set apart from its competitors by our longstanding business relationships that have been developed over more than 25 years and provide to both clients and candidates alike access to a significant pool of talent and employers of choice.`,
    Aboutheading:
      "Taplow Australia: Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "We hold in the highest esteem the values of trust, quality, professionalism, integrity, honesty and commitment to customer service, and these are clearly apparent in the work we do on a day-to-day basis.",
    aboutContentpara2:
      "Our industry knowledge, gathered over more than 25 years, and our candidate networks, are second to none, ensuring the right candidate fit, first time every time.",
    aboutContentpara3:
      "Taplow Australia is set apart from its competitors by our longstanding business relationships that have been developed over more than 25 years and provide to both clients and candidates alike access to a significant pool of talent and employers of choice.",
    aboutContentpara4:
      "The Taplow Group was established in Australia in 2002 and brings to clients both traditional and contemporary recruitment methodologies. Our focus is on delivering a service that identifies the best talent for your business.",
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
  const Successheading = "Recent Success Stories From Australia";
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
        flag={Australiaflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Australia" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      <GlobalLocation />
    </>
  );
};

export default page;
