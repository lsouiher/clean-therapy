import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import MediaShowcase from "@/components/MediaShowcase";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <MediaShowcase />
        <Testimonials />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
