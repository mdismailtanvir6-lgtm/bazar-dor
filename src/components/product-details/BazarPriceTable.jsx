import React from "react";
import { formatPrice } from "@/lib/utils";

export default function BazarPriceTable({ markets = [] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-extrabold text-gray-900">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="bg-[#f8f9f7] border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-150">
            <thead>
              <tr className="border-b border-gray-200/80 text-xs font-bold text-gray-500">
                <th className="py-3.5 px-6">বাজার</th>
                <th className="py-3.5 px-6">বিভাগ</th>
                <th className="py-3.5 px-6 text-right">সর্বনিম্ন</th>
                <th className="py-3.5 px-6 text-right">সর্বোচ্চ</th>
                <th className="py-3.5 px-6 text-right">গড়</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/60 text-sm font-medium text-gray-800">
              {markets.map((item, idx) => {
                const avgVal = Number(((item.min + item.max) / 2).toFixed(1));
                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-100/50 transition-colors"
                  >
                    <td className="py-3.5 px-6 font-semibold text-gray-900">
                      {item.market}
                    </td>
                    <td className="py-3.5 px-6 text-gray-500">
                      {item.division}
                    </td>
                    <td className="py-3.5 px-6 text-right text-gray-700">
                      {formatPrice(item.min)}
                    </td>
                    <td className="py-3.5 px-6 text-right text-gray-700">
                      {formatPrice(item.max)}
                    </td>
                    <td className="py-3.5 px-6 text-right font-bold text-gray-900">
                      {formatPrice(avgVal)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
