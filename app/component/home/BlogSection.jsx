"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/component/utilities/Button";
import blog1 from "../../assets/homePage/blog1.webp";
import blog2 from "../../assets/homePage/blog2.webp";
import blog3 from "../../assets/homePage/blog3.webp";
import ButtonImage from "../../assets/homePage/btn-img.svg";
import HoverImage from "../../assets/homePage/hover.svg";

const blogData = [
  {
    id: 1,
    image: blog1,
    date: "JAN 26, 2025",
    title: "Understanding Generational Differences in Leadership Styles",
    description:
      "Today’s workforce is a blend of four independent generations, each carrying their perspectives, ideals, and leadership styles. The key to...",
  },
  {
    id: 2,
    image: blog2,
    date: "JAN 25, 2025",
    title: "Executive’s Guide to Turn Quiet Quitters into High-Performing Team",
    description:
      "You might have experienced this situation when someone works physically but remains mentally detached from their job – It's the worst...",
  },
  {
    id: 3,
    image: blog3,
    date: "JAN 22, 2025",
    title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
    description:
      "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-[#F0F0F0] py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        {/* Header Section */}
        <div className="block md:flex justify-between items-center mb-8">
          <h2 className="redhat text-2xl font-semibold pb-1">Read Our Blogs</h2>
          <div className="hidden md:flex">
            <Button
              text="Read More"
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
              className="group bg-[#F0F0F0] rounded-[2.5rem] shadow-lg overflow-hidden border border-[#9AAF43] transition-transform duration-300 hover:scale-105"
            >
              <Image src={blog.image} alt={blog.title} className="w-full" />
              <div className="p-4 text-center redhat">
                <p className="text-[#666666] text-[10px]">{blog.date}</p>
                <h3 className="text-lg font-regular mt-3 md:h-[60px]">
                  {blog.title}
                </h3>
                <p className="text-[#666666] font-light text-[14px] mt-3 md:h-[80px]">
                  {blog.description}
                </p>
                <div className="mt-4 flex justify-center items-center">
                  <button className="border border-[#96A94A] rounded-lg relative mt-6 w-[242px] h-[42px] bg-[#96A94A] text-white flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-white hover:text-[#96A94A] transform hover:scale-105">
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

export default BlogSection;
