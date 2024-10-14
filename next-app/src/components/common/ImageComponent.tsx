import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageComponent = ({
  img,
  alt,
  className,
}: {
  img: StaticImageData;
  alt: string;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center items-center w-full z-10 ${className}`}>
      <Image
        src={img.src}
        alt={alt}
        width={img.width}
        height={img.height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageComponent;
