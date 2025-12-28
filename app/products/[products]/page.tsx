import React from 'react';

const ProductPage = async ({
                             params,
                           }: {
  params: Promise<{ products: string }>
}) => {
  const {products} = await params
  
  console.log("this is your product page containing: ", products)
  
  return (
    <div>
      <h1>Welcome to your product.</h1>
      <p>The page for the product that you have selected</p>
      <p>{products}</p>
      <p>
        mindset ba.
      </p>
    </div>
  );
};

export default ProductPage;