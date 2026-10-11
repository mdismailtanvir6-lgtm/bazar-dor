import React from 'react';
import { toBengaliDigits } from '@/lib/utils';

export default function ProductHeader({ product }) {
  const {
    nameBn,
    categoryNameBn,
    unit,
    image,
    today,
    yesterday,
    change = { dir: 'flat', pct: 0 },
  } = product;

  const unitText = unit === 'kg' ? 'কেজি' : unit === 'litre' ? 'লিটার' : unit;

  // দাম বাড়লে লাল, কমলে সবুজ
  let badgeBg = 'bg-gray-100 text-gray-600';
  let symbol = '—';

  if (change.dir === 'up' || change.pct > 0) {
    badgeBg = 'bg-rose-50 text-rose-600';
    symbol = '▲';
  } else if (change.dir === 'down' || change.pct < 0) {
    badgeBg = 'bg-emerald-50 text-emerald-600';
    symbol = '▼';
  }

  // গতকালকের তুলনার সামারি লাইন তৈরি
  const diffPrice = Math.abs(today - yesterday);
  const comparisonText = 
    today < yesterday 
      ? `গতকালকের তুলনায় আজ দাম কমেছে · ${toBengaliDigits(diffPrice)} টাকা`
      : today > yesterday 
      ? `গতকালকের তুলনায় আজ দাম বেড়েছে · ${toBengaliDigits(diffPrice)} টাকা`
      : `গতকালকের তুলনায় দাম অপরিবর্তিত রয়েছে`;

  return (
    <div className="bg-[#f8f9f7] rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* বাম পাশ: ইমোজি, শিরোনাম ও সাবটাইটেল */}
      <div className="flex items-start sm:items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-[#eff2eb] flex items-center justify-center text-3xl shrink-0">
          <span>{image || '🍚'}</span>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {nameBn}
          </h1>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mt-1">
            <span>প্রতি {unitText}</span>
            <span>•</span>
            <span className="bg-gray-200/70 text-gray-700 px-2 py-0.5 rounded-md">
              {categoryNameBn}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {comparisonText}
          </p>
        </div>
      </div>

      {/* ডান পাশ: আজকের দামের কার্ড */}
      <div className="bg-[#edf0e7] rounded-2xl p-4 min-w-40 text-center md:self-auto">
        <span className="text-xs text-gray-500 font-medium block">আজকের দাম</span>
        <div className="text-3xl font-black text-gray-900 mt-0.5">
          {toBengaliDigits(today)}
        </div>
        <span className="text-[11px] text-gray-500 block">টাকা / {unitText}</span>
        
        <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md bg-white/80">
          <span className={change.dir === 'down' ? 'text-emerald-600' : change.dir === 'up' ? 'text-rose-600' : 'text-gray-600'}>
            {symbol} {toBengaliDigits(Math.abs(change.pct).toFixed(1))}%
          </span>
        </div>
      </div>
    </div>
  );
}