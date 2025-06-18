
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, DollarSign, Search } from "lucide-react";

const restaurants = [
  {
    name: "Kozo",
    cuisine: "Japanese",
    rating: 4.8,
    price: "₵₵₵",
    capacity: "2-50 guests",
    image: "🏛️",
    features: ["Private Dining", "Outdoor Seating", "Live Music"],
    description: "Elegant fine dining with panoramic city views"
  },
  {
    name: "Shogun",
    cuisine: "Asian",
    rating: 4.6,
    price: "₵₵₵",
    capacity: "2-30 guests",
    image: "🍝",
    features: ["Wine Cellar", "Private Room", "Chef's Table"],
    description: "Authentic Asian Fusion cuisine in a romantic setting"
  },
  {
    name: "Santoku",
    cuisine: "Japanese",
    rating: 4.7,
    price: "₵₵₵",
    capacity: "2-25 guests",
    image: "🍣",
    features: ["Sushi Bar", "Teppanyaki", "Private Tatami Room"],
    description: "Traditional Japanese dining experience"
  },
  {
    name: "La Chaumiere",
    cuisine: "French",
    rating: 4.9,
    price: "₵₵₵",
    capacity: "2-40 guests",
    image: "🥐",
    features: ["Wine Pairing", "Chef's Menu", "Garden Terrace"],
    description: "Classic French cuisine with modern touches"
  }
];

export const RestaurantSection = () => {
  const [filters, setFilters] = useState({
    cuisine: "",
    guests: "",
    price: ""
  });

  return (
    <section id="restaurants" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Restaurant Reservations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your celebration with dining at our partner restaurants. 
            Perfect for pre-event dinners, post-celebration meals, or intimate gatherings.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Search restaurants..." className="pl-10" />
              </div>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.cuisine}
                onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
              >
                <option value="">All Cuisines</option>
                <option value="fine-dining">Fine Dining</option>
                <option value="italian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="french">French</option>
              </select>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.guests}
                onChange={(e) => setFilters({...filters, guests: e.target.value})}
              >
                <option value="">Party Size</option>
                <option value="2-5">2-5 guests</option>
                <option value="6-10">6-10 guests</option>
                <option value="10+">10+ guests</option>
              </select>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.price}
                onChange={(e) => setFilters({...filters, price: e.target.value})}
              >
                <option value="">Price Range</option>
                <option value="₵">₵ - Budget Friendly</option>
                <option value="₵₵">₵₵ - Moderate</option>
                <option value="₵₵₵">₵₵₵ - Upscale</option>
                <option value="₵₵₵₵">₵₵₵₵ - Fine Dining</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{restaurant.image}</div>
                    <div>
                      <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <span>{restaurant.cuisine}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {restaurant.rating}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{restaurant.price}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{restaurant.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {restaurant.capacity}
                </div>

                <div className="flex flex-wrap gap-2">
                  {restaurant.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" className="flex-1">
                    View Menu
                  </Button>
                  <Button className="flex-1">
                    Reserve Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};
