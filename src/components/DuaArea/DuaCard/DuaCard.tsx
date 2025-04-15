import Image from "next/image";
import React from "react";
import { LuCopy, LuShare2 } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { BsExclamationOctagon } from "react-icons/bs";
import PlayAudio from "@/components/PlayAudio/PlayAudio";

// Define type here or import from shared location
export type DuaType = {
  id?: number;
  dua_name_en?: string;
  top_en?: string;
  dua_arabic?: string;
  transliteration_en?: string;
  translation_en?: string;
  refference_en?: string;
  audio?: string;
};

type DuaCardProps = {
  data: DuaType;
};

const DuaCard: React.FC<DuaCardProps> = ({ data }) => {
  const {
    dua_name_en,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    audio,
  } = data;

  return (
    <div className="w-full mx-auto bg-white rounded-xl p-8 my-4 border border-gray-border">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="text-green-600 rounded-full p-2 w-[60px] md:w-[50px]">
          <Image
            src="/traced.png"
            width={20}
            height={20}
            alt="traced image"
            className="w-full"
          />
        </div>
        {dua_name_en && (
          <h2 className="text-md sm:text-xl font-semibold text-green-600">
            {dua_name_en}
          </h2>
        )}
      </div>

      {/* Description */}
      {top_en && (
        <p className="text-gray-700 mb-6 text-md sm:text-[1rem]">{top_en}</p>
      )}

      {/* Arabic Text */}
      {dua_arabic && (
        <div className="text-right  font-light leading-relaxed text-gray-800 mb-6 !font-quran text-md sm:text-[1rem]">
          {dua_arabic}
        </div>
      )}

      {/* Transliteration */}
      {transliteration_en && (
        <p className="text-gray-600 italic mb-4 text-md sm:text-[1rem]">
          <strong>Transliteration:</strong> {transliteration_en}
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
        <div className="text-sm text-green-600 font-semibold text-md sm:text-[1rem]">
          Reference:{" "}
          <h4 className="text-gray-700 font-[600] text-[1rem]">
            {refference_en}
          </h4>
        </div>
      )}

      {/* Play Button & Actions */}
      <div className="mt-6 flex justify-between flex-wrap">
        {audio && <PlayAudio audio={audio} />}

        <div className="flex flex-wrap w-full md:w-[80%]">
          {[
            LuCopy,
            CiBookmark,
            IoBulbOutline,
            LuShare2,
            BsExclamationOctagon,
          ].map((Icon, i) => (
            <button
              key={i}
              className="cursor-pointer text-gray-dark rounded-full p-3 transition duration-300"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
