import React from "react";
import Image from "next/image";
import blog1 from "../../assets/Insights/insightBlog1.webp";
import blog2 from "../../assets/Insights/insightBlog2.webp";
import blog3 from "../../assets/Insights/insightBlog3.webp";
import Link from "next/link";
const Page = () => {
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
      title:
        "Executive’s Guide to Turn Quiet Quitters into High-Performing Team",
      description:
        "You might have experienced this situation when someone works physically but remains mentally detached from their job – It's the worst...",
    },
    {
      id: 3,
      date: "May 22 , 2025",
      image: blog3,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 4,
      date: "May 22 , 2025",
      image: blog3,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 5,
      date: "May 22 , 2025",
      image: blog1,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 6,
      date: "May 22 , 2025",
      image: blog2,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 7,
      date: "May 22 , 2025",
      image: blog3,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 8,
      date: "May 22 , 2025",
      image: blog2,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 9,
      date: "May 22 , 2025",
      image: blog1,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 10,
      date: "May 22 , 2025",
      image: blog3,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 11,
      date: "May 22 , 2025",
      image: blog2,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 12,
      date: "May 22 , 2025",
      image: blog2,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 13,
      date: "May 22 , 2025",
      image: blog1,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
    {
      id: 14,
      date: "May 22 , 2025",
      image: blog2,
      date: "JAN 22, 2025",
      title: "7 Things CEOs Must Do to Accelerate their Team’s Performance",
      description:
        "Inspiring a team to operate at their full capacity isn’t just about strategy—it’s about embracing a leadership mindset.",
    },
  ];
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:max-w-7xl">
        {/* Header Section */}
        <h2 className="redhat text-2xl md:text-4xl font-regular p-5">Blogs</h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl shadow-lg overflow-hidden border border-[#9AAF43] transition-transform duration-300 hover:scale-105 p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full  object-cover rounded-2xl"
              />

              <div className=" pb-4 text-left redhat">
                <h3 className="text-xl font-semibold mt-3 md:h-[60px]">
                  {blog.title}
                </h3>
                <p className="text-[#181A2A] font-regular text-[14px] mt-3 md:h-[80px]">
                  {blog.description}
                </p>
                <div className="mt-4 flex justify-between items-center    ">
                  <button className=" border border-[#96A94A] rounded-lg w-[120px] h-[32px] bg-[#96A94A] text-white  flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-white hover:text-[#96A94A] transform hover:scale-105">
                    <span className="relative z-10 font-redhat text-sm">
                      Read More
                    </span>
                  </button>
                  <span className="text-xs text-[#666666]">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center items-center my-10">
          <Link href="#" className="text-md text-[#005581] underline ">
            Show more
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
