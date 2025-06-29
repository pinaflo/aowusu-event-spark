import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">AOWUSU</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for unforgettable events and exceptional dining experiences. 
              Making every celebration perfect, one detail at a time.
            </p>
            <div className="flex space-x-4" role="group" aria-label="Social media links">
              <a 
                href="https://facebook.com/aowusu" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/aowusu" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@aowusu.com" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <nav aria-label="Services" className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="/services/wedding-planning" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Wedding Planning
                </a>
              </li>
              <li>
                <a 
                  href="/services/corporate-events" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Corporate Events
                </a>
              </li>
              <li>
                <a 
                  href="/services/birthday-parties" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Birthday Parties
                </a>
              </li>
              <li>
                <a 
                  href="/services/restaurant-bookings" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Restaurant Bookings
                </a>
              </li>
              <li>
                <a 
                  href="/services/cultural-festivals" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Cultural Festivals
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company" className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="/about" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/team" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a 
                  href="/careers" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/partnership" 
                  className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Partner with Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AOWUSU. All rights reserved.
            </p>
            <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Legal links">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="/cookie-policy" 
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
