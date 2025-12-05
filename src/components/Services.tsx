import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, List, X, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Service images
import kitchenImg from "@/assets/services/modular-kitchen.jpg";
import bedroomImg from "@/assets/services/personalized-bedroom.jpg";
import wardrobeImg from "@/assets/services/functional-wardrobe.jpg";
import kidsRoomImg from "@/assets/services/kids-room.jpg";
import livingRoomImg from "@/assets/services/living-room.jpg";
import entertainmentImg from "@/assets/services/entertainment-unit.jpg";
import poojaRoomImg from "@/assets/services/pooja-room.jpg";
import homeOfficeImg from "@/assets/services/home-office.jpg";
import homeMakeoverImg from "@/assets/services/home-makeover.jpg";

// Gallery images - Kitchen
import kitchenGallery1 from "@/assets/services/gallery/kitchen-1.jpg";
import kitchenGallery2 from "@/assets/services/gallery/kitchen-2.jpg";
import kitchenGallery3 from "@/assets/services/gallery/kitchen-3.jpg";

// Gallery images - Bedroom
import bedroomGallery1 from "@/assets/services/gallery/bedroom-1.jpg";
import bedroomGallery2 from "@/assets/services/gallery/bedroom-2.jpg";
import bedroomGallery3 from "@/assets/services/gallery/bedroom-3.jpg";

// Gallery images - Wardrobe
import wardrobeGallery1 from "@/assets/services/gallery/wardrobe-1.jpg";
import wardrobeGallery2 from "@/assets/services/gallery/wardrobe-2.jpg";
import wardrobeGallery3 from "@/assets/services/gallery/wardrobe-3.jpg";

// Gallery images - Kids Room
import kidsGallery1 from "@/assets/services/gallery/kids-1.jpg";
import kidsGallery2 from "@/assets/services/gallery/kids-2.jpg";
import kidsGallery3 from "@/assets/services/gallery/kids-3.jpg";

// Gallery images - Living Room
import livingGallery1 from "@/assets/services/gallery/living-1.jpg";
import livingGallery2 from "@/assets/services/gallery/living-2.jpg";
import livingGallery3 from "@/assets/services/gallery/living-3.jpg";

// Gallery images - Entertainment
import entertainmentGallery1 from "@/assets/services/gallery/entertainment-1.jpg";
import entertainmentGallery2 from "@/assets/services/gallery/entertainment-2.jpg";
import entertainmentGallery3 from "@/assets/services/gallery/entertainment-3.jpg";

// Gallery images - Pooja Room
import poojaGallery1 from "@/assets/services/gallery/pooja-1.jpg";
import poojaGallery2 from "@/assets/services/gallery/pooja-2.jpg";
import poojaGallery3 from "@/assets/services/gallery/pooja-3.jpg";

// Gallery images - Home Office
import officeGallery1 from "@/assets/services/gallery/office-1.jpg";
import officeGallery2 from "@/assets/services/gallery/office-2.jpg";
import officeGallery3 from "@/assets/services/gallery/office-3.jpg";

// Gallery images - Home Makeover
import makeoverGallery1 from "@/assets/services/gallery/makeover-1.jpg";
import makeoverGallery2 from "@/assets/services/gallery/makeover-2.jpg";
import makeoverGallery3 from "@/assets/services/gallery/makeover-3.jpg";

import { 
  ChefHat, 
  Bed, 
  DoorClosed, 
  Baby, 
  Sofa, 
  Tv, 
  Sparkles, 
  Laptop, 
  Home 
} from "lucide-react";

type Category = "all" | "living" | "private" | "functional" | "specialized";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: React.ElementType;
  category: Category;
  tags: string[];
  featured: boolean;
  keyPoints: string[];
  gallery: string[];
}

