"use client";
import React from "react";
import Banner from "../../assets/globalpage/germanyBanner.webp";
import officeImage1 from "../../assets/globalpage/Germanyhamburg.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import Germanyflag from "../../assets/globalpage/germanyflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Germany</b>`,
    desc: "Our success is built on our clients’ success. Therefore, we focus on our clients’ objectives and exceed their expectations by personal attention, advice and appropriate action, also in case of unexpected events.",
  };
  const officeSecHeading = "Our Offices in Germany";
  const officeData = {
    id: 1,
    image: officeImage1,
    name: "Hamburg",
    address:
      "Opernplatz 14, 60313 Frankfurt, Germany and Warburgstr. 32, 20354 Hamburg, Germany.",
    // phone: "604-687-6464",
    // email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `We always put a special attention to the fact that our Senior Partners have a wide and deep experience in running international assignments – both in their period as line managers as well as within their background and history in the international Executive Search industry`,
    aboutContentpara1: `Our success is built on our clients’ success: We focus on our clients’ objectives and exceed their expectations by personal attention, advise and
appropriate action. Our clients confirm that we deliver high quality results in resource and time efficient way.
Our partners have wide and deep experience in running international and national assignments - in their career as line managers as well as within in
their record in the international Executive Search industry. They have a high degree of empathy and understanding for cultures and business
practices. They know client’s markets well.`,
    aboutContentpara3: `Our focus areas are reflecting the longtime experience of our partners and consultants and cover various sectors and functional areas. Executive Search Consulting and Leadership Advisory we delivered for Directorship-Roles, C-Level Executives as well as Partners and Principals.`,
    aboutContentpara2:
      "One of our main principles is that we work as trusted consultant, knowing needs and requirements of our client. Our contact person knowing the client is performing the service personally through all stages and communicating during and after an assignment had been completed. Thus, our clients benefit from a direct and trustful communication and clear understanding of agreed priorities and goals.We are convinced that a detailed understanding of our clients’ business and culture in combination with our extensive international expertise forms the foundation for delivering excellent results to our German and international clients.",
    aboutContentpara4:
      "The Taplow Group in Germany started in 2002 when the international Taplow Group was inaugurated. Since then, we partner with our global colleagues to ensure to perform the right services with best results.",
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
  const Successheading = "Recent Success Stories From Germany";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OneOffice officeData={officeData} heading={officeSecHeading} />
      <DrivingLeadership
        aboutheadingclass="md:w-[400px]"
        firstparaclass="!md:w-[300px]"
        greenDescription={AboutContent.greenDescription}
        Aboutheading={AboutContent.Aboutheading}
        flag={Germanyflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Germany" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      {/* <GlobalLocation /> */}
    </>
  );
};
export default page;
