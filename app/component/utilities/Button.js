import Image from "next/image";
import Link from "next/link";

export default function Button({
  text,
  onClick,
  href,
  buttonImage,
  hoverImage,
  className = "",
  bgColor = "#96A94A",
  textColor = "#FFFFFF",
  hoverBgColor = "#FFFFFF",
  hoverTextColor = "#96A94A",
  border = `2px solid ${bgColor}`,
  filter = "brightness(0) invert(1)",
  type = "button", // Add type prop
}) {
  const commonClasses = `relative group w-[200px] md:w-[242px] h-[42px] rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden transform hover:scale-105 ${className}`;
  const commonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    border: border,
    "--hoverTextColor": hoverTextColor,
  };

  if (href) {
    return (
      <Link href={href} className={commonClasses} style={commonStyle}>
        <span
          className="absolute inset-0 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
          style={{ backgroundColor: hoverBgColor }}
        ></span>
        <span className="relative z-10 font-redhat text-sm transition-colors duration-300 ease-in-out group-hover:text-[var(--hoverTextColor)]">
          {text}
        </span>
        <div className="relative w-[34px] h-[25px]">
          <Image
            src={hoverImage}
            alt="Button Icon"
            className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            style={{ filter: filter }}
          />
          <Image
            src={hoverImage}
            alt="Button Icon Hover"
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
        </div>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      style={commonStyle}
    >
      <span
        className="absolute inset-0 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
        style={{ backgroundColor: hoverBgColor }}
      ></span>
      <span className="relative z-10 font-redhat text-sm transition-colors duration-300 ease-in-out group-hover:text-[var(--hoverTextColor)]">
        {text}
      </span>
      <div className="relative w-[34px] h-[25px]">
        <Image
          src={buttonImage}
          alt="Button Icon"
          className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          style={{ filter: filter }}
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
