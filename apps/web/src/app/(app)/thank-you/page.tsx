"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
    const router= useRouter()

    useEffect(()=>{
        setTimeout(() => {
          // Generate a random order ID
          router.push("/shop")
          // Navigate to order preview page with the order ID
        }, 2000);
    })
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg mb-8">Your order has been placed successfully.</p>
            <Link href="/shop">
                <Link href={"/shop"} className="text-primary-600 hover:underline">Continue Shopping</Link>
            </Link>
        </div>
    );
};

export default ThankYouPage; 