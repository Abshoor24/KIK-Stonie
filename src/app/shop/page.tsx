"use client";

import Image from "next/image";
import { useState } from "react";
import products from "@/shared/data/shop.json";
import Cart from "@/components/Button/Cart";

export default function ShopPage() {
  const [filters, setFilters] = useState<string[]>([]);
  const [sort, setSort] = useState("popular");

  function toggleFilter(category: string) {
    setFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

  const filteredProducts =
    filters.length === 0
      ? products
      : products.filter((p) => filters.includes(p.category));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <main className="bg-gray-100 text-gray-900 pt-30">
      
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <h1 className="text-3xl font-bold mb-3">Shop</h1>

        <p className="text-gray-600 max-w-xl text-sm md:text-base">
          Mau beli batu sesuai dengan ekspektasi dan berkualitas menurutmu?
          Di Stonie hampir semua jenis batu tersedia dan bisa disesuaikan
          dengan kebutuhan proyek maupun dekorasi.
        </p>
      </section>


      {/* FILTER */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h3 className="font-semibold mb-3">Filters</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <label className="flex gap-2 items-center">
                <input type="checkbox" onChange={() => toggleFilter("hias")} />
                Batu Hias
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" onChange={() => toggleFilter("kolam")} />
                Batu Kolam Ikan
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" onChange={() => toggleFilter("granit")} />
                Batu Granit
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" onChange={() => toggleFilter("asteroid")} />
                Batu Asteroid
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" onChange={() => toggleFilter("aestetik")} />
                Batu Estetik
              </label>
            </div>
          </div>


          {/* SORT */}
          <div className="flex flex-col items-start md:items-end text-sm">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-1 bg-white"
            >
              <option value="popular">Sort by Popular</option>
              <option value="low">Price Low</option>
              <option value="high">Price High</option>
            </select>

            <span className="text-gray-500 mt-1">
              Showing {sortedProducts.length} products
            </span>
          </div>
        </div>
      </section>



      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-5">

          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col w-full rounded-sm shadow overflow-hidden bg-white"
            >
              <div className="relative w-full h-55">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="group-hover:scale-105 object-cover transition duration-500"
                />
              </div>

              <div className="flex flex-col items-start gap-2 p-4">

                <h4 className="font-semibold text-lg">
                  {product.name}
                </h4>

                <p className="text-gray-600 text-sm">
                  ${product.price}
                </p>

                <Cart product={product} />

              </div>
            </div>
          ))}

        </div>
      </section>






    </main>
  );
}