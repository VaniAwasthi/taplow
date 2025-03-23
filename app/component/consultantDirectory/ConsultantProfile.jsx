"use client";
import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/Consultantpage/heroImage.webp";
import { useSearchParams } from "next/navigation";
import ProfileDetailLayout from "../utilities/ProfileDetailLayout";
import Image from "next/image";
import { consultantData } from "../utilities/data/consultantData";

const ConsultantProfile = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(searchParams.get("id"));
  }, [searchParams]);

  const consultant = id
    ? consultantData.find((c) => c.id === Number(id))
    : null;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src={HeroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Reusable Consultant Profile Component */}
      <ProfileDetailLayout consultant={consultant} />
    </div>
  );
};

export default ConsultantProfile;
