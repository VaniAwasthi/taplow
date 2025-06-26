import React from "react";
import BannerLayout from "../utilities/BannerLayout";
import HoverImage from "../../assets/homePage/hover.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import blog1 from "../../assets/Insights/insightBlog1.webp";
import blog2 from "../../assets/Insights/insightBlog2.webp";
import blog3 from "../../assets/Insights/insightBlog3.webp";
import IndustryReport1 from "../../assets/Insights/IndustryReport1.webp";
import IndustryReport2 from "../../assets/Insights/IndustryReport2.webp";
import IndustryReport3 from "../../assets/Insights/IndustryReport3.webp";
import Banner from "../../assets/Insights/InsightBanner.webp";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
export const HerosecInsight = () => {
  const Data = {
    title: "See beyond with",
    title2: "The Taplow Group",
    description: "",

    image: Banner,
    buttonImage: HoverImage,
    href: "#",
  };
  return (
    <>
      <BannerLayout
        image={Data.image}
        title={Data.title}
        title2={Data.title2}
        description={Data.description}
        hoverImage={HoverImage}
        // href={slide.href}
        BgClassname="object-cover w-full h-full object-center "
        // zIndex="1"
      />
    </>
  );
};
export const InsightsBlogSection = () => {
  const blogData = [
    {
      id: 1,
      image: blog1,
      date: "JAN 26, 2025",
      title: "Understanding Generational Differences in Leadership Styles",
      description:
        "Today’s workforce is a blend of four independent generations, each carrying their perspectives, ideals, and leadership styles. The key to...",
    },
    {
      id: 2,

      image: blog2,
      date: "JAN 25, 2025",
      title:
        "Executive’s Guide to Turn Quiet Quitters into High-Performing Team",
      description:
        "You might have experienced this situation when someone works physically but remains mentally detached from their job – It's the worst...",
    },
    {
      id: 3,
      date: "May 22 , 2025",
      image: blog3,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
  ];
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        {/* Header Section */}
        <h2 className="redhat text-2xl md:text-4xl font-regular p-5">Blogs</h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl shadow-lg overflow-hidden border border-[#9AAF43] transition-transform duration-300 hover:scale-105 p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full  object-cover rounded-2xl"
              />

              <div className=" pb-4 text-left redhat">
                <h3 className="text-xl font-semibold mt-3 md:h-[60px]">
                  {blog.title}
                </h3>
                <p className="text-[#181A2A] font-regular text-[14px] mt-3 md:h-[80px]">
                  {blog.description}
                </p>
                <div className="mt-4 flex justify-between items-center    ">
                  <button className=" border border-[#96A94A] rounded-lg w-[120px] h-[32px] bg-[#96A94A] text-white  flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-white hover:text-[#96A94A] transform hover:scale-105">
                    <span className="relative z-10 font-redhat text-sm">
                      Read More
                    </span>
                  </button>
                  <span className="text-xs text-[#666666]">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-10">
          <Link
            // href="#"
            href="/insights/blogs"
            className="text-md text-[#005581] underline "
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export const IndustryReportSec = () => {
  const InsightData = [
    {
      index: 1,
      Image: IndustryReport1,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/taplow-group-2025-global-business-outlook-report",
    },
    {
      index: 2,
      Image: IndustryReport2,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/taplow-group-2024-global-business-outlook-report",
    },
    {
      index: 3,
      Image: IndustryReport3,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/with-10-years-of-executive-search-impact-across-industries-the-taplow-group-india-is-on-an-exciting-growth-trajectory",
    },
  ];
  return (
    <>
      <div className="md:py-4 py-10">
        <div className="container mx-auto px-4 md:max-w-7xl">
          {/* Header Section */}
          <h2 className="redhat text-2xl md:text-4xl font-regular p-5">
            Industry Report
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {InsightData.map((Insight, index) => (
              <Link key={index} href={Insight.href}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden transition-transform duration-300 hover:scale-x-105 "
                >
                  <Image
                    src={Insight.Image}
                    alt={Insight.Alt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-xl "
                  />
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center my-10">
            <Link
              href="/insights/industry-reports"
              // href="#"
              className="text-sm text-[#005581] underline "
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const WhitepaperList = () => {
  const whitepapers = [
    {
      title: "India – The new R&D hub for Automotive",
      desc: "Taplow India have conducted an in-depth review of the Automotive sector in India. For further information contact Sangeeta Sabharwal, India.",
      href: "http://cruxcreativedemo2.com/Taplow-new/Insights/whitePaper1.pdf",
    },
    {
      title: "Maysam Rizvi reviews the Banking Tech Revolution.",
      desc: "Capital is more expensive, costs are higher and prices have gone down... the technology revolution has become a necessity.",
      href: "http://cruxcreativedemo2.com/Taplow-new/Insights/whitePaper2.pdf",
    },
    {
      title:
        "Evolving Business Units Market Access thus becoming “transversal”",
      desc: "The pharmaceutical market, in regards to the price component covered by the NHS, has been, until today, characterised by the presence of drugs of high therapeutic value...",
      href: "http://cruxcreativedemo2.com/Taplow-new/Insights/whitePaper3.pdf",
    },
    {
      title: "Business Cycles",
      desc: "Present Human Capital Opportunities and Challenges.",
      href: "http://cruxcreativedemo2.com/Taplow-new/Insights/whitePaper4.pdf",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 py-8">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 py-2">
        Whitepaper
      </h2>

      <div className="space-y-4">
        <div className="bg-[#F7C35F] h-[1px] mb-3 w-full"></div>
        {whitepapers.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between border-b pb-6 border-[#F7C35F] gap-4"
          >
            <div className="flex items-start gap-3">
              <FaRegFileAlt className="text-[#98AE40] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#98AE40] text-white text-xs md:text-sm px-3 py-1.5 rounded hover:bg-[#7d9338] self-start"
            >
              Click Here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
