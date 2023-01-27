import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap flex-col">{children}</div>
      <Footer />
    </>
  );
}
