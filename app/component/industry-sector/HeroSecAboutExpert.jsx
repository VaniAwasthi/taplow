"use client";
import Banner from "../../assets/sectors/IndustryBanner.webp";
import AboutImage from "../../assets/sectors/AboutIndustry.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/IndustryExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/consumerchoose1.svg";
import Icon2 from "../../assets/sectors/consumerchoose2.svg";
import Icon3 from "../../assets/sectors/Industrychoose3.svg";
import Icon4 from "../../assets/sectors/Industrychoose4.svg";
import Icon5 from "../../assets/sectors/Industrychoose5.svg";
import Icon6 from "../../assets/sectors/Industrychoose6.svg";
import { SectorBanner } from "../utilities/SectorBanner";
export const IndustryHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Visionary Leadership for an Evolving Industrial World"
        description="Building a resilient, competitive future demands leaders who can navigate disruption, drive growth, and adapt to change."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutIndustrySector = () => {
  const heading = "Meeting Today’s Industrial Challenges";
  const Content = `The industrial sector is the engine of global progress, transforming raw materials into the innovations that shape our world. From manufacturing and construction to energy and logistics, industrial businesses today must manage complex supply chains, embrace digital transformation, and build sustainable growth strategies.
<br/><br/>

In a landscape where global competition and local demands meet, the right leadership isn’t just important—it’s essential. The Taplow Group partners with organisations across the industrial and manufacturing spectrum to identify, engage, and empower leaders who can turn challenge into opportunity.
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

export const IndustrySectorFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        "What leadership roles do you typically fill in the industrial sector?",
      answer:
        " We specialise in C-suite and senior management roles such as CEOs, COOs, CTOs, plant managers, and functional leaders in operations, engineering, and supply chain.",
    },
    {
      index: 2,
      question:
        "Can you help with leadership transitions in manufacturing environments?",
      answer: ` Yes. We support leadership succession, onboarding, and change management, ensuring smooth transitions in even the most complex operational environments.

`,
    },
    {
      index: 3,
      question:
        "How do you ensure that leaders align with our culture and operational style?",
      answer:
        " We blend rigorous assessments with a nuanced understanding of industrial and manufacturing cultures, ensuring candidates can integrate seamlessly and drive results.",
    },
    {
      index: 4,
      question:
        "Do you provide interim management for urgent industrial challenges?",
      answer:
        "Absolutely. We have a robust network of interim leaders ready to step in—whether you’re expanding, restructuring, or managing a transformation project.",
    },
    {
      index: 5,
      question:
        "Can you help us navigate global operations and supply chain complexities?",
      answer: ` Yes. Our global network and sector-specific expertise enable us to find leaders with international experience who can balance global supply chains with local execution.
`,
    },
    {
      index: 6,
      question:
        " What sets The Taplow Group apart from other search firms in the industrial sector?",
      answer: ` We offer a unique blend of industrial insight, global connectivity, and a partnership-driven approach, helping you build the leadership teams that power your long-term success.

`,
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const IndustryExpertSec = () => {
  const paragraphs = [
    `At <b>The Taplow Group</b>, we go beyond filling roles. We bring decades of experience and deep industry insight to every engagement, combining global reach with local expertise to support your leadership needs.
</b>`,
    `Our consultants, many of whom have backgrounds in industrial and manufacturing businesses themselves, understand the challenges you face, from managing supply chain complexity and product innovation to building a culture of sustainability and continuous improvement.
`,
    `We specialise in <b>Industrial Executive Search</b> and <b>Manufacturing Executive Search</b> for every part of the value chain—whether you’re scaling operations, investing in new markets, or driving strategic transformation. Beyond recruitment, our leadership advisory services and interim solutions help you build future-ready teams and cultures that thrive in the modern industrial landscape.`,
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading=" Expertise in Industrial Executive Search"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="#contact"
        imageUrl={ExperImage} // Make sure this image exists in /public/images
      />
    </>
  );
};

export const WhyChooseSecIndustry = () => {
  const heading = "Why Choose The Taplow Group?";

  const cards = [
    {
      img: Icon1,
      title: " Deep Sector Knowledge",
      desc: `  Our consultants have worked in industrial settings themselves, giving them the hands-on expertise to identify and engage leaders who can handle your unique challenges.
`,
    },
    {
      img: Icon2,
      title: "Worldwide Reach, Local Relevance",
      desc: " With offices across 74 countries, we connect you to leaders who bring an international perspective, while always staying mindful of local operational needs and cultural nuances.",
    },
    {
      img: Icon3,
      title: "Actionable Insights, Not Just Searches",
      desc: ` We combine search expertise with market intelligence and operational know-how, providing you with insights that transform challenges into opportunities.`,
    },
    {
      img: Icon4,
      title: "Adaptive Leadership Solutions",
      desc: "Solutions From permanent executives to interim specialists, we offer flexible leadership models that align with the pace and complexity of modern industrial demands.",
    },
    {
      img: Icon5,
      title: "Culture-Fit Focus",
      desc: "We’re committed to finding leaders who not only deliver results but also align with your unique culture, vision, and values.",
    },
    {
      img: Icon6,
      title: "Insight-Driven, Sector-Specific Solutions",
      desc: " We draw on our industry expertise and real-world knowledge of the digital and ICT sector to deliver leadership strategies that go beyond generic advice, driving innovation and measurable impact in every engagement.",
    },
  ];
  return (
    <>
      <WhyChooseExecutive
        heading={heading}
        cards={cards}
        headingClass="md:w-[500px]"
      />
    </>
  );
};
