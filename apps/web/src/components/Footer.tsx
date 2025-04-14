import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#374151] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 w-full max-w-6xl  md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={"/"} className="flex  py-3 w-fit items-center gap-3">
              {/* <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-black"> */}
                <Image
                  src={"/logos/white-logo.png"}
                  width={30}
                  height={30}
                  alt={"Webflexrr Labs."}
                  className=""
                />
              {/* </div> */}
              <div className=" text-xl font-medium ">
                Webflexrr Shops
              </div>
            </Link>
            
            {/* <p className="text-white/70 mb-4">
              Thoughtfully crafted tools for a more mindful, purposeful life.
            </p> */}
            <div className="flex space-x-4 text-white/70">
              <a href="#" className="hover:text-bloom-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-bloom-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-bloom-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-bloom-coral transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <div
                  // href="/products?category=planners"
                  className="hover:text-bloom-coral transition-colors"
                >
                  T-shirts
                </div>
              </li>
              <li>
                <div
                  // href="/products?category=self-care"
                  className="hover:text-bloom-coral transition-colors"
                >
                 Photo-Frames
                </div>
              </li>
              <li>
                <div
                  // href="/products?category=bundles"
                  className="hover:text-bloom-coral transition-colors"
                >
                  Bundles
                </div>
              </li>
              <li>
                <div
                  // href="/products"
                  className="hover:text-bloom-coral transition-colors"
                >
                  All Products
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-bloom-coral transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-bloom-coral transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-bloom-coral transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-bloom-coral transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-white/70 mb-3">
              Join our community for mindful living tips and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-full bg-white/10 border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-bloom-coral"
              />
              <button className="bg-primary px-4 py-2 rounded-r-full hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-white/50 text-sm flex flex-col md:flex-row justify-between">
          <p>© 2025 Webflexrr Labs. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
