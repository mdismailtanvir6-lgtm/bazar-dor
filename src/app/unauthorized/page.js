"use client";
import Link from "next/link";
import { ShieldAlert, Home } from "lucide-react";
import { LogIn } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <section className="py-10 bg-[#EFF3EF]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  items-center justify-center">
        <div className="w-full max-w-xl text-center">
          {/* Icon */}
          <div className="mx-auto py-3 px-2 h-24 w-24 mb-2 flex  items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-[#007339]/10">
            <ShieldAlert
              size={52}
              strokeWidth={1.6}
              className="text-[#007339]"
            />
          </div>

          {/* Content */}
          <span className="inline-block rounded-full bg-[#007339]/10 px-4 py-1.5 text-sm font-semibold text-[#007339]">
            403 · Forbidden
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Access Denied
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg font-bold">
            দুঃখিত, এই পেজটি দেখার অনুমতি আপনার নেই।
          </p>

          {/* Actions */}
          <div className="mt-10 max-w-2xl mx-auto bg-danger flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#007339]/20 bg-white px-6 py-3.5 font-semibold text-[#007339] transition hover:bg-[#007339]/5 sm:w-auto"
            >
              <Home size={19} />
              হোম পেজে ফিরে যান
            </Link>

            <Link
              href={"/sign-in"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#007339]/20 bg-white px-6 py-3.5 font-semibold text-[#007339] transition hover:bg-[#007339]/5 sm:w-auto"
            >
              <LogIn className="w-4 h-4" />
              সাইন ইন করুন
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
