import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      setIsValidEmail(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className={`flex-1 bg-white text-gray-900 ${
                  !isValidEmail && email ? 'border-red-500 focus:border-red-500' : ''
                }`}
                required
                aria-describedby={!isValidEmail && email ? "email-error" : undefined}
                disabled={isLoading}
              />
              {!isValidEmail && email && (
                <p id="email-error" className="text-red-200 text-sm mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              variant="secondary" 
              className="px-8 whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
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
