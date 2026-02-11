import Image from "next/image"
import categories from "@/shared/data/categories.json"

export default function CategorySection() {
  return (
    <section id="category" className="h-screen w-full bg-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kategori
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Temukan berbagai jenis-jenis batu yang beragam unik dan spesial
            dan tidak hanya juga bermanfaat untuk kehidupan sehari-hari
          </p>

          <button className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
            Belanja
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {categories.map(({ name, image_url }, i) => {
            return (
              <div key={i} className="w-full text-center">
                <div className="relative w-full h-64 mb-4 overflow-hidden">
                  <Image
                    src={image_url}
                    alt={name}
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <p className="font-semibold">{name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
