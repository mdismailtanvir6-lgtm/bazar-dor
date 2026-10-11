"use client";

import { useState } from "react";
import ProductCard from "@/components/product/PrdoductCard";
import ProductSortingBar from "@/components/category/ProductSortingBar";

const getPrice = (product) => {
  const price = Number(product.today ?? product.price ?? 0);
  return Number.isFinite(price) ? price : 0;
};

export default function ProductList({ products, slug }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    const difference = getPrice(a) - getPrice(b);

    if (sortBy === "price-asc") return difference;
    if (sortBy === "price-desc") return -difference;

    return 0;
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
        <p className="text-sm text-gray-500">
          মোট{" "}
          <span className="font-semibold text-gray-800">{products.length}</span>{" "}
          টি পণ্য
        </p>

        <ProductSortingBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id ?? product._id ?? `${slug}-${index}`}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white px-4 py-12 text-center">
          <p className="font-medium text-gray-700">
            এই ক্যাটাগরিতে কোনো পণ্য নেই।
          </p>
          <p className="mt-1 text-sm text-gray-500">
            অন্য কোনো ক্যাটাগরি দেখুন।
          </p>
        </div>
      )}
    </>
  );
}
