import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan. Book. <span className="text-primary">Celebrate.</span>
            <br />
            With <span className="font-cursive">ABONTEN</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we handle every detail. 
            Plan your perfect event and book the ideal restaurant for your special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => console.log("Plan Your Event")}>
              Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => console.log("Book a Restaurant")}>
              Book a Restaurant
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-8 w-8 text-primary" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Events Planned</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8 text-primary" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-primary" aria-hidden="true" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
