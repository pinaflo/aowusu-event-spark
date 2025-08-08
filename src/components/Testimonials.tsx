import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  event: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    event: "Wedding",
    rating: 5,
    text: "ABONTEN made our dream wedding come true! Every detail was perfect, from the venue coordination to the last dance. They truly understood our vision.",
    image: "👰"
  },
  {
    name: "Marcus Chen",
    event: "Corporate Conference",
    rating: 5,
    text: "Outstanding professional service. They handled our 300-person tech conference flawlessly. The logistics were seamless and our speakers were impressed.",
    image: "👨‍💼"
  },
  {
    name: "Elena Rodriguez",
    event: "Birthday Celebration",
    rating: 5,
    text: "My 40th birthday party was absolutely magical! ABONTEN took care of everything while I enjoyed celebrating with my loved ones. Highly recommend!",
    image: "🎉"
  },
  {
    name: "David Thompson",
    event: "Cultural Festival",
    rating: 5,
    text: "They helped us organize our community's annual heritage festival. Their attention to cultural details and community engagement was exceptional.",
    image: "🎭"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their ABONTEN experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={`testimonial-${index}`} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`star-${index}-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-3" role="img" aria-label={`${testimonial.event} icon`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600" role="img" aria-label="Overall rating: 4.9 out of 5 stars from 200+ reviews">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-semibold">4.9/5</span>
            <span>average rating from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
