"use client";
import React from "react";
import FinlandFlag from "../../assets/globalpage/finlandflag.webp";
import AustraliaFlag from "../../assets/globalpage/australiaflag.webp";
import IndiaFlag from "../../assets/globalpage/IndiaFlag.webp";
import USAFlag from "../../assets/globalpage/flgUsa.webp";
import UKFlag from "../../assets/globalpage/UKflag.webp";
import Image from "next/image";
const Page = () => {
  const caseData = [
    {
      img: FinlandFlag,
      title: "Wood Industry New Market Strategy",
      desc: "A mechanical wood industry company needed a new CEO in a situation where the company was in the middle of heavy investment process, building a new strategy,doubling its production...",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/finland/WoodIndustryNewMarketStrategy.pdf",
      contact: "Timo Toivanen, Finland",
      contactHref: "/ConsultantProfile?id=33",
    },
    {
      img: AustraliaFlag,
      title: "Producer of Polypropylene and Polyolefin Films",
      desc: "A global producer of polypropylene and polyolefin films required a Sales Manager – Japan. Able to speak and write Fluently in English and Japanese.",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/austrilia/ProducerofPolypropyleneandPolyolefinFilms.pdf",
      contact: "Peter Tanner AM",
      contactHref: "/ConsultantProfile?id=53",
    },
    {
      img: IndiaFlag,
      title: "Rebuilding Strategic Leadership in Global Energy",
      desc: "A global energy major, following the decision of a demerger from its parent conglomerate, sought to reintroduce a strategic leadership...",
      href: "https://cruxcreativedemo2.com//Taplow-new/India/TheTaplowGroupRe-EstablishingStrategicLeadershipCaseStudy-India.pdf",
      contact: "Shaista Sabharwal",
      contactHref: "/ConsultantProfile?id=26",
    },
    {
      img: USAFlag,
      title: "A challenge to assure Excellence & Diversity",
      desc: "Taplow carefully examined the medical and management roles of the current employees as best could be accomplished, without one-on-one interviews but relying n information provided by client leadership.",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/USA/AchallengetoassureExcellenceDiversity.pdf",
      contact: "Darryl Miller",
      contactHref: "/ConsultantProfile?id=60",
    },
    {
      img: USAFlag,
      title: "A challenge to assure Excellence & Diversity",
      desc: "Taplow carefully examined the medical and management roles of the current employees as best could be accomplished, without one-on-one interviews but relying n information provided by client leadership.",
      href: "https://cruxcreativedemo2.com/Taplow-new/SuccessStory/USA/AchallengetoassureExcellenceDiversity.pdf",
      contact: "Darryl Miller",
      contactHref: "/ConsultantProfile?id=60",
    },
    {
      img: UKFlag,
      title: "Next Generation of Leadership",
      desc: "Whilst assessing internal potential, we also externally, discreetly approached and assessed potential leaders from across the European region. ",
      href: "https://cruxcreativedemo2.com//Taplow-new/SuccessStory/UK/TheTaplowGroup-ExecutiveSearch-NextGenerationofLeadersforEMEARegion.pdf",
      contact: "Mark Firth",
      contactHref: "/ConsultantProfile?id=43",
    },
  ];
  return (
    <>
      <div className="md:py-8 py-10">
        <div className="container mx-auto px-4 md:max-w-7xl">
          {/* Header Section */}
          <h2 className="redhat text-2xl md:text-4xl font-regular p-5">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseData.map((card, index) => (
              <div
                className="flex justify-center mt-4 mb-4 md:mx-4"
                key={index}
              >
                <div className="bg-white rounded-xl border mt-10 border-[#CFCFCF] shadow-md w-full  max-w-[290px] min-h-[450px] flex flex-col  px-8 pt-12 pb-6 relative hover:scale-105 hover:border-[#96A94A] transition-transform duration-300">
                  {/* Flag Icon */}
                  <div className="absolute -top-6 w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white bg-white">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[350px]">
                    <h3 className="text-[#005581] font-semibold text-lg text-left w-[90%] my-4 h-[90px]">
                      {card.title}
                    </h3>

                    {/* Green line */}
                    <div className="w-[90%] h-[1px] bg-[#96A94A] mb-2" />

                    {/* Description */}
                    <p className="text-sm text-[#666] text-left px-1 mb-4 leading-snug h-[150px]">
                      {card.desc}
                    </p>

                    {/* Read More button */}
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#98AE40] w-[50%] text-white text-xs px-4 py-2 rounded hover:bg-[#7d9338] transition-colors"
                    >
                      Read More
                    </a>

                    {/* Footer */}
                    <p className="text-[11px] text-[#666] text-left mt-4 px-1">
                      For further information please contact{" "}
                      <a
                        href={card.contactHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#005581] underline"
                      >
                        {card.contact}
                      </a>
                    </p>
                  </div>
                  {/* Title */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
