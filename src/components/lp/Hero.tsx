"use client";

import Image from "next/image"
import TextType from "@/shared/shadcn/TextType";
export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

  {/* Background */}
  <Image
    src="/bgBatu.png"
    alt="Stone Background"
    fill
    priority
    className="object-cover absolute inset-0 -z-10"
    sizes="100vw"
  />

  {/* Headline (center) */}
  <div className="relative z-10 h-full flex items-center justify-center px-8">
<h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[1.2] tracking-tight text-black text-center max-w-4xl mx-auto">
      

<TextType 
  text={["Jika di sakiti, jangan di ambil hati. Di usahakan ambil stone dari stonie"]}
  typingSpeed={50}
  pauseDuration={2000}
  showCursor
  cursorCharacter="|"
  deletingSpeed={20}
  cursorBlinkDuration={0.5}
  variableSpeed={false}
  onSentenceComplete={() => {}}
/>
    </h1>
  </div>

</section>
  )
}
