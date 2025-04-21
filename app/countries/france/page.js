"use client";
import React from "react";
import Banner from "../../assets/globalpage/franceBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow France</b>`,
    desc: " Created in 1989 to follow the strong development of HR market in Hi-Tech, Construction, Automotive and Life science sectors, TAPLOW CONSULTING FRANCE has offices in Paris and Lyon.",
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
