"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useOrderStore, Order } from "../../../store/useOrderStore";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatters";
import { useParams } from "next/navigation";

// Mock API function (replace with your actual API call)
const fetchOrderDetails = async (orderId: string): Promise<Order> => {
    // Simulate API call
    return {
        orderId,
        orderDate: "April 16, 2025",
        status: "Confirmed",
        total: 149.99,
        paymentMethod: "Credit Card",
        items: [
            {
                productId: "prod1",
                productName: "Wireless Headphones",
                productImage: "/images/headphones.jpg",
                productSlug: "wireless-headphones",
                quantity: 1,
                size: "One Size",
                color: "Black",
                price: 99.99,
            },
            {
                productId: "prod2",
                productName: "USB-C Cable",
                productImage: "/images/usb-c.jpg",
                productSlug: "usb-c-cable",
                quantity: 2,
                size: "N/A",
                color: "White",
                price: 25.0,
            },
        ],
        shipping: {
            name: "John Doe",
            address: "123 Main St, Apt 4B, Springfield, IL 62701",
            phone: "(555) 123-4567",
            estimatedDelivery: "April 20, 2025",
        },
    };
};

const OrderDetailsPage = () => {
    const params = useParams();
    const orderId = params.orderId as string;
    const { orders, setOrder, cancelOrder } = useOrderStore((state) => ({
        orders: state.orders,
        setOrder: state.setOrder,
        cancelOrder: state.cancelOrder,
    }));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch order details and sync with store
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const orderData = await fetchOrderDetails(orderId);
                setOrder(orderData);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch order details");
                setLoading(false);
            }
        };
        fetchData();
    }, [orderId, setOrder]);

    const order = orders.find((o) => o.orderId === orderId);

    const handleCancelOrder = () => {
        if (confirm("Are you sure you want to cancel this order?")) {
            cancelOrder(orderId);
            toast.success("Order cancelled successfully");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
                    <p className="text-lg text-gray-500">Loading...</p>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
                    <p className="text-lg text-red-500">{error || "Order not found"}</p>
                    <Link href="/shop">
                        <Button variant="outline" className="mt-4">
                            Browse Products
                        </Button>
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
                <h1 className="text-3xl font-bold text-bloom-dark/90">Order Details #{order.orderId}</h1>

                {/* Order Summary */}
                <Card className="w-full mt-8">
                    <CardContent className="flex flex-col gap-4 pt-4">
                        <h2 className="text-lg font-semibold">Order Summary</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">
                                    <strong>Order Date:</strong> {order.orderDate}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={
                                            order.status === "Cancelled"
                                                ? "text-red-500 font-medium"
                                                : "text-green-500 font-medium"
                                        }
                                    >
                                        {order.status}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    <strong>Total:</strong> {formatCurrency(order.total)}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <strong>Payment Method:</strong> {order.paymentMethod}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Items Ordered */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {order.items.map((item) => (
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
                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                <p className="text-lg font-bold">{formatCurrency(item.price)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Shipping Information */}
                <Card className="w-full mt-8">
                    <CardContent className="flex flex-col gap-4 pt-4">
                        <h2 className="text-lg font-semibold">Shipping Information</h2>
                        <p className="text-sm text-gray-500">
                            <strong>Name:</strong> {order.shipping.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Address:</strong> {order.shipping.address}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Phone:</strong> {order.shipping.phone}
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Estimated Delivery:</strong> {order.shipping.estimatedDelivery}
                        </p>
                    </CardContent>
                    <Separator />
                    <CardFooter className="flex justify-between items-center pt-4">
                        {order.status !== "Cancelled" && (
                            <Button variant="outline" onClick={handleCancelOrder}>
                                Cancel Order
                            </Button>
                        )}
                        <div className="flex space-x-2">
                            <Button
                                variant="outline"
                                asChild
                            >
                                <Link href={`/orders/${order.orderId}/track`}>
                                    Track Order
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                asChild
                            >
                                <Link href="/support">
                                    Contact Support
                                </Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default OrderDetailsPage;