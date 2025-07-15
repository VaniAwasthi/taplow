"use client";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import { ConsumerSectorFaq } from "@/app/component/consumer-sector/HeroAboutSect";
import {
  AboutFinancialService,
  FinancialExpertSec,
  FinancialHeroSec,
  FinancialSectorFaq,
  WhyChooseSecFinancial,
} from "@/app/component/financialService/HeroAboutwhy";

import React from "react";

const Page = () => {
  const leaderData = [
    { name: "Ana Sánchez-Asiain", id: 1 },
    { name: "Anker Eriksen", id: 2 },
    { name: "Bernd Schlosshauer", id: 3 },
    { name: "Carmen Alarcon", id: 4 },
    { name: "Darryl Miller", id: 5 },
    { name: "Giovanna Brambilla", id: 6 },
    { name: "Dimitar Kalev", id: 7 },
    { name: "Helmut Boehler", id: 8 },
    { name: "Ian Stacy", id: 8 },
    { name: "Sheldon Zhou", id: 9 },
    { name: "Sunil Gandhi", id: 10 },
    { name: "Peter Tanner AM", id: 11 },
    { name: "Mark Firth", id: 12 },
    { name: "Sangeeta Sabharwal", id: 13 },
    { name: "Hannu Översti", id: 14 },
    { name: "Emma Tilson", id: 15 },
    { name: "Graeme Sandri", id: 16 },
    { name: "Vijay Bajaj", id: 17 },
    { name: "Stig Heggertveit", id: 18 },
    { name: "Sheldon Zhou", id: 19 },
    { name: "Karina Kratholm", id: 20 },
    { name: "Shaista Sabharwal", id: 21 },
    { name: "Hans Holter-Sorensen", id: 22 },
    { name: "Stéphane MARTINOD", id: 23 },
    { name: "Harri Hämäläinen", id: 24 },
    { name: "Helen Hafström", id: 25 },
    { name: "Jean-Marc BURY", id: 26 },
    { name: "Eli Stoyneva", id: 27 },
  ];
  return (
    <>
      <FinancialHeroSec />
      <AboutFinancialService />
      <FinancialExpertSec />
      <WhyChooseSecFinancial />
      <ConsumerProductsConsultants
        Heading="Meet Our Financial Services Consultants"
        desc="Our consultants combine financial acumen with global executive search expertise. They understand what defines exceptional leadership in finance—and how to find it."
        leaderData={leaderData}
      />
      <FinancialSectorFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
