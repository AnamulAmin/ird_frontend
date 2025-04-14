"use client";
import React, { useState } from "react";
import HeaderUserProfile from "./HeaderUserProfile";
import HeaderSearchBox from "./HeaderSearchBox";
import { IoMdSettings } from "react-icons/io";
import Modal from "@/components/Modal/Modal";
import SettingsArea from "@/components/SettingsArea/SettingsArea";
import { MdFilterAlt } from "react-icons/md";
import CategoriesArea from "@/components/CategoriesArea/CategoriesArea";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Header({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const [isShowSettings, setIsShowSetting] = useState<boolean>(false);
  const [isShowCategoryFilter, setIsShowCategoryFilter] =
    useState<boolean>(false);
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-poppins text-[24px] font-bold hidden md:block">
        Dua Page
      </h2>
      <button
        className={`w-[40px] block md:hidden gird place-items-center rounded-lg border hover:bg-primary hover:text-white cursor-pointer border-gray-border h-[30px]  z-10 transition-all duration-300`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <IoClose size={28} /> : <LuMenu size={28} />}
      </button>

      <div className="flex items-center gap-2 w-full md:w-1/2 justify-end lg:justify-between">
        <button
          className="text-gray-dark block lg:hidden cursor-pointer hover:text-primary"
          onClick={() => setIsShowCategoryFilter(true)}
        >
          <MdFilterAlt size={30} />
        </button>
        <button
          className="text-gray-dark block lg:hidden cursor-pointer hover:text-primary"
          onClick={() => setIsShowSetting(true)}
        >
          <IoMdSettings size={30} />
        </button>
        <HeaderSearchBox />
        <HeaderUserProfile />
      </div>

      <Modal
        isOpen={isShowSettings}
        onClose={() => setIsShowSetting(false)}
        title="Custom Modal"
        size="lg"
        // scaleEffect={false}
      >
        <SettingsArea isShow={true} />
      </Modal>

      <Modal
        isOpen={isShowCategoryFilter}
        onClose={() => setIsShowCategoryFilter(false)}
        title="Custom Modal"
        size="lg"
        // scaleEffect={false}
      >
        <CategoriesArea isModal={true} />
      </Modal>
    </header>
  );
}
