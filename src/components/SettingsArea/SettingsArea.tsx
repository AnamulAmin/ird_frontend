import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import SettingOption from "./SettingOption/SettingOption";
import { PiCardsThree } from "react-icons/pi";

export default function SettingsArea({ isShow = false }: { isShow?: boolean }) {
  const setting_categories = [
    {
      id: 1,
      name: "Language Settings",
      icon: <IoLanguageOutline size={22} />,
    },
    {
      id: 2,
      name: "General Settings",
      icon: <PiCardsThree size={22} />,
    },
    {
      id: 3,
      name: "Font Settings",
      icon: <LuLayoutGrid size={22} />,
    },
    {
      id: 4,
      name: "Appearance Settings",
      icon: <LuLayoutGrid size={22} />,
    },
  ];
  return (
    <div
      className={`w-2/12 min-w-[250px] bg-white rounded-lg ${
        isShow ? "block" : "lg:block hidden"
      }`}
    >
      <h2 className=" text-center py-3 font-[700] text-[20px] ">Settings</h2>
      <div className="p-3">
        {setting_categories.map((category) => (
          <SettingOption category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}
