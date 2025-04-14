"use client";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { TiArrowLeft } from "react-icons/ti";

export default function Sidebar({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const icons = [
    {
      id: 1,
      path: "/icons/two_hand.png",
      name: "Dua Categories",
      alt: "Two hands in prayer",
    },
    {
      id: 2,
      path: "/icons/home.png",
      name: "Home",
      alt: "Home icon",
    },
    {
      id: 3,
      path: "/icons/app.png",
      name: "Apps",
      alt: "Application icon",
    },
    {
      id: 4,
      path: "/icons/bulb.png",
      name: "Memorize",
      alt: "Light bulb icon",
    },
    {
      id: 5,
      path: "/icons/saved.png",
      name: "Bookmarks",
      alt: "Bookmark icon",
    },
    {
      id: 6,
      path: "/icons/medicine.png",
      name: "Ruqyah",
      alt: "Medical icon",
    },
    {
      id: 7,
      path: "/icons/leaves.png",
      name: "Dua Q&A",
      alt: "Leaf icon",
    },
    {
      id: 8,
      path: "/icons/book.png",
      name: "Books",
      alt: "Book icon",
    },
    {
      id: 9,
      path: "/icons/one_hand.png",
      name: "Dua List",
      alt: "Single hand in prayer",
    },
  ];
  return (
    <nav
      className={` group w-full z-50 fixed top-1 sm:top-6 left-4 md:w-[80px] p-6 md:p-0 overflow-hidden ${
        open
          ? "pointer-events-auto "
          : "pointer-events-none md:pointer-events-auto"
      }`}
    >
      {/* <button
        className={`${
          !open
            ? "hidden md:block right-12 rotate-y-180 top-10 bg-primary text-white"
            : "group-hover:hidden group-hover:md:block hidden right-0 rotate-y-0 top-16 bg-white"
        } w-[30px] gird place-items-center rounded-lg border hover:bg-primary hover:text-white cursor-pointer border-gray-border h-[30px] mb-2 absolute  z-10 transition-all duration-300`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {<TiArrowLeft size={22} />}
      </button> */}
      <ul
        className={`w-full md:left-6 gap-3 h-[80dvh] flex flex-col justify-center items-center pb-3 bg-white rounded-xl transition-all duration-300 origin-left px-4 sm:px-16 md:px-2 ${
          open ? "-translate-x-4 md:translate-x-0" : "-translate-x-[150%]"
        }`}
      >
        <li className="absolute top-3 right-3">
          <button
            className={`w-[40px] block md:hidden gird place-items-center rounded-lg border hover:bg-primary hover:text-white cursor-pointer border-gray-border h-[30px]  z-10 transition-all duration-300`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {<IoClose size={28} />}
          </button>
        </li>
        {icons.map((icon) => (
          <li
            className={`cursor-pointer flex gap-4 items-center ${
              icon.id === 1
                ? "md:mb-auto w-full md:w-[75px] rounded-full bg-gray-light md:bg-transparent p-0 hidden md:block"
                : icon.id === icons.length
                ? "md:mt-auto bg-gray-light md:bg-primary w-full md:w-[50px] p-[10px] md:p-[13px] rounded-full md:rounded-xl hidden md:block"
                : "w-full md:w-[40px] rounded-full bg-gray-light  p-[10px]"
            }`}
            key={icon.id}
          >
            <Image
              src={icon.path}
              width={100}
              height={100}
              className="w-[30px] md:w-full"
              alt="two hands "
            />
            <p className="text-lg text-gray-text block md:hidden">
              {icon.name}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
