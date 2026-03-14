"use client";

import Image from "next/image";

export default function AboutPage() {

  const scrolltosection = () => {
    const section = document.getElementById("2");
    section?.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <main className="bg-gray-100 text-gray-900 pt-20">
      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-16 px-6 items-center">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>

          <div className="flex flex-col text-start text-2xl font-semibold mb-6">
            <p className="leading-relaxed">Jika Disakiti</p>
            <p className="leading-relaxed">Jangan Diambil Hati,</p>
            <p className="leading-relaxed">Ambil Batu dari Stonie!!</p>
          </div>
          <button className="relative group"
          onClick={scrolltosection}
          >
            {/* shadow */}
            <span className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-800"></span>

            {/* button */}
            <span
              className="relative bg-gray-200 text-black px-8 py-3 font-medium block transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            >
              Cek lebih lanjut
            </span>
          </button>
        </div>

        <div className="relative w-full h-125">
          <Image
            src="/assets/mining.png"
            alt="Stonie Mining"
            fill
            className="object-cover rounded"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="2" className="max-w-6xl mx-auto py-20 px-6 min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Kenapa Harus memilih kami
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-xl mx-auto">
          Stonie menghadirkan material batu berkualitas tinggi dengan proses
          penambangan yang bertanggung jawab dan standar keamanan industri yang
          ketat.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="flex items-center justify-center w-full gap-5">
            {/* Sertifikat */}
            <div className="flex flex-col items-center">
              <Image
                src="/assets/Sertifikat.png"
                alt="Sertifikat"
                width={300}
                height={300}
              />
            </div>

            <div className="flex flex-col items-center translate-y-20">
              <Image
                src="/assets/Kemenkumham.png"
                alt="Dokumen Legal"
                width={300}
                height={300}
              />
            </div>
          </div>
          {/* LIST */}
          <div className="flex flex-col items-start justify-start space-y-6">
            <div className="flex gap-4">
              <div className="w-9 h-5 bg-gray-400 rounded-full mt-2"></div>
              <p>
                Seluruh aktivitas penambangan kami telah melalui proses
                perizinan resmi dan diawasi oleh lembaga pemerintah terkait.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-5 bg-gray-400 rounded-full mt-2"></div>
              <p>
                Material batu dipilih langsung dari sumber terbaik sehingga
                memiliki kekuatan, ketahanan, dan kualitas yang konsisten.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-5 bg-gray-400 rounded-full mt-2"></div>
              <p>
                Kami menerapkan standar keamanan kerja yang tinggi untuk
                memastikan proses produksi berjalan aman dan berkelanjutan.
              </p>
            </div>

            <a 
             href="/assets/buktisuratstonie.pdf"
            download="buktisuratstonie.pdf"
            className="relative group">
              {/* shadow */}
              <span className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-800"></span>

              {/* a */}
              <span
                className="relative bg-gray-200 text-black px-8 py-3 font-medium block transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              >
                Cek Sertifikat
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      {/* <section className="border-t py-16">

        <div className="max-w-xl mx-auto text-center px-6">

          <h3 className="text-2xl font-semibold mb-3">
            Sign up for our newsletter
          </h3>

          <p className="text-gray-600 mb-8">
            Dapatkan informasi terbaru mengenai produk batu,
            penawaran khusus, serta perkembangan proyek
            dari Stonie Mining.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border px-4 py-2 rounded"
            />
            <button className="bg-black text-white px-6 py-2 rounded">
              Sign Up
            </button>
          </div>

        </div>

      </section> */}
    </main>
  );
}
