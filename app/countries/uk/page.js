import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";
import React from "react";
import Banner from "../../assets/globalpage/UKBanner.webp";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow UK</b>`,
    desc: "Trusted since 1999, we help businesses grow, expand, and lead — locally and globally.",
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
