"use client";
import React from "react";
import Banner from "../../assets/globalpage/finlandBanner.webp";
import {
  GlobalpageBanner,
  SuccessStory,
} from "@/app/component/coun-layout/GlobalpageBanner";
import OneOffice from "@/app/component/coun-layout/OneOffice";
import officeImage from "../../assets/globalpage/finlandOffice.webp";
import Bulgariaflag from "../../assets/globalpage/finlandflag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/CaseStudies/finlindCase1.webp";
import Success2 from "../../assets/globalpage/CaseStudies/finlindCase2.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Finland</b>`,
    desc: "Success in our assignments does not come by chance, but there is a lot of work behind it. We measure our success and continuously develop our operations. Our clients and the candidates involved in the search consider our success to be excellent.",
  };
  const officeSecHeading = "Our Office in Finland";
  const officeData = {
    id: 1,
    image: officeImage,
    name: "Helsinki",
    address:
      "Mannerheimintie 113,<br/> Aitio Business Park, <br/>00280 Helsinki, Finland.",
    // phone: "604-687-6464",
    email: "eric@macdonaldsearchgroup.com",
  };
  const AboutContent = {
    greenDescription: `We know people and we understand client’s situation and goals better than others. We have passion for this work and therefore we enjoy learning and investing time to build our capabilities being best partner for our clients and candidates also in future.  `,
    aboutContentpara1:
      "We know people and we understand client’s situation and goals better than others. We have passion for this work and therefore we enjoy learning and investing time to build our capabilities being best partner for our clients and candidates also in future. This means that we are fully committed to success and that we will do whatever it takes to meet and overachieve the client’s and candidates´ expectations",
    aboutContentpara2:
      "Vast majority of our customers have long relationships with us and they help us to improve ourselves. We see the ongoing cooperation with our customers and Repeat Sales as the major proof for the quality of our services, competitive edge against our competition and vision of the mutual benefits.",
    aboutContentpara3:
      "We are a member of the Finnish Executive Search Firms association (FEX) a national industry Association of well-known executive search companies with good stature. ",
    aboutContentpara4: "",
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Wood Industry New Market Strategy",
      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/finland/WoodIndustryNewMarketStrategy.pdf",
    },
    {
      image: Success2,
      title: "Property Development Company Leadership Hire",

      link: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/finland/PropertyDevelopmentCompanyLeadershipHire.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From Finland";
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
        flag={Bulgariaflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Finland" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
        textClass="text-md md:text-2xl text-bold"
      />
    </>
  );
};
export default page;
