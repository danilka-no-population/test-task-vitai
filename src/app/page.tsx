import JsonLd from "@/components/JsonLd";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Delivery from "@/components/sections/Delivery";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import Products from "@/components/sections/Products";
import Subscription from "@/components/sections/Subscription";
import { pageJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={pageJsonLd()} />
      <main id="top" className="flex-1">
        <Header />
        <Hero />
        <About />
        <Products />
        <Subscription />
        <Delivery />
        <HowItWorks />
        <LeadForm />
        <Footer />
      </main>
    </>
  );
}
