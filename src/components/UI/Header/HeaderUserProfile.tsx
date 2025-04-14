"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export default function HeaderUserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex items-center justify-between lg:ml-auto gap-2 cursor-pointer w-[70px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        src={"/no_user.png"}
        width={500}
        height={500}
        alt="no user image"
        className="max-w-[50px]"
      />
      {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
    </div>
  );
}
