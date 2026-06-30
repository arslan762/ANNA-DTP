import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <Footer />
    </main>
  );
}