import { getProductBySlug } from "@/app/actions/product.action";
import { notFound } from "next/navigation";
import ProductDetailPage from "../_components/product-detail";

export default async function page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ProductDetailPage product={product} />
      </div>
    </main>
  );
}
