import React from "react";
import DuaHeader from "./DuaHeader/DuaHeader";
import DuaCard from "./DuaCard/DuaCard";
import { DuaType } from "@/types/dua"; // Suggest moving the type to a central `types` folder
import { PiWarningCircleLight } from "react-icons/pi";

type DuaAreaProps = {
  dua: DuaType[];
};

export default function DuaArea({ dua }: DuaAreaProps) {
  return (
    <div
      className="w-full h-[86dvh] overflow-auto px-4"
      style={{ scrollbarWidth: "none" }}
    >
      <DuaHeader name="The servant is dependent on his Lord" />

      {dua && dua.length > 0 ? (
        dua.map((item) => <DuaCard data={item} key={item.id} />)
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
          <PiWarningCircleLight size={64} className="mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No Duas Found</h3>
          <p className="text-sm max-w-md">
            {`Sorry, we couldn't find any Duas at the moment. Please try again
            later or check your internet connection.`}
          </p>
        </div>
      )}
    </div>
  );
}
