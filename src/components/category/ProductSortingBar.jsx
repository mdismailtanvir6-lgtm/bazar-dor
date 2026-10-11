"use client";

import { ArrowUpDown } from "lucide-react";

const ProductSortingBar = ({ setSortBy, sortBy = "default" }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1.5 text-xs text-gray-500">
        <ArrowUpDown size={14} />
        পণ্য সাজান
      </span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        aria-label="পণ্য সাজান"
        className="cursor-pointer rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-700 outline-none focus:border-gray-400"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-desc">দাম: বেশি থেকে কম</option>
        <option value="price-asc">দাম: কম থেকে বেশি</option>
      </select>
    </div>
  );
};

export default ProductSortingBar;
