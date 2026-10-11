import NotFoundProduct from "@/components/product/NotFoundProduct";
import ProductDetails from "@/components/product-details/ProductDetails";

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!res.ok) {
    return <NotFoundProduct />;
  }

  const product = await res.json();

  return <ProductDetails product={product} />;
};

export default page;
