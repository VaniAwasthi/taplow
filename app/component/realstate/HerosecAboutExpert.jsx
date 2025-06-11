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
export const RealStateHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Building Leadership for a Changing Landscape"
        description=" The Real estate and infrastructure are transforming rapidly, requiring strategic leadership.
Taplow’s Executive Search delivers leaders who shape people, performance, and places.
"
        buttonText="Know More"
      />
    </>
  );
};

export const AboutRealState = () => {
  const heading = "Our Real Estate & Infrastructure Expertise";
  const Content = `From investment management and capital markets to urban development and sustainable design, our team understands the unique demands of real estate and infrastructure leadership. Many of our consultants have worked in these industries themselves, bringing first-hand knowledge of how to balance risk, growth, and community value.
<br/><br/>We support a diverse client base, including developers, investors, asset managers, operators, and professional services firms. Whether your priority is navigating ESG, driving operational excellence, or reshaping your team to meet new market challenges, we bring insight and clarity to every engagement.
<br/> <br/> Our <b>Real Estate Executive Search Firm</b> approach goes beyond placements. We provide nuanced advisory services—from succession planning to performance enhancement—ensuring your leadership team is built to thrive.
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
          <div className="relative w-full md:w-[85%] md:ml-[3rem] top-0 md:top-[4rem] bg-[#859839] p-6 md:p-6 shadow-xl text-white rounded-lg flex flex-col justify-center hover:scale-105 transition-transform duration-300 hover:cursor-pointer h-[500px] z-10">
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

export const RealStateFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        " What leadership roles do you specialise in within real estate and infrastructure?",
      answer:
        " We recruit across asset management, development, investment, capital markets, and operational leadership—spanning C-suite, board, and project leadership roles.",
    },
    {
      index: 2,
      question:
        "How do you align leaders with sector-specific challenges like tenant experience or community impact?",
      answer:
        "We understand the interplay of ESG, urban dynamics, and financial performance. Our assessments ensure leaders share your commitment to community value and sustainability.",
    },
    {
      index: 3,
      question:
        "Can you help with succession planning for real estate funds or asset management firms?",
      answer:
        " Yes. We develop leadership pipelines tailored to your investment strategies and long-term asset goals.",
    },
    {
      index: 4,
      question:
        "Do you offer interim leadership for major real estate or infrastructure projects?",
      answer:
        " Absolutely. We have a global network of proven interim executives who can lead through growth, change, or challenge.",
    },
    {
      index: 5,
      question:
        " What makes The Taplow Group different in real estate executive search?",
      answer:
        "We blend deep sector immersion with global connectivity, offering nuanced, practical advice that shapes the future of your assets and teams.",
    },
    {
      index: 6,
      question:
        " How do you ensure cultural fit within diverse real estate portfolios?",
      answer:
        " We tailor our approach to align leaders with your operational realities—whether it’s a global real estate portfolio or a local infrastructure initiative.",
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const ProfessionalExpertSec = () => {
  const paragraphs = [
    `At The Taplow Group, we are partners to some of the world’s most trusted professional services firms—helping them identify, assess, and develop the leaders who drive sustainable success.`,
    `Our <b>Professional Services Executive Search</b> and <b>Professional Services Leadership Solutions </b> span the full spectrum of needs: from hiring C-suite leaders to developing future-focused succession plans, to interim leadership during periods of change.`,
    `Our consultants bring direct experience within the professional services sector—insight that’s critical for finding leaders who can combine technical mastery with commercial acumen and client empathy.`,
    `We know that in this world, <b>fit matters as much as skill</b>. That’s why we look beyond résumés to understand culture, values, and long-term vision—ensuring every leader we place or develop is a catalyst for performance and client loyalty.`,
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading="Expertise in Professional Services"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="#contact"
        imageUrl={ExperImage}
      />
    </>
  );
};

export const WhyChooseProfessionalSec = () => {
  const heading = "Why Choose The Taplow Group for Professional Services?";

  const cards = [
    {
      img: Icon1,
      title: "First-Hand Sector Knowledge",
      desc: `Our partners have led or advised professional services firms themselves, giving them an insider’s perspective on the unique demands of client service, fee-based revenue models, and partner-led growth.`,
    },
    {
      img: Icon2,
      title: "Global Network, Local Nuance",
      desc: "We connect you with exceptional leaders across global markets—while tailoring searches to the regional cultures, client expectations, and regulatory frameworks that shape your business.",
    },
    {
      img: Icon3,
      title: " Balanced Insight & Practical Experience",
      desc: `We blend rigorous executive search methodologies with an appreciation for the relationship-driven nature of professional services—ensuring leaders we place can build trust and deliver impact`,
    },
    {
      img: Icon4,
      title: "Holistic Leadership Solutions",
      desc: " Beyond search, we help your firm with succession planning, practice leadership transitions, and cultural transformation—strengthening the human capital that drives your firm’s success.",
    },
    {
      img: Icon5,
      title: "Championing Inclusive Leadership",
      desc: " We advocate for diverse leadership teams that reflect the communities you serve—knowing this fosters stronger client relationships and innovative thinking.",
    },
    {
      img: Icon5,
      title: "Long-Term Partnerships for Sustainable Growth",
      desc: "We don’t just fill roles; we become trusted advisors who help your firm navigate complex challenges and find leaders who fit seamlessly into your client-focused culture.",
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
