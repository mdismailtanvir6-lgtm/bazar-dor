import ProductCard from "./PrdoductCard";

export default async function AllProducts() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

  if (!res.ok) {
    return null;
  }

  const products = await res.json();

  const showabledProducts = [...products].slice(0,8);

  return (
    <section
      id="all-products"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            সব পণ্য
          </h1>
          {products && (
            <p className="text-xs text-gray-500 mt-1">
              মোট {products.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {showabledProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
