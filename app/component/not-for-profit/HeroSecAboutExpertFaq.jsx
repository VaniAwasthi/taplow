"use client";
import Banner from "../../assets/sectors/NonProfitBanner.webp";
import AboutImage from "../../assets/sectors/AboutNonProfit.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/NonProfitExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/NonProfitchoose1.svg";
import Icon2 from "../../assets/sectors/NonProfitchoose2.svg";
import Icon3 from "../../assets/sectors/NonProfitchoose3.svg";
import Icon4 from "../../assets/sectors/NonProfitchoose4.svg";
import Icon5 from "../../assets/sectors/NonProfitchoose5.svg";

import { SectorBanner } from "../utilities/SectorBanner";
export const NotProfitHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Connecting Purpose-Driven Organisations with Visionary Leaders
"
        isButton={false}
        description="At The Taplow Group—your Nonprofit CEO Search & Executive Recruiting specialist—we source and develop executive talent that powers social impact."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutNonProfit = () => {
  const heading = "Social Impact & Nonprofit Sector Landscape";
  const Content = `From charities and NGOs to social enterprises, impact investors and CSR teams, success hinges on leaders who turn mission into measurable outcomes. You need executives who combine sector passion, strategic rigour and stakeholder savvy—exactly what our Nonprofit Executive Search and Consulting Firm delivers.`;
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[4rem] md:mt-6 md:mb-[2px] w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Left Section: Image */}
          <div className="relative w-full md:w-[150%] h-[300px] md:h-[450px]  overflow-hidden">
            <Image
              src={AboutImage}
              alt="ConsumerProduct"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section: Content */}
          <div className="relative w-full md:w-[85%] md:ml-[3rem] top-0 md:top-[4rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[300px] z-10">
            {/* Blue Bar on Top */}
            <div className="absolute -top-2 right-[2rem] w-[70px] h-2 bg-[#024996] rounded-md"></div>

            <h2 className="text-[25px] md:text-[30px] redhat font-normal md:mt-2 mt-4 mb-2 leading-relaxed text-left">
              {heading}
            </h2>

            <div className="mb-4 w-[300px] h-[2px] bg-[#024996]"></div>

            <p
              className="text-xs md:text-[15px] leading-snug redhat"
              dangerouslySetInnerHTML={{ __html: Content }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export const NotforprofitFaq = () => {
  const FaqData = [
    {
      index: 1,
      question: "What types of organisations do you serve?",
      answer:
        "We support charities, NGOs, social enterprises, foundations, CSR teams, impact investors, e-learning providers and education institutions as a leading Nonprofit Executive Search and Consulting Firm.",
    },
    {
      index: 2,
      question: "Which leadership roles do you recruit?",
      answer:
        " Through our Nonprofit CEO Search & Executive Recruiting services, we place CEOs, Executive Directors, CFOs, Heads of Programmes, Board Chairs and non-executive directors.",
    },
    {
      index: 3,
      question:
        "Can you support leadership development and succession planning?",
      answer:
        " Yes—our Nonprofit Executive Search and Consulting Firm offerings include customised coaching and succession roadmaps to secure your future leadership bench, with no assessment centres required",
    },
    {
      index: 4,
      question: "Do you provide interim leadership solutions?",
      answer:
        "Absolutely—our Nonprofit CEO Search & Executive Recruiting team delivers vetted interim executives for immediate expertise and stability during transitions.",
    },
    {
      index: 5,
      question: "How do you ensure culture and values alignment?",
      answer:
        "We apply our Nonprofit Executive Search and Consulting Firm methodology—immersive discovery workshops, values-based interviewing and comprehensive stakeholder engagement—to guarantee a true fit.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const NonProfitExpertSec = () => {
  const paragraphs = [
    `We blend deep sector insight across international NGOs, foundations, B-Corps, CSR divisions and impact-investing vehicles with cross-sector pipelines that transition top talent from corporate, public and startup worlds. With global reach across North America, Asia, the UK & Europe and Australasia, our end-to-end solutions—from C-suite search and board placements to succession planning and interim leadership—ensure you secure leaders who drive lasting change.`,
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading=" Expertise in Recruiting for Social Impact Organisations"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="/consultant-directory"
        imageUrl={ExperImage}
      />
    </>
  );
};

export const WhyChooseNonProfit = () => {
  const heading = "Why Partner with The Taplow Group?";

  const cards = [
    {
      img: Icon1,
      title: "Mission-Centric",
      desc: ` We immerse ourselves in your vision—our Nonprofit CEO Search & Executive Recruiting practice ensures every candidate shares your commitment to social good.`,
    },
    {
      img: Icon2,
      title: "Rigorous Search",
      desc: " As a leading Nonprofit Executive Search and Consulting Firm, we apply best-practice methodologies, behavioural profiling and stakeholder-driven panels to guarantee fit on skills, values and culture",
    },
    {
      img: Icon3,
      title: "Proven Impact",
      desc: `Through our Nonprofit CEO Search & Executive Recruiting services, we’ve placed CEOs, Executive Directors, CFOs and Board Members who consistently deliver measurable outcomes.`,
    },
    {
      img: Icon4,
      title: "Strategic Advisory",
      desc: "Our Nonprofit Executive Search and Consulting Firm expertise extends beyond recruitment to governance reviews, board-diversity strategies and succession roadmaps that bolster organisational resilience.",
    },
    {
      img: Icon5,
      title: "Ongoing Support",
      desc: " We remain your long-term partner—providing counsel on emerging sector trends, funding shifts and leadership benchmarks to keep your mission ahead of change.",
    },
  ];
  return (
    <>
      <WhyChooseExecutive
        heading={heading}
        cards={cards}
        headingClass="md:w-[300px]"
      />
    </>
  );
};
