"use client";
import React from "react";
import Banner from "../../assets/globalpage/denmarkBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/denmarkOffice.webp";
import DenmarkFlag from "../../assets/globalpage/denmarkFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/denmarkCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/denmarkCase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/denmarkCase3.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Denmark</b>`,
    desc: "Taplow has more than 30 years of experience with Executive Search and headhunting. We are a part of The Taplow Group, which is represented in more than 20 countries across 6 continents",
  };
  const officeSecHeading = "Our office in Denmark";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Slotsmarken",
    address: "Slotsmarken 11, 2970 Hørsholm, Denmark.",
    // phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };
  const AboutContent = {
    greenDescription: `Taplow has been successful in Denmark since 1991 and has achieved a large network of both clients as candidates. Through our professional approach and cooperation, we have clients who have been with us for many years - and many candidates have become clients.`,
    aboutContentpara2:
      "At the Danish office, we make much of our clients experience, the cooperation and the entire process as a flow, where our team of headhunters, researchers and administrative staff works dedicated hand in hand. Our unique approach to the task is, among other things, Taplow's 2-way's Assessment Center.Here we combine problem solving and handling change with real business issues. Here the candidate's professional and experimental requirements are identified as well as the important common chemistry between client and candidate. This process can both stand alone and work with a number of other HR processes.",
    aboutContentpara4:
      "Taplow has more than 30 years of experience with Executive Search and headhunting. We are a part of The Taplow Group, which is represented in more than 20 countries across 6 continents. We are experts in Search, Interim Management and specialist level positions, and thus of great value to your company when you are looking for the perfect employee for a position that is difficult to fill.The purpose was to achieve a better understanding of the individual manager's own role and profile and to ensure a common management toolbox. Read Zealand Care's statement about their leadership development process.",
    aboutContentpara1:
      "Interim means temporary in Latin. At Taplow Executive Interim, this means that we connect experienced managers, specialists and companies for a limited period of time. Our Interim Managers add specific competence needs, solve given problems or initiate a desired change in the company. The focus of our Interim Managers is thus to temporarily add specific competencies to the company rather than simply solving a fixed job. Adding interim competencies to the organization is an intelligent way of ensuring that desired changes are implemented. ",
    aboutContentpara3:
      "Companies often experience a dilemma when faced with new business owners, new strategy or at turnaround, where it turns out that organization is lacking the right competencies. Taplow Group Denmark offers management evaluation and development, where we first uncover the places where there are challenges and shortcomings, as well as what needs and initiatives are required for the company to achieve success. Zealand Care conducted a management workshop in the autumn of 2018 under the expert leadership and facilitation of Taplow Executive Search. ",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Interim Finance Consultant",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/denmark/InterimFinanceConsultant.pdf",
    },
    {
      image: Success2,
      title: "Technical People for client systems development",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/denmark/TechnicalPeopleforclientsystemsdevelopment.pdf",
    },
    {
      image: Success3,
      title: "Transformation in CIMT Sector",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/denmark/TransformationinCIMTSector.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From Denmark";
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
        flag={DenmarkFlag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Denmark" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-xl text-bold"
      />
    </>
  );
};
export default page;
