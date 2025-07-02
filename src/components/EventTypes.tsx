import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface EventType {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const eventTypes: EventType[] = [
  {
    title: "Weddings",
    description: "Your perfect day, flawlessly executed",
    image: "🌹",
    features: ["Venue coordination", "Vendor management", "Timeline planning"]
  },
  {
    title: "Corporate Events", 
    description: "Professional gatherings that leave an impression",
    image: "🏢",
    features: ["Team building", "Product launches", "Award ceremonies"]
  },
  {
    title: "Birthday Parties",
    description: "Memorable celebrations for all ages",
    image: "🎂",
    features: ["Theme planning", "Entertainment", "Custom decorations"]
  },
  {
    title: "Cultural Festivals",
    description: "Authentic celebrations of heritage and tradition",
    image: "🎭",
    features: ["Cultural programming", "Traditional decor", "Community engagement"]
  },
  {
    title: "Galas & Fundraisers",
    description: "Elegant events that make a difference",
    image: "✨",
    features: ["Donor management", "Auction coordination", "Media coverage"]
  },
  {
    title: "Education and learning",
    description: "Build values that shape personal growth and societal progress.",
    image: "🎤",
    features: ["Seminars", "Workshops", "Conferences", "Learning Opportunities"]
  }
];

export const EventTypes = () => {
  return (
    <section id="events" className="py-16 bg-white" aria-labelledby="events-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="events-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Events We Specialize In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to large-scale productions, we have the expertise 
            to make your vision come to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {eventTypes.map((event, index) => (
            <Card 
              key={`${event.title}-${index}`} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              role="listitem"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{event.image}</div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2" role="list">
                  {event.features.map((feature, idx) => (
                    <li key={`${event.title}-feature-${idx}`} className="flex items-center text-sm text-gray-600" role="listitem">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" aria-hidden="true"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
