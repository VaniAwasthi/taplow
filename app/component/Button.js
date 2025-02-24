import Image from "next/image";

export default function Button({
  text,
  onClick,
  buttonImage,
  hoverImage,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`border border-[#96A94A] relative group  w-[242px] h-[42px] bg-[#96A94A] text-white rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-out overflow-hidden hover:bg-white hover:text-[#96A94A] transform hover:scale-105 ${className}`}
    >
      <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
      <span className="relative z-10 font-redhat text-sm">{text}</span>
      <div className="relative w-[34px] h-[25px]">
        <Image
          src={buttonImage}
          alt="Button Icon"
          className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
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
