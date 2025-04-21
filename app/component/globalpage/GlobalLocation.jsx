import Link from "next/link";
import InteractiveMap from "./Maplayout";

const countries = [
  { index: 1, name: "Australia", link: "/countries/australia" },
  { index: 2, name: "Bulgaria", link: "/countries/bulgaria" },
  { index: 3, name: "Canada", link: "/countries/canada" },
  { index: 4, name: "China", link: "/countries/china" },
  { index: 5, name: "Denmark", link: "/countries/denmark" },
  { index: 6, name: "Finland", link: "/countries/finland" },
  { index: 7, name: "France", link: "/countries/france" }, // fixed wrong link
  { index: 8, name: "Germany", link: "/countries/germany" }, // fixed wrong link
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
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column - Country List */}
        <div className="md:w-1/4 w-full">
          <h2 className="text-3xl font-bold mb-6">Global Locations:</h2>
          <ul className="space-y-2 text-md">
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

        {/* Right Column - Map */}
        <div className="md:w-3/4 w-full">
          <InteractiveMap />
        </div>
      </div>
    </div>
  );
}
