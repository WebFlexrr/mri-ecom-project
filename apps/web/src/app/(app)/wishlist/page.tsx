"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useWishStore } from "@/store/useWishStore";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatters";

const WishList = () => {
  const { Wish, removeFromWishList, clearWishList } = useWishStore((state) => ({
    Wish: state.Wish,
    removeFromWishList: state.removeFromWishList,
    clearWishList: state.clearWishList,
  }));

  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const handleRemoveWish = (productId: string) => {
    removeFromWishList(productId);
    toast.success("Removed from WishList");
  };

  // const handleAddToCart = (item: typeof Wish[0]) => {
  //   try {
  //     addToCart({
  //       product: {
  //         _id: item.productId,
  //         name: item.productName || "Unknown Product",
  //         images: [item.productImage || "/placeholder-image.jpg"],
  //         slug: { current: item.productSlug || "unknown-slug" },
  //         price: item.price || 0,
  //       },
  //       quantity: item.quantity || 1,
  //       size: item.size || "N/A",
  //       color: item.color || "N/A",
  //     });
  //     toast.success("Added to Cart");
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //     toast.error("Failed to add to cart");
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-bloom-dark/90">My WishList</h1>
        {Wish.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-500">Your wishlist is empty.</p>
            <Link href="/shop">
              <Button variant="outline" className="mt-4">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {Wish.map((item) => (
              <Card key={item.productId} className="w-full">
                <CardContent className="flex flex-col gap-4 pt-4">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-sm text-gray-500">
                    {item.size} - {item.color}
                  </p>
                  <p className="text-lg font-bold">{formatCurrency(item.price)}</p>
                </CardContent>
                <Separator />
                <CardFooter className="flex justify-between items-center pt-4">
                  <Button
                    variant="outline"
                    onClick={() => handleRemoveWish(item.productId)}
                  >
                    <X size={16} className="mr-2" /> Remove
                  </Button>
                  {/* <Button
                    variant="outline"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart size={16} className="mr-2" /> Add to Cart
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WishList;