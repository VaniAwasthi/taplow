"use client";
import React from "react";
import Banner from "../../assets/globalpage/chinaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow China</b>`,
    desc: " Taplow China was founded in China in 2005 and has 150 consultants and 20 support teams located in six offices in Shanghai, Beijing, Guangzhou, Xi ‘an, Chengdu and Qingdao.",
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
