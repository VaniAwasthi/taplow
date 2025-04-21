import React from "react";
import Banner from "../../assets/globalpage/finlandBanner.webp";
import { GlobalpageBanner } from "@/app/component/coun-layout/GlobalpageBanner";

const page = () => {
  const BannerData = {
    title: `Welcome to <b>Taplow Finland</b>`,
    desc: "Success in our assignments does not come by chance, but there is a lot of work behind it. We measure our success and continuously develop our operations. Our clients and the candidates involved in the search consider our success to be excellent.",
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
