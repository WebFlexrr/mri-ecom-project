
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WelcomeBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-r from-bloom-pink to-bloom-cream">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 fade-in-element">
          Hi, I&apos;m Tejodeep — I built this for dreamers like you.
        </h1>

        <p className="text-lg md:text-xl text-bloom-dark/80 mb-8 max-w-2xl mx-auto fade-in-element">
          Every product is thoughtfully designed to bring more peace, purpose,
          and intention to your everyday moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-element">
          <Link to="/products">
            <Button className="btn-primary">Shop the Collection</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="btn-secondary">
              My Story
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
