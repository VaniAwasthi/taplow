"use client";
import React from "react";
import Banner from "../../assets/globalpage/franceBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import officeImage from "../../assets/globalpage/franceLyon.webp";
import generalImg from "../../assets/globalpage/generalImg.webp";
import Frenchflag from "../../assets/globalpage/frenchflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/FranceCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/FranceCase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/FranceCase3.webp";
import Success4 from "../../assets/globalpage/CaseStudies/FranceCase4.webp";
import Success5 from "../../assets/globalpage/CaseStudies/FranceCase5.webp";
import Success6 from "../../assets/globalpage/CaseStudies/FranceCase6.webp";
import Success7 from "../../assets/globalpage/CaseStudies/FranceCase7.webp";
import Success8 from "../../assets/globalpage/CaseStudies/FranceCase8.webp";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import OneOffice from "@/app/component/coun-layout/OneOffice";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow France</b>`,
    desc: " Created in 1989 to follow the strong development of HR market in Hi-Tech, Construction, Automotive and Life science sectors, TAPLOW CONSULTING FRANCE has offices in Lyon",
  };
  const officeSecHeading = "Our office in France";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Lyon",
    address: "19 rue Maurice Bouchor, 69007 Lyon, France",
    // phone: "+44(0)1442 383361",
    // email: "eric@macdonaldsearchgroup.com",
  };

  const greenDescriptionBox =
    "We are now present in the main sectors of industry (FMCG, Transportation, Construction, Automotive, Life Science, Energy, Hi-Tech, Retail, Financial Services, etc.). ";
  const AboutContent = {
    general: {
      title: "General Information",
      paragraphs: [
        "TAPLOW CONSULTING FRANCE uses both traditional and contemporary recruitment methods, focused on identifying the best talent for your business. Partnering with your organisation to thoroughly understand your goals and drivers, our team of consultants and researchers ensure you make successful executive level appointments.",
        " We use behavioural-based interviewing techniques to ensure a thorough and accurate understanding of all candidates under consideration. Through regular communication between all parties, we aim to have the most transparent and timely recruitment process possible.",
        "Through our intimate knowledge of the talent pool in our key industry segments, we are able to approach the most suitable candidates professionally and with discretion.",
        "Precise identification and approach of potential candidates, in-depth interviews to assess their skills and motivation, as well as the quality of their professional experiences, and to give them more information about the company and the position.",
      ],
      image: DiversityImg,
    },
    specific: {
      title: "Specific Information",
      heading: "Taplow France: Vision & Mission",
      image: generalImg,
      services: [
        {
          title: "TEAM BUILDING & TRAININGS",
          content: `<p>As part of its interventions, TAPLOW CONSULTING FRANCE first focuses its attention on the project and the company’s values. A diagnosis carried out in situ enables us to build and deliver tailored and innovative modules focused on development of each one’s professionalism.</p> `,
        },
        {
          title: "INTERIM MANAGEMENT",
          content: `<p>Through our firm, APTIMEN MANAGERS, interim management expert, TAPLOW CONSULTING FRANCE is able to deploy quickly any operational project.
Within 3 days after your call, we introduce you to a manager with the right credentials, whom, we know from experience, will achieve your goals.</p>`,
        },
        {
          title: "HUMAN CAPITAL SERVICES",
          content: `<p>We understand that successful companies attract and retain the best not by just offering highly competitive salaries but by constantly striving to make the work environment somewhere employees want to be.</p>`,
        },

        {
          title: "EVALUATION & ASSESMENT CENTER",
          content: `<p>valuation is carried out by our experts and enables companies to objectively assess their employees’ skills and motivations. By evaluating your managers and senior executives, we help you make the right decisions. For these services, we rely on efficient and diversified tools, which complete our approach in face-to-face interviews (e.g.: personality questionnaires, aptitude tests, 360-degree feedback…). We are thus able to support you on different fields such as internal mobility, final phase of recruitment, management to identify high performers, and individual performance improvement.</p> `,
        },
        {
          title: "EXECUTIVE SEARCH",
          content: `<p>Senior level appointments can often be complex and require a careful, discreet approach.
<b>TAPLOW CONSULTING FRANCE</b> uses both traditional and contemporary recruitment methods, focused on identifying the best talent for your business. Partnering with your organisation to thoroughly understand your goals and drivers, our team of consultants and researchers ensure you make successful executive level appointments.</p>`,
        },
        {
          title: "COACHING",
          content: `<p>Coaching is a personalised support process which aims at developping individual and collective performances to the advantage of their company.
It is focused on managers’ daily issues in the broad sense and assists them in realising their professional objectives. It helps them place themselves within the exercise of authority, handle communication and information problems as well as conflicts among people.</p> `,
        },
      ],
    },
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Interim Managing Director in the Industrial sector",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustyfield.pdf",
    },
    {
      image: Success2,
      title: "R & D Director",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/TheTaplowGroupInterimExecutiveRDDirectorCaseStudy.pdf",
    },
    {
      image: Success3,
      title: "Interim Managing Director in the Industry field",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustrialsector.pdf",
    },
    {
      image: Success4,
      title: "Interim Human Resources Director",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimHumanResourcesDirector.pdf",
    },
    {
      image: Success5,
      title: "Organizational & Leadership Transformation",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Organizational&LeadershipTransformation.pdf",
    },
    {
      image: Success6,
      title:
        "Shaping a High-Performing Leadership Team Through Hogan Assessment",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Shaping aHighPerformingLeadershipTeamThroughHoganAssessment.pdf",
    },
    {
      image: Success7,
      title:
        "Coaching : Enabling Leadership Evolution in a Post-Acquisition Context",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/Evolution in a PostAcquisitionContext.pdf",
    },
    {
      image: Success8,
      title: "Customized Journey from Management to Leadership",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/CustomizedJourneyfromManagementtoLeadership.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From France";
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
        flag={Frenchflag}
        isGeneralImage={true}
        SpecificlongData={true}
      />
      <IndustrySlider />
      <TeamSection country="France" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-base"
      />
    </>
  );
};

export default page;
