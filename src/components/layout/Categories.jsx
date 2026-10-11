import CategoryLinks from "../category/CategoryLinks";

const Categories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  if (!res.ok) return null;

  const categories = await res.json();

  return (
    <section className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoryLinks categories={categories} />
      </div>
    </section>
  );
};

export default Categories;
