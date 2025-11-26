import React from "react";
const withSale = false

const Banner = () => {
  return (
    <div className={`${withSale ? "flex" : "hidden"}`}>
      <div className="min-w-screen flex flex-1 justify-center items-center gap-2 text-xs p-0.75 bg-[#178582]">
        <p className="text-white">
          This is the Banner... it will contain updates about promos or on sales
          items/products
        </p>
        <button className="btn cursor-pointer bg-[#EAE7DD] rounded-3xl text-black py-0.5 px-1.5 flex justify-center">
          click here...
        </button>
      </div>
    </div>
  );
};

export default Banner;
