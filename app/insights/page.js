"use client";
import React from "react";
import {
  HerosecInsight,
  IndustryReportSec,
  InsightsBlogSection,
  WhitepaperList,
} from "../component/insights/HerosecBlogIndustry";
import CaseStudies from "../component/insights/CaseStudies";

const Insights = () => {
  return (
    <>
      <HerosecInsight />
      <InsightsBlogSection />
      <IndustryReportSec />
      <CaseStudies />
      <WhitepaperList />
    </>
  );
};

export default Insights;
