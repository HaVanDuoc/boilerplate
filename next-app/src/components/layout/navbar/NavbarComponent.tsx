"use client";

import Container from "@/components/common/Container";
import LinkComponent from "@/components/common/LinkComponent";
import LogoComponent from "@/components/ui/LogoComponent";
import { NAV_LINKS } from "@/data/constants";
import React, { useEffect, useRef, useState } from "react";
import ButtonIconComponent from "@/components/common/ButtonIconComponent";
import cn from "@/utils/tailwind-utils";
import CLOSE from "@/assets/icon/close.svg";
import OPEN from "@/assets/icon/menu.svg";

interface NavbarProps {
  hiddenMenu?: "xl" | "lg" | "md" | "sm";
}

const NavbarComponent: React.FC<NavbarProps> = ({ hiddenMenu = "md" }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const classHiddenMenu =
    hiddenMenu === "xl"
      ? "xl:hidden"
      : hiddenMenu === "lg"
      ? "lg:hidden"
      : hiddenMenu === "md"
      ? "md:hidden"
      : "sm:hidden";

  const classHiddenLinks =
    hiddenMenu === "xl"
      ? "hidden xl:flex"
      : hiddenMenu === "lg"
      ? "hidden lg:flex"
      : hiddenMenu === "md"
      ? "hidden md:flex"
      : "hidden sm:flex";

  const toggle = () => setOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    // Kiểm tra nếu click xảy ra bên ngoài NavbarMobile
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false); // Đóng menu
    }
  };

  useEffect(() => {
    // Thêm sự kiện click
    document.addEventListener("mousedown", handleClickOutside);

    // Gỡ bỏ sự kiện khi component bị hủy
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex">
      <Container className="flex flex-row items-center">
        <ButtonIconComponent
          icon={OPEN}
          onClick={toggle}
          size={30}
          className={classHiddenMenu}
        />

        <LogoComponent name="Logo" className="mr-auto" />

        <div className={cn("flex items-center flex-wrap gap-5", classHiddenLinks && classHiddenLinks)}>
          {NAV_LINKS.map((nav) => (
            <div key={nav.id}>
              <LinkComponent href={nav.href}>{nav.name}</LinkComponent>
            </div>
          ))}
        </div>

        <div className="ml-auto">Items</div>
      </Container>

      {/* Sidebar Menu */}
      <aside
        ref={containerRef}
        className={cn(
          "p-5 absolute top-0 left-0 bg-light w-full h-screen max-w-screen-xs animation",
          open ? "translate-x-0 shadow-2xl" : "translate-x-[-100%]"
        )}
      >
        <div className="flex mb-5">
          <LogoComponent name="Logo" />
          <ButtonIconComponent
            icon={CLOSE}
            className="ml-auto"
            onClick={toggle}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          {NAV_LINKS.map((nav) => (
            <div key={nav.id}>
              <LinkComponent href={nav.href}>{nav.name}</LinkComponent>
            </div>
          ))}
        </div>

        <div className="mt-5">Items menu</div>
      </aside>
    </nav>
  );
};

export default NavbarComponent;
