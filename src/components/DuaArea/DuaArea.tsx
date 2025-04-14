import React from "react";
import DuaHeader from "./DuaHeader/DuaHeader";
import DuaCard from "./DuaCard/DuaCard";
import { DuaType } from "@/app/dua/[id]/page";

export default function DuaArea({ dua }: any) {
  return (
    <div
      className="w-full h-[86dvh] overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <DuaHeader name="The servant is dependent on his Lord" />

      {dua && dua.map((item: DuaType) => <DuaCard data={item} />)}
    </div>
  );
}
