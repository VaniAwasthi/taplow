"use client";
import Image from "next/image";
import Link from "next/link";
import MapBg from "../../assets/globalpage/map.png";

const countries = [
  { name: "Canada", href: "/country/canada", x: "14%", y: "12%" },
  { name: "United States", href: "/country/united-states", x: "13%", y: "28%" },
  { name: "UK", href: "/country/uk", x: "41.5%", y: "29%" },
  { name: "France", href: "/country/france", x: "39%", y: "38%" },
  { name: "Germany", href: "/country/germany", x: "43%", y: "33%" },
  { name: "Italy", href: "/country/italy", x: "44%", y: "43%" },
  { name: "Spain", href: "/country/spain", x: "36.5%", y: "43%" },
  { name: "Bulgaria", href: "/country/bulgaria", x: "50%", y: "47%" },
  { name: "Sweden", href: "/country/sweden", x: "44%", y: "16%" },
  { name: "Finland", href: "/country/finland", x: "47%", y: "10%" },
  { name: "Norway", href: "/country/norway", x: "41%", y: "13%" },
  { name: "Denmark", href: "/country/denmark", x: "42.5%", y: "28%" },
  { name: "India", href: "/country/india", x: "67%", y: "56%" },
  { name: "China", href: "/country/china", x: "71%", y: "35%" },
  { name: "Singapore", href: "/country/singapore", x: "74%", y: "65%" },
  { name: "Australia", href: "/country/australia", x: "82%", y: "80%" },
  { name: "New Zealand", href: "/country/new-zealand", x: "87%", y: "90%" },
];

export default function WorldMap() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <Image
        src={MapBg}
        alt="World Map"
        width={1200}
        height={650}
        className="w-full h-auto"
      />
      {countries.map((country) => (
        <Link
          key={country.name}
          href={country.href}
          className="absolute text-blue-600 font-medium hover:underline text-sm sm:text-base"
          style={{
            left: country.x,
            top: country.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-1"></span>
          {country.name}
        </Link>
      ))}
    </div>
  );
}
