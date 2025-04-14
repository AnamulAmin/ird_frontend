import React from "react";
import DuaHeader from "./DuaHeader/DuaHeader";
import DuaCard from "./DuaCard/DuaCard";
import { DuaType } from "@/app/dua/[id]/page";

type DuaAreaProps = {
  dua: DuaType[];
};

export default function DuaArea({ dua }: DuaAreaProps) {
  return (
    <div
      className="w-full h-[86dvh] overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <DuaHeader name="The servant is dependent on his Lord" />

      {dua && dua.map((item) => <DuaCard data={item} key={item.id} />)}
    </div>
  );
}
