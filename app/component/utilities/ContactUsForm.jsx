"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import ButtonImg from "../../assets/homePage/hover.svg";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  company: yup.string().required("Company is required"),
  jobTitle: yup.string().required("Job Title is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  country: yup.string().required("Country is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  newsletter: yup.boolean(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Form submitted successfully!");
  };

  const renderInput = (name, placeholder, type = "text") => (
    <div>
      <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        className="w-full border rounded-3xl px-6 py-2 mb-2"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm px-6">{errors[name].message}</p>
      )}
    </div>
  );

  const renderSelect = (name, options, extraClasses = "", placeholder = "") => (
    <div className={extraClasses}>
      <select
        {...register(name)}
        className="w-full border rounded-3xl px-6 py-2 text-[#666666] mb-2"
        defaultValue=""
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm px-6">{errors[name].message}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <h2 className="text-2xl md:text-4xl font-semibold text-center my-4 redhat">
        Contact us
      </h2>
      <p className="text-center text-md mb-6 text-[#666666] ">
        Thank you for your interest in Korn Ferry. To speak with a
        representative, please complete the form below. One of our experts will
        follow up with you shortly.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {renderInput("firstName", "First Name")}
        {renderInput("lastName", "Last Name")}
        {renderInput("company", "Company")}
        {renderInput("jobTitle", "Job Title")}
        {renderInput("email", "Email Address", "email")}
        {renderInput("phone", "Phone Number")}

        {renderSelect(
          "country",
          ["India", "United States", "United Kingdom", "Australia", "Other"],
          "md:col-span-2",
          "Country"
        )}

        {renderSelect(
          "subject",
          ["General Inquiry", "Partnership", "Support", "Other"],
          "md:col-span-2",
          "Subject"
        )}

        {renderSelect(
          "message",
          ["Request a Call", "Schedule a Demo", "Need Consultation", "Other"],
          "md:col-span-2",
          "How can we help you?"
        )}

        <div className="md:col-span-2 flex items-start">
          <input
            {...register("newsletter")}
            type="checkbox"
            className="mr-2 mt-1"
          />
          <span className="text-sm text-[#666666]">
            Yes, I would like to receive regular updates on thought leadership,
            industry insights and upcoming events from Taplow. I understand that
            I may withdraw my consent at any time. Review our{" "}
            <a href="#" className="text-[#98AE40] underline">
              Privacy Policy
            </a>
            .
          </span>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <Button
            text={isSubmitting ? "Submitting..." : "Submit"}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
            buttonImage={ButtonImg}
            hoverImage={ButtonImg}
          />
        </div>

        <div className="md:col-span-2 text-xs text-center mt-2">
          <p className="py-1">
            By submitting the form, you agree to the{" "}
            <a href="#" className="text-[#98AE40] underline">
              Terms of Use
            </a>
            .
          </p>
          <p className="py-1">
            Any data you provide will be processed according to our{" "}
            <a href="#" className="text-[#98AE40] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
