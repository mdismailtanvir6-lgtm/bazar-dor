"use client";

import { useState } from "react";
import { ChevronDown, LogIn, LogOut, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import CurrentDate from "@/components/index/CurrentDate";

const Header = () => {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const user = session?.user;

  // ===== handle sign out function =====
  const handleSignOut = async () => {
    // ====  better auth sign-out function =====
    await signOut({
      onRequest: () => {
        toast.loading("Signing out from your account...", {
          id: "signout",
        });
      },

      onSuccess: () => {
        toast.success("Sign-out successful!", {
          id: "signout",
        });
      },

      onError: (ctx) => {
        toast.error(ctx.error.message || "Sign-out failed!", {
          id: "signout",
        });
      },
    });

    redirect("/");
  };

  return (
    <header className="w-full border-b border-gray-100 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#05893e] rounded-xl flex items-center justify-center shadow-md">
            <Image src="/logo-icon.png" alt="বাজার দর" width={20} height={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">বাজার দর</h1>
            <CurrentDate />
          </div>
        </Link>

        {/* Authentication */}
        <div>
          {isPending ? (
            <div className="w-24 h-10 rounded-lg bg-gray-100 animate-pulse" />
          ) : user ? (
            /* Authenticated User */
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label="User menu"
                className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-50 transition"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                  {user?.image ? (
                    <img
                      src={user?.image}
                      alt={user?.name}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="w-5 h-5 text-emerald-700" />
                  )}
                </div>

                <span className="hidden sm:block text-sm font-medium text-gray-800 max-w-32 truncate">
                  {user?.name || user?.email || "My Name"}
                </span>

                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg z-50">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-700"
                  >
                    <User className="w-4 h-4" />
                    My Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Guest User */
            <div className="flex items-center gap-3">
              <Link
                href="/sign-in"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
              >
                <LogIn className="w-4 h-4" />
                <span>সাইন ইন</span>
              </Link>

              <Link
                href="/sign-up"
                className="flex items-center gap-1.5 rounded-lg bg-[#05893e] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
              >
                <UserPlus className="w-4 h-4" />
                <span>সাইন আপ</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
