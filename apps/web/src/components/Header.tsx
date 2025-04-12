"use client";
import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-bloom-cream border-b border-bloom-pink/20">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <section className="w-full items-center flex justify-items-start ">
          <Link
            href="/"
            className="text-xl md:text-2xl font-medium text-bloom-dark "
          >

          </Link>
          <Link href={"/"} className="flex w-fit items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-black">
              <Image
                src={"/logos/white-logo.png"}
                width={21}
                height={21}
                alt={"Webflexrr Labs."}
                className="invert"
              />
            </div>
            <div className=" font-bold  md:text-lg">
              Webflexrr Shops
            </div>
          </Link>
        </section>
        <section className="w-full flex items-center justify-center ">
          <nav className="hidden  md:flex space-x-8 text-bloom-dark/80">
            <Link href="/" className="hover:text-bloom-coral transition-colors">
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-bloom-coral transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="hover:text-bloom-coral transition-colors"
            >
              Contact
            </Link>
            {/* <Link href="/about" className="hover:text-bloom-coral transition-colors">About</Link> */}
          </nav>
        </section>
        <section className="w-full flex justify-end items-center">
          <div className="flex items-center space-x-4">
            {/* <Link href="/wishlist" className="text-bloom-dark/70 hover:text-bloom-coral transition-colors">
            <Heart size={20} />
            </Link> */}
            <Link
              href="/cart"
              className="text-bloom-dark/70 hover:text-bloom-coral transition-colors"
            >
              <ShoppingBag size={20} />
            </Link>

            <button
              className="md:hidden text-bloom-dark/70"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </section>
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
            <Link
              href="/"
              className="text-bloom-dark hover:text-bloom-coral"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-bloom-dark hover:text-bloom-coral"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            {/* <Link href="/about" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              About
            </Link> */}
            {/* <Link href="/wishlist" className="text-bloom-dark hover:text-bloom-coral" onClick={() => setIsMenuOpen(false)}>
              Wishlist
            </Link> */}
            <Link
              href="/cart"
              className="text-bloom-dark hover:text-bloom-coral"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
