"use client";
import React, { useState, useEffect } from "react";
import DefaultHeroImage from "../../assets/Consultantpage/heroImage.webp";
import { useRouter, useSearchParams } from "next/navigation";
import ProfileDetailLayout from "../utilities/ProfileDetailLayout";
import Image from "next/image";
import { consultantData } from "../utilities/data/consultantData";
import Austrilia from "../../assets/globalpage/australiaBanner.webp";
import USA from "../../assets/globalpage/usaBanner.webp";
import UK from "../../assets/globalpage/UKBanner.webp";
import Sweden from "../../assets/globalpage/SwedenBanner.webp";
import Spain from "../../assets/globalpage/spainBanner.webp";
import Singapore from "../../assets/globalpage/singaporeBanner.webp";
import NewZealand from "../../assets/globalpage/nzBanner.webp";
import Norway from "../../assets/globalpage/norwayBanner.webp";
import Italy from "../../assets/globalpage/italyBanner.webp";
import India from "../../assets/globalpage/indiaBanner.webp";
import Germany from "../../assets/globalpage/germanyBanner.webp";
import France from "../../assets/globalpage/franceBanner.webp";
import Finland from "../../assets/globalpage/finlandBanner.webp";
import Denmark from "../../assets/globalpage/denmarkBanner.webp";
import China from "../../assets/globalpage/chinaBanner.webp";
import Canada from "../../assets/globalpage/CanandaBanner.webp";
import Bulgaia from "../../assets/globalpage/bulgaiaBanner.webp";
import { ArrowLeftIcon } from "lucide-react";

const ConsultantProfile = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setId(searchParams.get("id"));
  }, [searchParams]);
  const countryImageData = [
    { country: "Australia", image: Austrilia },
    { country: "Bulgaria", image: Bulgaia },
    { country: "Canada", image: Canada },
    { country: "China", image: China },
    { country: "Denmark", image: Denmark },
    { country: "Finland", image: Finland },
    { country: "France", image: France },
    { country: "Germany", image: Germany },
    { country: "India", image: India },
    { country: "Italy", image: Italy },
    { country: "Norway", image: Norway },
    { country: "NewZealand", image: NewZealand },
    { country: "Singapore", image: Singapore },
    { country: "spain", image: Spain },
    { country: "Sweden", image: Sweden },
    { country: "UK", image: UK },
    { country: "USA", image: USA },
  ];
  const consultant = id
    ? consultantData.find((c) => c.id === Number(id))
    : null;
  const matchedImage = consultant
    ? countryImageData.find((item) => item.country === consultant.location)
    : null;
  const HeroImage = matchedImage?.image || DefaultHeroImage;
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-screen">
        <Image
          src={HeroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="my-1 cursor-pointer w-fit p-2"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon size={30} color="#96a94a" />
      </div>
      {/* Reusable Consultant Profile Component */}
      <ProfileDetailLayout consultant={consultant} />
    </div>
  );
};

export default ConsultantProfile;
