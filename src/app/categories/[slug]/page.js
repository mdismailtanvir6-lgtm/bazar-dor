import CategoryHeader from "@/components/category/CategoryHeader";
import ProductList from "@/components/category/ProductList";

const API_URL = "https://openapi.programming-hero.com/api/bazardor/products";

const getProducts = async (slug) => {
  try {
    const res = await fetch(
      `${API_URL}?category=${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );

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

const CategorizedProducts = async ({ params }) => {
  const { slug } = await params;
  const products = await getProducts(slug);

  if (products === null) {
    return (
      <main className="min-h-screen bg-[#f4f7f3] px-4 py-8">
        <div className="mx-auto max-w-5xl rounded-xl border border-red-100 bg-white p-8 text-center">
          <p className="font-medium text-red-600">
            পণ্য লোড করা যায়নি।
          </p>
          <p className="mt-1 text-sm text-gray-500">
            অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7f3] px-4 py-6 sm:py-8">
      <section className="mx-auto max-w-5xl space-y-4">
        <CategoryHeader slug={slug} count={products.length} />

        <ProductList products={products} slug={slug} />
      </section>
    </main>
  );
};

export default CategorizedProducts;
