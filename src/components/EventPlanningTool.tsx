
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";

export const EventPlanningTool = () => {
  const [eventData, setEventData] = useState({
    eventType: "",
    date: "",
    guestCount: "",
    budget: "",
    services: []
  });

  const services = [
    "Catering", "Photography", "Music/DJ", "Decorations", 
    "Venue", "Transportation", "Security", "Entertainment"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plan Your Perfect Event
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive planning tool to get started. Tell us about your vision 
            and we'll help bring it to life.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Event Planning Assistant
            </CardTitle>
            <CardDescription>
              Fill out the details below and we'll create a customized plan for your event.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={eventData.eventType}
                  onChange={(e) => setEventData({...eventData, eventType: e.target.value})}
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="conference">Conference</option>
                  <option value="gala">Gala</option>
                  <option value="cultural">Cultural Festival</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input 
                  type="date" 
                  id="date"
                  value={eventData.date}
                  onChange={(e) => setEventData({...eventData, date: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    type="number" 
                    id="guests"
                    placeholder="50"
                    className="pl-10"
                    value={eventData.guestCount}
                    onChange={(e) => setEventData({...eventData, guestCount: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select 
                    className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={eventData.budget}
                    onChange={(e) => setEventData({...eventData, budget: e.target.value})}
                  >
                    <option value="">Select Budget</option>
                    <option value="5000-10000">₵5,000 - ₵10,000</option>
                    <option value="10000-25000">₵10,000 - ₵25,000</option>
                    <option value="25000-50000">₵25,000 - ₵50,000</option>
                    <option value="50000+">₵50,000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Services Needed</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full">
                Get My Custom Event Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
