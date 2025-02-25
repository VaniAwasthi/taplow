import Image from "next/image";

export default function Button({
  text,
  onClick,
  buttonImage,
  hoverImage,
  className = "",
  bgColor = "#96A94A", // Default background color (Green)
  textColor = "#FFFFFF", // Default text color (White)
  hoverBgColor = "#FFFFFF", // Default hover background color (White)
  hoverTextColor = "#96A94A",
  border = ` 2px solid ${bgColor}`, // Default hover text color (Green)
}) {
  return (
    <button
      onClick={onClick}
      className={`relative group w-[242px] h-[42px] rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden transform hover:scale-105 ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border,
        "--hoverTextColor": hoverTextColor, // Define CSS variable for hover color
      }}
    >
      {/* Hover Background Effect */}
      <span
        className="absolute inset-0 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
        style={{ backgroundColor: hoverBgColor }}
      ></span>

      {/* Button Text - Fixes hover text color */}
      <span className="relative z-10 font-redhat text-sm transition-colors duration-300 ease-in-out group-hover:text-[var(--hoverTextColor)]">
        {text}
      </span>

      {/* Button Images (Default & Hover State) */}
      <div className="relative w-[34px] h-[25px]">
        <Image
          src={hoverImage}
          alt="Button Icon"
          className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <Image
          src={hoverImage}
          alt="Button Icon Hover"
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        />
      </div>
    </button>
  );
}
