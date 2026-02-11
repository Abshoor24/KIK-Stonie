import Footer from "@/components/Footer";
import CategorySection from "@/components/lp/Category";
import Hero from "@/components/lp/Hero";
import Latest from "@/components/lp/Latest";
import Product from "@/components/lp/Product";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <CategorySection />
      <Latest />
      <Product />
      <Footer />
    </div>
  );
}
