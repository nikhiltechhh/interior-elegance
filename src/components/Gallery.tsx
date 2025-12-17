import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const galleryItems: GalleryItem[] = [

  {
    id: 1,
    image: "https://i.ibb.co/qMQVSs9z/IMG-2098.avif",
    title: "Living Room TV Unit",
    category: "Living Spaces",
    description: "Modern living room TV unit design with elegant finishes, smart storage, and a clean contemporary look."
  },
  {
    id: 2,
    image: "https://i.ibb.co/x87W2pbh/IMG-2107.avif",
    title: "Bedroom Interior",
    category: "Private Spaces",
    description: "Comfortable bedroom interior designed with soothing colors, functional furniture, and cozy lighting."
  },
  {
    id: 3,
    image: "https://i.ibb.co/4ZsPcdS2/Whats-App-Image-2025-12-17-at-5-36-12-PM.jpg",
    title: "Modular Kitchen",
    category: "Functional Spaces",
    description: "Efficient modular kitchen design featuring smart storage solutions and a sleek modern layout."
  },
  {
    id: 4,
    image: "https://i.ibb.co/Nn3BMZHF/Whats-App-Image-2025-12-17-at-5-36-12-PM-1.jpg",
    title: "Modular Kitchen with Seating",
    category: "Functional Spaces",
    description: "Stylish modular kitchen combined with seating chairs, perfect for casual dining and social cooking."
  },
  {
    id: 5,
    image: "https://i.ibb.co/yc3R21C6/IMG-8096.avif",
    title: "Cafe with Dining Space",
    category: "Commercial Spaces",
    description: "A well-designed café interior featuring a welcoming dining area with a warm and inviting ambiance."
  },
  {
    id: 6,
    image: "https://i.ibb.co/8nCmH3h7/IMG-0021.jpg",
    title: "Women’s Boutique / Tailor Shop",
    category: "Commercial Spaces",
    description: "Elegant women’s boutique interior designed for tailoring and fashion displays with a modern retail feel."
  },
  {
    id: 7,
    image: "https://i.ibb.co/4nKyfYGm/IMG-2129.avif",
    title: "Bedroom Design",
    category: "Private Spaces",
    description: "Stylish bedroom design with practical layout, modern finishes, and a relaxing atmosphere."
  },
{
  id: 8,
  image: "https://i.ibb.co/9959rqV1/IMG-2100.avif",
  title: "Pooja With Crockery Unit",
  category: "Pooja Unit",
  description: "Elegant pooja unit combined with a crockery cabinet, designed to seamlessly blend spirituality and storage with a refined, space-efficient layout."
},
  {
  id: 9,
  image: "https://i.ibb.co/N2JZ8W1H/IMG-2101.avif",
  title: "Console with Mirror",
  category: "Bedroom Accessories",
  description: "Stylish console table paired with a mirror, designed to enhance bedroom aesthetics while offering a practical surface for daily essentials."
}

];



const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
      setIsZoomed(false);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
      setIsZoomed(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Design <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Explore our portfolio of stunning Indian interior designs. Each project tells a unique story of transformation and elegance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-card cursor-pointer opacity-0 animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent 
          className="max-w-7xl w-full h-[90vh] p-0 gap-0 bg-black/95 border-0" 
          hideCloseButton
          onKeyDown={handleKeyDown}
        >
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                <div 
                  className={`relative max-w-full max-h-full transition-transform duration-300 cursor-zoom-in ${isZoomed ? "scale-150 cursor-zoom-out" : ""}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={galleryItems[selectedImage].image}
                    alt={galleryItems[selectedImage].title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
                <div className="max-w-4xl mx-auto">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold text-white mb-2">
                    {galleryItems[selectedImage].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    {galleryItems[selectedImage].description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                    <span>Image {selectedImage + 1} of {galleryItems.length}</span>
                    <span>•</span>
                    <span>Use arrow keys to navigate</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;