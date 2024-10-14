import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ButtonIconComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: StaticImageData;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const ButtonIconComponent: React.FC<ButtonIconComponentProps> = ({
  icon,
  size = 24,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer flex justify-center items-center",
        className
      )}
      onClick={onClick}
      style={{
        width: size,
      }}
      {...props}
    >
      <Image
        src={icon}
        alt={utils.generateRandomAriaLabel("Button Icon__")}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ButtonIconComponent;
