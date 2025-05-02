"use client";
import React from "react";
import Banner from "../../assets/globalpage/indiaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import officeImage1 from "../../assets/globalpage/IndiaGurgaon.webp";
import officeImage2 from "../../assets/globalpage/IndiaMumbai.webp";
import generalImg from "../../assets/globalpage/generalImg.webp";
import IndiaFlag from "../../assets/globalpage/IndiaFlag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import IndustrySlider from "@/app/component/home/Industries";
import { TeamSection } from "@/app/component/coun-layout/SweadenTeamsec";
import Success1 from "../../assets/globalpage/Success1.webp";
import Success2 from "../../assets/globalpage/Success2.webp";
import Success3 from "../../assets/globalpage/Success3.webp";
import Success4 from "../../assets/globalpage/Success4.webp";
import Success5 from "../../assets/globalpage/Success5.webp";
import TaplowInfoSection from "@/app/component/coun-layout/TaplowInfoSection";
import { TwoOffice } from "@/app/component/coun-layout/TwoOfficeLay";
import CaseStudies from "@/app/component/coun-layout/CaseStudies";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow India</b>`,
    desc: "India is on a major growth trajectory, and is currently the fastest growing economy in the world. The Taplow Group established itself in India to assist organizations in building people capacity in this very fast paced growth environment.",
  };
  const officeSecHeading = "Our office in India";
  const officeData = [
    {
      id: 1,
      image: officeImage2,
      name: "Gurgaon",
      address:
        "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
      phone: "+91(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
    {
      id: 2,
      image: officeImage1,
      name: "Mumbai",
      address:
        "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
      phone: "+91(0)1442 383361",
      email: "eric@macdonaldsearchgroup.com",
    },
  ];
  const greenDescriptionBox =
    "At The Taplow Group – India, Executive Search is at the core of our work. As a prominent Executive Search Firm in India, we help clients identify senior leaders who align with their culture, strategy, and long-term goals. ";
  const AboutContent = {
    general: {
      title: "General Information",
      paragraphs: [
        "Established in 2014 by Sangeeta Sabharwal and Shaista Sabharwal, The Taplow Group – India is a trusted partner for organisations seeking high-impact leadership talent. Recognised as a leading Executive Search Firm in India, we specialise in helping businesses navigate change and growth through strategic appointments across senior leadership roles.",
        "We take a relationship-led approach. We don’t view clients as accounts—we see them as long-term partners. Our team takes time to fully understand your context, challenges, and aspirations, allowing us to act as true brand ambassadors when engaging with senior leadership talent.",
        "We also provide Interim Management Services in India, offering organisations experienced leadership support during periods of transformation, turnaround, or growth. Our HR Advisory Services in India also guide clients through leadership development, succession planning, and organisational change. Each engagement benefits from the direct involvement of senior consultants, ensuring precision, relevance, and impact.",
        "We work with large, medium, and small enterprises, including international or Indian MNCs and promoter-led domestic businesses. We bring leadership expertise to key sectors, including the Industrial and manufacturing sector, Leadership hiring for consumer and retail companies, Interim Management for Aviation and Aerospace Organisations, and HR Advisory Services for the Philanthropy and social Impact sectors.",
      ],
      image: DiversityImg,
    },
    specific: {
      title: "Specific Information",
      heading: "Taplow India: Vision & Mission",
      image: generalImg,
      services: [
        {
          title: "",
          content: `<p>Our milestone-based fee model offers clarity and flexibility, while our high-touch, senior-led delivery ensures quality and consistency throughout every mandate.</p> `,
        },
        {
          title: "",
          content: `<p>We understand that successful companies attract and retain the best not by just offering highly competitive salaries but by constantly striving to make the work environment somewhere employees want to be.</p>`,
        },
        {
          title: "",
          content: `<p>We also champion diversity in leadership, recognising its power to fuel innovation and growth. Across the Consumer and retail, Industrial, Aviation, and Social Impact sectors, we work closely with clients to build inclusive leadership teams that reflect varied perspectives and experiences.</p>`,
        },

        {
          title: "",
          content: `<p>Our goal is simple: to provide a professional, high-quality experience for clients and candidates, rooted in trust, care, and long-term partnerships, to deliver solutions beyond just hiring.</p> `,
        },
      ],
    },
  };
  const SuccessStoryslidesData = [
    {
      image: Success1,
      title: "Development of a management program",
      link: "https://france.taplowgroup.com/Portals/10/Case%20France%201.pdf",
    },
    {
      image: Success2,
      title:
        "Executive search for an experienced manager “cold chain logistics”",
      link: "https://france.taplowgroup.com/Portals/10/Case%20France%202.pdf",
    },
    {
      image: Success3,
      title: "Executive assessment services for a global life sciences company",
      link: "https://france.taplowgroup.com/Portals/10/DNNGalleryPro/uploads/2019/3/7/TAPLOW%20CASE%201.pdf",
    },
    {
      image: Success4,
      title: "CFO Search for French International Transportation Company",
      link: "https://france.taplowgroup.com/Portals/10/DNNGalleryPro/uploads/2019/3/7/case%203.pdf",
    },
    {
      image: Success5,
      title:
        "Feedback culture management programme for a Global Aero structure Company",
      link: "https://france.taplowgroup.com/Portals/10/DNNGalleryPro/uploads/2019/3/7/case%202.pdf",
    },
  ];
  const Successheading = "Recent Success Stories From India";
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
      <TwoOffice Officeheading={officeSecHeading} offices={officeData} />
      <TaplowInfoSection
        isImage={true}
        {...AboutContent}
        greenDescription={greenDescriptionBox}
        flag={IndiaFlag}
        isGeneralImage={true}
        SpecificlongData={false}
      />
      <IndustrySlider />
      <TeamSection country="India" />
      <CaseStudies
        SuccessData={SuccessStoryslidesData}
        heading={Successheading}
      />
    </>
  );
};
export default page;
