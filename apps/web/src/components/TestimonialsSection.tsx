
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    location: 'New York, NY',
    text: "The daily planner has completely transformed my workflow. It's beautiful, thoughtfully designed, and brings so much peace to my planning process.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael T.',
    location: 'Austin, TX',
    text: "I've tried many journals before, but this one feels different. It's like having a conversation with a friend who really wants you to succeed.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma W.',
    location: 'Seattle, WA',
    text: "The self-care bundle was exactly what I needed. It's helped me create small moments of mindfulness throughout my busy days.",
    rating: 4,
  },
  {
    id: '4',
    name: 'James K.',
    location: 'Chicago, IL',
    text: "I purchased the gratitude journal as a gift for my wife and ended up getting one for myself too. We both use it daily and love it.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="border-0 shadow-sm h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < testimonial.rating
                  ? "fill-bloom-coral text-bloom-coral"
                  : "text-bloom-gray/30"
              }
            />
          ))}
        </div>

        <p className="italic text-bloom-dark mb-4">
          &quot;{testimonial.text}&quot;
        </p>

        <div className="flex items-center mt-auto">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-bloom-pink flex items-center justify-center mr-3">
              <span className="text-bloom-coral font-medium">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-bloom-gray">{testimonial.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-bloom-sage/10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">Words from Our Community</h2>
          <p className="text-bloom-gray max-w-2xl mx-auto">
            Discover how our products have become a part of daily rituals
          </p>
        </div>
        
        <div className="relative px-8">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3 p-2">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
