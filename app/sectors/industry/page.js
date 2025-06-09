"use client";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import {
  AboutIndustrySector,
  IndustryExpertSec,
  IndustryHeroSec,
  IndustrySectorFaq,
  WhyChooseSecIndustry,
} from "@/app/component/industry-sector/HeroSecAboutExpert";

import React from "react";

const Sectors = () => {
  const leaderData = [
    { name: "Ana Sánchez-Asiain", id: 1 },
    { name: "Anker Eriksen", id: 2 },
    { name: "Anna Nuzzi", id: 3 },
    { name: "Hans Holter-Sorensen", id: 4 },
    { name: "Carmen Alarcon", id: 5 },
    { name: "Caterina Tortorella", id: 6 },
    { name: "Eli Stoyneva", id: 7 },
    { name: "Giovanna Brambilla", id: 8 },
    { name: "Graeme Sandri", id: 9 },
    { name: "Helmut Boehler", id: 10 },
    { name: "Ian Stacy", id: 11 },
    { name: "Ivan Gonzalez Garcia", id: 12 },
    { name: "Jean-Marc BURY", id: 14 },
    { name: "Johanna Autio", id: 15 },
    { name: "Karina Kratholm", id: 16 },
    { name: "Mark Firth", id: 17 },
    { name: "Prof. Dr. Manuel Vermeer", id: 18 },
    { name: "Ole Norby", id: 19 },
    { name: "Peter Tanner AM", id: 20 },
    { name: "Sangeeta Sabharwal", id: 21 },
    { name: "Sanjay Ghosh", id: 22 },
    { name: "Sheldon Zhou", id: 23 },
    { name: "Stéphane MARTINOD", id: 24 },
    { name: "Tim Rosenberg", id: 25 },
    { name: "Vijay Bajaj", id: 26 },
  ];
  return (
    <>
      <IndustryHeroSec />
      <AboutIndustrySector />
      <IndustryExpertSec />
      <WhyChooseSecIndustry />
      <ConsumerProductsConsultants
        Heading="Meet Our Industrial Consultants
"
        desc="Our team combines practical industrial experience with the art of executive search. Meet the partners and consultants ready to help you build a future-proof industrial organisation.
"
        leaderData={leaderData}
      />
      <IndustrySectorFaq />
      <InsightsSection />
    </>
  );
};

export default Sectors;
