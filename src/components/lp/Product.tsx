"use client";

import Image from "next/image"
import products from "@/shared/data/products.json"
import { useRouter } from "next/navigation"

export default function Product() {

  const router = useRouter()

  return (
<section
  data-section
  id="product"
className="min-h-screen w-full bg-gray-100 flex items-center py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-8 w-full responsive-section">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produk kami
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Kami menghadirkan berbagai produk berkualitas yang dirancang
            dengan perhatian pada detail, fungsi, dan kenyamanan untuk
            memenuhi kebutuhan Anda.
          </p>

          <button className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          onClick={() => router.push("/shop")}
          >
            Selengkapnya
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map(({ name, image, price }, i) => {
            return (
              <div key={i} className="bg-white">
                <div className="relative w-full h-80">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="group-hover:scale-105 object-cover transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-sm font-medium text-gray-500">{price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
