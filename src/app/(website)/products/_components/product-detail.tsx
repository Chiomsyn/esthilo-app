"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GenProduct } from "@/lib/types/type";
import { ProductImage } from "@prisma/client";
import { sizes } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetailPage({
  product,
}: {
  product: GenProduct;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const images = product.images as ProductImage[];

  return (
    <>
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="relative">
            <Image
              width={1000}
              height={1000}
              src={images[selectedImage].url || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-sec-main"
                    : "border-gray-200"
                }`}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={image.url || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <p className="text-white bg-sec-main w-fit px-3 rounded font-medium text-sm uppercase tracking-wide mb-2">
              {product.brand.name}
            </p>
            <h1 className="font-serif text-4xl font-bold text-charcoal mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-3xl text-charcoal ">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Save ${product.originalPrice - product.price}
                </Badge>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "primary" : "outlined"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={
                      selectedSize === size
                        ? "bg-sec-main hover:bg-sec-main/90"
                        : ""
                    }
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <h3 className="font-semibold text-charcoal">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </button>
              <span className="text-sm text-gray-500 ml-4">
                {product.stock} in stock
              </span>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {product.topNotes.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="flex-1 border border-sec-main hover:bg-sec-main/90 bg-white hover:text-white text-sec-main h-12 cursor-pointer"
              disabled={!product.stock}
            >
              Add to Cart
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-sec-main border-sec-main hover:border-sec-main border hover:text-slate-700 hover:bg-white text-white h-12 cursor-pointer"
              disabled={!product.stock}
            >
              Buy it now
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Secure Payment</p>
                <p className="text-xs text-muted-foreground">SSL encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day policy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-16">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {product.description} This carefully crafted piece represents the
              perfect blend of style, comfort, and quality that Esthilo is known
              for. Each item is designed with attention to detail and made from
              premium materials to ensure longevity and satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
