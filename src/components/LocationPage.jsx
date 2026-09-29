"use client";

import Link from "next/link";
import { locations, cities as dbCities, services as dbServices } from "@/lib/db";

export default function CityServices({ city, services }) {
  // Directly grab state and programmatic city context mapped from dynamic db.js
  const progData = dbCities.find(c => c.id === city.slug);
  let localLinks = [];
  
  if (progData) {
    const cityLocations = locations.filter(l => l.cityId === progData.id);
    cityLocations.forEach(loc => {
      dbServices.forEach(srv => {
        localLinks.push({
          url: `/${progData.stateId}/${progData.id}/${loc.id}/${srv.id}`,
          text: `${srv.name} in ${loc.name}, ${city.name}`
        });
      });
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Services in {city.name}
        </h1>
        <p className="text-gray-600 mt-3">
          Grow Development provides top services in {city.name}.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/${city.slug}/${service.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {service.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {service.name} in {city.name}
            </p>

            <div className="mt-3 text-blue-600 text-sm">
              Learn More →
            </div>
          </Link>
        ))}
      </div>

      {/* Programmatic SEO Links */}
      {localLinks.length > 0 && (
        <div className="mt-20 border-t pt-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Top {city.name} Local Areas</h2>
          <p className="text-center text-gray-500 mb-10">Explore our digital services across every neighborhood and prime location in {city.name}.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.url}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline truncate bg-blue-50/50 p-3 rounded-md line-clamp-1"
                title={link.text}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}