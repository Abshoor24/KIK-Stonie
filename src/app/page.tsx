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
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.querySelector("main");

    gsap.utils.toArray("[data-section]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
      });
    });

    const sectionId = searchParams.get("scroll");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        router.replace("/", { scroll: false });
      }
    }

    return () => {
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