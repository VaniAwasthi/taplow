import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";

const ReusableSwiper = ({ slides, heading, title, buttonColors }) => {
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

  return (
    <section className="bg-[#F0F0F0] py-10 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-normal redhat mb-4 text-[#111D15]">
              {heading}
            </h2>
            <p
              className="text-[#666666] text-sm mb-8"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="w-full md:w-1/2 flex gap-8 items-center justify-end mb-6 md:mb-0">
            <button
              className={`swiper-button-prev !relative !w-10 !h-10 z-10 p-2 rounded-full border-2 cursor-pointer ${
                isBeginning
                  ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                  : `bg-[${buttonColors?.active}] text-white border-[${buttonColors?.active}]`
              }`}
            >
              <HiOutlineChevronLeft size={20} />
            </button>

            <button
              className={`swiper-button-next !relative !w-10 !h-10 z-10 p-2 rounded-full border-2 cursor-pointer ${
                isEnd
                  ? "bg-transparent text-[#CACACA] border-[#CACACA] disabled"
                  : `bg-[${buttonColors?.active}] text-white border-[${buttonColors?.active}]`
              }`}
            >
              <HiOutlineChevronRight size={20} />
            </button>
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
              1024: { slidesPerView: 4 },
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
                  <p className="text-lg md:text-xl redhat font-semibold absolute bottom-4 w-3/4 left-1/2 -translate-x-2/4 mx-auto text-white z-10">
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
  );
};

export default ReusableSwiper;
