import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === id)
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <button onClick={() => router.push("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;
