"use client";
import Banner from "../../assets/sectors/LifeScienceBaner.webp";
import AboutImage from "../../assets/sectors/AboutLifeScience.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/LifeScienceExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/consumerchoose1.svg";
import Icon2 from "../../assets/sectors/consumerchoose2.svg";
import Icon3 from "../../assets/sectors/consumerchoose3.svg";
import Icon4 from "../../assets/sectors/LifescienceChoose4.svg";
import Icon5 from "../../assets/sectors/LifescienceChoose5.svg";
import { SectorBanner } from "../utilities/SectorBanner";
export const LifeScienceHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Empowering Life Sciences and Pharma Leadership"
        description=" Where innovation meets opportunity, exceptional leaders create meaningful impact."
        buttonText="Know More"
        isButton={false}
      />
    </>
  );
};

export const AboutLifeScience = () => {
  const heading = "Navigating the Dynamic Life Sciences and Pharma Landscape";
  const Content = `The <b>Life Sciences and Pharma</b> sector is undergoing rapid transformation, driven by scientific breakthroughs, regulatory shifts, and evolving patient expectations. From genomics and biotech to digital health and medtech, leaders in this sector must be prepared to embrace change, drive growth, and maintain compliance in a complex environment.
<br/><br/>

“As a leading <b>Life Science and Pharma Executive Search Recruiter partner</b>, <b>The Taplow Group</b> helps organisations secure the visionary leaders who turn potential into progress. In a world of constant innovation and global competition, the right leadership can be the difference between meeting expectations and redefining them.
<br/>

`;
  return (
    <>
      <div className="mx-auto relative mt-[2rem] mb-[4rem] md:mt-6 md:mb-[2rem] w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Left Section: Image */}
          <div className="relative w-full md:w-[150%] h-[300px] md:h-[600px] lg:h-[600px] overflow-hidden">
            <Image
              src={AboutImage}
              alt="ConsumerProduct"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Section: Content */}
          <div className="relative w-full md:w-[85%] md:ml-[3rem] top-0 md:top-[4rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[450px] z-10">
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

export const LifeSciSectorFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        "What types of roles do you recruit for in life sciences and pharma?",
      answer:
        "We specialise in Life Science Executive Search and Pharmaceutical Executive Search, placing C-level leaders, scientific and R&D heads, regulatory and compliance experts, and commercial leaders.",
    },
    {
      index: 2,
      question: "Do you offer interim management for the sector?",
      answer:
        " Yes. We provide interim leadership to support transformation, crisis response, or market entry within the life sciences and pharma industries.",
    },
    {
      index: 3,
      question: "Can you help us expand internationally?",
      answer:
        " Absolutely. As a global Life Sciences Executive Search Agency, we offer cross-border expertise to help you navigate new markets and opportunities.",
    },
    {
      index: 4,
      question: "How do you ensure alignment with our culture?",
      answer:
        " We leverage sector insights, in-depth assessments, and leadership advisory to ensure candidates are a strong cultural and operational fit.",
    },
    {
      index: 5,
      question: "Why choose The Taplow Group?",
      answer:
        " Our blend of industry expertise, global networks, and a human-first approach positions us as a trusted partner in Life Science Executive Search and Pharmaceutical Executive Search worldwide.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const LifeScienceExpertSec = () => {
  const paragraphs = [
    `Our team brings decades of <b>Life Science Executive Search </b> and <b>Pharmaceutical Executive Search</b> experience to every engagement. We understand the unique challenges of the sector—speed to market, regulatory complexity, talent scarcity—and how to find leaders who can address them.`,
    `Our consultants include former life sciences executives and advisors, giving us a practical understanding of the skills and mindsets needed to thrive. We support organisations across biotechnology, consumer health, pharmaceuticals, medical devices, and healthcare innovation`,
    `As a trusted <b>Life Sciences Executive Search Agency</b>, we go beyond recruitment. Our services include interim management, succession planning, leadership assessment, and performance-driven advisory, ensuring you have the talent and strategies to lead with confidence and clarity.
`,
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading="Expertise in Life Sciences and Pharma"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="/consultant-directory"
        imageUrl={ExperImage}
      />
    </>
  );
};

export const WhyChooseSecLifeScience = () => {
  const heading = "Why Choose The Taplow Group?";

  const cards = [
    {
      img: Icon1,
      title: "Deep Sector Knowledge",
      desc: `We understand the evolving needs of the life sciences and pharma ecosystem, whether in <b> Life Science Executive Search </b> or <b>Pharmaceutical Executive Search</b>.`,
    },
    {
      img: Icon2,
      title: "Integrated Talent and Advisory Solutions",
      desc: " From executive search to interim leadership and succession planning, we deliver comprehensive leadership solutions tailored to your sector.",
    },
    {
      img: Icon3,
      title: "Global Reach, Local Understanding",
      desc: ` Our international footprint allows us to source and place leaders with cultural fit and regional expertise.`,
    },
    {
      img: Icon4,
      title: "Championing Diversity and Inclusion",
      desc: " We are committed to building diverse leadership teams that reflect the values and innovation mindset of the sector.",
    },
    {
      img: Icon5,
      title: "Interim Management for Critical Needs",
      desc: "For short-term leadership gaps or transformation initiatives, we offer interim leaders who deliver immediate impact.",
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
