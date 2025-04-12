"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategorySelector from "@/components/CategorySelector";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types/product";
import { getProductsByCategory, products } from "@/data/products";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

const ShopPage = () => {
  const params = useParams<{ category: string; purpose: string }>();
  const router = useRouter();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [purposeFilter, setPurposeFilter] = useState<string | null>(null);

  useEffect(() => {
    const category = params.category || "all";
    const purpose = params.purpose;

    // const category = searchParams.get("category") || "all";
    // const purpose = searchParams.get("purpose");

    let filteredProducts: Product[];

    if (category === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = getProductsByCategory(category);
    }

    if (purpose) {
      filteredProducts = filteredProducts.filter((product) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        product.purposes.includes(purpose as any)
      );
      setPurposeFilter(purpose);
    } else {
      setPurposeFilter(null);
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case "price-high":
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case "newest":
        // In a real app, would sort by date added
        filteredProducts = filteredProducts
          .filter((p) => p.badges?.includes("new"))
          .concat(filteredProducts.filter((p) => !p.badges?.includes("new")));
        break;
      case "bestselling":
        filteredProducts = filteredProducts
          .filter((p) => p.badges?.includes("bestseller"))
          .concat(
            filteredProducts.filter((p) => !p.badges?.includes("bestseller"))
          );
        break;
      // featured is default, no sorting needed
    }

    setDisplayedProducts(filteredProducts);
  }, [params.category, params.purpose, sortOption]);

  const purposes = [
    { id: "students", name: "For Students" },
    { id: "creators", name: "For Creators" },
    { id: "professionals", name: "For Professionals" },
    { id: "personal-growth", name: "For Personal Growth" },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePurposeChange = (purpose: string) => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("purpose") === purpose) {
      searchParams.delete("purpose");
    } else {
      searchParams.set("purpose", purpose);
    }

    router.push(`/${location.pathname}?${searchParams.toString()}`);

    // Trigger re-fetch with useEffect
    window.dispatchEvent(new Event("popstate"));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow section-padding">
        <div className="container mx-auto">
          <h1 className="text-3xl font-medium text-center mb-2">
            Shop All Products
          </h1>
          <p className="text-bloom-gray text-center mb-8">
            Mindfully created tools for your daily practice.
          </p>

          <CategorySelector />

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Button
              variant="outline"
              className="mb-4 md:mb-0"
              onClick={toggleFilter}
            >
              <Filter size={18} className="mr-2" />
              Filter
            </Button>

            <div className="flex items-center">
              <SlidersHorizontal size={18} className="mr-2 text-bloom-gray" />
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="border-0 focus:ring-0 text-bloom-gray"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestselling">Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {isFilterOpen && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 animate-fade-in">
              <h3 className="font-medium mb-3">Purpose</h3>
              <div className="flex flex-wrap gap-2">
                {purposes.map((purpose) => (
                  <button
                    key={purpose.id}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      purposeFilter === purpose.id
                        ? " text-white"
                        : "bg-bloom-pink/20 text-bloom-dark hover:bg-bloom-pink/40"
                    }`}
                    onClick={() => handlePurposeChange(purpose.id)}
                  >
                    {purpose.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {displayedProducts.length > 0 ? (
            <ProductGrid products={displayedProducts} />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl mb-2">No products found</h3>
              <p className="text-bloom-gray">
                Try adjusting your filters to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShopPage;
