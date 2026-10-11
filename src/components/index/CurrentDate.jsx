// import { connection } from "next/server";

// const CurrentDate = async () => {
//   await connection();

//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });

//   return <p className="text-xs sm:text-sm font-medium">{date}</p>;
// };

// export default CurrentDate;



"use client";

const getCurrentDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const CurrentDate = () => {
  const date = getCurrentDate();

  return (
    <p className="text-xs sm:text-sm font-medium">
      {date}
    </p>
  );
};

export default CurrentDate;