import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import React from "react";
import Banner from "../../assets/globalpage/SwedenBanner.webp";
import SliderImg1 from "../../assets/Consultantpage/heroImage.webp";
import SliderImg2 from "../../assets/globalpage/officeSlide.webp";
import OfficeSlider from "@/app/component/coun-layout/OfficeSlider";
import Swedanflag from "../../assets/globalpage/flag.webp";
import DiversityImg from "../../assets/globalpage/diversity.webp";
import DrivingLeadership from "@/app/component/coun-layout/DrivingLeadership";
import IndustrySlider from "@/app/component/home/Industries";
const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Sweden</b>`,
    desc: "Since 1991, we have helped businesses find top leaders through executive search and leadership advisory, combining global reach with local expertise to drive success.",
  };
  const officeSecHeading = "Our office in Sweden";
  const officeData = [
    {
      id: 1,
      name: "Stockholm",
      image: SliderImg1,
      address:
        "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
      phone: "604-687-6464",
      email: "ericmacdonald@searchgroup.com",
    },
    {
      id: 2,
      name: "Gothenburg",
      image: SliderImg2,
      address:
        "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
      phone: "604-687-6464",
      email: "ericmacdonald@searchgroup.com",
    },
    {
      id: 3,
      name: "Malmö",
      // image: SliderImg1,
      address:
        "Taplow Sweden(A-Search ABC)O WeWork, Malmskillnadsgatan 32 111 51 Stockholm",
      phone: "604-687-6464",
      email: "ericmacdonald@searchgroup.com",
    },
  ];
  const AboutContent = {
    greenDescription: `With over 25 years of experience and offices in <b>Stockholm, Gothenburg, and Malmö</b>, Taplow Sweden is a leading name in executive search and strategic diversity recruitment. Our commitment to quality, speed, and precision ensures that we identify and place the best candidates across a wide range of industries.`,
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
    </>
  );
};

export default page;
