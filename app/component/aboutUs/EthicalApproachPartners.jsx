"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import Ethical1 from "../../assets/aboutuspage/Ethical1.webp";
import Ethical2 from "../../assets/aboutuspage/Ethical2.webp";
import Ethical3 from "../../assets/aboutuspage/Ethical3.webp";
import Ethical4 from "../../assets/aboutuspage/Ethical4.webp";
import img from "../../assets/aboutuspage/Approach.webp";
import partner1 from "../../assets/aboutuspage/partner1.webp";
import partner2 from "../../assets/aboutuspage/partner2.webp";
import partner3 from "../../assets/aboutuspage/partner3.webp";
import partner4 from "../../assets/aboutuspage/partner4.webp";
import partner5 from "../../assets/aboutuspage/partner5.webp";

export const Ethical = () => {
  const slides = [
    {
      image: Ethical1,
      title: "Compliance with global laws and best practices.",
    },
    {
      image: Ethical2,
      title: "A professional, inclusive, and respectful workplace.",
    },
    {
      image: Ethical3,
      title: "Trust-based relationships with clients and candidates.",
    },
    {
      image: Ethical4,
      title: "Confidentiality, fairness, and anti-corruption standards.",
    },
    {
      image: Ethical1,
      title: "Compliance with global laws and best practices.",
    },
    {
      image: Ethical2,
      title: "A professional, inclusive, and respectful workplace.",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  const heading = " Ethical Commitment";
  const title = `We adhere to the <br/> <b>AESC Code of Ethics</b>, ensuring:`;
  return (
    <>
      <section className="bg-[#F0F0F0] py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex md:flex-row flex-col  justify-between">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-normal redhat mb-4  text-[#111D15]">
                {heading}
              </h2>
              <p
                className="text-[#666666] text-sm mb-8"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex gap-8 items-center justify-end white_arrow mb-6 md:mb-0">
                <button
                  className={`swiper-button-prev !relative !w-10 !mt-auto !h-10 z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isBeginning
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] fill-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronLeft size={20} />
                </button>

                <button
                  className={`swiper-button-next !relative !mt-auto !w-10 !h-10  z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isEnd
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] text-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={setSwiperInstance}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                    style={{
                      boxShadow: `0px 9px 19px 0px #0000001A,
                                                        0px 34px 34px 0px #00000017,
                                                        0px 78px 47px 0px #0000000D,
                                                        0px 138px 55px 0px #00000003,
                                                        0px 215px 60px 0px #00000000`,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full"
                    />
                    <p className="text-lg md:text-xl redhat font-semibold absolute bottom-4 w-[80%]  left-1/2 -translate-x-2/4  text-white z-10">
                      {slide.title}
                    </p>
                    <div
                      className={`${
                        index % 2 === 0
                          ? "bg-[#96A94A] mix-blend-multiply"
                          : "bg-black/30 mix-blend-multiply"
                      } text-white p-6 min-h-full flex items-end absolute bottom-0 w-full mx-auto`}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export const Approach = () => {
  const heading = "Our Approach";
  const description = `
                    At Taplow, we support businesses through <strong>executive search</strong>,
                    helping organisations find <strong>outstanding leaders</strong> who align with
                    their vision and culture. Our <strong>interim management solutions</strong> provide
                    experienced professionals to lead <strong>during periods of change and transition</strong>.


                    Through our <strong>leadership advisory services</strong>, we guide businesses
                    on <strong>succession planning, leadership assessment, and performance development</strong>.
                    Our <strong>CEO training programmes</strong> equip senior executives with the
                    knowledge and skills needed to succeed in an increasingly complex business environment.
                    </br>  </br>
                    Our <strong>Single Point of Contact model</strong> ensures a smooth and
                    efficient process, making leadership appointments straightforward and effective.
                    </br>
    `;
  return (
    <>
      <section className="md:py-20 py-16 pb-8 px-4 relative">
        <div className="hidden md:block w-full h-48 bg-[#96A94A] absolute left-0 -z-10 top-2/4 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white md:pr-10">
            <div className="relative w-full lg:w-1/2">
              <div className="absolute -top-2 left-8 w-5 h-5 bg-[#005581] rounded-sm "></div>
              <Image
                src={img}
                alt="Our Approach"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-normal redhat mb-4  text-[#000]">
                {heading}
              </h2>
              <p
                className="text-[#000] redhat text-sm md:text-base mb-8"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Partners = () => {
  const slides = [
    {
      image: partner1,
      title: "Compliance with global laws and best practices.",
    },
    {
      image: partner2,
      title: "A professional, inclusive, and respectful workplace.",
    },
    {
      image: partner3,
      title: "Compliance with global laws and best practices.",
    },
    {
      image: partner4,
      title: "A professional, inclusive, and respectful workplace.",
    },
    {
      image: partner5,
      title: "Compliance with global laws and best practices.",
    },
    // {
    //   image: partner2,
    //   title: "A professional, inclusive, and respectful workplace.",
    // },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);
  const heading = "One Global Team: Aligned Through Regular Partner Meetings";
  const title = `Our partners meet regularly to discuss best practices, new sector developments and initiatives. <br/> Pictured are our global colleagues in Frankfurt, Germany (2019) , Madrid Spain (2022) , Dubai, UAE (2023) and Sofia, Bulgaria (2024).`;
  return (
    <>
      <section className="bg-[#F0F0F0] py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="w-full">
              <h2 className="text-3xl font-normal redhat mb-4  text-[#111D15]">
                {heading}
              </h2>
              <p
                className="text-[#000] text-sm mb-8"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={setSwiperInstance}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                    style={{
                      boxShadow: `0px 9px 19px 0px #0000001A,
                                                        0px 34px 34px 0px #00000017,
                                                        0px 78px 47px 0px #0000000D,
                                                        0px 138px 55px 0px #00000003,
                                                        0px 215px 60px 0px #00000000`,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[300px] "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex flex-row items-center mt-8 justify-between ">
              <div className="flex gap-8 items-center justify-end white_arrow">
                <button
                  className={`swiper-button-prev !relative !w-10 !mt-auto !h-10 z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isBeginning
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] fill-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronLeft size={20} />
                </button>

                <button
                  className={`swiper-button-next !relative !mt-auto !w-10 !h-10  z-10 p-2 rounded-full border-2  cursor-pointer ${
                    isEnd
                      ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                      : "bg-[#005581] text-white border-[#005581]"
                  }`}
                >
                  <HiOutlineChevronRight size={20} />
                </button>
              </div>
              <div className="style2_slider ">
                <div className="custom-pagination flex justify-start mt-0 space-x-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
