import Banner from "@/components/index/Banner";
import AllProducts from "@/components/product/AllProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-[#EFF3EF]">
      <Banner />

      {/* ===== all-products section ==== */}
      <Suspense fallback={"Products are coming..."}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
