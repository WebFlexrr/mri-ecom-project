import CategorySection from "@/components/CategorySection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex-grow">
        <HeroSection />

        <CategorySection />

        {/* <FeaturedSection
          title="Customer Favorites"
          subtitle="Our most loved products that have become part of daily rituals"
          products={featuredProducts.slice(0, 4)}
          linkTo="/products"
          linkText="View All Products"
          bgColor="bg-white"
        /> */}

        <TestimonialsSection />

        {/* <FeaturedSection
          title="Just Arrived"
          subtitle="Our newest creations, designed to bring fresh inspiration to your daily practice"
          products={newArrivals.slice(0, 4)}
          linkTo="/products"
          linkText="View All New Arrivals"
          bgColor="bg-bloom-cream/50"
        /> */}

        <NewsletterSection />
      </main>

      <Footer />
    </main>
  );
}
