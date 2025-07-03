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
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import generalImg from "../../assets/globalpage/generalImg.webp";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Denmark</b>`,
    desc: "Taplow has more than 30 years of experience with Executive Search and headhunting. We are a part of The Taplow Group, which is represented in more than 20 countries across 6 continents",
  };
  const officeSecHeading = "Our Office in Denmark";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Slotsmarken",
    address: `Slotsmarken 11, <br/> 2970 Hørsholm, Denmark.`,
    // phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };
  const greenDescriptionBox =
    "Taplow has been successful in Denmark since 1991 and has achieved a large network of both clients as candidates. Through our professional approach and cooperation, we have clients who have been with us for many years - and many candidates have become clients.";
  const AboutContent = {
    general: {
      title: "General Information",
      paragraphs: [
        "Taplow Denmark has over 30 years of experience in Executive Search and headhunting. We are part of The Taplow Group, which is represented in more than 20 countries across six continents. We are experts in Executive Search and have a strong track record of recruiting top-tier talent for some of Denmark’s largest international and most innovative companies (including pharma, shipping, telecom, IT, engineering, and manufacturing) both in Denmark and abroad. We also serve a large base of mid-sized, expanding companies, as well as some of Denmark’s most promising startups. Additionally, we assist many Fortune 500 clients in finding the best candidates for their Danish and Nordic subsidiaries.",
        "At our Danish office, our clients experience the entire process as a seamless flow, where our team of headhunters, researchers, and administrative staff work closely and dedicatedly together. A key element of our unique approach is Taplow’s “2-Way Assessment Center.” Here, we combine problem-solving and change management with real business challenges. Through this process, we evaluate candidates’ professional experience and personality—comparing them to the job requirements and assessing the chemistry and fit between the client and the candidate. This process can stand alone or be integrated with other HR initiatives.",
      ],
      image: DiversityImg,
    },
    specific: {
      title: "Specific Information",
      heading: "Taplow Denmark: Vision & Mission",
      image: generalImg,
      services: [
        {
          title: "Taplow Professional HR Services",
          content: `<p>Small businesses and startups (or companies experiencing a decline in growth or recession) often cannot afford a full-time HR Manager, but a lack of HR expertise can hinder growth and employee well-being, leading to staff turnover. Ad hoc solutions are often inefficient and inconsistent, frequently resulting in incorrect HR strategies, wasted resources, and money. If your company needs a flexible and professional HR partner, Taplow Denmark can offer you an experienced, dedicated HR Manager for 1-5 days a week (or every other week). The HR Manager is physically present in your company—engaged and integrated. You get an experienced, consistent, flexible, and scalable HR Manager at a transparent daily rate.</p>`,
        },
        {
          title: "Management Assessment & Leadership Development & Training",
          content: `<p>Companies often experience a dilemma when faced with new business owners, new strategy or at turnaround, where it turns out that organization is lacking the right competencies. Taplow Group Denmark offers management evaluation and development, where we first uncover the areas where there are challenges and shortcomings, as well as what needs and initiatives are required for the company to achieve success. We conduct management workshop under the expert leadership and facilitation of Taplow Executive Search. The purpose is to achieve a better understanding of the individual manager's own role and profile and to ensure a common management toolbox.</p>`,
        },
        {
          title: "Taplow Executive Interim, Denmark",
          content: `<p>Interim means temporary in Latin. At Taplow Executive Interim, this means that we connect experienced managers, specialists, and companies for a limited period of time. Our Interim Managers add specific competence needs, solve given problems, or initiate a desired change in the company. The focus of our Interim Managers is thus to temporarily add specific competencies to the company rather than simply solving a fixed job. Adding interim competencies to the organization is an intelligent way of ensuring that desired changes are implemented.</p> `,
        },
      ],
    },
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
      <TaplowInfoSection
        isImage={false}
        {...AboutContent}
        greenDescription={greenDescriptionBox}
        flag={DenmarkFlag}
        isGeneralImage={true}
        SpecificlongData={true}
      />
      <IndustrySlider />
      <TeamSection country="Denmark" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-md md:text-2xl text-bold"
      />
    </>
  );
};
export default page;
