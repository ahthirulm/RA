import { useEffect } from "react";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-eco-green-900 to-eco-green-950">
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white">Contact EcoScrap UAE</h1>
        <p className="mt-4 text-eco-green-200">
          Email: <strong>contact@ecoscrap.ae</strong>
        </p>
        <p className="text-eco-green-200">
          Phone: <strong>+971-5X-XXX-XXXX</strong>
        </p>
        <p className="mt-2 text-eco-green-200">
          We’re available 7 days a week for pickups and quotes.
        </p>
      </section>
    </main>
  );
}
