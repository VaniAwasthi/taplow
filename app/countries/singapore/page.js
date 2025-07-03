"use client";
import React from "react";
import Banner from "../../assets/globalpage/singaporeBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/singaporeOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import Singaporeflag from "../../assets/globalpage/Singapore.svg";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Singapore</b>`,
    desc: "Founded over a decade ago, in Singapore, with Asia-wide Coverage",
  };
  const officeSecHeading = "Our Office in Singapore";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Singapore",
    address: "8 Marina View, #43*01 Asia Square Tower 1, Singapore 018960",
    // phone: "604-687-6464",
    // email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `We are a leadership practice founded by partners with deep industry expertise, and professional search experience. Our partners have years of prior leadership experience in the sectors and functions that we cover as a firm, with a range of talent acquisition, assessment, and advisory services to offer.`,
    aboutContentpara1:
      "We partner with clients throughout the search process to secure the best outcome. Collaboration and Confidentiality are at the heart of our approach.Our approach is highly collaborative. We bring a sense of shared destiny to our engagement. The insights we share, the advice we impart, and the solutions we provide, have a significant accretive impact on the clients we serve, and the lives and careers of the candidates we find.",
    aboutContentpara2:
      "We bring a wealth of real-life management experience and knowledge to bear on our engagement with clients. We’re obsessed with results- sustainable results. Rigorous measurement and improvement is embedded in all of our work.We dig deep in our domains, bringing focused and relevant expertise to our talent acquisition practice.",
    aboutContentpara3:
      "We have deep and productive relationships within the industries that we engage with, across Asia, as well as with related businesses.We leverage these to the benefit of our clients.We embrace the changes to our industry brought about by technology and social media, even as we remain committed to a differentiated approach of rigorous personalized candidate assessments.",
    aboutContentpara4:
      "We leverage our pan-Asia understanding of talent, providing solutions that transcend borders. We target mobile, adaptable and resilient talent. Alongside an in-depth knowledge of Singapore, we have successfully assisted clients with projects in Australia, Bangladesh, China, Hong Kong, South Korea, India, Laos, Taiwan, Malaysia, Myanmar, Philippines, Sri Lanka, Vietnam.",
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
  const Successheading = "Recent Success Stories From Singapore";
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
        flag={Singaporeflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Singapore" />
      {/* <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      /> */}
    </>
  );
};
export default page;
