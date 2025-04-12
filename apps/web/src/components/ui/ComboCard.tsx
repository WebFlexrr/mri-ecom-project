import Link from 'next/link';
import React from 'react';
import { Button } from './button';

const ComboCard = () => {
  return (
    <section className="section-padding bg-bloom-cream">
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center bottom-3">
        {/* Left Column - Text and Features */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Mohun Bagan ISL Cup Winners 2025</h2>
          <p className="text-gray-600 mb-4">
            A planner designed to help you bloom into your best self while building a life you love. This combo includes a journal and a planner, perfect for daily reflections and planning your day ahead.

          </p>
          
             
            
          <Link href={'/shop/mohun-bagan-isl-cup-winners-2025'}>
            <Button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Buy this combo
            </Button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/400x300" // Replace with actual image URL or import from assets
            alt="Jagruk Planner Combo"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-29 p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center">
        {/* Left Column - Image */}
        <div className="md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/400x300" // Replace with actual image URL or import from assets
            alt="Reusable Jagruk Planner Combo Desk Setup"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Column - Text and Features */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Bloom and Build</h2>
          <p className="text-gray-600 mb-4">
            📝 2x Reusable Daily Planners (17"x14 inch) + 1x Reusable Weekly Planner (17"x14 inch) + Credit/Debit Card Skin + Whiteboard Marker + Duster + Access to Exclusive Jagruk Planner Community
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>✔ Reusable and Residue free</li>
            <li>✔ Ideal for upto 100 uses</li>
            <li>✔ Premium Gumming Sheet (200 GSM, thermal coating)</li>
            <li>✔ Set top priorities & track weekly progress</li>
            <li>✔ Habit Tracker to build consistency & stay accountable</li>
            <li>✔ Paste or Place it anywhere</li>
          </ul>
          <button className="px-10 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Buy this combo
          </button>
        </div>
      </div>
    </section>
  );

}

export default ComboCard;