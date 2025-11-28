import Link from "next/link";
import React from "react";

const ItemsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h1>This page will display all the Items/Products...</h1>
      <h4>Items or list of products:</h4>
      <ul>
        <li>
          <Link href="/items/motherboard">Motherboard</Link>
        </li>
        <li>
          <Link href="/items/cpu">cpu</Link>
        </li>
        <li>
          <Link href="/items/memory">memory</Link>
        </li>
        <li>
          <Link href="/items/storage">storage</Link>
        </li>
        <li>
          <Link href="/items/psu">psu</Link>
        </li>
        <li>
          <Link href="/items/gpu">gpu</Link>
        </li>
        <li>
          <Link href="/items/case">case</Link>
        </li>
        <li>
          <Link href="/items/cooler">cooler</Link>
        </li>
      </ul>
    </div>
  );
};

export default ItemsPage;
