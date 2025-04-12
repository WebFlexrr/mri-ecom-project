"use client"
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { X, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from '@/store/cartStore';
import { useStore } from "@/store/useStore";



const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success("Item removed from cart");
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const product = getProductById(item.product._id);
      if (product) {
        const price = product.discountPrice || product.price;
        return total + price * item.quantity;
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className=" py-20">
        <div className="w-full mx-auto max-w-6xl">
          <h1 className="text-3xl font-medium mb-6">Your Cart</h1>

          {cart.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  {cart.map((item) => {
                    const product = getProductById(item.product._id);
                    if (!product) return null;

                    return (
                      <div
                        key={item.product._id}
                        className="flex border-b border-bloom-pink/20 py-6 last:border-0 last:pb-0 first:pt-0"
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={1000}
                            height={0}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between">
                            <Link
                              href={`/product/${product.id}`}
                              className="font-medium hover:text-bloom-coral transition-colors"
                            >
                              {product.name}
                            </Link>
                            <button
                              onClick={() => handleRemoveItem(product.id)}
                              className="text-bloom-gray hover:text-bloom-coral transition-colors"
                              title="Remove item"
                            >
                              <X size={18} />
                            </button>
                          </div>

                          <p className="text-bloom-gray text-sm mb-3">
                            {product.tagline}
                          </p>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center border rounded-full overflow-hidden">
                              <button
                                className="px-2 py-1 bg-bloom-pink/20 text-bloom-dark"
                                onClick={() =>
                                  handleUpdateQuantity(
                                    product.id,
                                    item.quantity - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <span className="px-4 py-1">{item.quantity}</span>
                              <button
                                className="px-2 py-1 bg-bloom-pink/20 text-bloom-dark"
                                onClick={() =>
                                  handleUpdateQuantity(
                                    product.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>

                            <div className="text-right">
                              {product.discountPrice ? (
                                <>
                                  <span className="font-medium">
                                    $
                                    {(
                                      product.discountPrice * item.quantity
                                    ).toFixed(2)}
                                  </span>
                                  <span className="text-bloom-gray line-through text-sm ml-2">
                                    $
                                    {(product.price * item.quantity).toFixed(2)}
                                  </span>
                                </>
                              ) : (
                                <span className="font-medium">
                                  ${(product.price * item.quantity).toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/shop"
                  className="text-bloom-coral hover:underline flex items-center"
                >
                  <ShoppingBag size={16} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>

              {/* Order summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                  <h2 className="font-medium text-lg mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-bloom-gray">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-bloom-gray">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-bloom-pink/20 pt-3 mt-3 flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link href={"/checkout"}>
                  <Button className="btn-primary w-full mb-4">
                  Proceed to Checkout
                  </Button>
                  </Link>

                  <div className="text-center text-bloom-gray text-sm">
                    <p className="mb-2">Secure Checkout</p>
                    <div className="flex justify-center space-x-2">
                      <span>Visa</span>
                      <span>Mastercard</span>
                      <span>PayPal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bloom-pink/20 rounded-full mb-4">
                <ShoppingBag size={24} className="text-bloom-coral" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-bloom-gray mb-6">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link href="/products">
                <Button className="btn-primary">Start Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
