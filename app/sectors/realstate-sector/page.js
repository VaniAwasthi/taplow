"use client";
import React from "react";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";

import {
  AboutRealState,
  RealStateFaq,
  RealStateHeroSec,
  RealstateOurOffering,
  WhyChooseRealstateSec,
} from "@/app/component/realstate/HerosecAboutExpert";

const Page = () => {
  const leaderData = [
    { name: "Ana Sánchez-Asiain", id: 1 },
    { name: "Bernd Schlosshauer", id: 2 },
    { name: "Carmen Alarcon", id: 3 },
    { name: "Darryl Miller", id: 4 },
    { name: "Emma Tilson", id: 5 },
    { name: "Giovanna Brambilla", id: 6 },
    { name: "Graeme Sandri", id: 7 },
    { name: "Hannu Översti", id: 8 },
    { name: "Hans Holter-Sorensen", id: 9 },
    { name: "Helmut Boehler", id: 10 },
    { name: "Harri Hämäläinen", id: 11 },
    { name: "Ian Stacy", id: 12 },
    { name: "Karina Kratholm", id: 13 },
    { name: "Mark Firth", id: 14 },
    { name: "Maria Lindahl", id: 15 },
    { name: "Sangeeta Sabharwal", id: 16 },
    { name: "Sheldon Zhou", id: 17 },
    { name: "Sunil Gandhi", id: 18 },
    { name: "Tim Rosenberg", id: 19 },
    { name: "Vijay Bajaj", id: 20 },
  ];
  return (
    <>
      <RealStateHeroSec />
      <AboutRealState />
      <RealstateOurOffering />
      <WhyChooseRealstateSec />
      <ConsumerProductsConsultants
        Heading="Meet Our Industrial Consultants
"
        desc="Our team combines practical industrial experience with the art of executive search. With backgrounds in engineering, manufacturing, and operational leadership, they understand the sector’s challenges first-hand. Meet the partners and consultants ready to help you build a future-proof industrial organisation..
"
        leaderData={leaderData}
      />
      <RealStateFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
