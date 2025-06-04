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
    { name: "Carmen Alarcon", id: 2 },
    { name: "Anoop Semwal", id: 3 },
    { name: "Anna Nuzzi", id: 4 },
    { name: "Giovanna Brambilla", id: 5 },
    { name: "Dimitar Kalev", id: 7 },
    { name: "Helmut Boehler", id: 8 },
    { name: "Ian Stacy", id: 8 },
    { name: "Sheldon Zhou", id: 9 },
    { name: "Sunil Gandhi", id: 10 },
    { name: "Peter Tanner AM", id: 11 },
    { name: "Mark Firth", id: 12 },
    { name: "Sangeeta Sabharwal", id: 13 },
    { name: "Hannu Översti", id: 14 },
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
    { name: "Timo Toivann", id: 28 },
    { name: "Tony Walsh", id: 29 },
    { name: "Matti Copeland", id: 30 },
    { name: "Maria Lindahl", id: 30 },
  ];
  return (
    <>
      <LifeScienceHeroSec />
      <AboutLifeScience />
      <LifeScienceExpertSec />
      <WhyChooseSecLifeScience />
      {/* <ConsumerProductsConsultants
        Heading="Meet Our Consumer Products Consultants"
        leaderData={leaderData}
      /> */}
      <LifeSciSectorFaq />
      <InsightsSection />
    </>
  );
};

export default Sectors;
