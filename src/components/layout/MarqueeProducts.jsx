import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarqueeProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    return null;
  }

    const products = await res.json();

  const showabledProducts = [...products].slice(0,8);

  return (
    <div className="sticky top-0 z-50 mt-5 flex overflow-hidden border-y border-gray-200 bg-white py-2 shadow-sm">
      {/* Marquee */}
      <div className="min-w-0 flex-1">
        <Marquee speed={60} pauseOnHover>
          {showabledProducts?.map((item) => {
            const price = item.today || 0;
            // Format unit if needed (e.g. "kg" to "টাকা/কেজি" or keep custom)
            const unitText = item.unit === "kg" ? "টাকা/কেজি" : item.unit;
            const dir = item.change?.dir || "up";
            const pct = item.change?.pct || 0;
            const isPositive = dir === "up";

            return (
              <div key={item.id} className="flex items-center">
                <Link
                  href={`/products/${item.slug || item.id}`}
                  className="mx-4 flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-gray-50"
                >
                  {/* Product Icon / Image / Emoji */}
                  <span className="text-base">{item.categoryIcon || item.image || "🍚"}</span>

                  {/* Title / Name (Using nameBn for Bengali) */}
                  <span className="font-medium text-gray-800">
                    {item.nameBn}
                  </span>

                  {/* Price and Unit */}
                  <span className="text-gray-600">
                    {price} {unitText}
                  </span>

                  {/* Trend Indicator (Arrow & Percentage) */}
                  <span
                    className={`flex items-center gap-0.5 text-sm font-semibold ${
                      isPositive ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {pct}%
                  </span>
                </Link>

                {/* Divider separator between items */}
                <span className="text-gray-300">|</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeProducts;