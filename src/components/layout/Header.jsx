"use client";
import {
  User,
  LogOut,
  ChevronDown,
  LogIn,
  UserPlus,
  CircleUserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CurrentDate from "@/components/index/CurrentDate";


const Header = () => {
  return (
    <header className="w-full border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left Section: Brand Logo & Subtitle */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link
            href={"/"}
            className="w-12 h-12 bg-[#05893e] rounded-xl flex items-center justify-center text-white shadow-md"
          >
            {/* <ShoppingCart className="w-6 h-6" /> */}
            <Image src="/logo-icon.png" alt="বাজার দর" width={20} height={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              বাজার দর
            </h1>
            {/* ===== current date ===== */}
            <CurrentDate />
          </div>
        </div>

        {/* Right Section: User State Management */}
        <div className="relative">
          <div className="flex items-center space-x-3">
            <Link href={'/sign-in'} className="btn flex items-center space-x-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition cursor-pointer">
              <LogIn className="w-4 h-4" />
              <span>সাইন ইন</span>
            </Link>
            <Link href={'/sign-up'} className="flex items-center space-x-1.5 px-4 py-2 text-sm font-medium bg-[#05893e]  text-white rounded-lg shadow-sm hover:bg-emerald-700 transition cursor-pointer">
              <UserPlus className="w-4 h-4" />
              <span>সাইন আপ</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
