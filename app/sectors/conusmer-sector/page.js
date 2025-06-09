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
    { name: "Bernd Schlosshauer", id: 3 },
    { name: "Carmen Alarcon", id: 4 },
    { name: "Darryl Miller", id: 5 },
    { name: "Giovanna Brambilla", id: 6 },
    { name: "Helmut Boehler", id: 7 },
    { name: "Ian Stacy", id: 8 },
    { name: "Pankaj Goswami", id: 9 },
    { name: "Prof. Dr. Manuel Vermeer", id: 10 },
    { name: "Peter Tanner AM", id: 11 },
    { name: "Mark Firth", id: 12 },
    { name: "Sangeeta Sabharwal", id: 13 },
    { name: "Sheldon Zhou", id: 14 },
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
