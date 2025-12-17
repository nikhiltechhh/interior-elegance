import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          <div className="flex flex-col gap-5 lg:gap-8 order-2 lg:order-1">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-tight text-foreground opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Transform Your Space Into a{" "}
              <span className="text-primary">Dream Reality</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              We create stunning interiors that reflect your personality and elevate 
              your lifestyle with timeless elegance and modern sophistication.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Button asChild variant="hero" size="lg" className="group w-full sm:w-auto">
  <a href="#gallery">
    Explore Our Work
    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
</Button>

            <Button asChild variant="hero-outline" size="lg" className="w-full sm:w-auto">
  <a href="tel:+919177515333">Contact Us</a>
</Button>

            </div>

            <div 
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-secondary">200+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-secondary">14+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Years Experience</span>
              </div>
              {/* <div className="w-px h-10 sm:h-12 bg-border" /> */}
              {/* <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-secondary">50+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Awards Won</span>
              </div> */}
            </div>
          </div>

          <div 
            className="relative order-1 lg:order-2 opacity-0 animate-fade-in-right"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              <div className="hero-image-container aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Luxurious modern interior design living room"
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="absolute -bottom-4 left-4 sm:left-0 sm:-bottom-6 lg:-left-8 floating-card flex items-center gap-3 sm:gap-4 opacity-0 animate-scale-in animate-float max-w-[180px] sm:max-w-none"
                style={{ animationDelay: "600ms" }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-foreground">200+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Happy Clients</p>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-4 -right-4 w-20 lg:w-24 h-20 lg:h-24 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-24 lg:w-32 h-24 lg:h-32 bg-accent/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
