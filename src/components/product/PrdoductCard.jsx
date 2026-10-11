"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { toBengaliDigits, formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function ProductCard({ product }) {
  const router = useRouter();

  // Destructuring updated API properties
  const {
    id,
    slug,
    nameBn,
    unit,
    image,
    today,
    change = { dir: "flat", pct: 0 },
  } = product;

  // Map unit text to Bengali if needed (or use direct property if provided)
  const unitText =
    unit === "kg"
      ? "প্রতি কেজি"
      : unit === "litre"
        ? "প্রতি লিটার"
        : `প্রতি ${unit}`;

  let badgeBg = "bg-gray-100 text-gray-600";
  let symbol = "—";

  // Determine badge style based on API 'dir' or percentage value
  if (change.dir === "up" || change.pct > 0) {
    badgeBg = "bg-emerald-50 text-emerald-600";
    symbol = "▲";
  } else if (change.dir === "down" || change.pct < 0) {
    badgeBg = "bg-rose-50 text-rose-600";
    symbol = "▼";
  }

  const formattedChangeRate = `${symbol} ${toBengaliDigits(Math.abs(change.pct).toFixed(1))}%`;

  return (
    <Link href={`/products/${id}`}
      className="bg-[#f8f9f7] hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-[#eff2eb] group-hover:bg-[#e4ebd8] flex items-center justify-center text-2xl shrink-0 transition-colors">
          <span>{image || "📦"}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-gray-900 font-bold text-base leading-snug truncate">
            {nameBn}
          </h3>
          <p className="text-gray-500 text-xs font-medium mt-0.5">{unitText}</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <span className="text-[11px] text-gray-500 font-medium block leading-none mb-1">
            আজকের দাম
          </span>
          <span className="text-lg font-bold text-gray-900 leading-tight block">
            {formatPrice(today)}
          </span>
        </div>

        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${badgeBg}`}
        >
          {formattedChangeRate}
        </span>
      </div>
    </Link>
  );
}
