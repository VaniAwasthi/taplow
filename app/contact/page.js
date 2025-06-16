"use client";
import React from "react";
import {
  GlobalOffices,
  HeroSecContact,
} from "../component/Contact/ContactUsPage";
import ContactForm from "../component/utilities/ContactUsForm";

const Contact = () => {
  return (
    <>
      <HeroSecContact />
      <ContactForm />
      <GlobalOffices />
    </>
  );
};

export default Contact;
