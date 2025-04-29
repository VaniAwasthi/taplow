"use client";
import React from "react";
import Banner from "../../assets/globalpage/chinaBanner.webp";
import officeImage1 from "../../assets/globalpage/BeijingChina.webp";
import officeImage2 from "../../assets/globalpage/ShanghaiChina.webp";
import officeImage3 from "../../assets/globalpage/QingdaoChina.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import ChinaFlag from "../../assets/globalpage/flagChina.webp";
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
import OfficeSlider from "@/app/component/coun-layout/OfficeSlider";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow China</b>`,
    desc: " Taplow China was founded in China in 2005 and has 150 consultants and 20 support teams located in six offices in Shanghai, Beijing, Guangzhou, Xi ‘an, Chengdu and Qingdao.",
  };
  const officeSecHeading = "Our office in China";
  const officeData = [
    {
      id: 1,
      image: officeImage1,
      name: "Beijing",
      address:
        "2301, Huai Hai Zhong Hua Building, 885 Ren Min Rd. Shanghai 200010, PR China.",
      phone: "+44(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: officeImage2,
      name: "Shanghai",
      address:
        "2301, Huai Hai Zhong Hua Building, 885 Ren Min Rd. Shanghai 200010, PR China.",
      phone: "+44(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 3,
      image: officeImage3,
      name: "Qingdao",
      address:
        "Suite 801, Central Plaza, No. 227 Huangpi North Road, Huangpu District, Shanghai, 200003, PR China",
      phone: "+44(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
  ];

  const AboutContent = {
    greenDescription: `Full function service includes: HR and finance, marketing and sales, R&D and production, supply chain, IT, market access, government relations and corporate affairs, legal and IPR, etc.
 
`,
    Aboutheading: "Taplow Spain:Driving Leadership and Diversity Excellence",
    aboutContentpara3: `Taplow Longitude Management, China has been operational since 2002 with a highly reputable track record. With offices located in
Shanghai and Beijing, China we focus on Leadership Development and Training.`,
    aboutContentpara2: `We are a China-based professional consulting firm focused on helping our clients increase human capital and improve human
performance. We provide international level services in Leadership Consulting, Management Recruiting, Management Training and
Development. Our clientele is inclusive of a wide range of multinational and local companies.`,
    aboutContentpara1:
      "Our team encompasses a group of exceptional professionals experienced in leadership development. We understand our clients’ needs and meet their expectations by delivering quality service, focusing on many industries like Consumer Goods, Healthcare, Industrial Products, Automotive and Heavy Equipment’s.",
    aboutContentpara4: "",
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
  const Successheading = "Recent Success Stories From China";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OfficeSlider officeData={officeData} heading={officeSecHeading} />
      <DrivingLeadership
        greenDescription={AboutContent.greenDescription}
        Aboutheading={AboutContent.Aboutheading}
        flag={ChinaFlag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="China" />
      <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
    </>
  );
};
export default page;
