import { connection } from "next/server";

const CurrentDate = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <p className="text-xs sm:text-sm font-medium">{date}</p>;
};

export default CurrentDate;
