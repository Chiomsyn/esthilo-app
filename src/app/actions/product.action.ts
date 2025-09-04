"use server";

import { formatError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { MainProduct } from "@/lib/types/type";
import { prisma } from "@/app/db/prismadb";

export async function createProduct(data: MainProduct) {
  try {
    const {
      name,
      slug,
      brand,
      description,
      stock,
      price,
      img,
      baseNotes,
      featured,
      limitedEdition,
      middleNotes,
      newArrival,
      originalPrice,
      shortDescription,
      category,
      sku,
      status,
      topNotes,
      size,
    } = data;

    const images = await Promise.all(
      img.map(
        async (el) =>
          await prisma.productImage.create({
            data: { key: el.key, name: el.imageName, url: el.image },
          })
      )
    );

    await prisma.product.create({
      data: {
        name,
        slug,
        brandId: brand,
        description,
        stock: Number(stock),
        price: Number(price),
        baseNotes,
        featured,
        limitedEdition,
        middleNotes,
        newArrival,
        originalPrice: Number(originalPrice),
        shortDescription,
        categoryId: category,
        sku,
        status,
        topNotes,
        size,
        images,
      },
    });

    revalidatePath("/auth/products");

    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function checkIfSlugExists(slug: string) {
  const product = await prisma.product.findUnique({ where: { slug } });

  if (product) {
    throw new Error("Slug already exists");
  }
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
    include: {
      brand: {
        select: { id: true, name: true },
      },
      category: {
        select: { id: true, name: true },
      },
    },
  });
}

interface GetAllProductsParams {
  query?: string;
  limit?: number;
  page?: number;
  brand?: string;
  price?: string;
  category?: string;
  sort?: "lowest" | "highest" | "newest";
}

export async function getAllProducts({
  query = "",
  limit = 10,
  page = 1,
  brand,
  price,
  category,
  sort = "newest",
}: GetAllProductsParams) {
  try {
    const filters: Prisma.ProductWhereInput = {};

    // Search filter
    if (query && query !== "all") {
      filters.name = {
        contains: query,
        mode: "insensitive",
      };
    }

    // brand filter
    if (brand && brand !== "all") {
      filters.brand = {
        is: {
          name: {
            equals: brand,
            mode: "insensitive",
          },
        },
      };
    }

    // Price filter
    if (price && price !== "all") {
      const [min, max] = price.split("-").map(Number);
      filters.price = {
        gte: min,
        lte: max,
      };
    }

    // Category filter
    if (category && category !== "all") {
      filters.category = {
        is: {
          name: {
            equals: category,
            mode: "insensitive",
          },
        },
      };
    }

    // Rating filter
    // if (rating && rating !== "all") {
    //   filters.rating = {
    //     gte: Number(rating),
    //   };
    // }

    // Sorting
    let orderBy: Prisma.ProductOrderByWithRelationInput = { createdAt: "desc" };

    switch (sort) {
      case "lowest":
        orderBy = { price: "asc" };
        break;
      case "highest":
        orderBy = { price: "desc" };
        break;
      default:
        orderBy = { createdAt: "desc" };
    }

    // Pagination
    const skip = (page - 1) * limit;

    const [products, totalCount] = await prisma.$transaction([
      prisma.product.findMany({
        where: filters,
        orderBy,
        skip,
        take: limit,
        include: {
          brand: {
            select: { id: true, name: true },
          },
          category: {
            select: { id: true, name: true },
          },
        },
      }),
      prisma.product.count({
        where: filters,
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      data: products,
      totalPages,
      currentPage: page,
      totalCount,
    };
  } catch (error) {
    console.error("[getAllProducts]", error);
    // throw new Error("Failed to fetch products.");
  }
}

export async function productCounter() {
  const [totalCount, activeCount, lowCount, outCount] =
    await prisma.$transaction([
      prisma.product.count(),
      prisma.product.count({ where: { status: "active" } }),
      prisma.product.count({
        where: {
          stock: {
            lt: 5,
          },
        },
      }),
      prisma.product.count({
        where: {
          stock: {
            lt: 0,
          },
        },
      }),
    ]);

  return {
    counts: { totalCount, activeCount, lowCount, outCount },
  };
}

export async function getHighestPricedProduct() {
  try {
    const product = await prisma.product.findFirst({
      orderBy: {
        price: "desc",
      },
    });

    if (!product) {
      throw new Error("No products found.");
    }

    return product.price;
  } catch (error) {
    console.error("[getHighestPricedProduct]", error);
  }
}
