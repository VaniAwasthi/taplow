"use client";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import {
  AboutConsumerService,
  ConsumerHeroSec,
} from "@/app/component/consumer-sector/HeroAboutSect";
import {
  AboutLifeScience,
  LifeScienceExpertSec,
  LifeScienceHeroSec,
  LifeSciSectorFaq,
  WhyChooseSecLifeScience,
} from "@/app/component/life-science/HeroAboutExpertFaq";
import React from "react";

const Sectors = () => {
  const leaderData = [
    { name: "Ana Sánchez-Asiain", id: 1 },
    { name: "Anoop Semwal", id: 2 },
    { name: "Anna Nuzzi", id: 3 },
    { name: "Carmen Alarcon", id: 4 },
    { name: "Eli Stoyneva", id: 5 },
    { name: "Graeme Sandri", id: 6 },
    { name: "Helmut Boehler", id: 7 },
    { name: "Ian Stacy", id: 8 },
    { name: "Jean-Marc BURY", id: 9 },
    { name: "Mark Firth", id: 10 },
    { name: "Matti Copeland", id: 11 },
    { name: "Maria Lindahl", id: 12 },
    { name: "Peter Tanner AM", id: 13 },
    { name: "Sangeeta Sabharwal", id: 14 },
    { name: "Shaista Sabharwal", id: 15 },
    { name: "Sheldon Zhou", id: 16 },
    { name: "Stig Heggertveit", id: 17 },
    { name: "Sunil Gandhi", id: 18 },
  ];
  return (
    <>
      <LifeScienceHeroSec />
      <AboutLifeScience />
      <LifeScienceExpertSec />
      <WhyChooseSecLifeScience />
      <ConsumerProductsConsultants
        Heading="Meet Our Consumer Products Consultants"
        leaderData={leaderData}
      />
      <LifeSciSectorFaq />
      <InsightsSection />
    </>
  );
};

export default Sectors;