const services: Service[] = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchens",
    shortDescription: "Bespoke modular kitchens combining innovation and elegance. Crafted with smart storage, premium materials, and seamless modular units that blend style with functionality.",
    fullDescription: "Our modular kitchen designs transform your cooking space into a masterpiece of functionality and aesthetics. We combine cutting-edge technology with timeless design principles to create kitchens that are not just beautiful, but highly efficient. From pull-out pantries to soft-close cabinets, every element is carefully planned to maximize your space.",
    image: kitchenImg,
    icon: ChefHat,
    category: "functional",
    tags: ["Modern", "Storage Solutions", "Custom Design"],
    featured: true,
    keyPoints: [
      "Smart storage with pull-out organizers",
      "Premium hardware and soft-close mechanisms",
      "Water-resistant and easy-to-clean surfaces",
      "Integrated appliance solutions",
      "Ergonomic workflow design"
    ],
    gallery: [kitchenGallery1, kitchenGallery2, kitchenGallery3]
  },
  {
    id: "personalized-bedroom",
    title: "Personalized Bedrooms",
    shortDescription: "Luxury meets comfort with custom-designed bedrooms. From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique style.",
    fullDescription: "Create your personal sanctuary with our bespoke bedroom designs. We understand that your bedroom is more than just a sleeping space—it's your retreat from the world. Our designs incorporate luxurious textiles, ambient lighting, and custom furniture to create an atmosphere of absolute comfort and elegance.",
    image: bedroomImg,
    icon: Bed,
    category: "private",
    tags: ["Luxury", "Comfort", "Lighting"],
    featured: true,
    keyPoints: [
      "Custom headboard and back panel designs",
      "Ambient and task lighting solutions",
      "Premium fabric and textile selection",
      "Space-optimized furniture layouts",
      "Climate-controlled comfort features"
    ],
    gallery: [bedroomGallery1, bedroomGallery2, bedroomGallery3]
  },
  {
    id: "functional-wardrobe",
    title: "Functional Wardrobes",
    shortDescription: "Custom wardrobes designed for efficiency and elegance. Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living.",
    fullDescription: "Experience the luxury of perfectly organized spaces with our custom wardrobe solutions. We design wardrobes that cater to your specific storage needs while maintaining aesthetic excellence. From walk-in closets to space-saving sliding door units, we create storage solutions that make getting dressed a pleasure.",
    image: wardrobeImg,
    icon: DoorClosed,
    category: "private",
    tags: ["Organization", "Walk-in Closets", "Glass Designs"],
    featured: false,
    keyPoints: [
      "Custom compartment configurations",
      "LED integrated lighting systems",
      "Premium finish options including glass",
      "Accessory organizers and drawers",
      "Humidity-controlled sections"
    ],
    gallery: [wardrobeGallery1, wardrobeGallery2, wardrobeGallery3]
  },
  {
    id: "kids-room",
    title: "Functional Kids Room",
    shortDescription: "Creative and safe spaces designed for children. Playful colors, smart storage, and durable materials create rooms that grow with your little ones.",
    fullDescription: "Design spaces that inspire imagination and support growth. Our kids' room designs balance fun and functionality, creating environments where children can play, learn, and rest. We use child-safe materials and incorporate clever storage solutions to keep toys organized while maintaining a playful atmosphere.",
    image: kidsRoomImg,
    icon: Baby,
    category: "private",
    tags: ["Playful", "Safe", "Adaptable"],
    featured: false,
    keyPoints: [
      "Child-safe materials and rounded edges",
      "Adaptable furniture that grows with kids",
      "Creative storage for toys and books",
      "Study areas with proper lighting",
      "Fun themes and color schemes"
    ],
    gallery: [kidsGallery1, kidsGallery2, kidsGallery3]
  },
  {
    id: "living-room",
    title: "Living Room Interiors",
    shortDescription: "Sophisticated living spaces that welcome and impress. From statement furniture to ambient lighting, create the perfect space for family and guests.",
    fullDescription: "Your living room is the heart of your home, and we design it to reflect your lifestyle perfectly. Our living room designs combine comfort with style, creating spaces that are ideal for both relaxation and entertainment. We carefully consider traffic flow, focal points, and seating arrangements to create harmonious spaces.",
    image: livingRoomImg,
    icon: Sofa,
    category: "living",
    tags: ["Sophisticated", "Welcoming", "Versatile"],
    featured: true,
    keyPoints: [
      "Custom seating arrangements",
      "Statement lighting fixtures",
      "Balanced color palettes",
      "Focal point design elements",
      "Smart home integration ready"
    ],
    gallery: [livingGallery1, livingGallery2, livingGallery3]
  },
  {
    id: "entertainment-unit",
    title: "Elegant Entertainment Units",
    shortDescription: "Modern TV panels and entertainment centers that become the focal point of your living space. Sleek designs with integrated storage and cable management.",
    fullDescription: "Transform your entertainment experience with our custom-designed TV units and media centers. We create stunning focal points that seamlessly integrate technology with style. Our designs include smart cable management, ambient backlighting, and ample storage for all your entertainment needs.",
    image: entertainmentImg,
    icon: Tv,
    category: "living",
    tags: ["Modern", "Cable Management", "Ambient Lighting"],
    featured: false,
    keyPoints: [
      "Integrated cable management systems",
      "Ambient LED backlighting",
      "Sound bar and speaker integration",
      "Gaming console storage",
      "Display shelving for collectibles"
    ],
    gallery: [entertainmentGallery1, entertainmentGallery2, entertainmentGallery3]
  },
  {
    id: "pooja-room",
    title: "Divine Pooja Rooms",
    shortDescription: "Sacred spaces designed with reverence and beauty. Traditional aesthetics meet modern design in these spiritually uplifting sanctuaries.",
    fullDescription: "Create a serene sanctuary for prayer and meditation with our thoughtfully designed pooja rooms. We blend traditional elements with contemporary design to create spaces that inspire devotion while complementing your home's aesthetic. Natural materials, proper ventilation, and peaceful lighting come together in perfect harmony.",
    image: poojaRoomImg,
    icon: Sparkles,
    category: "specialized",
    tags: ["Traditional", "Spiritual", "Handcrafted"],
    featured: false,
    keyPoints: [
      "Traditional craftsmanship and motifs",
      "Proper ventilation for incense",
      "Sacred storage solutions",
      "Ambient and ritual lighting",
      "Natural wood and brass elements"
    ],
    gallery: [poojaGallery1, poojaGallery2, poojaGallery3]
  },
  {
    id: "home-office",
    title: "Functional Home Office Designs",
    shortDescription: "Professional workspaces that boost productivity. Ergonomic furniture, smart storage, and inspiring design for the modern remote worker.",
    fullDescription: "Design a workspace that enhances your productivity and creativity. Our home office solutions combine ergonomic principles with aesthetic appeal, creating environments where you can focus and thrive. We incorporate smart storage, proper lighting, and comfortable seating to support long work hours.",
    image: homeOfficeImg,
    icon: Laptop,
    category: "functional",
    tags: ["Ergonomic", "Productive", "Modern"],
    featured: false,
    keyPoints: [
      "Ergonomic desk and chair setups",
      "Proper task and ambient lighting",
      "Cable management solutions",
      "Video call backdrop design",
      "Integrated storage and filing"
    ],
    gallery: [officeGallery1, officeGallery2, officeGallery3]
  },
  {
    id: "home-makeover",
    title: "Complete Home Makeovers",
    shortDescription: "Total transformation of your living space. Comprehensive design solutions that create cohesive, stunning interiors throughout your entire home.",
    fullDescription: "Experience a complete transformation of your living space with our comprehensive home makeover services. We take a holistic approach, ensuring every room flows seamlessly into the next while maintaining individual character. From initial concept to final styling, we handle every detail of your home's reinvention.",
    image: homeMakeoverImg,
    icon: Home,
    category: "specialized",
    tags: ["Complete", "Cohesive", "Transformative"],
    featured: true,
    keyPoints: [
      "Comprehensive space planning",
      "Cohesive design language throughout",
      "Material and finish coordination",
      "Furniture selection and placement",
      "Final styling and accessorizing"
    ],
    gallery: [makeoverGallery1, makeoverGallery2, makeoverGallery3]
  }
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Spaces" },
  { id: "private", label: "Private Spaces" },
  { id: "functional", label: "Functional Areas" },
  { id: "specialized", label: "Specialized" }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const getCategoryLabel = (cat: Category) => {
    return categories.find(c => c.id === cat)?.label || cat;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Interior Design <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Transform your space with our comprehensive interior design solutions. 
            From concept to completion, we bring your vision to life.
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "filter-active" : "filter"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* View Toggle & Count */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredServices.length}</span> services
            </span>
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${viewMode === "grid" ? "bg-secondary text-secondary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${viewMode === "list" ? "bg-secondary text-secondary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(service)}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${viewMode === "list" ? "flex gap-6" : ""}`}>
                <div className={`relative ${viewMode === "list" ? "w-1/3 flex-shrink-0" : ""}`}>
                  <div className={`${viewMode === "list" ? "aspect-[4/3]" : "aspect-[16/10]"} overflow-hidden`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    {service.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                    <span className={`category-badge ${!service.featured ? "ml-auto" : ""}`}>
                      {getCategoryLabel(service.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-tag">{tag}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0" hideCloseButton>
          {selectedService && (
            <>
              {/* Modal Header Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={selectedService.gallery[selectedGalleryImage]}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Featured Badge in Modal */}
                {selectedService.featured && (
                  <span className="absolute top-4 left-4 featured-badge">Featured</span>
                )}
              </div>

              <div className="p-6 lg:p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <DialogHeader>
                      <DialogTitle className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-1">
                        {selectedService.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        {getCategoryLabel(selectedService.category)} • Premium Interior Design Service
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">About This Service</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-4">What's Included</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-4">Related Pictures</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedService.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedGalleryImage(idx)}
                        className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                          selectedGalleryImage === idx 
                            ? "border-primary ring-2 ring-primary/20" 
                            : "border-transparent hover:border-border"
                        }`}
                      >
                        <img src={img} alt={`${selectedService.title} ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.tags.map((tag) => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    Book Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="hero-outline" size="lg" className="flex-1">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
