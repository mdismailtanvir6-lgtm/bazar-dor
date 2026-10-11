import React from "react";
import Link from "next/link";
import ProductHeader from "./ProductHeader";
import PriceSummary from "./PriceSummary";
import BazarPriceTable from "./BazarPriceTable";

export default function ProductDetails({ product }) {
  if (!product) return null;

  const priceSummary = {
    minPrice: product.minPrice || 59,
    minBazar: product.minBazar || "শহরের কম দামের বাজার",
    maxPrice: product.maxPrice || 73,
    maxBazar: product.maxBazar || "সবচেয়ে বেশি দামের বাজার",
    avgPrice: product.todayAvgPrice || product.today || 66,
  };

  return (
    <div className="bg-[#f4f6f1] min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            হোম
          </Link>
          <span>›</span>
          <Link href="/products" className="hover:underline">
            {product.categoryNameBn || "চাল"}
          </Link>
          <span>›</span>
          <span className="font-bold text-gray-800">{product.nameBn}</span>
        </nav>

        {/* Top Summary Section */}
        <ProductHeader product={product} />

        {/* Price Summary Section */}
        <PriceSummary priceSummary={priceSummary} />

        {/* Bazar Price Table */}
        <BazarPriceTable markets={product.markets} />
      </div>
    </div>
  );
}
