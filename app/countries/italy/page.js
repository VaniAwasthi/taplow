"use client";
import React from "react";
import Banner from "../../assets/globalpage/italyBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Italy</b>`,
    desc: "Executive Search firm established in 2003 and based in Milan,Italy. We offer services for search, evaluation and selection of specialists and managers",
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
