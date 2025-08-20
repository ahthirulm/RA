import { useEffect } from "react";
import { Leaf } from "lucide-react";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-eco-green-900 to-eco-green-950">
      <section className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-green-800/60 border border-eco-green-600 text-eco-green-200">
          <Leaf className="h-4 w-4" /> About Us
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-white">About EcoScrap UAE</h1>
        <p className="mt-4 text-eco-green-200 max-w-2xl mx-auto">
          EcoScrap UAE provides sustainable, compliant, and reliable scrap
          collection & recycling across the UAE—serving households and industry
          with traceable, responsible processes.
        </p>
      </section>
    </main>
  );
}
