import React from "react";

const Navbar = () => {
  return (
    <nav className="min-h-10 flex justify-center items-center">
      <div className="min-w-[85%] flex justify-between ">
        <ul className="basis-[60%] flex justify-between px-2">
          <li>logo</li>
          <li>shop with dropdown</li>
          <li>On sale</li>
          <li>Brands</li>
        </ul>
        <div className="basis-[20%] px-2 flex flex-row-reverse">search</div>
        <div className="basis-[20%] px-2">
          <ul className="flex flex-row-reverse gap-x-5">
            <li>profile</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
