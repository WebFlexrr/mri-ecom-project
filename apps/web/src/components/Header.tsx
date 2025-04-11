"use client"
import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-bloom-cream border-b border-bloom-pink/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-medium text-bloom-dark">
          Bloom & Build
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-bloom-dark/80">
          <Link href="/" className="hover:text-bloom-coral transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-bloom-coral transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-bloom-coral transition-colors">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="text-bloom-dark/70 hover:text-bloom-coral transition-colors">
            <Heart size={20} />
          </Link>
          <Link href="/cart" className="text-bloom-dark/70 hover:text-bloom-coral transition-colors">
            <ShoppingBag size={20} />
          </Link>
          
          <button 
            className="md:hidden text-bloom-dark/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-8 animate-fade-in">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-medium text-bloom-dark">
              Bloom & Build
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-12 text-lg">
            <Link href="/" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/wishlist" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              Wishlist
            </Link>
            <Link href="/cart" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
