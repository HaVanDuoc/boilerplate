import cn from "@/utils/tailwind-utils";
import React from "react";

interface BoxLayoutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padding?: boolean; // dùng cho mobile, khi về mobile container sẽ nhỏ hơn hẳn
}

const BoxLayoutSection = ({
  children,
  className = "",
  padding = false,
  ...props
}: BoxLayoutSectionProps) => {
  return (
    <section
      {...props}
      className={cn(
        "container flex flex-col justify-center items-center gap-10 sm:gap-16 my-24",
        padding && "px-10 sm:p-0",
        className
      )}
    >
      {children}
    </section>
  );
};

export default BoxLayoutSection;
