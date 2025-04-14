import React from "react";
import CategoriesArea from "../CategoriesArea/CategoriesArea";
import DuaArea from "../DuaArea/DuaArea";
import SettingsArea from "../SettingsArea/SettingsArea";

export default function MainContent({ children }) {
  return (
    <div className="flex justify-between py-6 gap-6">
      <CategoriesArea />
      {children}

      <SettingsArea />
    </div>
  );
}
