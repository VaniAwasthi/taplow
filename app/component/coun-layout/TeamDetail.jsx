"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroImage from "../../assets/Consultantpage/heroImage.webp";
import { useSearchParams } from "next/navigation";
import { SweadanTeam } from "../utilities/data/sweadanTeam";
import ProfileDetailLayout from "../utilities/ProfileDetailLayout";
const TeamDetail = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(searchParams.get("id")); // Set ID once params are available
  }, [searchParams]);

  const TeamData = id ? SweadanTeam.find((c) => c.id === Number(id)) : null;
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
      <ProfileDetailLayout consultant={TeamData} />
    </div>
  );
};

export default TeamDetail;
