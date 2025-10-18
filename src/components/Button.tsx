import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}

const Button = ({
  children,
  className,
  href,
  onClick,
}: ButtonProps & { href?: string }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "inline-flex items-center gap-2 bg-white text-black border border-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-md hover:bg-[#115061] hover:text-white transition-all duration-300 shadow-sm group",
            className
          )}>
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "inline-flex items-center gap-2 bg-white text-black border border-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-md hover:bg-[#115061] hover:text-white transition-all duration-300 shadow-sm group",
            className
          )}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
