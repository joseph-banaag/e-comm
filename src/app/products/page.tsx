import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1>This page will display all the Items/Products...</h1>
      <h4>Items or list of products:</h4>
      <ul>
        <li>
          <Link href="/products/motherboard">Motherboard</Link>
        </li>
        <li>
          <Link href="/products/cpu">cpu</Link>
        </li>
        <li>
          <Link href="/products/memory">memory</Link>
        </li>
        <li>
          <Link href="/products/storage">storage</Link>
        </li>
        <li>
          <Link href="/products/psu">psu</Link>
        </li>
        <li>
          <Link href="/products/gpu">gpu</Link>
        </li>
        <li>
          <Link href="/products/case">case</Link>
        </li>
        <li>
          <Link href="/products/cooler">cooler</Link>
        </li>
      </ul>
      <Link href="/products/motherboard/asus-b850m-a-wifi-csm">Go to my motherboard page...</Link>
    </div>
  );
};

export default ProductsPage;
