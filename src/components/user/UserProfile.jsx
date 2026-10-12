"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import UpdateUser from "./UpdateUser";
import { redirect } from "next/navigation";
import { LogOutIcon } from "lucide-react";

const UserProfile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  // ===== use state for update user ======
  const [showUpdate, setShowUpdate] = useState(false);

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
    <section className="my-10 max-w-4xl mx-auto px-4 relative">
      <div>
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">আমার প্রোফাইল</h1>
          <p className="text-sm text-gray-500 mt-1">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <Link href={"/profile"}>
              <div className="w-16 h-16 rounded-2xl overflow-hidden relative border border-gray-100 shadow-inner">
                <img
                  fill
                  alt={user?.name || "User Avatar"}
                  src={
                    user?.image ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                  }
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>

            {/* Name and Email */}
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {user?.name || "Rezwan Ahmed"}
              </h2>
              <p className="text-sm text-gray-500">
                {user?.email || "rezwanahmed@gmail.com"}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 border border-[#9F0712] text-[#9F0712] hover:bg-[#9F0712] hover:text-white transition-colors px-4 py-2 rounded-lg text-sm font-medium"
          >
            <LogOutIcon />
            <span>সাইন আউট</span>
          </button>
        </div>
      </div>

      {/* ========= Update User Modal ========= */}
      {showUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background blur overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowUpdate(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-lg">
            <UpdateUser showUpdate={showUpdate} setShowUpdate={setShowUpdate} />
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
