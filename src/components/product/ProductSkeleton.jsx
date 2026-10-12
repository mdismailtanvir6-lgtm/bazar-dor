export default function ProductSkeleton() {
  return (
    <div className="flex animate-pulse flex-col justify-between rounded-2xl border border-gray-100 bg-[#f8f9f7] p-4 shadow-sm">
      {/* Product Info */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 rounded-2xl bg-[#e4e9df]" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-3 w-1/3 rounded bg-gray-200" />
        </div>
      </div>

      {/* Price and Change */}
      <div className="mt-4 flex items-end justify-between gap-2">
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-gray-200" />
          <div className="h-6 w-24 rounded bg-gray-200" />
        </div>

        <div className="h-7 w-20 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
