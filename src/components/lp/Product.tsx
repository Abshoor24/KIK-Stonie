import Image from "next/image"
import products from "@/shared/data/products.json"

export default function Product() {
  return (
    <section id="product" className="h-screen w-full bg-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produk kami
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Kami menghadirkan berbagai produk berkualitas yang dirancang
            dengan perhatian pada detail, fungsi, dan kenyamanan untuk
            memenuhi kebutuhan Anda.
          </p>

          <button className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
            Belanja
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map(({ name, image_url, price }, i) => {
            return (
              <div key={i} className="bg-white">
                <div className="relative w-full h-[320px]">
                  <Image
                    src={image_url}
                    alt={name}
                    fill
                    className="object-contain"
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
