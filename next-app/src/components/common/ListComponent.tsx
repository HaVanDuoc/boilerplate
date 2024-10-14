import cn from "@/utils/tailwind-utils";
import React from "react";

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("border border-gray-300 rounded-lg p-5", className)}
    >
      item
    </div>
  );
};

const ListComponent = ({ cols = 4 }: { cols: number }) => {
  return (
    <div
      className={cn("grid gap-4", `grid-cols-${cols}`, {
        "sm:grid-cols-1": cols >= 1,
        "md:grid-cols-2": cols >= 2,
        "lg:grid-cols-3": cols >= 3,
        "xl:grid-cols-4": cols >= 4,
      })}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}>
          <ItemCard />
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
