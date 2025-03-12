import Image from "next/image";
import React from "react";
import img1 from "../../assets/icons/img1.webp";
import img2 from "../../assets/icons/img2.webp";
import img3 from "../../assets/icons/img3.webp";
import img4 from "../../assets/icons/img4.webp";
import img5 from "../../assets/icons/img5.webp";

const TriangleArrow = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="flex space-x-2 items-center  my-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="animate-moveRight"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: "1.2s",
          }}
        >
          <Image
            src={src}
            alt="Arrow"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      ))}
    </div>
  );
};

export default TriangleArrow;
