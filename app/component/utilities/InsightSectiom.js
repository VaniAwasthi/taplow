"use client";
import Image from "next/image";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";
import Button from "./Button";
export const InsightSec = ({ blogData }) => {
  return (
    <div className="bg-[#F0F0F0] py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        {/* Header Section */}
        <div className="block md:flex justify-between items-center mb-8">
          <h2 className="redhat text-2xl font-semibold pb-1">
            Related Insights
          </h2>
          <div className="hidden md:flex">
            <Button
              text="Explore All Insights"
              buttonImage={ButtonImage}
              hoverImage={HoverImage}
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-[#FFFFFF] rounded-[2.5rem] shadow-lg overflow-hidden border border-[#9AAF43] transition-transform duration-300 hover:scale-105"
            >
              <Image src={blog.image} alt={blog.title} className="w-full" />
              <div className="p-4 flex flex-col justify-center items-center redhat">
                <h3 className="text-xl text-center w-[300px] font-regular mt-3 md:h-[80px] text-[#000000]">
                  {blog.title}
                </h3>

                <div className="mt-4 flex justify-center items-center">
                  <button className="border border-[#96A94A] rounded-xl relative mt-6 w-[300px] h-[42px] bg-[#96A94A] text-white flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-white hover:text-[#96A94A] transform hover:scale-105">
                    <span className="relative z-10 font-redhat text-sm">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="flex justify-center items-center md:hidden mt-6">
          <Button
            text="Read More"
            buttonImage={ButtonImage}
            hoverImage={HoverImage}
          />
        </div>
      </div>
    </div>
  );
};
