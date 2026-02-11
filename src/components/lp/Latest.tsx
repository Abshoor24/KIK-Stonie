import Image from "next/image"

export default function Latest() {
  return (
    <section id="latest" className="h-screen w-full bg-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produk Terbaru Kami
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Temukan koleksi terbaru dengan bentuk yang unik dan kualitas
            terbaik yang siap melengkapi gaya dan kebutuhan Anda.
          </p>

          <button className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
            Belanja
          </button>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="flex gap-12 items-end">
            {/* LEFT CARD */}
            <div className="w-[300px] bg-[#F4F0E6] p-6">
              <div className="relative w-full h-[360px]">
                <Image
                  src="/l1.jpg"
                  alt="Produk Batu 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CENTER CARD (IMAGE) */}
            <div className="w-[300px] bg-[#FAEFE3] p-6 h-[420px]">
              <div className="relative w-full h-full">
                <Image
                  src="/l2.jpg"
                  alt="Produk Batu Utama"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-[300px] bg-[#F6EAD9] p-6">
              <div className="relative w-full h-[360px]">
                <Image
                  src="/l3.jpg"
                  alt="Produk Batu 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
