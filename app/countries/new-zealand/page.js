"use client";
import React from "react";
import Banner from "../../assets/globalpage/nzBanner.webp";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/NZOffice.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import NZflag from "../../assets/globalpage/NZflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/NZcase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/NZcase2.webp";
import Success3 from "../../assets/globalpage/CaseStudies/NZcase3.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
import { TwoOffice } from "@/app/component/coun-layout/TwoOfficeLay";
import officeImage2 from "../../assets/globalpage/NxOffice.webp";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow New Zealand</b>`,
    desc: "Our New Zealand operation has established and grown from merging the skills, experience and resources of SandriWalsh Executive Search and Rosenberg Executive Search to form SWR Executive Search (Sandri Walsh Rosenberg). ",
  };

  const officeSecHeading = "Our Office in New Zealand";
  const officeData = [
    {
      id: 1,
      image: officeImage2,
      name: " Auckland",
      address: "Level 10, 11 Britomart Place, Auckland 1010, ",
      phone: "+64 29 273 2264",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: officeImage,
      name: "Wellington",
      address: "L14, Equinox House, The Terrace, Wellington 6011, New Zealand",
      phone: "+64(0) 29248 8502",
      email: "eric@macdonaldsearchgroup.com",
    },
  ];
  const AboutContent = {
    greenDescription: `Our New Zealand operations has established and grown from merging the skills, experience and resources of SandriWalsh Executive Search and Rosenberg Executive Search`,
    Aboutheading:
      "Taplow New Zealand:Driving Leadership and Diversity Excellence",
    aboutContentpara3:
      "Leadership is about inspiring the team to achieve more than they could as individuals.  Finding those leaders is what we do. The leaders who dream big and deliver results. Leaders with a track record for success built on hard work and team effort.",
    aboutContentpara4:
      "They’re busy getting on with what they do, not necessarily looking for their next move. That’s where we come in – we find them, we inspire them and get them excited about the opportunity.",
    aboutContentpara2:
      "With over 70 years of combined experience, we have been instrumental in helping hundreds of New Zealand clients build leadership capability.  We are in it for the long-haul and we work in partnership with our clients to help them bring their vision to life.",
    aboutContentpara1:
      " Our New Zealand operations has established and grown from merging the skills, experience and resources of SandriWalsh Executive Search and Rosenberg Executive Search. Our shared passion for finding and appointing leaders is now matched by our ability to generate exceptional results, nationwide.",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Transformational Change Programme",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/NZ/TransformationalChangeProgramme.pdf",
    },
    {
      image: Success2,
      title: "Managing Director – Diagnostics Organisation",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/NZ/ManagingDirectorDiagnosticsOrganisation.pdf",
    },
    {
      image: Success3,
      title: "Transformational Change Programme",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/NZ/TransformationalChangeProgrammediff.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From New Zealand";
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
        flag={NZflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="New Zealand" />

      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-xs md:text-2xl text-bold"
      />
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
