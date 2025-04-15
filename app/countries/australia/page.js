import React from "react";

import Banner from "../../assets/globalpage/UKBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Australia</b>`,
    desc: "The Taplow Group was established in Australia in 2002 and brings to clients both traditional and contemporary recruitment methodologies. Our focus is on delivering a service that identifies the best talent for your business.",
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
