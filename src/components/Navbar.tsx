"use client";

import React from "react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Navbar() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="w-full fixed top-0 z-50">
      {/* TOP BAR */}
      <div className="w-full h-10 bg-black text-white flex items-center px-6 text-sm">
        <div className="flex items-center justify-center w-18 h-32 overflow-hidden">
          <Image src={"/assets/logo.png"} alt="Logo" width={100} height={100} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-center tracking-widest">~ PROMO ~</div>
        <div className="flex-1 text-right">Support</div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full h-14 bg-white border-b">
        <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-6">
          {/* LEFT */}
          <div className="flex items-center gap-28 font-medium">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold"
            >
              Stonie
            </button>

            <nav className="flex gap-10 text-gray-600">
              <button onClick={() => scrollToSection("category")} className="hover:text-black">
                Category
              </button>
              <button onClick={() => scrollToSection("latest")} className="hover:text-black">
                Latest
              </button>
              <button onClick={() => scrollToSection("product")} className="hover:text-black">
                Product
              </button>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-gray-700">
            <button className="flex items-center gap-1 hover:text-black">
              <Search size={18} />
              <span>Search</span>
            </button>

            <button className="hover:text-black">Login</button>
          </div>
        </div>
      </div>
    </header>
  )
}
