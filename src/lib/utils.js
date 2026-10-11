import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toBengaliDigits = (num) => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .replace(/\d/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
};

export const formatPrice = (price) => {
  const formattedNumber = new Intl.NumberFormat("bn-BD").format(price);
  return `${formattedNumber} টাকা`;
};
