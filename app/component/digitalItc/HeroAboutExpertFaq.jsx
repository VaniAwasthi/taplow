"use client";
import Banner from "../../assets/sectors/DigitalBanner.webp";
import AboutImage from "../../assets/sectors/AboutDigital.webp";
import Image from "next/image";
import Faq from "../services/Faq";
import ExperImage from "../../assets/sectors/DigitalExpertSec.webp";
import ExpertiseSection from "../services/ExperSection";
import WhyChooseExecutive from "../services/WhyChooseExecutive";
import Icon1 from "../../assets/sectors/DigitalictChoose1.svg";
import Icon2 from "../../assets/sectors/consumerchoose2.svg";
import Icon3 from "../../assets/sectors/DigitalictChoose3.svg";
import Icon4 from "../../assets/sectors/DigitalictChoose4.svg";
import Icon5 from "../../assets/sectors/consumerchoose1.svg";
import Icon6 from "../../assets/sectors/DigitalictChoose6.svg";
import { SectorBanner } from "../utilities/SectorBanner";
export const DigitalHeroSec = () => {
  return (
    <>
      <SectorBanner
        textColor="text-white w-[200px] md:w-[400px]"
        textColorDes="text-white"
        Banner={Banner}
        isButton={false}
        heading="Future-Focused Leaders for the Digital & ICT World"
        description="Where technology drives change, exceptional leaders make it happen."
        buttonText="Know More"
      />
    </>
  );
};

export const AboutDigital = () => {
  const heading = "Meeting the Challenges of the Digital & ICT Landscape";
  const Content = `Today’s digital and ICT sector is a driving force behind global transformation. From cloud computing and AI to cybersecurity and data analytics, the pace of innovation is rapid, and the stakes are high. Businesses must navigate evolving technologies, regulatory complexities, and consumer expectations that demand agility and forward-thinking leadership.
<br/><br/>

In this fast-moving environment, securing the right leaders isn’t just about experience—it’s about vision, adaptability, and a deep understanding of how technology and people intersect. As a trusted <b>Digital and ICT Executive Search , The Taplow Group</b> empowers organizations to find and develop leaders who shape the future of this dynamic sector.
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

export const DigitalItcSectorFaq = () => {
  const FaqData = [
    {
      index: 1,
      question: "What roles do you recruit for in the digital and ICT sector?",
      answer:
        " We place C-suite executives (CIO, CTO, CISO, CDO), engineering leaders, product and innovation heads, data and AI strategists, and senior transformation specialists.",
    },

    {
      index: 2,
      question:
        "Can you support digital transformation in traditional industries?",
      answer:
        "Absolutely. We help organizations in manufacturing, consumer goods, healthcare, and more find digital leaders to drive innovation and growth",
    },
    {
      index: 3,
      question: "How do you ensure cultural and technical alignment?",
      answer:
        " We combine technical assessments with deep market insight to ensure every candidate fits your culture, vision, and transformation goals.",
    },
    {
      index: 4,
      question:
        "What makes The Taplow Group different in digital and ICT leadership?",
      answer: ` Our blend of sector knowledge, global networks, and consultative approach makes us a trusted partner for both <b>Digital Executive Search</b> and <b>ICT Executive Search</b> worldwide.
`,
    },
    {
      index: 5,
      question: "Do you offer interim leadership for digital and ICT roles?",
      answer: ` Yes. Our <b>Digital and ICT Executive Search and Consulting </b> services include interim management for urgent projects and transformation leadership.
`,
    },
  ];
  return (
    <>
      <Faq heading="Frequently Asked Questions (FAQs)" FaqData={FaqData} />
    </>
  );
};

export const DigitalICTExpertSec = () => {
  const paragraphs = [
    `Technology is at the core of today’s business evolution—and so is leadership. At <b>The Taplow Group</b>, we understand that in the Digital and ICT sectors, true success isn’t just about adopting new tools. It’s about building the teams and cultures that make those tools transformative.</b>`,
    `Our consultants bring a blend of deep digital acumen and real-world experience, as many have led technology teams or scaled digital-first businesses themselves. This insider knowledge shapes how we approach every search, advisory engagement, and leadership challenge.`,
    `We work with start-ups ready to disrupt, established companies navigating digital transformation, and global tech giants reimagining what’s next. Our focus spans cybersecurity, data analytics, AI, cloud, and the digital customer journey—reflecting the realities of this dynamic sector.`,
    `But it’s not just about filling roles. As a trusted partner in <b>Digital Executive Search and ICT Executive Search </b>, we collaborate with you to shape the digital DNA of your organizations, ensuring every leader we place is a catalyst for change, innovation, and sustainable growth.
`,
  ];

  return (
    <>
      <ExpertiseSection
        sectionTitle="Taplow Group’s"
        sectionHeading="Expertise in Digital & ICT"
        paragraphs={paragraphs}
        buttonText="Connect With a Specialist"
        buttonLink="/consultant-directory"
        imageUrl={ExperImage} // Make sure this image exists in /public/images
      />
    </>
  );
};

export const WhyChooseSecDigital = () => {
  const heading = "Why Choose The Taplow Group for Your Digital & ICT Needs?";

  const cards = [
    {
      img: Icon1,
      title: "Digital-First Mindset",
      desc: ` We’re not just search experts; we’re digital insiders. Our global network includes digital pioneers and ICT veterans who understand how tech drives competitive advantage.`,
    },
    {
      img: Icon2,
      title: "Global Reach, Local Expertise",
      desc: " From emerging markets to established hubs, we know how to find the talent that aligns with your digital ambitions and local culture.",
    },
    {
      img: Icon3,
      title: " Beyond Recruitment—True Partnership",
      desc: `We don’t just find leaders; we help you develop the leadership culture needed to thrive in an ever-evolving tech landscape.`,
    },
    {
      img: Icon4,
      title: "  Forward-Thinking Diversity",
      desc: "We champion diverse voices in the digital space, recognising that the best solutions come from inclusive, future-ready teams.",
    },
    {
      img: Icon5,
      title: " Responsive Interim Solutions",
      desc: " When transformation can’t wait, our interim leaders bring the focus and adaptability to keep you moving forward at speed.",
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
