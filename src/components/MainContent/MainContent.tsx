import React, { ReactNode } from "react";
import CategoriesArea from "../CategoriesArea/CategoriesArea";
import SettingsArea from "../SettingsArea/SettingsArea";

type MainContentProps = {
  children: ReactNode;
};

export default function MainContent({ children }: MainContentProps) {
  console.log(children);
  return (
    <div className="flex justify-between py-6 gap-6">
      <CategoriesArea />
      {children}
      <SettingsArea />
    </div>
  );
}
