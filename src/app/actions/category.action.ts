"use server";

import { formatError } from "@/lib/utils";
import { prisma } from "@/app/db/prismadb";
import { revalidatePath } from "next/cache";

export async function getAllCategory() {
  try {
    const [brands, totalCount] = await prisma.$transaction([
      prisma.productCategory.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.productCategory.count(),
    ]);

    const totalPages = Math.ceil(totalCount / 10);

    return {
      success: true,
      data: brands,
      totalCount,
      totalPages,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function createCategory(data: { name: string }) {
  try {
    const { name } = data;

    const categoryExists = await prisma.productCategory.findUnique({
      where: { name },
    });

    if (categoryExists) throw new Error("Category already exists");

    await prisma.productCategory.create({
      data: { name },
    });

    revalidatePath("/admin/settings/category");

    return {
      success: true,
      message: "Category created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
