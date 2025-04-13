"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useCartStore } from "@/store/useCartStore";
import { usePathname, } from "next/navigation";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCartStore(state => state.cart)
  const pathname = usePathname()

  console.log(pathname)
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navLinks = [{
    path: "/", name: "Home"
  },
  {
    path: "/shop", name: "Shop"
  },
  {
    path: "/Contact", name: "Contact"
  }
  ]


  return (
    <header className="w-full py-6 px-4 md:px-8 bg-bloom-cream border-b border-black/20">

      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <section className="w-fit md:w-full flex items-center justify-items-start md:justify-center ">
          <nav className="hidden  md:flex space-x-8 text-bloom-dark/80">
            {
              navLinks.map(link => <Link key={link.path} href={link.path} className={`${pathname == link.path && "border-b border-black"} hover:text-bloom-coral  transition-colors`}>
                {link.name}
              </Link>)
            }

          </nav>
          <button
            className="md:hidden text-bloom-dark/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </section>
        <section className="w-full items-center flex justify-center ">
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
            <div className=" font-semibold  md:text-lg">
              Webflexrr Shop
            </div>
          </Link>
        </section>
        <section className="w-fit md:w-full flex justify-end items-center">
          <div className="flex items-center space-x-4">
            {/* <Link href="/wishlist" className="text-bloom-dark/70 hover:text-bloom-coral transition-colors">
            <Heart size={20} />
            </Link> */}

            <Link href="/cart" className="text-gray-800 hover:text-primary-600 relative" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

           
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
