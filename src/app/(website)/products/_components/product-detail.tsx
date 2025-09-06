"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GenCart, GenProduct } from "@/lib/types/type";
import { ProductImage } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { CartItem } from "@/lib/validators";
import AddToCart from "./add-to-cart";

export default function ProductDetailPage({
  product,
  cart,
  existItem,
}: {
  product: GenProduct;
  cart: GenCart | undefined;
  existItem: CartItem | undefined;
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
            <div className="flex items-center gap-3">
              {" "}
              <p className="text-white bg-sec-main w-fit px-3 rounded font-medium text-sm uppercase tracking-wide mb-2">
                {product.brand.name}
              </p>
              <p className="bg-sec-main/20 text-sec-main w-fit px-3 rounded font-medium text-sm uppercase tracking-wide mb-2">
                {product.category.name}
              </p>
            </div>
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
              {existItem ? (
                <>
                  {" "}
                  <AddToCart item={existItem} cart={cart} />
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    variant="outlined"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="outlined"
                    size="sm"
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </>
              )}
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
          {!existItem && product.stock > 0 && (
            <div className="flex gap-4 pt-4">
              <AddToCart
                item={{
                  productId: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  qty: quantity,
                  image: images![0].url,
                  size: selectedSize,
                }}
                cart={cart}
              />
              {
                <AddToCart
                  item={{
                    productId: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    qty: quantity,
                    image: images![0].url,
                    size: selectedSize,
                  }}
                  cart={cart}
                  isBuy={true}
                />
              }
            </div>
          )}

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
              {product.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
