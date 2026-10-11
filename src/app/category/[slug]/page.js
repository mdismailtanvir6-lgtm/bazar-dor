import NewsByCategory from "@/components/news/NewsByCategory";
import React, { Suspense } from "react";

const Page = async ({ params }) => {
  const { slug } = await params;

  const [newsRes, categoriesRes] = await Promise.all([
    fetch(`https://news-api-v2.vercel.app/api/category/${slug}`),
    fetch("https://news-api-v2.vercel.app/api/categories"),
  ]);

  const [newsData, categoriesData] = await Promise.all([
    newsRes.json(),
    categoriesRes.json(),
  ]);

  const newses = newsData.data;

  const category = categoriesData.data.find(
    (category) => category.slug === slug,
  );

  return (
    <div className="mt-10 pb-10 px-4">
      <h1 className="mb-5 border-b-2 border-[#C50007] text-2xl font-bold">
        {category?.title || slug}
      </h1>

      <Suspense fallback={<p>নিউজ আসছে...</p>}>
        <NewsByCategory newses={newses} />
      </Suspense>
    </div>
  );
};

export default Page;
