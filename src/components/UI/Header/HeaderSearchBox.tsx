import React from "react";
import { IoSearchOutline } from "react-icons/io5";
export default function HeaderSearchBox() {
  return (
    <div className="">
      <form className="p-1 border hidden border-gray-border rounded-lg bg-white lg:flex gap-1 w-full max-w-[371px]">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="w-full text-[1rem] ml-3 text-gray-dark !focus:outline-none !focus:outline-transparent placeholder:text-gray-dark"
        />
        <button
          type="button"
          className="w-[54px] h-[44px] bg-gray text-2xl grid place-items-center text-gray-dark rounded-lg"
        >
          <IoSearchOutline />
        </button>
      </form>
      <button
        type="button"
        className="w-[54px] h-[44px] lg:hidden bg-gray text-2xl grid place-items-center text-gray-dark rounded-lg"
      >
        <IoSearchOutline />
      </button>
    </div>
  );
}
