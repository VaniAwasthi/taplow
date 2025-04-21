import React from "react";
import Banner from "../../assets/globalpage/indiaBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow India</b>`,
    desc: "India is on a major growth trajectory, and is currently the fastest growing economy in the world. The Taplow Group established itself in India to assist organizations in building people capacity in this very fast paced growth environment.",
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
