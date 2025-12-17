import { useState } from "react";
import { Building2, Home, ShoppingBag, Hospital, GraduationCap, MapPin, User } from "lucide-react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Projects", icon: Building2 },
  { id: "commercial", name: "Commercial", icon: Building2 },
  { id: "residential", name: "Residential", icon: Home },
  { id: "retail", name: "Retail", icon: ShoppingBag },
  { id: "healthcare", name: "Healthcare", icon: Hospital },
  { id: "institutional", name: "Institutional", icon: GraduationCap },
    { name: "MR. SRINIVAS – CA OFFICE", location: "Hyderabad" },
  { name: "MR. VENKATESHWAR RAO – CORPORATE OFFICE", location: "Hyderabad" },
];

const projectsData = {
  commercial: [
    { name: "TATA COMMUNICATIONS LTD.", location: "Gachibowli" },
    { name: "ASK WEALTH ADVISORS, BABUKHAN ESTATES", location: "Somajiguda" },
    { name: "RACKEM CEMICALS", location: "Rajamundry" },
    { name: "GANGAVARAM PORT OFFICE LTD", location: "Jubilee Hills, Hyd" },
    { name: "RUMI EDUCATIONAL PVT LTD.", location: "Somajiguda" },
    { name: "GLOBARENA TECHNOLOGIES PVT. LTD.", location: "Ameerpet" },
    { name: "MARK BIOMEDICS LTD. (Corporate Office)", location: "West Marredpally" },
    { name: "S.V. ELECTRONICS LTD.", location: "Karkhana, Secunderabad" },
    { name: "RAJSOFT COMMUNICATIONS", location: "Banjara Hills" },
    { name: "RAJSOFT COMMUNICATIONS", location: "Dilshuknagar" },
    { name: "MARK MED SURGE LTD. (Corporate Office)", location: "Sick Village" },
      { name: "MR. MANIDEEP – CAFE", location: "Bapatla" },
  ],
  residential: [
    { name: "MR. RAVISHANKAR FLAT", location: "Gayatri Elegance Apt, Vikrampuri" },
    { name: "MR. KISHOR DUPLEX", location: "GS Arcade, Kompally" },
    { name: "MR. JOSHI", location: "Malkajgiri" },
    { name: "MR. RAFEEQ DUPLEX", location: "Daffodils Apt, R.K.Puram" },
    { name: "MR. PAVAN KUMAR", location: "Jyothi Mansion, A.S.Rao Nagar" },
    { name: "MR. MARK", location: "Gayatri Elegance Apt, Vikrampuri" },
    { name: "MR. JAGADSINGH", location: "Jyothi Colony, Picket" },
    { name: "MR. BUNTY DUPLEX", location: "Kaulsya Estates, Karkhana" },
    { name: "MR. RISHIKESH TRIPLEX", location: "Tirumala Enclave, Karkhana" },
    { name: "MR. RAJEEV TRIPLEX", location: "Maple Leaf Villas, Bandlaguda" },
    { name: "MR. PRABHAKAR", location: "Beverly Palms Villas, Kukatpally" },
    { name: "MR. ABHILASH", location: "Surya Towers, Madhapur" },
    { name: "MR. MARKENDEYULU", location: "Begumpet View Apt, Begumpet" },
    { name: "MR. PATEL", location: "Surys Apt, Visakhapatnam" },
    { name: "MR. VENKAT RAO", location: "Tirumala Apt, Visakhapatnam" },
    { name: "MR. KISHORE", location: "Lakshmi Nivas, Chilakaluripet" },
    { name: "MR. GAUTHAM ROY", location: "Madhuban (Triplex Villa), Yapral" },
    { name: "MR. BHOOPAL REDDY", location: "Bhoopal Reddy Vilas, Athapur" },
    { name: "ACTOR HIMAJA", location: "JB Infra Villa, Ibrahimpatnam" },
    { name: "MR. SRINIVAS YADAV", location: "My Home Bhooja, Gachibowli" },
  { name: "MR. KISHORE – DUPLEX HOUSE", location: "Chilakaluripeta" },
  { name: "MR. PAVAN – 3BHK FLATS", location: "Hyderabad" },
  ],
  retail: [
    { name: "COTTON KING", location: "Hyderabad" },
    { name: "AIRCEL", location: "Hyderabad" },
    { name: "Y NEWOUR", location: "Hyderabad" },
  ],
  healthcare: [
    { name: "B BRAUN INDIA PVT. LTD", location: "Hyderabad" },
    { name: "NIZAMABAD GOVERNMENT HOSPITAL", location: "Nizamabad" },
    { name: "KURNOOL GOVERNMENT HOSPITAL", location: "Kurnool" },
    { name: "VIJAYAWADA GOVERNMENT HOSPITAL", location: "Vijayawada" },
    { name: "VIZAG KGH GOVERNMENT HOSPITAL", location: "Visakhapatnam" },
    { name: "RUIAH GOVERNMENT HOSPITAL", location: "Tirupathi" },
    { name: "DBR MULTI-SPECIALITY HOSPITAL", location: "Tirupathi" },
    { name: "GANDHI MEDICAL HOSPITAL", location: "Hyderabad" },
    { name: "OSMANIA MEDICAL HOSPITAL", location: "Hyderabad" },
    { name: "ANANTHAPUR GOVERNMENT HOSPITAL", location: "Ananthapur" },
    { name: "RAJAMUNDRY GOVERNMENT HOSPITAL", location: "Rajamundry" },
    { name: "DHCM DHARBHANGA MEDICAL COLLEGE", location: "Bihar" },
    { name: "SGH SAMASTIPUR GENERAL HOSPITAL", location: "Bihar" },
    { name: "APOLLO eUPHC - KADAPA", location: "Kadapa, AP" },
    { name: "APOLLO eUPHC - PRODDATUR", location: "Proddatur, AP" },
    { name: "APOLLO eUPHC - NELLORE", location: "Nellore, AP" },
    { name: "APOLLO eUPHC - GUDUR", location: "Gudur, AP" },
    { name: "APOLLO eUPHC - KAVALI", location: "Kavali, AP" },
    { name: "APOLLO eUPHC - ANANTHAPUR", location: "Ananthapur, AP" },
    { name: "APOLLO eUPHC - HINDUPUR", location: "Hindupur, AP" },
    { name: "APOLLO eUPHC - TADIPATHRI", location: "Tadipathri, AP" },
    { name: "APOLLO eUPHC - GUNTAKAL", location: "Guntakal, AP" },
    { name: "APOLLO eUPHC - DHARMAVARAM", location: "Dharmavaram, AP" },
    { name: "APOLLO eUPHC - KADIRI", location: "Kadiri, AP" },
      { name: "LV PRASAD EYE HOSPITALS", location: "Hyderabad" },
  ],
  institutional: [
    { name: "RUMI EDUCATIONAL INSTITUTE", location: "Somajiguda" },
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredProjects = () => {
    if (activeCategory === "all") {
      return Object.entries(projectsData).map(([category, projects]) => ({
        category,
        projects,
      }));
    }
    return [{ category: activeCategory, projects: projectsData[activeCategory as keyof typeof projectsData] || [] }];
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      commercial: "Commercial Interior Projects",
      residential: "Residential Interior Projects",
      retail: "Retail Sector Projects",
      healthcare: "Healthcare / Hospital Projects",
      institutional: "Institutional Projects",
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Our <span className="text-red-500">Projects</span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg">
              Explore our diverse portfolio of interior design excellence across commercial, 
              residential, healthcare, and institutional sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  )}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline sm:inline">{category.name}</span>
                  <span className="xs:hidden sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {getFilteredProjects().map(({ category, projects }) => (
            <div key={category} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-red-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
                  {getCategoryLabel(category)}
                </h2>
                <span className="ml-auto bg-neutral-900 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                  {projects.length} Projects
                </span>
              </div>

              {/* Projects List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-neutral-200 rounded-xl p-4 sm:p-5 hover:border-red-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      {/* <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div> */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-red-600 transition-colors line-clamp-2">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1.5 text-neutral-500">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm truncate">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Ready to Start Your <span className="text-red-500">Project?</span>
          </h2>
          <p className="text-neutral-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Contact us today to discuss your interior design requirements.
          </p>
          <a
            href="tel:+919177515333"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Contact: +91 91775 15333
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
