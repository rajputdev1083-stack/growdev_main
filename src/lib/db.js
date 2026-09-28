// Simulated Database for 10,000+ Programmatic SEO Pages

import { cities as originalCities } from '@/data/cityData';

// Helper to slugify
export const slugify = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') || '';
export const unslugify = (slug) => slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';

export const states = [...new Set(originalCities.map(c => c.state))].map(stateName => ({
  id: slugify(stateName),
  name: stateName
}));

export const cities = originalCities.map(c => ({
  id: c.slug,
  name: c.name,
  stateId: slugify(c.state)
}));

const commonAreas = [
  "Civil Lines", "Cantonment", "Railway Station Area", "Main Market", "Sadar Bazar", 
  "Industrial Area", "Phase 1", "Phase 2", "Housing Board Colony", "Model Town", 
  "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", 
  "Gandhi Nagar", "Subhash Nagar", "Jawahar Nagar", "Shastri Nagar", "Ram Nagar", 
  "Shivaji Park", "Vijay Nagar", "Adarsh Nagar", "Ashok Vihar", "Vasant Vihar", 
  "City Center", "Old City", "New Extension", "Medical College Road", "University Area",
  "Transport Nagar", "Electronics Market", "Kisan Marg", "Station Road", "MG Road",
  "Ring Road", "Bypass Road", "Highway Point", "IT Park", "Business District",
  "High Court Area", "Indira Nagar", "Rajiv Nagar", "Sanjay Nagar", "Patel Nagar",
  "Ambedkar Nagar", "Tagore Town", "Kailash Colony", "Defense Colony", "Police Lines"
];

export const locations = cities.flatMap(c => 
  commonAreas.map(area => ({
    id: slugify(`${area}`),
    name: `${area}`,
    cityId: c.id
  }))
);

export const services = [
  { id: 'web-development-service', name: 'Web Development Service' },
  { id: 'seo-service', name: 'SEO Service' },
  { id: 'app-development', name: 'App Development' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'ecommerce-solutions', name: 'E-commerce Solutions' },
  { id: 'ui-ux-design', name: 'UI/UX Design' },
  { id: 'content-writing', name: 'Content Writing' },
  { id: 'social-media-management', name: 'Social Media Management' },
];



export function getAllCombinations() {
  const paths = [];
  states.forEach(s => {
    cities.filter(c => c.stateId === s.id).forEach(c => {
      locations.filter(l => l.cityId === c.id).forEach(l => {
        services.forEach(sec => {
          paths.push({
            state: s.id,
            city: c.id,
            location: l.id,
            service: sec.id,
          });
        });
      });
    });
  });
  return paths;
}

export function getLocationDetails(locationId) {
  return locations.find(l => l.id === locationId) || { id: locationId, name: unslugify(locationId) };
}

export function getCityDetails(cityId) {
  return cities.find(c => c.id === cityId) || { id: cityId, name: unslugify(cityId) };
}

export function getServiceDetails(serviceId) {
  return services.find(sec => sec.id === serviceId) || { id: serviceId, name: unslugify(serviceId) };
}

export function getLocationsByCity(cityId) {
  return locations.filter(l => l.cityId === cityId);
}

export function getAllServices() {
  return services;
}
