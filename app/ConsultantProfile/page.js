"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import HeroImage from "../assets/Consultantpage/heroImage.webp";
import { useSearchParams } from "next/navigation";
import ProfileDetailLayout from "../component/utilities/ProfileDetailLayout";
import { consultantData } from "../component/utilities/data/consultantData";

const Page = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(searchParams.get("id")); // Store ID once params are available
  }, [searchParams]);

  const consultant = id
    ? consultantData.find((c) => c.id === Number(id))
    : null;

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
        <ProfileDetailLayout consultant={consultant} />
      </div>
    </Suspense>
  );
};

export default Page;
