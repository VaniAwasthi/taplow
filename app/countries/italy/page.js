"use client";
import React from "react";
import Banner from "../../assets/globalpage/italyBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/finlandOffice.webp";
import ItalyFlag from "../../assets/globalpage/ItalyFlag.webp";
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
    title: `Welcome to <b>Taplow Italy</b>`,
    desc: "Executive Search firm established in 2003 and based in Milan,Italy. We offer services for search, evaluation and selection of specialists and managers",
  };
  const officeSecHeading = "Our office in Italy";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Milan",
    address: "Galleria San Babila 4C, Milan, Italy",
    phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };
  const AboutContent = {
    greenDescription: `Executive Search firm established in 2003 and based in Milan,Italy. We offer services for search, evaluation and selection of specialists and managers`,
    aboutContentpara2:
      "Based on meeting clients’ specific needs and carried out locally, nationally or internationally thanks to the deep knowledge of clients’ markets and our global search capabilities;",
    aboutContentpara4:
      "Our Partners’ specialization sectors are: Fashion Retail & Luxury Goods, Consumer, Information & Communication Technology, Industrial, Finance and Healthcare & Pharma.",
    aboutContentpara1:
      "The team offers a service to the client founded on years of experience in companies and in consultancy, added to a professional approach based on commitment, quality, trust and confidentiality.",
    aboutContentpara3:
      "Focused exclusively on direct search method, allows us to offer our clients tailor made and customized high end solutions.",
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
  const Successheading = "Recent Success Stories From Italy";
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
        flag={ItalyFlag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Italy" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
    </>
  );
};
export default page;
