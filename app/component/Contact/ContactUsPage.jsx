const { default: BannerLayout } = require("../utilities/BannerLayout");
import HoverImage from "../../assets/homePage/hover.svg";
import ContactBanner from "../../assets/contact/ContactBanner.webp";
import GlobalSide from "../../assets/contact/GlobalSide.webp";
import Button from "../utilities/Button";
import Image from "next/image";
export const HeroSecContact = () => {
  const data = {
    image: ContactBanner,
    title: "Let’s Connect –",
    title2: "We’re Just a Message Away",
    description: "",
  };
  return (
    <>
      <BannerLayout
        image={data.image}
        title={data.title}
        title2={data.title2}
        description={data.description}
        buttonText={data.buttonText}
        hoverImage={HoverImage}
        // href={slide.href}
        BgClassname="object-cover w-full h-full object-center "
        // zIndex="1"
      />
    </>
  );
};

export const GlobalOffices = () => {
  const heading = "Global offices";
  const description = `We have a global footprint. Our organizational consulting services synchronize strategy and talent to drive superior performance for our clients. Our 10,000 + colleagues serve clients in more than 50 countries.`;
  return (
    <>
      <section className="md:py-20 py-16 pb-8 px-4 relative">
        <div className="hidden md:block w-full h-48 bg-[#96A94A] absolute left-0 -z-10 top-2/4 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white md:pr-10">
            <div className="relative w-full lg:w-1/2 ease-in-out hover:scale-105">
              <div className="absolute -top-2 left-8 w-8 h-8 bg-[#005581] rounded-sm "></div>
              <Image
                src={GlobalSide}
                alt="GlobalOffice"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-transform duration-300 "
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
              <div className="mt-[2rem] md:mb-[1rem] flex md:justify-start">
                <Button
                  href="/contact/global-offices"
                  text="Find a Taplow Office"
                  buttonImage={HoverImage}
                  hoverImage={HoverImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
