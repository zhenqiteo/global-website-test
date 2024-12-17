import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Resources from "@/components/sections/Resources";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
