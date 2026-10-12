import ProductCard from "../product/PrdoductCard";
import { TrendingDown } from "lucide-react";

const DecreaseProductPrice = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    return null;
  }

  const products = await res.json();

  const sortedProducts = [...products]
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
          <span className="text-green-600">
            <TrendingDown />
          </span>
          আজ দাম কমেছে
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DecreaseProductPrice;
