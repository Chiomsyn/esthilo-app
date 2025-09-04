"use server";

import { getAllBrand } from "@/app/actions/brand.action";
import AddProduct from "../_component/add-product";
import { getAllCategory } from "@/app/actions/category.action";

export default async function NewProductPage() {
  const brandList = (await getAllBrand()).data;
  const categoryList = (await getAllCategory()).data;

  return <AddProduct brandList={brandList} categoryList={categoryList} />;
}
