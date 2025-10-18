import React from "react";
import { twMerge } from "tailwind-merge";
interface FooterTittleProps {
  children: React.ReactNode;
  className?: string;
}

const FooterTittle = ({ children, className }: FooterTittleProps) => {
  return (
    <h1
      className={twMerge("text-xl font-semibold flex items-center", className)}>
      {children}
    </h1>
  );
};

export default FooterTittle;
