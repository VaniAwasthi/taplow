"use client";
import React, { useState } from "react";
import Button from "../utilities/Button";
import HoverImage from "../../assets/homePage/hover.svg";

const Faq = ({ heading, FaqData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="container mx-auto px-4 md:max-w-6xl my-4">
      <div className="flex flex-col lg:flex-row justify-center md:justify-start items-start redhat">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-6">
          <h2 className="text-lg md:text-3xl lg:w-[300px] w-full font-normal text-center redhat mt-[1rem]">
            {heading}
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/2 p-4 md:p-6">
          {FaqData.map((faq, index) => (
            <div key={faq.index} className="border-b border-gray-300 py-3">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between w-full text-left text-md font-regular text-[#666666]"
              >
                <span className="text-sm md:text-lg  text-[#666666] md:w-[450px] py-2 w-full">
                  {faq.question}
                </span>
                <span className="text-md md:text-3xl text-[#666666] ">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p
                  className="mt-2 text-md md:w-[450px] w-full "
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              )}
            </div>
          ))}
          {/* <div className="flex justify-center md:justify-start items-start mt-2">
            <Button
              text="See More FAQs"
              hoverImage={HoverImage}
              buttonImage={HoverImage}
              className="mt-[3rem]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
