import React from 'react';
import { formatPrice } from '@/lib/utils';

export default function PriceSummary({ priceSummary }) {
  const { minPrice, minBazar, maxPrice, maxBazar, avgPrice } = priceSummary;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-extrabold text-gray-900">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* সর্বনিম্ন দাম */}
        <div className="bg-[#f8f9f7] rounded-2xl p-5 border border-gray-100">
          <span className="text-xs text-gray-500 font-medium block">সর্বনিম্ন দর</span>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            {formatPrice(minPrice)}
          </div>
          <span className="text-xs text-gray-400 mt-1 block truncate">
            {minBazar ? `সবচেয়ে কম: ${minBazar}` : 'সবচেয়ে কম দামের বাজার'}
          </span>
        </div>

        {/* সর্বোচ্চ দাম */}
        <div className="bg-[#f8f9f7] rounded-2xl p-5 border border-gray-100">
          <span className="text-xs text-gray-500 font-medium block">সর্বোচ্চ দর</span>
          <div className="text-2xl font-black text-rose-500 mt-1">
            {formatPrice(maxPrice)}
          </div>
          <span className="text-xs text-gray-400 mt-1 block truncate">
            {maxBazar ? `সবচেয়ে বেশি: ${maxBazar}` : 'সবচেয়ে বেশি দামের বাজার'}
          </span>
        </div>

        {/* গড় দাম */}
        <div className="bg-[#f8f9f7] rounded-2xl p-5 border border-gray-100">
          <span className="text-xs text-gray-500 font-medium block">গড় দর</span>
          <div className="text-2xl font-black text-emerald-600 mt-1">
            {formatPrice(avgPrice)}
          </div>
          <span className="text-xs text-gray-400 mt-1 block">
            প্রতি বাজারের দামের হিসেবে
          </span>
        </div>
      </div>
    </div>
  );
}
