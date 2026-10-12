"use client";

import SocialsSignIn from "@/components/auth/socials/SocialsSignIn";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  // ==== handle submit =====
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // ====  better auth sign-up function =====
    const { data } = await signUp.email(
      {
        ...user,
      },
      {
        onRequest: () => {
          toast.loading("Creating your account...", {
            id: "signup",
          });
        },

        onSuccess: () => {
          toast.success("Signup successful!", {
            id: "signup",
          });
        },

        onError: (ctx) => {
          toast.error(ctx.error.message || "Signup failed!", {
            id: "signup",
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
        <h2 className="text-3xl font-bold text-gray-800">
          অ্যাকাউন্ট তৈরি করুন
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          বিনামূল্যে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="bg-white px-8 py-10 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset flex flex-col gap-1.5">
            {/* Name Field */}
            <label className="label text-gray-700 font-medium">নাম</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 mb-3"
              placeholder="যেমন: রহিম উদ্দিন"
            />

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
            <label className="label text-gray-700 font-medium">
              পাসওয়ার্ড
            </label>
            <input
              required
              name="password"
              type="password"
              className="input w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 mb-3"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />

            {/* Confirm Password Field (Added based on image) */}
            <label className="label text-gray-700 font-medium">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              required
              name="confirmPassword"
              type="password"
              className="input w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-green-600 mb-4"
              placeholder="আবার লিখুন"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white bg-[#008236] hover:bg-[#006c2d] py-3 rounded-lg font-medium shadow-sm transition-colors mt-2"
            >
              অ্যাকাউন্ট তৈরি করুন
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
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="ml-1 text-[#008236] font-medium hover:underline"
          >
            সাইন ইন করুন
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

export default SignUpPage;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { signUp } from "@/lib/auth-client";
// import SocialsSignIn from "@/components/auth/socials/SocialsSignIn";
// import { redirect } from "next/dist/server/api-utils";

// export default function SignUpPage() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (isLoading) return;

//     const formData = new FormData(e.target);
//     const user = Object.fromEntries(formData.entries());

//     if (user?.password !== user.confirmPassword) {
//       toast.error("Password and confirm password should be mathced.");
//       return;
//     }

//     setIsLoading(true);
//     const toastId = toast.loading("Creating your account...");

//     try {
//       // const { data, error } = await signUp.email({
//       //   ...user,
//       // });
//       console.log('error', error)

//       if (error) {
//         toast.error(error.message || "Sign up failed.", {
//           id: toastId,
//         });
//         return;
//       }

//       if (!data) {
//         toast.error("Unable to create your account.", {
//           id: toastId,
//         });
//         return;
//       }

//       toast.success("Account created successfully!", {
//         id: toastId,
//       });

//       // router.replace("/");
//       // router.refresh();
//       redirect("/");
//     } catch {
//       toast.error("Something went wrong. Please try again.", {
//         id: toastId,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-[#EFF3EF] px-4 py-10">
//       <header className="mb-6 text-center">
//         <h1 className="text-3xl font-bold text-gray-800">
//           অ্যাকাউন্ট তৈরি করুন
//         </h1>
//         <p className="mt-1 text-sm text-gray-500">
//           বিনামূল্যে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
//         </p>
//       </header>

//       <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-sm">
//         <form onSubmit={onSubmit} className="flex flex-col gap-4">
//           <fieldset disabled={isLoading} className="flex flex-col gap-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="mb-1.5 block text-sm font-medium text-gray-700"
//               >
//                 নাম
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 placeholder="যেমন: রহিম উদ্দিন"
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-green-600"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-1.5 block text-sm font-medium text-gray-700"
//               >
//                 ইমেইল
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 placeholder="you@example.com"
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-green-600"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="mb-1.5 block text-sm font-medium text-gray-700"
//               >
//                 পাসওয়ার্ড
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 minLength={8}
//                 placeholder="কমপক্ষে ৮ অক্ষর"
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-green-600"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="mb-1.5 block text-sm font-medium text-gray-700"
//               >
//                 পাসওয়ার্ড নিশ্চিত করুন
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 autoComplete="new-password"
//                 minLength={8}
//                 placeholder="আবার লিখুন"
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-green-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-1 w-full rounded-lg bg-[#008236] py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#006c2d] disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               {isLoading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
//             </button>
//           </fieldset>
//         </form>

//         <div className="my-6 flex items-center gap-4">
//           <div className="grow border-t border-gray-200" />
//           <span className="text-xs text-gray-400">অথবা</span>
//           <div className="grow border-t border-gray-200" />
//         </div>

//         <SocialsSignIn />

//         <p className="mt-6 text-center text-sm text-gray-600">
//           অ্যাকাউন্ট আছে?
//           <Link
//             href="/sign-in"
//             className="ml-1 font-medium text-[#008236] hover:underline"
//           >
//             সাইন ইন করুন
//           </Link>
//         </p>
//       </div>

//       <Link href="/" className="mt-6 text-sm text-gray-500 hover:text-gray-700">
//         ← হোম পেজে ফিরে যান
//       </Link>
//     </div>
//   );
// }
