import React from 'react';
import Link from 'next/link';

const ThankYouPage = () => {
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