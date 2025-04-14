import React from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  onSearch: (value: string) => void;
};

export default function CategorySearchBox({ onSearch }: Props) {
  return (
    <form className="p-1 border border-gray-border rounded-lg bg-white flex gap-1">
      <button
        type="button"
        className="w-[54px] h-[44px] text-2xl grid place-items-center text-gray-dark rounded-lg"
      >
        <CiSearch />
      </button>
      <input
        type="text"
        placeholder="Search by Categories"
        className="w-full text-[1rem] ml-3 text-gray-dark !focus:outline-none placeholder:text-gray-dark"
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
}
