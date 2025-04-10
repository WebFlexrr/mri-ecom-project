
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bloom-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-4">Bloom & Build</h3>
            <p className="text-white/70 mb-4">Thoughtfully crafted tools for a more mindful, purposeful life.</p>
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
              <li><Link to="/products?category=planners" className="hover:text-bloom-coral transition-colors">Planners</Link></li>
              <li><Link to="/products?category=self-care" className="hover:text-bloom-coral transition-colors">Self-Care</Link></li>
              <li><Link to="/products?category=bundles" className="hover:text-bloom-coral transition-colors">Bundles</Link></li>
              <li><Link to="/products" className="hover:text-bloom-coral transition-colors">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/faq" className="hover:text-bloom-coral transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-bloom-coral transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-bloom-coral transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="hover:text-bloom-coral transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-white/70 mb-3">Join our community for mindful living tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-full bg-white/10 border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-bloom-coral"
              />
              <button className="bg-bloom-coral px-4 py-2 rounded-r-full hover:bg-bloom-coral/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-white/50 text-sm flex flex-col md:flex-row justify-between">
          <p>© 2025 Bloom & Build. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
