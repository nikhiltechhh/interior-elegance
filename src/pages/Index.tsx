import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    Calendly?: any;
  }
}

const Index = () => {
  useEffect(() => {
    // Load Calendly CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load Calendly JS
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/irainteriors-in/30min",
            text: "Book Free Consultation",
            color: "#0069ff",
            textColor: "#ffffff",
            branding: false, // only works on paid plan
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Work />
      <Clients />
      <Contact />
      <Reviews />
      <Whatsapp />
      <Footer />
    </main>
  );
};

export default Index;
