import Image from "next/image";
import MapBg from "../../assets/globalpage/map.png";

const countries = [
  { name: "Canada", top: "15%", left: "20%" },
  { name: "United States", top: "35%", left: "22%" },
  { name: "Brazil", top: "65%", left: "30%" },
  { name: "UK", top: "32%", left: "47%" },
  { name: "France", top: "38%", left: "48%" },
  { name: "Germany", top: "35%", left: "50%" },
  { name: "Netherlands", top: "33%", left: "49%" },
  { name: "Belgium", top: "34%", left: "48.5%" },
  { name: "Luxembourg", top: "35%", left: "48.7%" },
  { name: "Sweden", top: "25%", left: "52%" },
  { name: "Denmark", top: "30%", left: "51%" },
  { name: "Finland", top: "20%", left: "55%" },
  { name: "Spain", top: "45%", left: "44%" },
  { name: "Italy", top: "44%", left: "50.5%" },
  { name: "Bulgaria", top: "46%", left: "54%" },
  { name: "Norway", top: "21%", left: "50%" },
  { name: "Switzerland", top: "39%", left: "49.5%" },
  { name: "India", top: "55%", left: "70%" },
  { name: "China", top: "40%", left: "75%" },
  { name: "Singapore", top: "65%", left: "78%" },
  { name: "Australia", top: "80%", left: "85%" },
  { name: "New Zealand", top: "85%", left: "90%" },
];

export default function GlobalMapLabels() {
  return (
    <div className="relative w-full h-[800px] bg-black p-6">
      {/* Map Background */}
      <Image
        src={MapBg}
        alt="World Map"
        fill
        className="object-contain opacity-90"
        priority
      />

      {/* Country Labels */}
      {countries.map((country, index) => (
        <div
          key={index}
          className="absolute text-xs text-cyan-300 font-semibold whitespace-nowrap"
          style={{ top: country.top, left: country.left }}
        >
          {country.name}
        </div>
      ))}
    </div>
  );
}
