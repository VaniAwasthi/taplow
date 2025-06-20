"use client";
import Image from "next/image";
import hoganLogo from "../../assets/servicepage/leadership/hoganLogo.svg";
import prophetLogo from "../../assets/servicepage/leadership/prophetLogo.svg";
import mpeaLogo from "../../assets/servicepage/leadership/mpeaLogo.svg";
import LeadershipLogo from "../../assets/servicepage/leadership/leadership.svg";
import savilleLogo from "../../assets/servicepage/leadership/savilleLogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  Navigation2,
  Phone,
} from "lucide-react";

import { consultantData } from "../utilities/data/consultantData";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Faq from "../services/Faq";
export const PerformanceLeadershipSection = () => {
  const HeadingDiv =
    "flex space-y-2 space-x-2 md:space-x-4 justify-center items-center";
  const HeadingText =
    "w-full text-center md:text-left text-[24px] md:text-[27px] font-normal";
  const Divider = "h-[5px] w-full md:w-[250px] bg-[#859839] rounded-xl";
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Section 1: Team Performance Enhancement */}
      <div id="team-performance">
        <div className={HeadingDiv}>
          <div className="md:w-1/3 w-full ">
            <h2 className={HeadingText}>Team Performance Enhancement</h2>
            <div className={Divider}></div>
          </div>
          <div className="h-[1px] hidden md:block w-2/3 bg-[#C1C1C1]"></div>
        </div>
        <div className="px-2 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#666666]">
          <div>
            <p className="mb-4 text-[14px]">
              We leverage our expertise to design customised team optimisation
              frameworks, demonstrably enhancing your organisation’s overall
              effectiveness, productivity, and cohesion. Our comprehensive
              approach encompasses:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 pl-5 text-sm list-disc text-[#666666]">
              <li>Diagnostic assessments</li>
              <li>Goal setting and alignment</li>
              <li>Team building and trust building</li>
              <li>Skills development and training</li>
              <li>Process improvement and workflow optimisation</li>
              <li>Performance monitoring and feedback</li>
              <li>Continuous improvement & adaptability</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={prophetLogo} alt="Prophet" className="h-15 w-50" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Strategic Workshop facilitation
            </h3>
            <p className="mb-4 text-[14px]">
              Relying on our expertise in strategic facilitation, we guide your
              team through collaborative workshops. These structured sessions
              tap into your team’s insights, enhance leadership development, and
              define or implement tactical programs.
            </p>
            <ul className="grid text-[14px] grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 pl-5 text-sm list-disc text-[#666666]">
              <li>Workshop Preparation & Planning</li>
              <li>Workshop Design</li>
              <li>Facilitation</li>
              <li>Strategic Analysis & Planning</li>
              <li>Vision & Goal Setting</li>
              <li>Strategy Development & Alignment</li>
              <li>Decision-Making & Prioritization</li>
              <li>Communication & Alignment</li>
              <li>Follow Up & Implementation Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Leadership Development */}
      <div id="leadership-development">
        <div className={HeadingDiv}>
          <div className="h-[1px] hidden md:block w-2/3 bg-[#C1C1C1]"></div>
          <div className="md:w-1/3 w-full ">
            <h2 className={HeadingText}>Leadership Development</h2>
            <div className={Divider}></div>
          </div>
        </div>
        <div className="px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Leadership Development Programs
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              Structured executive leadership coaching programs to cultivate and
              strengthen potential.
            </p>
            <ul className="text-sm list-disc text-[#666666]">
              <li>Organisational needs assessment</li>
              <li>Goal setting</li>
              <li>Curriculum design and delivery</li>
              <li>Experiential learning</li>
              <li>Individual feedback and assessment</li>
              <li>Peer learning & networking</li>
              <li>Coaching progress</li>
            </ul>
            <p className="text-sm mt-2 underline text-blue-600">
              See [link] Development: See Leaders in Action!
            </p>
            <div className="flex flex-wrap gap-8 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={prophetLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={LeadershipLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={savilleLogo} alt="Saville" className="h-15 w-50" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Executive Onboarding and Coaching
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              Coaching services for newly appointed leaders. Support for smooth
              transition and maximised effectiveness.
            </p>
            <ul className="text-sm list-disc text-[#666666]">
              <li>Onboarding planning & preparation</li>
              <li>Assessment and goal-setting</li>
              <li>Role identity & expectations</li>
              <li>Transition support</li>
              <li className="font-semibold">
                First 90 Days Executive coaching programs
              </li>
              <li>Stakeholder engagement</li>
              <li>Strategic alignment</li>
              <li>Performance management & accountability</li>
              <li>Continuous feedback & evaluation</li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-20" />
              <Image src={prophetLogo} alt="Prophet" className="h-15 w-50" />
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              High Performing Executive Program
            </h3>
            <p className="text-[14px]  text-[#666666] mb-3">
              Executive coaching for C-suite leaders to thrive in today’s
              dynamic business landscape.
            </p>
            <ul className="text-[14px] list-disc text-[#666666]">
              <li>
                <span className="font-semibold">
                  Advanced leadership development
                </span>
              </li>
              <li>Peer learning & networking</li>
              <li>Strategic projects & assignments</li>
              <li>Executive Retreats & Immersions</li>
              <li>Performance Management & Accountability</li>
              <li>Strategic Planning & Visioning</li>
              <li>Continuous Learning & Development</li>
              <li>Executive coaching and mentoring</li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Image src={mpeaLogo} alt="MPEAK" className="h-15 w-50" />
            </div>
          </div>
        </div>
      </div>
      {/* Section-3 Change management */}
      <div id="change-management">
        <div className={HeadingDiv}>
          <div className="md:w-1/3 w-full ">
            <h2 className={HeadingText}>Change Management</h2>
            <div className={Divider}></div>
          </div>
          <div className="h-[1px] hidden md:block w-2/3 bg-[#C1C1C1]"></div>
        </div>
        <div className="px-4  mt-8 grid grid-cols-1 gap-8 text-[#666666]">
          <div>
            <p className="mb-4 text-[14px]">
              Our expert change management process helps organisations smoothly
              navigate transitions and transformations. Our well-thought-out
              methodologies support and ensure organisations enjoy a stress-free
              and successful journey.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 pl-5 text-sm list-disc text-[#666666]">
              <li>Diagnostic assessments</li>
              <li>Goal setting and alignment</li>
              <li>Team building and trust building</li>
              <li>Skills development and training</li>
              <li>Process improvement and workflow optimisation</li>
              <li>Performance monitoring and feedback</li>
              <li>Continuous improvement & adaptability</li>
            </ul>
            <p className="text-[#666666]">
              <a href="#" className="text-[#005581] underline">
                See here business case 
              </a>
              ‘Célébrer l'engagement - Programme d'Awards Exceptionnel!’
            </p>
          </div>
        </div>
      </div>
      {/* Section-4 Assessment Insight */}
      <div id="assessment-insights">
        <div className={HeadingDiv}>
          <div className="h-[1px] hidden md:block w-2/3 bg-[#C1C1C1]"></div>
          <div className="md:w-1/3 w-full ">
            <h2 className={HeadingText}>Assessment Insights</h2>
            <div className={Divider}></div>
          </div>
        </div>
        <div className="px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Leadership Advisory Services
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              Our expertise enhances your board's effectiveness and achieves
              governance excellence. Our customised leadership advisory
              services provide bespoke solutions to strengthen your
              organisation's leadership and decision-making capabilities.
            </p>
            <ul className="text-sm list-disc text-[#666666]">
              <li>
                Guidance on board composition, structure, and best practices
              </li>
              <li>
                Strategic advice on governance issues, risk management, and
                regulatory compliance.
              </li>
              <li>
                Board evaluations, strategic planning sessions, and board
                development workshops facilitation.
              </li>
            </ul>
            <p className="text-sm mt-2 text-[#666666] ">
              <a href="#" className="underline text-blue-600">
                See here
              </a>
              business case ‘Financial Services and Human Capital.’
            </p>
            <div className="flex flex-wrap gap-8 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={prophetLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={LeadershipLogo} alt="Hogan" className="h-15 w-50" />
              <Image src={savilleLogo} alt="Saville" className="h-15 w-50" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Talent Mapping and Succession Planning
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We leverage our talent mapping and succession planning expertise
              to identify high-potential individuals within your organisation.
              We then collaborate with you to develop strategic plans, ensuring
              a smooth transition for critical leadership roles.
            </p>
            <p className="text-sm mt-2 text-[#666666] ">
              <a href="#" className="underline text-blue-600">
                See here
              </a>
               business case ‘challenge and observe a group of internal talents
              aiming to become the Top Management Team of tomorrow!’
            </p>
            <div className="flex gap-2 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-20" />
              <Image src={LeadershipLogo} alt="Prophet" className="h-15 w-50" />
              <Image src={savilleLogo} alt="Prophet" className="h-15 w-50" />
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Organisational Performance Optimization
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We optimise organisational performance by leveraging our in-depth
              analysis and identifying areas for improvement across processes,
              structures, technology, and human capital. Our performance
              optimisation frameworks empower clients to maximise resource
              utilisation, streamline operations, and cultivate agility. This
              ensures long-term viability and market competitiveness in a
              dynamic environment. 
            </p>
            <ul className="text-sm list-disc text-[#666666]">
              <li>Performance optimisation assessments and surveys</li>
              <li>Implementation of best practices</li>
              <li>Use of innovative technologies</li>
              <li>Development of employee skills</li>
            </ul>
            <p className="text-sm mt-2 text-[#666666] ">
              <a href="#" className="underline text-blue-600">
                See here
              </a>
              the inspiring conclusion of a series of workshops with a dynamic
              management team at one of my clients.
            </p>
            <div className="flex gap-2 mt-4">
              <Image src={prophetLogo} alt="Hogan" className="h-15 w-20" />
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Success Profile Development
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We pinpoint the essential skills, cultural fit characteristics,
              and relevant experiences needed for different roles. This ensures
              you attract candidates poised to excel and contribute meaningfully
              to your organisation.
            </p>
          </div>
          {/* Column 5*/}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Organisational Assessment
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We identify key factors hindering your organisation's full
              potential, provide actionable insights, and enable you to create a
              more positive and productive environment within your organisation.
            </p>
            <ul className="text-sm list-disc text-[#666666]">
              <li>Assessment tools selection</li>
              <li>
                Roadmap for cultural reset in line with your business' values
                and expectations
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Image src={prophetLogo} alt="Hogan" className="h-15 w-20" />
            </div>
          </div>
          {/* Column 6*/}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Selection of new recruits
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We utilise our proven assessment tools to identify high-potential
              new recruits who align with your organisation’s specific role
              requirements and culture. This data-driven approach ensures you
              select candidates most likely to thrive and contribute
              meaningfully to your organisation's success.
            </p>
            <div className="flex gap-2 mt-4">
              <Image src={hoganLogo} alt="Hogan" className="h-15 w-20" />
            </div>
          </div>
        </div>
      </div>
      {/* Section-5 Advisory Services */}
      <div id="advisory-services">
        <div className={HeadingDiv}>
          <div className="md:w-1/3 w-full ">
            <h2 className={HeadingText}>Advisory Services</h2>
            <div className={Divider}></div>
          </div>
          <div className="h-[1px] hidden md:block w-2/3 bg-[#C1C1C1]"></div>
        </div>
        <div className="px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-[#666666]">
          {/* columm-1 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Capability Framework Design
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              Our experts thoroughly evaluate your organisation and leadership
              capabilities and create a customised roadmap to address identified
              gaps and guide your organisation towards achieving strategic
              objectives.
            </p>
          </div>
          {/* columm-2 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Workplace well-being and psychosocial safety
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              We equip organisations to prioritise workplace WPS. Our experience
              enables you to evaluate and optimise measures that promote the
              mental and emotional well-being of your organisation's greatest
              asset: its workforce. 
            </p>
          </div>
          {/* columm-3 */}
          <div>
            <h3 className="text-2xl text-[#005581] font-bold redhat mb-4">
              Diversity, Inclusion and Equity Advisory Services
            </h3>
            <p className="text-[14px] mb-3 text-[#666666]">
              Drawing on a evidence based approach, we work with our clients to
              develop or identify areas of improvement in ED&I strategy. We work
              with leaders to design an approach to diversity, equity and
              inclusion aligned to business needs and develop inclusive leaders.
              We equip leaders with an understanding of diversity, unconscious
              biases and the role these can play in recruiting and building
              team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AdvisoryLeader = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const consultantSectionRef = useRef(null);

  const leaderData = [
    { name: "Marine Dumont", id: 1 },
    { name: "Kellie Rigg", id: 2 },
    { name: "Eleni Atsalakis", id: 3 },
    { name: "Sheldon Zhou", id: 4 },
  ];

  const allConsultants = consultantData.flat();
  const matchedLeaders = allConsultants.filter((consultant) =>
    leaderData.some((leader) => leader.name === consultant.name)
  );

  const chunkedLeaders = [];
  for (let i = 0; i < matchedLeaders.length; i += 4) {
    chunkedLeaders.push(matchedLeaders.slice(i, i + 4));
  }

  const scrollToConsultants = () => {
    consultantSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (
      prevRef.current &&
      nextRef.current &&
      swiperRef.current?.params?.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation?.init();
      swiperRef.current.navigation?.update();
    }

    if (paginationRef.current && swiperRef.current?.params?.pagination) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination?.init();
      swiperRef.current.pagination?.update();
    }
  }, []);

  return (
    <div className="p-6 md:max-w-7xl mx-auto" ref={consultantSectionRef}>
      <h2 className="text-left text-3xl md:text-4xl font-normal my-8 py-2 relative w-full md:w-2/3">
        Engage with our Key Global <br />
        Leadership Advisors and Performance Experts
        <div className="w-70 h-1 md:ml-[1rem] bg-[#96A94A]  mt-2"></div>
      </h2>

      <div className="relative mt-6">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={scrollToConsultants}
        >
          {chunkedLeaders.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.map((consultant, idx) => (
                  <div
                    key={idx}
                    className="relative p-2 text-center"
                    onMouseEnter={() => setHovered(`${index}-${idx}`)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative p-4 text-left">
                      <div className="relative">
                        <Image
                          src={consultant.image}
                          alt={consultant.name}
                          width={350}
                          height={350}
                          className="w-[350px] md:w-full h-[350px] md:h-[19rem] object-cover rounded-lg shadow"
                        />
                        {hovered === `${index}-${idx}` && (
                          <div className="absolute inset-0 bg-[#005581] text-white flex flex-col justify-center items-start p-4 rounded-lg transition-opacity duration-300 opacity-100">
                            <h3 className="font-bold text-lg mt-3 mb-4">
                              {consultant.name}
                            </h3>
                            <p className="text-sm text-white mb-3">
                              {consultant.role}
                            </p>
                            <div className="flex items-center text-white text-sm font-medium mb-3">
                              <Navigation2 className="text-white w-3 h-3 mr-2" />
                              <span>{consultant.location}</span>
                            </div>
                            <div className="flex items-center text-white text-sm font-medium mb-3">
                              <Phone className="text-white w-3 h-3 mr-2" />
                              <span>{consultant.phone}</span>
                            </div>
                            <div
                              className="flex items-center justify-between w-full text-white text-sm font-medium mt-3 cursor-pointer"
                              onClick={() =>
                                router.push(
                                  `/ConsultantProfile?id=${consultant.id}`
                                )
                              }
                            >
                              <span>See Full Bio</span>
                              <MoveRight className="text-white w-4 h-4 mr-2" />
                            </div>
                          </div>
                        )}
                      </div>
                      <h3
                        className="font-bold mt-3 text-lg cursor-pointer"
                        onClick={() =>
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
                        }
                      >
                        {consultant.name}
                      </h3>
                      <p
                        className="text-sm text-gray-600 cursor-pointer"
                        onClick={() =>
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
                        }
                      >
                        {consultant.role}
                      </p>
                      <div
                        className="flex items-center text-[#009688] text-sm font-medium mt-1 cursor-pointer"
                        onClick={() =>
                          router.push(`/ConsultantProfile?id=${consultant.id}`)
                        }
                      >
                        <Navigation2 className="text-[#009688] w-3 h-3 mr-2" />
                        <span>{consultant.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {chunkedLeaders.length > 1 && (
          <div className="flex mx-auto justify-center items-center">
            <div className="flex justify-center items-center mt-[2rem] mb-[2rem]">
              <button
                ref={prevRef}
                className="text-[#ccc] cursor-pointer"
                onClick={() => {
                  swiperRef.current?.slidePrev();
                  scrollToConsultants();
                }}
              >
                <ChevronLeft size={30} />
              </button>
              <div ref={paginationRef} className="custom-pagination flex"></div>
              <button
                ref={nextRef}
                className="text-[#ccc] cursor-pointer"
                onClick={() => {
                  swiperRef.current?.slideNext();
                  scrollToConsultants();
                }}
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Leadershipfaq = () => {
  const FaqData = [
    {
      index: 1,
      question: "What industries does The Taplow Group specialise in?",
      answer:
        "We serve various industries, including finance, healthcare, technology, consumer goods, etc.",
    },
    {
      index: 2,
      question: "How does Taplow ensure the exemplary leadership fit?",
      answer:
        "We ensure leadership fit through a rigorous selection process tailored to each client's needs.",
    },
    {
      index: 3,
      question: "What is your executive search process?",
      answer:
        "Our process includes market research, candidate assessment, and in-depth interviews.",
    },
    {
      index: 4,
      question: "How long does an executive search typically take?",
      answer:
        "An executive search typically takes 6-12 weeks depending on role complexity.",
    },
    {
      index: 5,
      question: "How does Taplow differ from other executive search firms?",
      answer:
        "We provide a personalized, hands-on approach with a strong global network.",
    },
  ];
  return (
    <>
      <Faq
        heading="Leadership Advisory and Performance FAQ’s"
        FaqData={FaqData}
      />
    </>
  );
};
