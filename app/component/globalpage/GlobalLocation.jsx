import Image from "next/image";
import MapBg from "../../assets/globalpage/mapwithlocation.webp";
import Link from "next/link";

const countries = [
  { index: 1, name: "Australia", link: "/countries/australia" },
  { index: 2, name: "Bulgaria", link: "/countries/bulgaria" },
  { index: 3, name: "Canada", link: "/countries/canada" },
  { index: 4, name: "China", link: "/countries/china" },
  { index: 5, name: "Denmark", link: "/countries/denmark" },
  { index: 6, name: "Finland", link: "/countries/finland" },
  { index: 7, name: "France", link: "/countries/germany" },
  { index: 8, name: "Germany", link: "/countries/belgium" },
  { index: 9, name: "India", link: "/countries/india" },
  { index: 10, name: "Italy", link: "/countries/italy" },
  { index: 11, name: "Norway", link: "/countries/norway" },
  { index: 12, name: "New Zealand", link: "/countries/new-zealand" },
  { index: 13, name: "Spain", link: "/countries/spain" },
  { index: 14, name: "Sweden", link: "/countries/sweden" },
  { index: 15, name: "Singapore", link: "/countries/singapore" },
  { index: 16, name: "US", link: "/countries/us" },
  { index: 17, name: "UK", link: "/countries/uk" },
];

export default function GlobalLocations() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div className="relative w-full h-auto bg-white p-6  flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column */}
        <div className="md:w-1/4 w-full text-left">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Global Locations:
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-4 md:block md:space-y-2 text-sm md:text-[18px] font-bold text-teal-800">
            {countries.map((country) => (
              <li key={country.index}>
                <Link
                  href={country.link}
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  • {country.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Column */}
        <div className="md:w-3/4 w-full">
          <div className="w-full">
            <Image
              src={MapBg}
              alt="World Map"
              width={1600}
              height={800}
              className="md:w-[900px] md:h-[500px] scale-125 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
