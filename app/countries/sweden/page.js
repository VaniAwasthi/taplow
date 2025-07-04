"use client";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import React from "react";
import Banner from "../../assets/globalpage/SwedenBanner.webp";
import Swedanflag from "../../assets/globalpage/flag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import Stockholm from "../../assets/globalpage/Stockholm.webp";
import Halmstad from "../../assets/globalpage/Halmstad.webp";
import Göteborg from "../../assets/globalpage/Göteborg.webp";
import OfficeSlider from "@/app/component/coun-layout/OfficeSlider";
import Malmö from "../../assets/globalpage/Malmö.webp";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Sweden</b>`,
    desc: "Since 1991, we have helped businesses find top leaders through executive search and leadership advisory, combining global reach with local expertise to drive success.",
  };
  const officeSecHeading = "Our Offices in Sweden";

  const officeData = [
    {
      id: 1,
      image: Stockholm,
      name: "Stockholm",
      address: "Landsvägen 57, 172 65 Sundbyberg",
    },
    {
      id: 2,
      image: Halmstad,
      name: "Halmstad",
      address: "Storgatan 52, 302 43 Halmstad",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 3,
      image: Göteborg,
      name: "Göteborg",
      address: "Nya Tingstadsgatan 1, 422 44 Hisings Backa",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 4,
      image: Malmö,
      name: "Malmö",
      address: "Taplow AB , Skrivaregatan 21, 215 32 Malmö, Sweden",
      // phone: "+44(0)1442 383361",
      // email: "eric@macdonaldsearchgroup.com",
    },
  ];
  const AboutContent = {
    greenDescription: `With over 25 years of experience and offices in <b>Stockholm, Gothenburg, Malmö,</b> and <b>Halmstad </b>, Taplow Sweden is a leading name in executive search and strategic diversity recruitment. Our commitment to quality, speed, and precision ensures that we identify and place the best candidates across a wide range of industries.`,
    Aboutheading: "Taplow Sweden: Driving Leadership and Diversity Excellence",
    aboutContentpara1:
      "As part of a global network with strong local expertise, we provide our clients access to top talent worldwide. By expanding perspectives in recruitment, we contribute directly to our clients long-term success.",
    aboutContentpara2:
      "Diversity is at the heart of our approach. Taplow Sweden was one of Sweden's first executive search firms to integrate strategic diversity initiatives. We are also a founding member of the Swedish Diversity Charter, a European network established to promote inclusive hiring.",
    aboutContentpara3:
      " In 2010, we became the first company in our industry to undergo a diversity certification process, ensuring that every step of our internal and external processes meets the highest standards. This was achieved through the Global Diversity Certification Foundation (GDCF), a recognised leader in diversity certification.",
    aboutContentpara4:
      "Our proven methodology, deep market insights, and a strong commitment to leadership excellence and inclusion continue to impact businesses across Sweden. ",
  };
  const Successheading = "Recent Success Stories From Sweden";

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
      title: "Compliance with global laws and best practices.",
    },
    {
      image: Ethical2,
      title: "A professional, inclusive, and respectful workplace.",
    },
  ];
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
        flag={Swedanflag}
        aboutContentpara1={AboutContent.aboutContentpara1}
        aboutContentpara2={AboutContent.aboutContentpara2}
        aboutContentpara3={AboutContent.aboutContentpara3}
        aboutContentpara4={AboutContent.aboutContentpara4}
        ColImg={DiversityImg}
      />
      <IndustrySlider />
      <TeamSection country="Sweden" />
      {/* <SuccessStory
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      /> */}
      {/* <GlobalLocation /> */}
    </>
  );
};

export default page;
