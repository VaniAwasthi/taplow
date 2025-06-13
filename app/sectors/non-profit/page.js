"use client";
import React from "react";
import {
  ConsumerProductsConsultants,
  InsightsSection,
} from "@/app/component/consumer-sector/ConsultantInsights";

import {
  AboutNonProfit,
  NonProfitExpertSec,
  NotforprofitFaq,
  NotProfitHeroSec,
  WhyChooseNonProfit,
} from "@/app/component/not-for-profit/HeroSecAboutExpertFaq";

const Page = () => {
  const leaderData = [
    { name: "Priyanka Mazumdar", id: 1 },
    { name: "Ana Sánchez-Asiain", id: 2 },
    { name: "Carmen Alarcon", id: 3 },
    { name: "Caterina Tortorella", id: 4 },
    { name: "Darryl Miller", id: 5 },
    { name: "Giovanna Brambilla", id: 6 },
    { name: "Graeme Sandri", id: 7 },
    { name: "Kenneth Saxskiold-Noerup", id: 8 },
    { name: "Hans Holter-Sorensen", id: 9 },
    { name: "Helmut Boehler", id: 10 },
    { name: "Ian Stacy", id: 11 },
    { name: "Ritu Mahajan", id: 12 },
    { name: "Jean-Marc BURY", id: 13 },
    { name: "Rituparna Acharyya", id: 14 },
    { name: "Mark Firth", id: 16 },
    { name: "Ole Norby", id: 17 },
    { name: "Peter Tanner AM", id: 18 },
    { name: "Sangeeta Sabharwal", id: 19 },
    { name: "Sheldon Zhou", id: 20 },
    { name: "Tony Walsh", id: 21 },
  ];
  return (
    <>
      <NotProfitHeroSec />
      <AboutNonProfit />
      <NonProfitExpertSec />
      <WhyChooseNonProfit />
      <ConsumerProductsConsultants
        Heading="Meet Our Social Impact Practice Leaders"
        desc="Our consultants combine hands-on experience in philanthropy, education and sustainability with executive search mastery."
        leaderData={leaderData}
      />
      <NotforprofitFaq />
      <InsightsSection />
    </>
  );
};

export default Page;
