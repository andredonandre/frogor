'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const shortcuts = [
    { icon: '📍', title: 'One medical', address: '1655 3rd St' },
    { icon: '⭐', title: "Daughter's house", address: '1400 Rose Terr' },
    { icon: '⭐', title: 'Grocery store', address: '1521 Walnut St' },
  ];

  const services = [
    { 
      icon: '🕒', 
      title: 'Reserve a ride for later',
    },
    {
      icon: '🍽️',
      title: 'Order food on demand',
    }
  ];

  return (
    <main className="font-sans min-h-screen bg-white p-4 max-w-md mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Uber</h1>
        <div className="bg-gray-100 rounded-lg p-3 flex items-center">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            placeholder="Get a ride"
            className="bg-transparent w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Shortcuts Section */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3">Shortcuts</h2>
        <div className="space-y-3">
          {shortcuts.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border"
            >
              <div className="flex items-start">
                <span className="text-xl mr-3">{item.icon}</span>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-xl font-bold mb-3">Services</h2>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border flex items-center"
            >
              <span className="text-xl mr-3">{service.icon}</span>
              <span className="font-medium">{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-3">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex flex-col items-center text-black">
            <span>🏠</span>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>⋯</span>
            <span className="text-xs">Services</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>📋</span>
            <span className="text-xs">Activity</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <span>👤</span>
            <span className="text-xs">Account</span>
          </button>
        </div>
      </nav>
    </main>
  );
}