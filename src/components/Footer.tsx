import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Clock, ArrowRight } from 'lucide-react';

// Keep the same nav links as Header
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#gallery" },
  { name: "Projects", href: "/Projects" },
  { name: "Testimonials", href: "/#reviews" },
  { name: "How It Works", href: "/#work" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Residential Interior",
    "Commercial Interior",
    "Modular Kitchen",
    "Wardrobe Design",
    "Office Interior",
    "Home Renovation"
  ];

  const workingHours = [
    { day: "Monday - Sunday", hours: "10:00 AM - 7:00 PM" },
  ];

  return (
    <footer className="bg-[#fafaf7] text-red">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">IRA Interiors</h3>
              <p className="text-black text-sm leading-relaxed">
                Transform your space with premium interior design solutions. Creating beautiful and functional spaces in Hyderabad for over 15 years.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-800">Follow Us</h4>
              <div className="flex gap-3">
                {/* <a
                  href="#"
                  className="w-10 h-10 bg-red-100 hover:bg-red-700 hover:text-white text-red-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a> */}
                <a
                  href="https://www.instagram.com/irainteriors.in/"
                  className="w-10 h-10 bg-red-100 hover:bg-red-700 hover:text-white text-red-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
               
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-800">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-red-700 hover:text-red-900 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300 text-black" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (Updated to match Header) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-800">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-red-600 hover:text-red-900 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300 text-black" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-800">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <Phone className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+919177515333"
                      className="text-red-700 hover:text-red-900 transition-colors duration-300 text-sm font-medium"
                    >
                      +91 91775 15333
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Mail className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:irainteriors.in@gmail.com"
                      className="text-red-700 hover:text-red-900 transition-colors duration-300 text-sm break-all font-medium"
                    >
                      irainteriors.in@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <MapPin className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-red-700 text-sm leading-relaxed">
                     P.No.23, 2nd Floor, Joshi Plaza, New Vasavi Nagar, Karkhana, Main Road Opp Mc Donalds <br />
                      Secunderabad - 500015<br />
                      Telangana, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center text-red-800">
                <Clock className="w-5 h-5 text-black mr-2" />
                Working Hours
              </h4>
              <ul className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span className="text-red-700">{schedule.day}</span>
                    <span className="text-red-800 font-semibold">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-red-700">
            <p className="text-center md:text-left">
              © {currentYear} IRA Interiors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
