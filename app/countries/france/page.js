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
import Success9 from "../../assets/globalpage/CaseStudies/Saftey.webp";
import Success10 from "../../assets/globalpage/CaseStudies/CFOGroups.webp";
import Success11 from "../../assets/globalpage/CaseStudies/StrategyDevelopmentManager.webp";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import OneOffice from "@/app/component/coun-layout/OneOffice";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow France</b>`,
    desc: "Created in 1989 to follow the strong development of HR market in industry, energy, facilities and services sectors, TAPLOW CONSULTING FRANCE has offices in Lyon and Paris.",
  };
  const officeSecHeading = "Our Office in France";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Lyon",
    address: "19 rue Maurice Bouchor, 69007 Lyon, France",
    phone: "(+ 33) 04 72 44 04 44",
    email: " taplowfrance@taplowgroup.com",
  };

  const greenDescriptionBox =
    "We are now present in the main sectors of industry such as food industry, transportation & logistics, energy, retail, automotive industry, chemical industry to name a few. ";
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
      heading:
        "Taplow France - Your challenges, our commitment: leaders, solutions, results",
      image: generalImg,
      services: [
        {
          title: "EXECUTIVE SEARCH",
          content: `<p>Senior level appointments can often be complex and require a careful, discreet approach.
<b>TAPLOW CONSULTING FRANCE</b> uses both traditional and contemporary recruitment methods, focused on identifying the best talent for your business. Partnering with your organisation to thoroughly understand your goals and drivers, our team of consultants and researchers ensure you make successful executive level appointments.</p>`,
        },

        {
          title: "Executive Interim",
          content: `<p>Executive Interim is the immediate provision of a manager or a team to handle a complex situation or a key position that your organization is unable or unwilling to handle on its own.<br/><br/>

In this way, you choose to support and secure the change, and control its implementation and results, even in an emergency situation. Through our firm, <b>APTIMEN MANAGERS</b>, executive interim management expert, <b>TAPLOW CONSULTING FRANCE</b> is able to deploy quickly any operational project. Within 3 days after your call, we introduce you to a manager with the right credentials, whom, we know from experience, will achieve your goals.

<br/><br/>You want to know more ? : <a href="https://aptimen-managers.com/" target="_blank">Click HERE</a> </p>`,
        },
        {
          title: "Leadership Advisory & Performance",
          content: `<p>Taplow Leadership Advisory & Performance was born out of a desire to support companies in their transformation challenges, by combining operational performance, human impact, and sustainable development.

Our approach is based on proven tools — individual and team coaching, managerial training, change management support, and assessments — all aimed at building more effective teams and more impactful leadership.<br/><br/>

We offer end-to-end support, from diagnosis to implementation, and can mobilize operational resources when needed through our network of experienced coaches, consultants, and interim executive managers.<br/><br/>

Together, we build high-impact teams and future-ready organizations.<br/><br/>

You want to know more ? <a href="https://www.taplowleadershipadvisory.fr/" target="_blank">Click HERE</a> </p>`,
        },
      ],
    },
  };
  const SuccessStoryslidesData = [
    {
      image: Success11,
      title: "Strategy Development Manager",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/StrategyDevelopmentManager.pdf",
    },
    {
      image: Success10,
      title: "CFO Group",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/CFOGroups.pdf",
    },
    {
      image: Success9,
      title: "Safety Department Director",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/SafetyDepartmentDirector.pdf",
    },
    {
      image: Success1,
      title: "Interim Managing Director in the Industrial sector",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/France/InterimManagingDirectorintheIndustyfield.pdf",
    },
    {
      image: Success2,
      title: "Interim R&D Director”",

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
