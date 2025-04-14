import DuaArea from "@/components/DuaArea/DuaArea";
import axios from "axios";
import React from "react";

// Define the type for dynamic route parameters
interface Params {
  id: string; // This will be in the format "cat_id_subcat_id"
}

// Define types for categories, subcategories, and duas
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
  not_of_dua: number; // Typo: should be "no_of_dua" for consistency
  cat_icon: string;
  subcat_id: number;
};

export interface DuaType {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string | null;
  top_en: string | null;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: string | null;
  bottom_en: string | null;
  refference_bn: string | null;
  refference_en: string | null;
  audio: string | null;
}

// Fetch a specific dua based on cat_id and subcat_id
async function getDua(id: string): Promise<DuaType | null> {
  const idArray = id.split("_");
  if (idArray.length !== 2) {
    return null; // Invalid ID format
  }

  const [catId, subcatId] = idArray;

  const res = await fetch(
    `https://ird-backend-o37f.onrender.com/duas?cat_id=${catId}&subcat_id=${subcatId}`
  );
  if (!res.ok) {
    return null;
  }

  console.log(res, "res");
  return res.json() as Promise<DuaType>; // Return DuaType, not Post
}

// Generate static params for all subcategories
export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const res = await axios.get<CategoryType[]>(
      "https://ird-backend-o37f.onrender.com/categories"
    );
    const fetchedCategories = res.data;

    const subcategoryResponses = await Promise.all(
      fetchedCategories.map((category) =>
        axios.get<SubcategoryType[]>(
          `https://ird-backend-o37f.onrender.com/subcategories?cat_id=${category.cat_id}`
        )
      )
    );

    const allSubcategories: SubcategoryType[] = subcategoryResponses.flatMap(
      (res) => res.data
    );

    return allSubcategories.map((subcategory) => ({
      id: `${subcategory.cat_id}_${subcategory.subcat_id}`,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array on error
  }
}

// Page component for the dynamic route
export default async function DuaPage({ params }: { params: Params }) {
  const dua = await getDua(params.id);

  if (!dua) {
    return <div>Dua not found</div>;
  }

  return (
    <main className="w-full lg:w-7/12">
      <DuaArea key={dua.id} dua={dua} />
    </main>
  );
}
