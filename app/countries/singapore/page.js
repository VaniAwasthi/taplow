"use client";
import React from "react";
import Banner from "../../assets/globalpage/singaporeBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Singapore</b>`,
    desc: "Founded over a decade ago, in Singapore, with Asia-wide Coverage",
  };
  return (
    <>
      <GlobalpageBanner
        title={BannerData.title}
        desc={BannerData.desc}
        Banner={Banner}
      />
    </>
  );
};
export default page;
