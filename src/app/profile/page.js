import UpdateUser from "@/components/user/UpdateUser";
import UserProfile from "@/components/user/UserProfile";
import React from "react";

const page = () => {
  return (
    <div>
      <UserProfile />

      {/* ==== update user profile ===== */}
      <UpdateUser />
    </div>
  );
};

export default page;
