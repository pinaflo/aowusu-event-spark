
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Get event planning tips, restaurant recommendations, and exclusive offers 
            delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex space-x-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" variant="secondary" className="px-8">
              Subscribe
            </Button>
          </div>
        </form>

        <div className="text-center mt-8 text-gray-200">
          <p className="text-sm">
            Join 10,000+ event planners and food lovers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
