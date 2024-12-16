import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import KnowledgeHub from "@/components/sections/KnowledgeHub";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KnowledgeHub />
      </main>
    </>
  );
}
