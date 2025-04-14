"use client";

import SwitchToggle from "@/components/UI/SwitchToggle/SwitchToggle";
import React, { JSX, useEffect, useState } from "react";

type CategoryType = {
  name: string;
  id: number;
  icon: JSX.Element;
};

type PropsType = {
  category: CategoryType;
};

export default function SettingOption({ category }: PropsType) {
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  useEffect(() => {
    if (category.id === 4) {
      setIsOpenOption(true);
    }
  }, [category.id]);

  return (
    <div key={category.id} className="mb-2 w-full">
      <div
        className={`flex items-center bg-gray py-3 transition-all duration-300 gap-1 px-2 rounded border-l-4 group cursor-pointer relative z-10 ${
          isOpenOption ? "border-primary" : "border-transparent"
        } hover:border-primary`}
        onClick={() => setIsOpenOption(!isOpenOption)}
      >
        <button
          className={`w-[34px] h-[34px] rounded-full bg-gray-light text-gray-dark grid place-items-center group-hover:text-primary ${
            isOpenOption ? "text-primary" : ""
          }`}
        >
          {category.icon}
        </button>
        <h3
          className={`text-[16px] text-gray-dark font-[400] group-hover:text-primary ${
            isOpenOption ? "text-primary" : ""
          }`}
        >
          {category.name}
        </h3>
      </div>

      <div
        className={`flex justify-between items-center relative -top-2 transition-all duration-300 pr-6 overflow-hidden ${
          isOpenOption ? "h-[80px]" : "h-0"
        } border border-gray-border gap-1 px-2 rounded`}
      >
        <h4 className="font-[400] text-[1rem]">Night Mode</h4>
        <SwitchToggle />
      </div>
    </div>
  );
}
