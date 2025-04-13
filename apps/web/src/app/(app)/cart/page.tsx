"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from "@/store/useCartStore";
import { toast } from 'sonner';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link"
import { formatCurrency } from '@/lib/formatters';

const Cart = () => {
    const { cart, removeFromCart, updateCartItemQuantity } = useCartStore();

    // // Add demo products if cart is empty
    // React.useEffect(() => {
    //   const { cart, addToCart } = useAppStore.getState();

    //   if (cart.length === 0) {
    //     // Add fake products for demonstration
    //     addToCart({
    //       productId: "p3",
    //       quantity: 1,
    //       color: "Black",
    //       size: "M"
    //     });

    //     addToCart({
    //       productId: "p7",
    //       quantity: 2,
    //       color: "Blue",
    //       size: "L"
    //     });

    //     addToCart({
    //       productId: "p1",
    //       quantity: 1,
    //       color: "White",
    //       size: "S"
    //     });
    //   }
    // }, []);

    const hasItems = cart.length > 0;

    const handleRemoveItem = (productId: string) => {
        removeFromCart(productId);
        toast.success("Item removed from cart");
    };

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        if (newQuantity > 0) {
            updateCartItemQuantity(productId, newQuantity);
        }
    };

    const calculateSubtotal = (): number => {
        return cart.reduce((total, item) => {
            // const product = getProductById(item.productId);
            return total + (item.price || 0) * item.quantity;
        }, 0);
    };

    const subtotal: number = calculateSubtotal();
    const shipping: number = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const tax: number = subtotal * 0; // 10% tax
    const total: number = subtotal + shipping + tax;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-20">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

                {!hasItems ? (
                    <Card className="text-center p-8">
                        <CardContent className="pt-6">
                            <ShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
                            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                            <p className="text-gray-500 mb-6">
                                Looks like you haven't added any items to your cart yet.
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button asChild className="bg-primary-600 hover:bg-primary-700">
                                <Link href="/shop">Start Shopping</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="pt-6">
                                    {cart.map((item) => {
                                        return (
                                            <div key={item.productId} className="flex flex-col sm:flex-row gap-4 py-4 border-b last:border-0">
                                                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded overflow-hidden">
                                                    <img
                                                        src={item.productImage}
                                                        alt={item.productName}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex-grow">
                                                    <div className="flex justify-between">
                                                        <Link href={`/shop/${item.productSlug}`} className="font-medium hover:text-primary-600">
                                                            {item.productName}
                                                        </Link>
                                                        <button
                                                            onClick={() => handleRemoveItem(item.productId)}
                                                            className="text-gray-400 hover:text-gray-600"
                                                            aria-label="Remove item"
                                                        >
                                                            <X size={18} />
                                                        </button>
                                                    </div>

                                                    <p className="text-sm text-gray-500 mb-2">
                                                        {item.color} / {item.size}
                                                    </p>

                                                    <div className="flex justify-between items-center mt-2">
                                                        <div className="flex items-center border rounded-md">
                                                            <button
                                                                onClick={() => item.quantity > 1 && handleQuantityChange(item.productId, item.quantity - 1)}
                                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                                disabled={item.quantity <= 1}
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="px-3 py-1 min-w-[2rem] text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>

                                                        <p className="font-medium">
                                                            {/* ${formatCurrency(item.price * item.quantity).toFixed(2)} */}
                                                            {formatCurrency(item.price * item.quantity)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Link href="/shop" className="text-sm text-primary-600 hover:underline">
                                        Continue Shopping
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardContent className="pt-6">
                                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                                <span>₹{subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                                <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tax</span>
                                                <span>₹{tax.toFixed(2)}</span>
                                        </div>
                                        <Separator className="my-4" />
                                        <div className="flex justify-between font-bold">
                                            <span>Total</span>
                                                <span>₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Discount code"
                                            className="w-full p-2.5 border rounded-md"
                                        />
                                        <Button variant="outline" className="w-full">
                                            Apply Discount
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full text-black bg-primary hover:bg-primary/35">
                                        <Link href="/checkout">Proceed to Checkout</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>


    );
};

export default Cart;
