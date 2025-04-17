import React from "react";
import Banner from "../../assets/globalpage/norwayBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Norway</b>`,
    desc: "Taplow Norway has been member of the Taplow Group since 2004. We focus on retained executive search. We occationally assist in advertised recruiting as well as second opinions",
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
