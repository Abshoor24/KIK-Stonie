import React from "react";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="w-full h-10 bg-black text-white flex items-center px-6 text-sm">
        <div className="flex-1">Logo</div>

        <div className="flex-1 text-center tracking-widest">~ PROMO ~</div>

        <div className="flex-1 text-right">Support</div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full h-14 bg-white border-b">
        <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-6">
          {/* LEFT */}
          <div className="flex items-center gap-10 font-medium">
            <span className="text-lg font-semibold">Website</span>

            <nav className="flex gap-5 text-gray-600">
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
              <a href="#" className="hover:text-black">
                Lorem
              </a>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-gray-700">
            {/* Search */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <Search size={18} />
              <span>Search</span>
            </div>

            {/* Cart
            <div className="relative cursor-pointer hover:text-black">
              <ShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div> */}

            {/* Login */}
            <a href="#" className="hover:text-black">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
