import Navbar from "@/components/sections/navbar/Navbar";
import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProductsLayout;
