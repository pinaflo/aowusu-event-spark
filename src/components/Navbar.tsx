import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">OPERA</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#events" className="text-gray-900 hover:text-primary transition-colors">Events</a>
              <a href="#restaurants" className="text-gray-900 hover:text-primary transition-colors">Restaurants</a>
              <a href="#about" className="text-gray-900 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-900 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#events" className="block px-3 py-2 text-gray-900 hover:text-primary">Events</a>
            <a href="#restaurants" className="block px-3 py-2 text-gray-900 hover:text-primary">Restaurants</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-primary">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-primary">Contact</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
