import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, DollarSign, AlertCircle } from "lucide-react";

interface EventData {
  eventType: string;
  date: string;
  guestCount: string;
  budget: string;
  services: string[];
}

interface FormErrors {
  eventType?: string;
  date?: string;
  guestCount?: string;
  budget?: string;
  services?: string;
}

export const EventPlanningTool = () => {
  const [eventData, setEventData] = useState<EventData>({
    eventType: "",
    date: "",
    guestCount: "",
    budget: "",
    services: []
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Catering", "Photography", "Music/DJ", "Decorations", 
    "Venue", "Transportation", "Security", "Entertainment"
  ];

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!eventData.eventType) {
      newErrors.eventType = "Event type is required";
    }

    if (!eventData.date) {
      newErrors.date = "Event date is required";
    } else {
      const selectedDate = new Date(eventData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = "Event date cannot be in the past";
      }
    }

    if (!eventData.guestCount) {
      newErrors.guestCount = "Number of guests is required";
    } else {
      const guestCount = parseInt(eventData.guestCount);
      if (guestCount < 1) {
        newErrors.guestCount = "Minimum 1 guest required";
      } else if (guestCount > 1000) {
        newErrors.guestCount = "Maximum 1000 guests allowed";
      }
    }

    if (!eventData.budget) {
      newErrors.budget = "Budget range is required";
    }

    if (eventData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setEventData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
    
    // Clear service error when user makes a selection
    if (checked && errors.services) {
      setErrors(prev => ({ ...prev, services: undefined }));
    }
  };

  const handleInputChange = (field: keyof EventData, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Event data:", eventData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setEventData({
          eventType: "",
          date: "",
          guestCount: "",
          budget: "",
          services: []
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="text-center py-12">
              <div className="text-green-600 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your event details have been submitted successfully. We'll get back to you with a customized plan within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

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
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <select 
                    id="eventType"
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.eventType ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={eventData.eventType}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                    aria-describedby={errors.eventType ? "eventType-error" : undefined}
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="conference">Conference</option>
                    <option value="gala">Gala</option>
                    <option value="cultural">Cultural Festival</option>
                  </select>
                  {errors.eventType && (
                    <div id="eventType-error" className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.eventType}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Event Date *</Label>
                  <Input 
                    type="date" 
                    id="date"
                    min={getMinDate()}
                    value={eventData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className={errors.date ? 'border-red-500' : ''}
                    aria-describedby={errors.date ? "date-error" : undefined}
                  />
                  {errors.date && (
                    <div id="date-error" className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.date}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="number" 
                      id="guests"
                      min="1"
                      max="1000"
                      placeholder="50"
                      className={`pl-10 ${errors.guestCount ? 'border-red-500' : ''}`}
                      value={eventData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', e.target.value)}
                      aria-describedby={errors.guestCount ? "guests-error" : undefined}
                    />
                  </div>
                  {errors.guestCount && (
                    <div id="guests-error" className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.guestCount}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range *</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select 
                      id="budget"
                      className={`w-full pl-10 p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.budget ? 'border-red-500' : 'border-gray-300'
                      }`}
                      value={eventData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      aria-describedby={errors.budget ? "budget-error" : undefined}
                    >
                      <option value="">Select Budget</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>
                  {errors.budget && (
                    <div id="budget-error" className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.budget}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Services Needed *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="services"
                        value={service}
                        checked={eventData.services.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked)}
                        className="rounded border-gray-300 text-primary focus:ring-primary" 
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.services}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    "Get My Custom Event Plan"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
