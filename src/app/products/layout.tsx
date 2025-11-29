import Navbar from "@/components/sections/navbar/Navbar";
import React from "react";
import ProductsSidebar from "@/components/products-sidebar/ProductsSidebar";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <ProductsSidebar />
      <section className="fixed left-40 top-10 right-0 p-1 flex justify-center border">
      {children}
      </section>
    </>
  );
};

export default ProductsLayout;
