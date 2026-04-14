import CategorySection from "@/components/lp/Category";
import Hero from "@/components/lp/Hero";
import Latest from "@/components/lp/Latest";
import Product from "@/components/lp/Product";

export default function Home() {
  return (
    <>
      <section className="h-screen snap-start">
        <Hero />
      </section>

      <section className="h-screen snap-start">
        <CategorySection />
      </section>

      <section className="h-screen snap-start">
        <Latest />
      </section>

      <section className="h-screen snap-start">
        <Product />
      </section>
    </>
  );
}
