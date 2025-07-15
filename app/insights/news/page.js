"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import IndustryReport1 from "../../assets/Insights/IndustryReport1.webp";
import IndustryReport2 from "../../assets/Insights/IndustryReport2.webp";
import IndustryReport3 from "../../assets/Insights/IndustryReport3.webp";
const Page = () => {
  const InsightData = [
    {
      slug: "global-business-outlook-2025",
      index: 1,
      Image: IndustryReport1,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/taplow-group-2025-global-business-outlook-report",
    },
    {
      slug: "global-business-outlook-2024",
      index: 2,
      Image: IndustryReport2,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/taplow-group-2024-global-business-outlook-report",
    },
    {
      slug: "global-business-outlook-2023",
      index: 3,
      Image: IndustryReport3,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/with-10-years-of-executive-search-impact-across-industries-the-taplow-group-india-is-on-an-exciting-growth-trajectory",
    },
    {
      slug: "global-business-outlook-2022",
      index: 4,
      Image: IndustryReport2,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/with-10-years-of-executive-search-impact-across-industries-the-taplow-group-india-is-on-an-exciting-growth-trajectory",
    },
    {
      slug: "global-business-outlook-2021",
      index: 5,
      Image: IndustryReport1,
      Alt: "InsightImage",
      href: "https://www.taplowgroup.com/insights/news/with-10-years-of-executive-search-impact-across-industries-the-taplow-group-india-is-on-an-exciting-growth-trajectory",
    },
    {
      slug: "global-business-outlook-2020",
      index: 6,
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
              <Link
                key={index}
                // href={`/insights/news/${Insight.slug}`}
                href="#"
              >
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
        </div>
      </div>
    </>
  );
};

export default Page;
