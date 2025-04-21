"use client";
import React from "react";

import Banner from "../../assets/globalpage/bulgaiaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Bulgaria</b>`,
    desc: "Taplow Bulgaria has been operating on the Bulgarian market since 2015 and has been providing top-notch services ever since. We focus primarily on retained executive search and we also offer a wide range of other services.",
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
