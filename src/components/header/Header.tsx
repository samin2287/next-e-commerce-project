import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />

      <MiddleHeader />
      <p>Bottom header</p>
    </div>
  );
};

export default Header;
