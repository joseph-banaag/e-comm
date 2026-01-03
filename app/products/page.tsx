import React from "react";
import Image from "next/image";
import {motherboard} from "@/products-listing/motherboard";

const ProductsPage = () => {
  const products = motherboard[0]
  
  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold">{products.name}</h3>
      <p className="text-base font-normal">{products.description}</p>
      <Image
        src="/assets/motherboard/apb850mawcsm/1.png"
        alt="Motherboard"
        height={400}
        width={400}
      />
      <p>
        {products.category}
      </p>
      <Image
        src={products.product_image[0]}
        alt="Motherboard"
        height={400}
        width={400}
      />

    </div>
  );
};

export default ProductsPage;