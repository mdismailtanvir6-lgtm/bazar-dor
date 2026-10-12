import ProductSkeleton from "@/components/product/ProductSkeleton";

export default function Loading() {
  return (
    <main className=" bg-[#EFF3EF] py-10 md:py-15 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
