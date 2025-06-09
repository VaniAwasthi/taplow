"use client";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";
import {
  AboutDigital,
  DigitalHeroSec,
  DigitalICTExpertSec,
  DigitalItcSectorFaq,
  WhyChooseSecDigital,
} from "@/app/component/digitalItc/HeroAboutExpertFaq";
import React from "react";

const Page = () => {
  const leaderData = [
    { name: "Bernd Schlosshauer", id: 1 },
    { name: "Anoop Semwal", id: 2 },
    { name: "Anna Nuzzi", id: 3 },
    { name: "Carmen Alarcon", id: 4 },
    { name: "Caterina Tortorella", id: 5 },
    { name: "Claus Rosenstand", id: 6 },
    { name: "Dimitar Kalev", id: 7 },
    { name: "Eli Stoyneva", id: 8 },
    { name: "Emma Tilson", id: 9 },
    { name: "Giovanna Brambilla", id: 10 },
    { name: "Graeme Sandri", id: 11 },
    { name: "Hannu Översti", id: 11 },
    { name: "Helmut Boehler", id: 12 },
    { name: "Harri Hämäläinen", id: 12 },
    { name: "Ian Stacy", id: 13 },
    { name: "Karina Kratholm", id: 14 },
    { name: "Mark Firth", id: 15 },
    { name: "Matti Copeland", id: 16 },
    { name: "Pankaj Gowsami", id: 17 },
    { name: "Sunil Gandhi", id: 18 },
    { name: "Sangeeta Sabharwal", id: 19 },
    { name: "Sheldon Zhou", id: 20 },
    { name: "Stig Heggertveit", id: 21 },
    { name: "Sunil Gandhi", id: 22 },
  ];
  return (
    <>
      <DigitalHeroSec />
      <AboutDigital />
      <DigitalICTExpertSec />
      <WhyChooseSecDigital />
      <ConsumerProductsConsultants
        Heading="Meet Our Digital & ICT Consultants"
        desc="Our team knows the difference between a buzzword and a business advantage. Let’s find the leaders who will transform your digital future."
        leaderData={leaderData}
      />
      <DigitalItcSectorFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
