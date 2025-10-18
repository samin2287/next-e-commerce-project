import React from "react";
import { ProductType } from "../../type";
import PriceFormat from "./PriceFormat";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discount = product.discountPercentage;
  const discountedPrice = regularPrice - (regularPrice * discount) / 100;
  return (
    <div className="flex gap-2">
      <PriceFormat
        className="text-gray-500 line-through font-normal"
        amount={regularPrice}
      />
      <PriceFormat amount={discountedPrice} />
    </div>
  );
};

export default ProductPrice;
