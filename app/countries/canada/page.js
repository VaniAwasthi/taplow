"use client";
import React from "react";
import Banner from "../../assets/globalpage/CanandaBanner.webp";
import officeImage1 from "../../assets/globalpage/officeOne.webp";
import officeImage2 from "../../assets/globalpage/officeTwo.webp";
import officeImage3 from "../../assets/globalpage/officeThree.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import Canadaflag from "../../assets/globalpage/canadaflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/CandaCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/CandaCase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/CandaCase3.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import OfficeSlider from "@/app/component/coun-layout/OfficeSlider";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Canada </b>`,
    desc: "Established in 2010, our partner in Canada is MacDonald Search Group operating under Taplow Canada for global projects. ",
  };
  const officeSecHeading = "Our Offices in Canada";
  const officeData = [
    {
      id: 1,
      image: officeImage1,
      name: "Vancouver",
      address: "Suite 720 475 West Georgia St. Vancouver, BC V6B 4M9",
      phone: "+(604) 687-6464",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: officeImage2,
      name: "Toronto",
      address: "Suite 300 5100 Orbitor Drive Mississauga, ON L4W 4Z4",
      phone: "(416) 342-1505",
      // email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 3,
      image: officeImage3,
      name: "Edmonton",
      address: "Suite 2020, Tower One 10060 Jasper Avenue Edmonton, AB T5J 3R8",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
  ];

  const AboutContent = {
    greenDescription: `Established in 2010, our partner in Canada is MacDonald Search Group operating under Taplow Canada for global projects. MSG is one
of Canada’s largest Executive Search Firms with a team of 22 Search Consultants, Researchers and Marketing Admin spread across 8
office that span the country coast-to-coast.`,
    Aboutheading: "Taplow Canada:Driving Leadership and Diversity Excellence",
    aboutContentpara1: `Officesin Vancouver, Calgary, Edmonton,<br/> Halifax, Moncton, Ottawa, Toronto and Montreal Established in 2010, our partner in Canada is MacDonald Search Group operating under Taplow Canada for global projects. `,
    aboutContentpara2: `MSG is one
of Canada’s largest Executive Search Firms with a team of 22 Search Consultants, Researchers and Marketing Admin spread across 8 office that span the country coast-to-coast.  The firm was founded by Bruce MacDonald who has over 25 years of executive search
experience.`,
    aboutContentpara3:
      "What sets us apart is that most of our team of Search Consultants all came to us with prior corporate experience in their area of focus.  As well, each Consultant personally manages the search.  We do not pass the baton … our Search Consultants manage the entire process – candidate contact, interviews, references and the offer stage.",
    aboutContentpara4:
      "Despite our growth, MacDonald Search Group remains committed to the core values of collaboration, humility, and accountability. We believe in building lasting relationships with clients and candidates based on trust and transparency.",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Vice President of Sales and Marketing",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/Canada/VicePresidentofSalesandMarketing.pdf",
    },
    {
      image: Success2,
      title: "Vice President of QA & Food Safety",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/Canada/VicePresidentofQAFoodSafety.pdf",
    },
    {
      image: Success3,
      title: "Vice President of Operations",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/Canada/VicePresidentofOperations.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From Cananda";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <OfficeSlider officeData={officeData} heading={officeSecHeading} />
      <DrivingLeadership
        aboutheadingclass="md:w-[400px]"
        firstparaclass="!md:w-[300px]"
        greenDescription={AboutContent.greenDescription}
        Aboutheading={AboutContent.Aboutheading}
        flag={Canadaflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Canada" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-xl text-bold"
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
