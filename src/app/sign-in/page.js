"use client";

import SocialsSignIn from "@/components/auth/socials/SocialsSignIn";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {
  // ==== handle submit =====
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    // ====  better auth sign-in function =====
    const { data } = await signIn.email(
      {
        ...user,
      },
      {
        onRequest: () => {
          toast.loading("Signing your account...", {
            id: "signin",
          });
        },

        onSuccess: () => {
          toast.success("Sign-in successful!", {
            id: "signin",
          });
        },

        onError: (ctx) => {
          toast.error(ctx.error.message || "Signup failed!", {
            id: "signin",
          });
        },
      },
    );

    // ===== redirect to home page =====
    if (data) {
      redirect("/");
    }
  };

  return (
    <div className="bg-[#EFF3EF] flex flex-col items-center justify-center py-10 min-h-screen">
      {/* Header Texts */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">সাইন ইন করুন</h2>
        <p className="text-sm text-gray-500 mt-1">
          আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="bg-white px-8 py-10 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset flex flex-col gap-1.5">
            {/* Email Field */}
            <label className="label text-gray-700 font-medium">ইমেইল</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 mb-3"
              placeholder="you@example.com"
            />

            {/* Password Field */}
            <div className="flex justify-between items-center">
              <label className="label text-gray-700 font-medium">
                পাসওয়ার্ড
              </label>
            </div>
            <input
              required
              name="password"
              type="password"
              className="input w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 mb-4"
              placeholder="পাসওয়ার্ড লিখুন"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white bg-[#008236] hover:bg-[#006c2d] py-3 rounded-lg font-medium shadow-sm transition-colors mt-2"
            >
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-200"></div>
          <span className="px-4 text-xs text-gray-400">অথবা</span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        {/* ===== sign in with socials ======= */}
        <SocialsSignIn />

        {/* Footer Link Inside Card */}
        <p className="text-center text-sm text-gray-600 mt-6">
          অ্যাকাউন্ট নেই?
          <Link
            href="/sign-up"
            className="ml-1 text-[#008236] font-medium hover:underline"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>
      </div>

      {/* Bottom Back Link */}
      <div className="mt-6">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
