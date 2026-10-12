"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ShieldAlert, Home, RefreshCw } from "lucide-react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-[#EFF3EF] px-4 py-10 md:py-15 lg:py-20">
      <main className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="w-full max-w-xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-[#007339]/10">
            <ShieldAlert
              size={52}
              strokeWidth={1.6}
              className="text-[#007339]"
            />
          </div>

          {/* Content */}
          <span className="inline-block rounded-full bg-[#007339]/10 px-4 py-1.5 text-sm font-semibold text-[#007339]">
            500 · Something Went Wrong
          </span>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            দুঃখিত, পেজটি লোড করার সময় একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#007339] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#005c2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007339] sm:w-auto"
            >
              <RefreshCw size={18} />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#007339]/20 bg-white px-6 py-3.5 font-semibold text-[#007339] transition hover:bg-[#007339]/5 sm:w-auto"
            >
              <Home size={19} />
              হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
