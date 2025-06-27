"use client";
import React from "react";
import Banner from "../../assets/globalpage/chinaBanner.webp";
import officeImage1 from "../../assets/globalpage/ShanghaiChinaoffice.webp";
import officeImage2 from "../../assets/globalpage/officeChina2.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import ChinaFlag from "../../assets/globalpage/flagChina.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/ChinaCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/ChinaCase2.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import { TwoOffice } from "@/app/component/coun-layout/TwoOfficeLay";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow China</b>`,
    desc: " Taplow China offers Executive Search and Leadership Advisory and Performance services via our experienced partners located in Shanghai.",
  };
  const officeSecHeading = "Our office in China";
  const officeData = [
    {
      id: 1,
      image: officeImage2,
      name: "Shanghai",
      address:
        "2301, Huai Hai Zhong Hua Building, 885 Ren Min Rd. Shanghai 200010, PR China.",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: officeImage1,
      name: "JingAn",
      address:
        "13A, Jing An New Century Plaza | 881 West Nanjing Road | JingAn District Shanghai, China",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
  ];

  const AboutContent = {
    greenDescription: `Full function service includes: HR and finance, marketing and sales, R&D and production, supply chain, IT, market access, government relations and corporate affairs, legal and IPR, etc.
 
`,
    Aboutheading: "Taplow China:Driving Leadership and Diversity Excellence",
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
      image: Success1,
      title: "Work with investor to hire talent for their post-investment",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/china/Workwithinvestortohiretalentfortheirpostinvestment.pdf",
    },
    {
      image: Success2,
      title: "Interim Hiring in Japan",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/china/InterimHiringinJapan.pdf",
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
      <TwoOffice Officeheading={officeSecHeading} offices={officeData} />
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
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-base"
      />
    </>
  );
};
export default page;
