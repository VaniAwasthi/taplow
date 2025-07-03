"use client";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import React from "react";
import Banner from "../../assets/globalpage/UKBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/UKOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import UKflag from "../../assets/globalpage/UKflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/UKStory/UKsuccess1.webp";
import Success2 from "../../assets/globalpage/UKStory/UKsuccess2.webp";
import Success3 from "../../assets/globalpage/UKStory/UKsuccess3.webp";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow UK</b>`,
    desc: "We help UK firms grow, locally and internationally whilst support companies expanding into the UK market. As a founding partner of The Taplow Group S.A., we bring a wealth of experience in multiple market sectors — backed by in-house fluency in German, French, Danish, Swedish, Norwegian, and English",
  };
  const officeSecHeading = "Our Office in UK";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "London",
    address: "33, St James Square, London, SW1Y 4JS, UK",
    // phone: "+44(0)1442 383361",
    // email: "eric@macdonaldsearchgroup.com",
  };

  const AboutContent = {
    greenDescription: `We help UK firms grow and support global companies expanding into the UK. As a founding partner of The Taplow Group S.A., we bring global reach with local expertise — backed by in-house fluency in German, French, Danish, Swedish, Norwegian, and English`,
    Aboutheading: "Taplow UK:Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "Our focus is to deliver exceptional Executive Search services, specialising in C-level and Directorship roles across Sales, Marketing, Manufacturing, and Finance functions. We enhance our clients’ recruitment processes both strategically and operationally, becoming a true partner in helping them achieve their business goals.",
    aboutContentpara2:
      "We have extensive experience supporting start-ups and VC-backed high-growth companies, turning growth plans into reality. Whether it's a locally based organisation expanding internationally, or an overseas company entering the UK market, we assist from the first hire through to full team buildouts, IPOs, or acquisitions.",
    aboutContentpara3:
      "Through close collaboration with our global colleagues, we ensure seamless international search capabilities. Regardless of geography, we identify and attract the right talent. Our partnership with Taplow Group allows us to deliver consistent, high-quality results for regional and global assignments.",
    aboutContentpara4:
      "We maintain ongoing communication throughout and beyond each engagement, offering insights and analysis tools to ensure candidates are not only qualified but also culturally aligned with the organisation.",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Next Generation of Leadership",
      link: "https://cruxcreativedemo2.com//Taplow-new/SuccessStory/UK/TheTaplowGroup-ExecutiveSearch-NextGenerationofLeadersforEMEARegion.pdf",
    },
    {
      image: Success2,
      title: "Growing into UK market",
      link: "https://cruxcreativedemo2.com//Taplow-new/SuccessStory/UK/TheTaplowGroup-ExecutiveSearch-GrowingintotheUKMarket.pdf",
      // ",
    },
    {
      image: Success3,
      title: "Growing with Established company",
      link: "https://cruxcreativedemo2.com//Taplow-new/SuccessStory/UK/TheTaplowGroup-ExecutiveSearch-GrowthwithinEstablishedCompanyintheUK.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From UK";
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
        flag={UKflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="United Kingdom" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-sm md:text-xl"
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
