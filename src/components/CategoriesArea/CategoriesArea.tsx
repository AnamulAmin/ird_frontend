"use client";
import React, { useEffect, useState } from "react";
import CategorySearchBox from "./CategorySearchBox/CategorySearchBox";
import Accordion from "../UI/Accordion/Accordion";
import axios from "axios";

type categoryType = {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

const CategorySkeleton = () => (
  <div className="p-3 border-b border-gray-200 animate-pulse">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
      <div className="h-5 w-5 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export default function CategoriesArea({
  isModal = false,
}: {
  isModal?: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get<categoryType[]>(
          "http://localhost:4000/categories"
        );
        const fetchedCategories = res.data;
        setCategories(fetchedCategories);

        // Optional: If you need all subcategories collected
        await Promise.all(
          fetchedCategories.map((category) =>
            axios.get(
              `http://localhost:4000/subcategories?cat_id=${category.cat_id}`
            )
          )
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchCategories();
    }, 500); // Small delay to show skeleton (optional)

    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = categories.filter(
    (category) =>
      category.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.cat_name_bn.includes(searchTerm)
  );

  return (
    <div
      className={`w-3/12 min-w-[300px] rounded-lg overflow-hidden border border-gray-border bg-white ${
        isModal ? "h-screen block" : "h-[72dvh] hidden lg:block"
      }`}
    >
      <h2 className="bg-primary text-white text-center py-3 font-bold text-[17px]">
        Categories
      </h2>
      <div className="w-[95%] mt-2 mx-auto">
        <CategorySearchBox
          onSearch={(value: string) => setSearchTerm(value)}
          // disabled={loading}
        />
        <div
          className={`w-full overflow-y-auto scrollbar-none ${
            !isModal ? "h-[56dvh]" : "h-[86dvh]"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))
          ) : error ? (
            <div className="text-center p-4 text-red-500">{error}</div>
          ) : filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Accordion
                category={category}
                key={category.id}
                // loading={loading}
              />
            ))
          ) : (
            <p className="text-center text-sm text-gray-500 p-4">
              {searchTerm
                ? "No matching categories found."
                : "No categories available."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
