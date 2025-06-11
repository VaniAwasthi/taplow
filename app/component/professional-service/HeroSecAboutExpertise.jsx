"use client";
import Banner from "../../assets/sectors/ProfessionalBanner.webp";
import AboutImage from "../../assets/sectors/AboutProfessional.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/ProfessionalExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/Professionalchoose1.svg";
import Icon2 from "../../assets/sectors/Professionalchoose2.svg";
import Icon3 from "../../assets/sectors/Professionalchoose3.svg";
import Icon4 from "../../assets/sectors/Professionalchoose4.svg";
import Icon5 from "../../assets/sectors/Professionalchoose5.svg";
import Icon6 from "../../assets/sectors/Professionalchoose6.svg";

import { SectorBanner } from "../utilities/SectorBanner";
export const ProfessionalHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        heading="Powering Progress in Professional Services"
        description=" In a people-driven world, leadership is your greatest differentiator. At The Taplow Group, we help you unlock it."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutProfessionalServices = () => {
  const heading = "Professional Services Landscape";
  const Content = `In the professional services industry, your people are your product. Whether in accounting, law, consulting, engineering, or beyond, client trust hinges on the depth of your team’s expertise, the nuance of your insights, and the agility of your service.<br/><br/>

Yet today’s landscape is as challenging as it is promising. From digital disruption to shifting client demands and globalisation pressures, firms must not only deliver expertise—they must anticipate change, innovate continuously, and nurture cultures of excellence.
<br/> <br/> To thrive, you need leaders who don’t just adapt—they inspire. Leaders who can bridge tradition and transformation, ensure exceptional client experiences, and unlock new value across the business.
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

export const ProfessionalServicesFaq = () => {
  const FaqData = [
    {
      index: 1,
      question:
        "What roles do you typically recruit for in the professional services sector?",
      answer:
        " We recruit senior leaders such as managing partners, practice leaders, directors, CFOs, and other operational and practice-focused roles that underpin client delivery and firm success.",
    },
    {
      index: 2,
      question: " Can you help our firm plan for leadership succession?",
      answer:
        " Yes. We guide you through succession planning, identifying future-ready talent that aligns with your firm’s vision and values.",
    },
    {
      index: 3,
      question: "How do you ensure candidates fit our client-focused culture?",
      answer:
        " We combine industry-specific insights with behavioural assessments to ensure a match not just for skills, but for relationship-building and client service mindset.",
    },
    {
      index: 4,
      question: " Do you offer interim management solutions for urgent needs?",
      answer:
        " Yes. We have a curated network of interim leaders with experience in professional services, ready to provide short-term leadership and stability during times of transition.",
    },
    {
      index: 5,
      question:
        " What differentiates Taplow in professional services executive search?",
      answer:
        " We bring a unique blend of sector expertise, local insight, and a partnership mindset—helping you secure leaders who elevate client service, grow practices, and adapt to market change.",
    },
    {
      index: 6,
      question:
        "How do you align your services with our firm’s goals and culture?",
      answer:
        "We start by deeply understanding your business model, partnership dynamics, and client service ethos—so we can shape solutions that drive long-term performance.",
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
      img: Icon6,
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
