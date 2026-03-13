"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

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
          <div className="flex items-center gap-10 font-medium">
            <button
              onClick={() => router.push("/")}
              className="text-lg font-bold"
            >
              Stonie
            </button>

            <nav className="flex gap-5 text-gray-600">
              <button onClick={() => router.push("/")} className={`${pathname === "/" ? "text-black font-semibold" : ""} hover:text-black`}>
                Home
              </button>
              <button onClick={() => router.push("/shop")} className={`${pathname === "/shop" ? "text-black font-semibold" : ""} hover:text-black`}>
                Product
              </button>
              <button onClick={() => router.push("/about")} className={`${pathname === "/about" ? "text-black font-semibold" : ""} hover:text-black`}>
                About
              </button>
            </nav>
            <div className="flex items-center gap-6 text-gray-700">
              <button className="flex items-center gap-1 hover:text-black">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>          <div className="flex items-center gap-6 text-gray-700">
            <button className="flex items-center gap-1 hover:text-black">
              <Search size={18} />
              <span>Search</span>
            </button>

            <button className="hover:text-black">Login</button>
          </div>

          {/* RIGHT */}

        </div>
      </div>
    </header>
  )
}
