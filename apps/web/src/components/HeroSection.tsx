
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bloom-sage/30 to-bloom-pink/40 -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 fade-in-element">
            Mindful tools for the journey within
          </h1>
          
          <p className="text-lg text-bloom-gray mx-auto max-w-2xl mb-8 fade-in-element">
            Handcrafted planners, journals, and self-care essentials designed to bring more presence and purpose to your everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-element">
            <Link href="/products">
              <Button className="btn-primary w-full sm:w-auto">
                Shop the Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                Our Story
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
