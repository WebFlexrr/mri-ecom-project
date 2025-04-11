"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive mindful living tips in your inbox soon.",
      });
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-primary text-white text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Join Our Community</h2>
        <p className="mb-8">
          Sign up for mindful living tips, exclusive offers, and first access to new releases.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-full bg-white/10 border-0 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <Button 
            type="submit" 
            className="bg-white text-bloom-coral hover:bg-white/90 px-6 font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
