'use client'

import FooterComponent from "@/components/layout/footer/FooterComponent";
import NavbarComponent from "@/components/layout/navbar/NavbarComponent";
import FloatingContainer from "@/components/ui/floating/FloatingContainer";
import UpToTopComponent from "@/components/ui/floating/UpTopTopComponent";

const items = [<UpToTopComponent key={"upto"} />];

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FloatingContainer items={items} />
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
}
