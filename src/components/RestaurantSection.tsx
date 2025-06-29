import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Search } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Kozo",
    cuisine: "Japanese",
    rating: 4.8,
    price: "$$$$",
    capacity: "2-50 guests",
    image: "🏛️",
    features: ["Private Dining", "Outdoor Seating", "Live Music"],
    description: "Elegant fine dining with panoramic city views"
  },
  {
    id: 2,
    name: "Shogun",
    cuisine: "Asian",
    rating: 4.6,
    price: "$$$",
    capacity: "2-30 guests",
    image: "🍝",
    features: ["Wine Cellar", "Private Room", "Chef's Table"],
    description: "Authentic Asian Fusion cuisine in a romantic setting"
  },
  {
    id: 3,
    name: "Santoku",
    cuisine: "Japanese",
    rating: 4.7,
    price: "$$$",
    capacity: "2-25 guests",
    image: "🍣",
    features: ["Sushi Bar", "Teppanyaki", "Private Tatami Room"],
    description: "Traditional Japanese dining experience"
  },
  {
    id: 4,
    name: "La Chaumiere",
    cuisine: "French",
    rating: 4.9,
    price: "$$$$",
    capacity: "2-40 guests",
    image: "🥐",
    features: ["Wine Pairing", "Chef's Menu", "Garden Terrace"],
    description: "Classic French cuisine with modern touches"
  }
];

export const RestaurantSection = () => {
  const [filters, setFilters] = useState({
    search: "",
    cuisine: "",
    guests: "",
    price: ""
  });

  // Filter restaurants based on search and filter criteria
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           restaurant.cuisine.toLowerCase().includes(filters.search.toLowerCase()) ||
                           restaurant.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCuisine = !filters.cuisine || restaurant.cuisine.toLowerCase() === filters.cuisine.toLowerCase();
      
      const matchesPrice = !filters.price || restaurant.price === filters.price;
      
      // Parse capacity for guest filtering
      const capacityMatch = !filters.guests || (() => {
        const [min, max] = restaurant.capacity.split('-').map(s => parseInt(s));
        const guestRange = filters.guests;
        
        if (guestRange === "2-5") return min <= 5;
        if (guestRange === "6-10") return min >= 6 && max <= 10;
        if (guestRange === "10+") return min >= 10;
        return true;
      })();
      
      return matchesSearch && matchesCuisine && matchesPrice && capacityMatch;
    });
  }, [filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      cuisine: "",
      guests: "",
      price: ""
    });
  };

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
                <Input 
                  placeholder="Search restaurants..." 
                  className="pl-10"
                  value={filters.search}
                  onChange={handleSearchChange}
                  aria-label="Search restaurants"
                />
              </div>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.cuisine}
                onChange={(e) => handleFilterChange('cuisine', e.target.value)}
                aria-label="Filter by cuisine"
              >
                <option value="">All Cuisines</option>
                <option value="japanese">Japanese</option>
                <option value="asian">Asian</option>
                <option value="french">French</option>
              </select>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.guests}
                onChange={(e) => handleFilterChange('guests', e.target.value)}
                aria-label="Filter by party size"
              >
                <option value="">Party Size</option>
                <option value="2-5">2-5 guests</option>
                <option value="6-10">6-10 guests</option>
                <option value="10+">10+ guests</option>
              </select>
              <select 
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                value={filters.price}
                onChange={(e) => handleFilterChange('price', e.target.value)}
                aria-label="Filter by price range"
              >
                <option value="">Price Range</option>
                <option value="$">$ - Budget Friendly</option>
                <option value="$$">$$ - Moderate</option>
                <option value="$$$">$$$ - Upscale</option>
                <option value="$$$$">$$$$ - Fine Dining</option>
              </select>
            </div>
            
            {/* Clear filters button */}
            {(filters.search || filters.cuisine || filters.guests || filters.price) && (
              <div className="mt-4 text-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-sm"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredRestaurants.length} of {restaurants.length} restaurants
          </p>
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No restaurants found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};
