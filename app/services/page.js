"use-client";
import Image from "next/image";
import React from "react";
import ServicePage from "../assets/homePage/service.jpg";

const Services = () => {
  return <Image src={ServicePage} alt="Service" className="w-full" />;
};

export default Services;
