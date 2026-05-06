"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scroll=${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="mt-3 w-[95%] max-w-7xl rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
        <div className="h-14 relative flex items-center px-6">

          {/* LOGO (LEFT) */}
          <div className="flex items-center justify-center w-40 h-32 overflow-hidden cursor-pointer">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              width={100}
              height={200}
              className="w-full h-full object-cover"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          {/* MENU (CENTER) */}
          <nav className="navbar-menu absolute left-1/2 -translate-x-1/2 flex gap-10 text-gray-600 font-medium">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-black transition"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("category")}
              className="hover:text-black transition"
            >
              Category
            </button>

            <button
              onClick={() => scrollToSection("latest")}
              className="hover:text-black transition"
            >
              Latest
            </button>

            <button
              onClick={() => scrollToSection("product")}
              className="hover:text-black transition"
            >
              Product
            </button>

            <button
              onClick={() => router.push("/shop")}
              className="hover:text-black transition"
            >
              Shop
            </button>
            <button
              onClick={() => router.push("/about")}
              className="hover:text-black transition"
            >
              About Us
            </button>
          </nav>

          {/* CART ICON (RIGHT) */}
          <div className="ml-auto flex items-center gap-3">
            <button
              className="navbar-toggle rounded-full p-2 border border-gray-300 bg-white/90 shadow-sm"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              type="button"
            >
              <Menu size={22} className="text-gray-700" />
            </button>

            <button
              className="p-2 rounded-full hover:bg-black/10 transition"
              onClick={() => router.push("/cart")}
            >
              <ShoppingBag size={22} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className={`navbar-mobile-menu ${mobileMenuOpen ? "navbar-mobile-open" : ""}`}>
          <div className="navbar-mobile-header flex justify-end p-4">
            <button
              className="navbar-mobile-close rounded-full p-2 border border-gray-300 bg-white/90 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X size={22} className="text-gray-700" />
            </button>
          </div>
          <nav className="navbar-mobile-links flex flex-col gap-4 text-gray-600 font-medium p-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left hover:text-black transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("category")}
              className="text-left hover:text-black transition"
            >
              Category
            </button>
            <button
              onClick={() => scrollToSection("latest")}
              className="text-left hover:text-black transition"
            >
              Latest
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="text-left hover:text-black transition"
            >
              Product
            </button>
            <button
              onClick={() => {
                router.push("/shop");
                setMobileMenuOpen(false);
              }}
              className="text-left hover:text-black transition"
            >
              Shop
            </button>
            <button
              onClick={() => {
                router.push("/about");
                setMobileMenuOpen(false);
              }}
              className="text-left hover:text-black transition"
            >
              About Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}