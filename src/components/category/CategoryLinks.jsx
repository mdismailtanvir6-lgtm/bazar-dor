"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLinks = ({ categories }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-start gap-5">
      {categories.map((item) => {
        const isActive = pathname === `/categories/${item.slug}`;

        return (
          <Link
            key={item.id}
            href={`/categories/${item.slug}`}
            className={`my-4 flex items-center gap-2  transition-colors ${
              isActive
                ? "font-bold text-[#05893E] border-b border-[#05893E]"
                : "border-transparent text-gray-700 hover:text-red-600 font-semibold"
            }`}
          >
            <span className="text-xl" role="img" aria-label={item.nameBn}>
              {item.icon}
            </span>

            <span>{item.nameBn}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoryLinks;
