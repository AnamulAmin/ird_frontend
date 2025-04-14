import Image from "next/image";
import React from "react";
import { LuCopy, LuShare2 } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { BsExclamationOctagon } from "react-icons/bs";
import { DuaType } from "@/app/dua/[id]/page";
import PlayAudio from "@/components/PlayAudio/PlayAudio";
const DuaCard: React.FC<any> = ({ data }) => {
  const {
    id,
    cat_id,
    subcat_id,
    dua_id,
    dua_name_bn,
    dua_name_en,
    top_bn,
    top_en,
    dua_arabic,
    dua_indopak,
    clean_arabic,
    transliteration_bn,
    transliteration_en,
    translation_bn,
    translation_en,
    bottom_bn,
    bottom_en,
    refference_bn,
    refference_en,
    audio,
  } = data;
  return (
    <div className="w-full mx-auto bg-white  rounded-xl p-8 my-4 border border-gray-border">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className=" text-green-600 rounded-full p-2">
          <Image
            src="/traced.png"
            width={20}
            height={20}
            alt="traced image"
            className="w-[20px]"
          />
        </div>

        {dua_name_en && (
          <h2 className="text-xl font-semibold text-green-600">
            {dua_name_en}
          </h2>
        )}
      </div>

      {/* Description */}
      {top_en && <p className="text-gray-700 mb-6">{top_en}</p>}

      {/* Arabic Text */}
      {dua_arabic && (
        <div className="text-right text-3xl font-light leading-relaxed text-gray-800 mb-6 !font-quran">
          {dua_arabic}
        </div>
      )}

      {/* Transliteration */}
      {transliteration_en && (
        <p className="text-gray-600 italic mb-4">
          <strong>Transliteration:</strong>
          {transliteration_en}
        </p>
      )}

      {/* Translation */}
      {translation_en && (
        <p className="text-gray-600 mb-6">
          <strong>Translation:</strong> {translation_en}
        </p>
      )}

      {/* Reference */}
      {refference_en && (
        <div className="text-sm text-green-600 font-semibold">
          Reference:{" "}
          <h4 className="text-gray-700 font-[600] text-[1rem]">
            {refference_en}
          </h4>
        </div>
      )}

      {/* Play Button */}
      <div className="mt-6 flex justify-between">
        {audio && <PlayAudio audio={audio} />}

        <div className="">
          <button className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300">
            <LuCopy size={20} />
          </button>
          <button className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300">
            <CiBookmark size={20} />
          </button>
          <button className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300">
            <IoBulbOutline size={20} />
          </button>
          <button className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300">
            <LuShare2 size={20} />
          </button>
          <button className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300">
            <BsExclamationOctagon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
