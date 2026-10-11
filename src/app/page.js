import Banner from "@/components/index/Banner";
import DecreaseProductPrice from "@/components/index/DecreaseProductPrice";
import IncreaseProductPrice from "@/components/index/IncreaseProductPrice";
import AllProducts from "@/components/product/AllProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-[#EFF3EF]">
      <Banner />

      {/* ===== increase product price section ==== */}
      <Suspense fallback={"Products are coming..."}>
        <IncreaseProductPrice />
        <DecreaseProductPrice />
      </Suspense>

      {/* ===== all-products section ==== */}
      <Suspense fallback={"Products are coming..."}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
