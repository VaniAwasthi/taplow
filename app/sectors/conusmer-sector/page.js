"use client";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import {
  AboutConsumerService,
  ConsumerExpertSec,
  ConsumerHeroSec,
  ConsumerSectorFaq,
  WhyChooseSec,
} from "@/app/component/consumer-sector/HeroAboutSect";
import Image from "next/image";
import React from "react";

const Page = () => {
  const leaderData = [
    { name: "Anna Nuzzi", id: 1 },
    { name: "Anoop Semwal", id: 2 },
    { name: "Carmen Alarcon", id: 3 },
    { name: "Darryl Miller", id: 4 },
    { name: "Giovanna Brambilla", id: 5 },
    { name: "Helmut Boehler", id: 6 },
    { name: "Ian Stacy", id: 7 },
    { name: "Pankaj Goswami", id: 8 },
    { name: "Prof. Dr. Manuel Vermeer", id: 9 },
    { name: "Peter Tanner AM", id: 10 },
    { name: "Mark Firth", id: 11 },
    { name: "Sangeeta Sabharwal", id: 12 },
    { name: "Sheldon Zhou", id: 13 },
  ];
  return (
    <>
      <ConsumerHeroSec />
      <AboutConsumerService />
      <ConsumerExpertSec />
      <WhyChooseSec />
      <ConsumerProductsConsultants
        Heading="Meet Our Consumer Products Consultants"
        leaderData={leaderData}
      />
      <ConsumerSectorFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
