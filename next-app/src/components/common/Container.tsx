import cn from "@/utils/tailwind-utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padding?: boolean; // dùng cho mobile, khi về mobile container sẽ nhỏ hơn hẳn
  py?: number;
  my?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  my,
  py = 5,
  ...props
}) => {

  return (
    <section
      {...props}
      className={cn(
        "container flex flex-col justify-center items-center gap-10",
        my && "sm:gap-16 my-24",
        py && `py-${py}`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
