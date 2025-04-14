"use client";
import MainContent from "@/components/MainContent/MainContent";
import Header from "@/components/UI/Header/Header";
import Sidebar from "@/components/UI/Sidebar/Sidebar";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  return (
    <main
      className={`w-full flex gap-4 p-6 transition-all duration-300 ${
        open ? "md:pl-[120px]" : "pl-8"
      }`}
    >
      <Sidebar setOpen={setOpen} open={open} />
      <div className="w-full h-[95dvh]">
        <Header setOpen={setOpen} open={open} />
        <MainContent>{children}</MainContent>
      </div>
    </main>
  );
}
