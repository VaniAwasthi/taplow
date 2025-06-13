"use client";
import React from "react";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import {
  AboutProfessionalServices,
  ProfessionalExpertSec,
  ProfessionalHeroSec,
  ProfessionalServicesFaq,
  WhyChooseProfessionalSec,
} from "@/app/component/professional-service/HeroSecAboutExpertise";
import { WhyChooseSecIndustry } from "@/app/component/industry-sector/HeroSecAboutExpert";

const Page = () => {
  const leaderData = [
    { name: "Anoop Semwal", id: 1 },
    { name: "Bernd Schlosshauer", id: 2 },
    { name: "Carmen Alarcon", id: 3 },
    { name: "Caterina Tortorella", id: 4 },
    { name: "Claus Rosenstand", id: 5 },
    { name: "Giovanna Brambilla", id: 6 },
    { name: "Graeme Sandri", id: 7 },
    { name: "Hannu Översti", id: 8 },
    { name: "Hans Holter-Sorensen", id: 9 },
    { name: "Helmut Boehler", id: 10 },
    { name: "Ian Stacy", id: 11 },
    { name: "Ivan Gonzalez Garcia", id: 12 },
    { name: "Jean-Marc BURY", id: 13 },
    { name: "Johanna Autio", id: 14 },
    { name: "Karina Kratholm", id: 15 },
    { name: "Mark Firth", id: 16 },
    { name: "Matti Copeland", id: 17 },
    { name: "Ole Norby", id: 18 },
    { name: "Peter Tanner AM", id: 19 },
    { name: "Sangeeta Sabharwal", id: 20 },
    { name: "Shaista Sabharwal", id: 21 },
    { name: "Sheldon Zhou", id: 22 },
    { name: "Sunil Gandhi", id: 23 },
    { name: "Stig Heggertveit", id: 24 },
    { name: "Tony Walsh", id: 25 },
  ];
  return (
    <>
      <ProfessionalHeroSec />
      <AboutProfessionalServices />
      <ProfessionalExpertSec />
      <WhyChooseProfessionalSec />
      <ConsumerProductsConsultants
        Heading="Meet Our Industrial Consultants
"
        desc="Our team combines practical industrial experience with the art of executive search. With backgrounds in engineering, manufacturing, and operational leadership, they understand the sector’s challenges first-hand. Meet the partners and consultants ready to help you build a future-proof industrial organisation..
"
        leaderData={leaderData}
      />
      <ProfessionalServicesFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
