"use client";
import Banner from "../../assets/sectors/consumerBaner.webp";
import AboutImage from "../../assets/sectors/AboutConsumer.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/ConsumerExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/consumerchoose1.svg";
import Icon2 from "../../assets/sectors/consumerchoose2.svg";
import Icon3 from "../../assets/sectors/consumerchoose3.svg";
import Icon4 from "../../assets/sectors/consumerchoose4.svg";
import Icon5 from "../../assets/sectors/consumerchoose5.svg";
import { SectorBanner } from "../utilities/SectorBanner";
export const ConsumerHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-black"
        Banner={Banner}
        heading="Visionary Leaders Build Exceptional Consumer Brands"
        description="In a rapidly evolving market, leadership isn’t just about keeping
            pace—it’s about setting it."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutConsumerService = () => {
  const heading = "Meeting Today’s Consumer with Tomorrow’s Thinking";
  const Content = `The consumer products sector is experiencing a defining moment. Rapidly shifting expectations around sustainability, transparency, and personalization are reshaping how brands engage with customers—and how businesses position themselves for growth.<br/><br/>
Today’s consumers are more discerning and empowered than ever. They demand products that not only meet their needs but also reflect their values. At the same time, digital acceleration, evolving distribution models, and a growing direct-to-consumer economy are forcing organizations to rethink how they operate—across everything from supply chain resilience and product development to brand loyalty and customer experience.<br/><br/>
In an environment where growth can be global overnight and disruption can strike at speed, success demands more than operational excellence. It requires leaders who are strategic yet agile, decisive yet inclusive, and deeply attuned to both data and human insight. `;
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
          <div className="relative w-full md:w-[85%] md:ml-[3rem] top-0 md:top-[2rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[530px] z-10">
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

export const ConsumerSectorFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        "What roles do you typically recruit for in the consumer products industry?",
      answer:
        "We support organizations in hiring C-level executives, board members, division heads, digital and supply chain leaders, among others.",
    },
    {
      index: 2,
      question: "Do you offer services beyond executive search?",
      answer:
        "Yes. We also provide interim management, leadership advisory, CEO training, and succession planning services tailored to your needs.",
    },
    {
      index: 3,
      question: " How do you ensure candidates are the right cultural fit?",
      answer:
        "We carry out in-depth assessments and alignment checks, ensuring the right match not just in skills but values and leadership style.",
    },
    {
      index: 4,
      question: "Can you help with international placements?",
      answer:
        " Absolutely. Our global network allows us to manage cross-border executive searches and advise on leadership needs for global expansion.",
    },
    {
      index: 5,
      question:
        "What makes Taplow different from other executive search firms?",
      answer:
        "  Our blend of hands-on sector experience, global coverage, and genuine partnership approach uniquely positions us to deliver meaningful leadership solutions.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const ConsumerExpertSec = () => {
  const paragraphs = [
    `With years of global experience and deep industry insight, <b>The Taplow Group is a trusted partner to some of the most respected consumer brands worldwide.</b>`,
    `We understand the pressures brands face—intensifying competition, global expansion, evolving consumer expectations, and technological disruption. <b>Our executive search, interim management, and leadership advisory services</b> are designed to meet these challenges head-on, helping you build high-impact teams that deliver results.`,
    `What sets us apart is not just our network but our <b>firsthand understanding of the sector</b>. Many of our consultants have worked within consumer product companies, giving them practical insight into the <b> qualities, mindsets, and experience needed</b> to thrive in this environment.`,
    "Whether you’re looking to scale a new product line, lead a digital transformation, expand into new markets, or manage post-M&A integration, we support you at every step. ",
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading="Expertise in Consumer Products"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="/consultant-directory"
        imageUrl={ExperImage} // Make sure this image exists in /public/images
      />
    </>
  );
};

export const WhyChooseSec = () => {
  const heading = "Why Choose The Taplow Group?";

  const cards = [
    {
      img: Icon1,
      title: "Sector-Specific Expertise",
      desc: "Our consultants understand the consumer mindset and what makes a brand succeed",
    },
    {
      img: Icon2,
      title: "Global Reach, Local Knowledge",
      desc: "With a presence worldwide, we deliver cross-border executive appointments with cultural and regional relevance.",
    },
    {
      img: Icon3,
      title: "Diversity-Driven Approach",
      desc: "We embed inclusive leadership practices into every search and development engagement.",
    },
    {
      img: Icon4,
      title: "Strategic Advisory Services",
      desc: "Beyond hiring, we guide boards and leadership teams through periods of transformation, crisis, or growth",
    },
    {
      img: Icon5,
      title: "Access to Emerging Leaders",
      desc: "Our network spans experienced executives and rising stars ready to lead change.",
    },
  ];
  return (
    <>
      <WhyChooseExecutive heading={heading} cards={cards} />
    </>
  );
};
