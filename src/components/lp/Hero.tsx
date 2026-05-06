"use client";

import Image from "next/image";
import TextType from "@/shared/shadcn/TextType";

export default function Hero() {
  return (
    <section
      data-section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/bgBatu.png"
        alt="Stone Background"
        fill
        priority
        className="object-cover object-bottom absolute inset-0 -z-10"
        sizes="100vw"
      />

      {/* Content */}
      <div className="px-2 text-center max-w-4xl">
        <h1 className="hero-heading text-4xl md:text-5xl font-bold leading-tight md:leading-[1.2] tracking-tight text-black">
          <TextType
            text={[
              "Jika di sakiti, jangan di ambil hati. Di usahakan ambil stone dari stonie",
            ]}
            typingSpeed={50}
            pauseDuration={2500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={15}
            cursorBlinkDuration={0.5}
            variableSpeed={false}
            onSentenceComplete={() => {}}
          />
        </h1>
      </div>
    </section>
  );
}
