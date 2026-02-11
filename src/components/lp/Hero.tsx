import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/batuhero.png"
        alt="Stone Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay putih kiri */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        {/* Brand */}
        <p className="text-sm tracking-widest font-semibold text-black mb-4">
          STONIE OFFICIAL
        </p>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
          <span className="block">
            # Jika di sakiti, jangan di ambil hati.
          </span>
          <span className="block">
            Di usahakan ambil stone dari stonie
          </span>
        </h1>

        {/* Button */}
        <button className="mt-6 w-fit border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
          Cek lebih lanjut
        </button>
      </div>
    </section>
  )
}
