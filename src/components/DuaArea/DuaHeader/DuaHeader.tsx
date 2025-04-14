import React from "react";

export default function DuaHeader({ name }: { name: string }) {
  return (
    <header className="border border-gray-border rounded-lg bg-white p-3">
      <strong className="text-primary font-[600] text-[16px]">Section: </strong>
      {name}
    </header>
  );
}
