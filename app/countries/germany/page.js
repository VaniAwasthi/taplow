"use client";
import React from "react";
import Banner from "../../assets/globalpage/germanyBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Germany</b>`,
    desc: "Our success is built on our clients’ success. Therefore, we focus on our clients’ objectives and exceed their expectations by personal attention, advice and appropriate action, also in case of unexpected events.",
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
