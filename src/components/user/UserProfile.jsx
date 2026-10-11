"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

const UserProfile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  //   ===== use state for update user ======
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <section className="my-10 relative">
      <div>
        <h1 className="text-center text-md font-semibold py-5">প্রোফাইল</h1>

        <div className="flex flex-col items-center gap-2">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  width={40}
                  height={40}
                  //   alt="User Avatar"
                  alt={user?.name}
                  src={user?.image}
                />
              </div>
            </div>
          </Link>

          <h2>{user?.name}</h2>
          <h2>{user?.email}</h2>

          <button
            onClick={() => setShowUpdate(!showUpdate)}
            className="btn btn-md bg-[#9F0712] text-white my-5"
          >
            আপডেট করুন
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
