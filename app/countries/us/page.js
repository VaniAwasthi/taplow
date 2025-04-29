"use client";
import React from "react";
import Banner from "../../assets/globalpage/usaBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import officeImage from "../../assets/globalpage/USAOffice.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import Frenchflag from "../../assets/globalpage/frenchflag.webp";
import SpecifcImg from "../../assets/globalpage/generalImg.webp";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow USA</b>`,
    desc: "Established in 1991, we are amongst the founding partners of The Taplow Group S.A. With a diverse team strategically located in multiple markets across North America and around the world, we have expertise in supporting local, national and global companies’ growth plans.",
  };
  const officeSecHeading = "Our office in USA";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "USA",
    address: "Post Office Box 20108. Fountain Hills, AZ 85269, USA",
    phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };
  const greenDescriptionBox =
    "We support global growth by assisting companies to build teams, create joint ventures and strategic alliances to develop commercial capabilities world-wide. Our North American team are expert across many vertical markets, we have uniquely strong expertise in Financial Services, Real Assets, Energy and Utilities, Life Sciences, Manufacturing and Logistics.";
  const AboutContent = {
    general: {
      title: "General Information",
      paragraphs: [
        "We consider ourselves to be a challenger brand.  We recognize that the Taplow brand is not as well-known as some of our larger North American and Global competitors.  What sets us apart is a question we answer every day as we work for exceptionally well known and highly regarded global firms as well as with numerous entrepreneurial and founder owned business.  Taplow consultants and advisors are senior experts in many business areas and approach each client asking a simple question. “Please tell us about the opportunities and challenges you are facing”. Only then, can we really advise you about the solutions to best assist you and your business.",
        "We provide North American and Global clients retained executive recruitment services from board to divisional management levels as well as highly specialized senior professionals that positively impact their organization. Perhaps the most importantly for clients in the current environment, is our success in doing searches for “first ever” and urgent replacement positions as well as leadership roles requiring highly nuanced, complex convergence leadership expertise. We assure that diversity and inclusion is a priority in every search undertaken. We successfully complete well over 90% of all search assignments and have virtually no first year attrition.",
        "As you consider the highly complicated and nuanced requirements for new product or service lines, new capital raising initiatives or new geographical markets we add value by quickly finding the right executive to move expeditiously – avoiding the distraction of too many discussions or relying on opportunistically available executives and professionals.  Our research oriented approach produces great hires as well as strategic acquisitions, alliances and joint ventures.",
        "Occasionally you may have the need to replace a key member of your team. In some cases, you are anticipating a departure. We have a 100% track record of projects remaining confidential until a new hire is announced.",
        "Perhaps you are considering an internal promotion but want the certainty that you are picking the best candidate for the role.  We have “benchmarking” solutions and we have the ability to conduct these projects with complete confidentiality.",
        "As many of our clients have opportunities and challenges associated with organizational change, in addition to our retained Executive Search services, our highly experienced Human Capital Advisors provide clients with expert advice and implementation solutions.",
      ],
      image: DiversityImg,
    },
    specific: {
      title: "Specific Information",
      heading: "Taplow USA: Vision & Mission",
      image: SpecifcImg,
      services: [
        {
          title: "OUR FOCUS",
          content: `<p>Our focus is within Executive Search is C level and Directorship roles.  We add value to clients’ recruitment processes, both strategically and administratively. We understand and help define the critical roles and manage the important process recruiting the right executive or team to address the challenges and opportunities consistent with your strategic vision.</p>
          <p>Clients are assured of focused communication during and after an assignment has been completed as well analysis tools to assure behavioral competency as well as credentials to drive success for your business.</p>`,
        },
        {
          title: "",
          content: `<p>Our North American team works in partnership with our global colleagues to assure we find the right people regardless of locality. Our unique single point of contact approach assures International and Global clients receive seamless service when we recruit regional or global positions in conjunction with our Taplow partners. We have experience and expertise in working across Europe, Asia, Middle East and the Americas for clients in various sectors as well as for International clients looking to expand in North America.</p> `,
        },
      ],
    },
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
  const Successheading = "Recent Success Stories From US";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OneOffice officeData={officeData} heading={officeSecHeading} />
      <TaplowInfoSection
        isImage={true}
        {...AboutContent}
        greenDescription={greenDescriptionBox}
        flag={Frenchflag}
        isGeneralImage={false}
      />
      <IndustrySlider />
      <TeamSection country="United States" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
