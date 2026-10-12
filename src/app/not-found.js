"use client";

import Link from "next/link";
import { SearchX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[#EFF3EF] py-15">
      <main className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex w-24 items-center justify-center rounded-3xl bg-white py-3 shadow-sm ring-1 ring-[#007339]/10">
            <SearchX size={52} strokeWidth={1.6} className="text-[#007339]" />
          </div>

          {/* Content */}
          <span className="inline-block rounded-full bg-[#007339]/10 px-4 py-1.5 text-sm font-semibold text-[#007339]">
            404 · Not Found
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Page Not Found
          </h1>

          <p className="mt-5 text-base font-bold leading-8 text-gray-600 sm:text-lg">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
          </p>

          {/* Actions */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#007339]/20 bg-white px-6 py-3.5 font-semibold text-[#007339] transition hover:bg-[#007339]/5 sm:w-auto"
            >
              <Home size={19} />
              হোম পেজে ফিরে যান
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#007339]/20 bg-white px-6 py-3.5 font-semibold text-[#007339] transition hover:bg-[#007339]/5 sm:w-auto"
            >
              <ArrowLeft size={19} />
              আগের পেজে ফিরে যান
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
