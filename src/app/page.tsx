"use client";

import CategorySection from "@/components/lp/Category";
import Hero from "@/components/lp/Hero";
import Latest from "@/components/lp/Latest";
import Product from "@/components/lp/Product";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Kecil delay untuk memastikan DOM fully rendered
    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      const scroller = document.querySelector("main");

      // Kill existing triggers terlebih dahulu
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      gsap.utils.toArray("[data-section]").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
          },
          y: 60,
          duration: 0.8,
        });
      });

      // Refresh ScrollTrigger setelah semua animations diset
      ScrollTrigger.refresh();

      const sectionId = searchParams.get("scroll");
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          router.replace("/", { scroll: false });
        }
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [router, searchParams]);

  return (
    <>
      <Hero />
      <CategorySection />
      <Latest />
      <Product />
    </>
  );
}