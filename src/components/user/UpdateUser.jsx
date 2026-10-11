import React from "react";
import { updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateUser = ({ showUpdate, setShowUpdate }) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await updateUser({
      ...user,
    });

    if (data) {
      toast.success("Update your profile successfull!");
      setShowUpdate(!showUpdate);
    }

    if (error) {
      toast.error("Update profile failed! Something went wrong!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-md my-10 bg-white">
      <h2 className="text-2xl font-bold text-red-700"> আপডেট প্রোফাইল</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />
          {/* 
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          /> */}

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            আপডেট করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateUser;
