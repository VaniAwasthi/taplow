"use-client";
import Image from "next/image";
import React from "react";
import ServicePage from "../Assest/homePage/service.jpg";

const Services = () => {
  return <Image src={ServicePage} alt="Service" className="w-full" />;
};

export default Services;
