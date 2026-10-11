import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
// import bannerimg from "/bazar-hero.png";
import CurrentDate from "./CurrentDate";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Light card wrapper with rounded corners and subtle border */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-100/60 bg-[#f8fbf9] px-6 sm:px-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Content Area */}
          <div className="max-w-2xl space-y-4">
            {/* Eyebrow / Pill Badge */}
            <Suspense fallback={"date is coming..."}>
              <div className="inline-block rounded-full bg-emerald-100/80 px-3.5 py-1 text-emerald-800">
                <CurrentDate />
              </div>
            </Suspense>

            {/* Main Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            {/* Subtitle */}
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#all-products"
                className="inline-flex items-center justify-center rounded-lg bg-[#008a45] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#007339] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                সব পণ্য দেখুন
              </Link>
            </div>
          </div>

          {/* Right Banner / Image Area */}
          <div className="flex justify-center md:justify-end shrink-0">
            <div className="relative w-48 sm:w-60 md:w-72 lg:w-80 aspect-square">
              <Image
                src='/bazar-hero.png'
                alt="বাজারের ফলের ঝুড়ি"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
