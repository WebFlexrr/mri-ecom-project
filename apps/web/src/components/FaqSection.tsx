import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;

  bgColor?: string;
}

const FaqSection: FC<FeaturedSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* <ProductGrid products={products} title={title} subtitle={subtitle} /> */}

        <section className="fade-in-element">
          {(title || subtitle) && (
            <div className="text-center mb-10">
              {title && (
                <h2 className="text-2xl md:text-3xl font-medium mb-3">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-bloom-gray max-w-2xl mx-auto">{subtitle}</p>
              )}
            </div>
          )}
        </section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
