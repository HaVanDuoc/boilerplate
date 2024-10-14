"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

const LinkComponent: React.FC<Props> = ({
  children,
  href,
  className,
  onClick,
}) => {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LinkComponent;
