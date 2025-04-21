import React from "react";
import Banner from "../../assets/globalpage/denmarkBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Denmark</b>`,
    desc: "Taplow has more than 30 years of experience with Executive Search and headhunting. We are a part of The Taplow Group, which is represented in more than 20 countries across 6 continents",
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
