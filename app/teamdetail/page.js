"use client";
import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import HeroImage from "../assets/Consultantpage/heroImage.webp";
import { useSearchParams } from "next/navigation";
import ProfileDetailLayout from "../component/utilities/ProfileDetailLayout";
import { SweadanTeam } from "../component/utilities/data/sweadanTeam";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const TeamData = id ? SweadanTeam.find((c) => c.id === Number(id)) : null;
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default page;
