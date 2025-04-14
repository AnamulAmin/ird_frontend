"use client"; // Required for client-side rendering in Next.js App Router

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";

// Define types
type CategoryType = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

type SubcategoryType = {
  id: number;
  cat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number; // Fixed typo: "not_of_dua" to "no_of_dua"
  cat_icon: string;
  subcat_id: number;
};

interface AccordionProps {
  category: CategoryType;
  setIsModal: (value: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = ({ category, setIsModal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const [subcategories, setSubcategories] = useState<SubcategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state
  const contentRef = useRef<HTMLDivElement>(null);

  const { id } = useParams();

  console.log(id, "id");

  const active_id = ""; // Adjust if you have logic to set active_id dynamically

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        setIsLoading(true); // Start loading
        const res = await axios.get<SubcategoryType[]>(
          `https://ird-backend-o37f.onrender.com/subcategories?cat_id=${category.cat_id}`
        );

        console.log("Subcategories response:", res.data); // Log fetched data
        setSubcategories(res.data);
        setHeight(`${100 * res.data.length}px`);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    }

    if (isOpen) {
      fetchSubcategories();
    } else {
      setHeight("0px");
      setSubcategories([]); // Clear subcategories when closing
    }
  }, [isOpen, category.cat_id]);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <ul className="px-4 py-3 text-gray-700 border-l-2 border-primary border-dotted ml-4 w-[97%]">
      {[...Array(3)].map(
        (
          _,
          index // Show 3 skeleton items as placeholders
        ) => (
          <li key={index} className="font-[500] text-[1rem] mb-3 relative">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <span className="w-[8px] h-[8px] rounded-full bg-gray-200 absolute top-2 -left-[21px]"></span>
          </li>
        )
      )}
    </ul>
  );

  return (
    <div
      className={`rounded-lg overflow-hidden group my-3 ${
        !isOpen && "border-b border-gray"
      } w-full`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full cursor-pointer flex gap-2 items-center justify-between px-4 py-3 transition hover:bg-gray-light rounded-lg ${
          isOpen && "bg-gray-light"
        }`}
      >
        <div className="bg-gray-light-100 p-2 rounded-lg">
          <Image
            src={"/category_image.png"}
            height={300}
            width={300}
            alt="image"
            className="w-[25px]"
          />
        </div>
        <div className="text-left">
          <h5 className="text-[1rem] text-primary font-semibold">
            {category.cat_name_en}
          </h5>
          <h5 className="text-[14px] text-gray-dark">
            Subcategory: {category.no_of_subcat}
          </h5>
        </div>
        <div
          className={`${
            !isOpen && "border-l border-gray-border"
          } group-hover:border-transparent p-2`}
        >
          <h6 className="text-[1rem] text-primary font-semibold">
            {category.no_of_dua}
          </h6>
          <h6 className="text-[14px] text-gray-dark">Duas</h6>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: isLoading ? "300px" : height }}
        className="overflow-hidden transition-all bg-white duration-300 ease-in-out"
      >
        {isLoading ? (
          <SkeletonLoader /> // Show skeleton while loading
        ) : (
          subcategories.length > 0 && (
            <ul className="px-4 py-3 text-gray-700 border-l-2 border-primary border-dotted ml-4 w-[97%]">
              {subcategories.map((subcategory) => (
                <li
                  key={subcategory.id}
                  className="font-[500] text-[1rem] mb-3 relative"
                  onClick={() => setIsModal(false)}
                >
                  <Link
                    href={`/dua/${subcategory.cat_id}_${subcategory.subcat_id}`}
                    className={`
                    ${
                      id === `${subcategory.cat_id}_${subcategory.subcat_id}` &&
                      "text-primary"
                    }
                    hover:text-primary`}
                  >
                    {subcategory.subcat_name_en}
                  </Link>
                  <span className="w-[8px] h-[8px] rounded-full bg-primary absolute top-2 -left-[21px]"></span>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
};

export default Accordion;
