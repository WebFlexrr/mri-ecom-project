import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import ComboCard from "@/components/ui/ComboCard";

export default async function Home() {
  // const featuredProducts = getFeaturedProducts();
  // const newArrivals = getNewArrivals();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <AnnouncementBar /> */}
      <Header />
      <main className="flex-col flex ">
        <Hero />
        {/* <HeroSection /> */}

        {/* <CategorySection /> */}
        <ComboCard />

        {/* <FeaturedSection
          title="Customer Favorites"
          subtitle="Our most loved products that have become part of daily rituals"
          products={featuredProducts.slice(0, 4)}
          linkTo="/products"
          linkText="View All Products"
          bgColor="bg-white"
        />
        <FeaturedSection
          title="Customer Favorites"
          subtitle="Our most loved products that have become part of daily rituals"
          products={featuredProducts.slice(0, 4)}
          linkTo="/products"
          linkText="View All Products"
          bgColor="bg-white"
        />

        <TestimonialsSection /> */}

        {/* <FeaturedSection
          title="Just Arrived"
          subtitle="Our newest creations, designed to bring fresh inspiration to your daily practice"
          products={newArrivals.slice(0, 4)}
          linkTo="/products"
          linkText="View All New Arrivals"
          bgColor="bg-bloom-cream/50"
        /> */}
        {/* <FaqSection
          title="Frequently Asked Questions"
          subtitle="Our most loved products that have become part of daily rituals"
          products={featuredProducts.slice(0, 4)}
          linkTo="/products"
          linkText="View All Products"
          bgColor="bg-white"
        /> */}

        {/* <NewsletterSection /> */}
      </main>

      <Footer />
    </div>
  );
}
