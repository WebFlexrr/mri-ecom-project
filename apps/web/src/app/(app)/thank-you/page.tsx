"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const ThankYouPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // Generate a random order ID
            router.push("/shop")
            // Navigate to order preview page with the order ID
        }, 2000);
    })
    return (
        <div className="min-h-screen flex flex-col">

            <Header />
            <div className='w-full h-full border flex flex-1 items-center justify-center'>
                <div className='w-fit flex flex-col items-center '>


                    <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                    <p className="text-lg mb-8">Your order has been placed successfully.</p>
                    <Link href="/shop">
                        <Button className="text-primary-600 hover:underline">Continue Shopping</Button>
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ThankYouPage; 