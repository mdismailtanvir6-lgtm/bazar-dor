"use client";

import React from "react";
import { updateUser, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    await updateUser(
      {
        ...updatedData,
      },
      {
        onRequest: () => {
          toast.loading("Updating your account...", {
            id: "updateUser",
          });
        },

        onSuccess: () => {
          toast.success("Update successful!", {
            id: "updateUser",
          });
        },

        onError: (ctx) => {
          toast.error(ctx.error.message || "Update failed!", {
            id: "updateUser",
          });
        },
      },
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        প্রোফাইল আপডেট করুন
      </h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">তথ্য</h2>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                নাম
              </label>
              <input
                required
                name="name"
                type="text"
                // defaultValue={user?.name || ""}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600"
                placeholder={user?.name || ""}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-medium py-2.5 rounded-lg transition-colors mt-2 cursor-pointer"
            >
              আপডেট
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
