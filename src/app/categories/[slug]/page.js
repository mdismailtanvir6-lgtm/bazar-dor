import ProductCard from "@/components/product/PrdoductCard";
import CategoryHeader from "@/components/category/CategoryHeader";
import { ArrowUpDown } from "lucide-react";
import ProductSortingBar from "@/components/category/ProductSortingBar";

const API_URL = "https://openapi.programming-hero.com/api/bazardor/products";

const getPrice = (product) => {
  const price = Number(product.today ?? product.price ?? 0);
  return Number.isFinite(price) ? price : 0;
};

const getProducts = async (slug) => {
  try {
    const res = await fetch(`${API_URL}?category=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const data = await res.json();

    if (Array.isArray(data)) return data;
    if (Array.isArray(data.products)) return data.products;

    return [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return null;
  }
};

const SORT_OPTIONS = ["default", "price-asc", "price-desc"];

const CategorizedProducts = async ({ params, searchParams }) => {
  const [{ slug }, { sort }] = await Promise.all([params, searchParams]);

  const selectedSort = SORT_OPTIONS.includes(sort) ? sort : "default";
  const products = await getProducts(slug);

  if (products === null) {
    return (
      <main className="min-h-screen bg-[#f4f7f3] px-4 py-8">
        <div className="mx-auto max-w-5xl rounded-xl border border-red-100 bg-white p-8 text-center">
          <p className="font-medium text-red-600">পণ্য লোড করা যায়নি।</p>
          <p className="mt-1 text-sm text-gray-500">
            অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।
          </p>
        </div>
      </main>
    );
  }

  const sortedProducts = [...products].sort((a, b) => {
    const priceDifference = getPrice(a) - getPrice(b);

    // if (selectedSort === "price-desc") return -priceDifference;
    // if (selectedSort === "price-asc") return priceDifference;
    // if (selectedSort === "price-desc") return -priceDifference;

    if (selectedSort === "default") return -priceDifference;
    if (selectedSort === "price-asc") return priceDifference;
    if (selectedSort === "price-desc") return -priceDifference;

    return 0;
  });

  console.log(selectedSort);

  return (
    <main className="min-h-screen bg-[#f4f7f3] px-4 py-6 sm:py-8">
      <section className="mx-auto max-w-5xl space-y-4">
        <CategoryHeader slug={slug} count={products.length} />

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
          <p className="text-sm text-gray-500">
            মোট{" "}
            <span className="font-semibold text-gray-800">
              {products.length}
            </span>{" "}
            টি পণ্য
          </p>
          {/* ===== product soring bar ==== */}
          <ProductSortingBar />
        </div>

        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={product.id ?? product._id ?? `${slug}-${index}`}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-100 bg-white px-4 py-12 text-center">
            <p className="font-medium text-gray-700">
              এই ক্যাটাগরিতে কোনো পণ্য নেই।
            </p>
            <p className="mt-1 text-sm text-gray-500">
              অন্য কোনো ক্যাটাগরি দেখুন।
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategorizedProducts;
