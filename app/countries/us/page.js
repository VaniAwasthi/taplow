"use client";
import React from "react";
import Banner from "../../assets/globalpage/usaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow USA</b>`,
    desc: "Established in 1991, we are amongst the founding partners of The Taplow Group S.A. With a diverse team strategically located in multiple markets across North America and around the world, we have expertise in supporting local, national and global companies’ growth plans.",
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
