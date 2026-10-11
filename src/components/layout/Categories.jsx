import Link from "next/link";

const Categories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  if (!res.ok) {
    return null;
  }

  const categories = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex gap-5 justify-start my-4 flex-wrap">
        {categories?.map((item) => (
          <Link
            className="flex gap-2 items-center"
            key={item.id}
            href={`/categories/${item.slug}`}
          >
            <span className="text-xl" role="img" aria-label={item.nameBn}>
              {item.icon}
            </span>
            <p>{item.nameBn}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
