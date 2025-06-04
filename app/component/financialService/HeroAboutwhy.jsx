"use client";
import Banner from "../../assets/sectors/FinancialBanner.webp";
import AboutImage from "../../assets/sectors/AboutFinancial.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/FinancialExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/consumerchoose1.svg";
import Icon2 from "../../assets/sectors/consumerchoose2.svg";
import Icon3 from "../../assets/sectors/consumerchoose3.svg";
import Icon4 from "../../assets/sectors/consumerchoose4.svg";
import Icon5 from "../../assets/sectors/consumerchoose5.svg";
import { SectorBanner } from "../utilities/SectorBanner";
export const FinancialHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Your Global Partner for Financial Services Executive Search and Consulting"
        description="In an industry where precision, innovation, and regulation intersect, great leadership isn't optional. It’s essential."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutFinancialService = () => {
  const heading = "Navigating Complexity in Financial Services";
  const Content = `The financial services industry is at a turning point. Evolving regulations, rapid technological change, and growing demands for transparency, sustainability, and resilience are reshaping how institutions lead and compete. From global banks and fintech disruptors to investment firms and insurance providers, organisations require agile, forward-thinking leadership to stay ahead.<br/><br/>

In such a dynamic landscape, partnering with the right Financial Services Executive Search Agency becomes a strategic advantage. Leaders must now be digitally fluent, risk-aware, culturally competent, and equipped to navigate uncertainty with clarity and confidence.<br/>

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

export const FinancialSectorFaq = () => {
  const FaqData = [
    {
      index: 1,
      question: "What is The Taplow Group’s expertise in financial services?",
      answer:
        " We are a trusted Financial Services Executive Search agency, helping institutions find and develop leaders in investment banking, fintech, asset management, insurance, and beyond.",
    },
    {
      index: 2,
      question: " Do you offer consulting services in addition to recruitment?",
      answer:
        " Yes, we provide Financial Services Executive Search and Consulting, including succession planning, leadership development, executive assessment, and board advisory.",
    },
    {
      index: 3,
      question: "  Can you support interim financial leadership appointments?",
      answer:
        "Absolutely. Our interim management services provide senior-level finance leaders on demand—ideal for transitions, transformation, or crisis response.",
    },
    {
      index: 4,
      question: "How do you ensure the right cultural fit?",
      answer:
        " We go beyond CVs—using in-depth assessments and industry benchmarks to ensure alignment between a candidate's mindset, company values, and role demands.",
    },
    {
      index: 5,
      question:
        "What sets The Taplow Group apart in financial services talent search?",
      answer:
        "Our blend of industry experience, global networks, and consultative partnership approach makes us the preferred executive search firm for financial services worldwide.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const FinancialExpertSec = () => {
  const paragraphs = [
    `At <b>The Taplow Group </b>, we are recognised globally for our excellence in <b> Financial Services Executive Search and Consulting</b>. We understand the intricacies of capital markets, asset management, fintech, insurance, and wealth advisory, and we know the kind of leaders required to thrive in each.</b>`,
    `Our consultants bring deep industry experience to every assignment, many having worked within top-tier financial institutions themselves. This hands-on expertise allows us to deliver more than just recruitment—we provide insight-driven talent solutions tailored to the business challenges you face.`,
    `As a leading <b> Financial Services Executive Search firm</b>, we serve clients across: Investment and Private Banking, Asset and Wealth Management, Fintech and Digital Payments, Real Assets and Infrastructure Finance, Risk, Compliance & ESG, Private Equity and Venture Capital`,
    "Whether you need transformational leadership post-M&A, interim C-suite executives during transition, or long-term succession planning, we are the trusted partner to deliver results.",
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading="Financial Services Expertise"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="#contact"
        imageUrl={ExperImage} // Make sure this image exists in /public/images
      />
    </>
  );
};

export const WhyChooseSecFinancial = () => {
  const heading =
    "Why Choose The Taplow Group – Your Global Financial Services Executive Search Partner?";

  const cards = [
    {
      img: Icon1,
      title: "Deep Sector Knowledge",
      desc: `We bring decades of experience in <b>executive search for financial services </b>, covering every major vertical within the sector.`,
    },
    {
      img: Icon2,
      title: "Global Reach with Local Intelligence",
      desc: "Our worldwide network enables us to deliver senior appointments across geographies, with regional relevance and compliance insight.",
    },
    {
      img: Icon3,
      title: "Integrated Consulting & Search",
      desc: `As a <b>full-service Financial Services Executive Search and Consulting </b> partner, we guide clients through hiring, assessment, leadership development, and governance advisory.`,
    },
    {
      img: Icon4,
      title: " Access to Top Financial Talent",
      desc: " Our global candidate network includes seasoned financial leaders, digital innovators, and succession-ready executives.",
    },
    {
      img: Icon5,
      title: "Agile Interim Management Solutions",
      desc: " Need immediate impact? Our interim executives provide leadership continuity during transformation, crisis, or key initiatives.",
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
