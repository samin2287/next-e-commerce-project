import React from "react";
import { twMerge } from "tailwind-merge";

interface PriceFormatProps {
  amount?: number;
  className?: string;
}
const PriceFormat = ({ amount, className }: PriceFormatProps) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <span className={twMerge("font-medium", className)}>{formattedPrice}</span>
  );
};

export default PriceFormat;
