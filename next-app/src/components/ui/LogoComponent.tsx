import utils from "@/utils";
import Image, { StaticImageData } from "next/image";
import React, { Fragment } from "react";

interface LogoComponentProps {
  name?: React.ReactNode;
  img?: StaticImageData;
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({
  name,
  img,
  className,
}) => {
  return (
    <div className={className}>
      {name ? (
        <div className="text-dark uppercase text-3xl font-bold">{name}</div>
      ) : img ? (
        <Image
          src={img?.src}
          alt={utils.generateRandomAriaLabel("Logo__")}
          width={img.width}
          height={img.height}
          className="w-auto h-full object-cover"
        />
      ) : (
        <Fragment />
      )}
    </div>
  );
};

export default LogoComponent;
