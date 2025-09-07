import React from "react";
import { getAllCategory } from "@/app/actions/category.action";
import AddCategory from "../_components/add-category";
import Category from "../_components/category";

const page = async () => {
  const categories = await getAllCategory();

  console.log(categories);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-xl font-bold text-sec-main">
            {" "}
            Category
          </h1>
          <p className="text-gray-600 mt-1">Manage your category.</p>
        </div>
        <AddCategory />
      </div>
      <Category categories={categories.data ?? []} />
    </div>
  );
};

export default page;
