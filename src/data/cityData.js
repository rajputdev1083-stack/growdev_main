 // src/data/cityData.js

// Comprehensive list of Indian cities
export const cities = [
  // North India
  { name: "Delhi", slug: "delhi", region: "north", state: "Delhi", country: "India" },
  { name: "Jaipur", slug: "jaipur", region: "north", state: "Rajasthan", country: "India" },
  { name: "Lucknow", slug: "lucknow", region: "north", state: "Uttar Pradesh", country: "India" },
  { name: "Chandigarh", slug: "chandigarh", region: "north", state: "Chandigarh", country: "India" },
  { name: "Amritsar", slug: "amritsar", region: "north", state: "Punjab", country: "India" },
  { name: "Agra", slug: "agra", region: "north", state: "Uttar Pradesh", country: "India" },
  { name: "Varanasi", slug: "varanasi", region: "north", state: "Uttar Pradesh", country: "India" },
  { name: "Kanpur", slug: "kanpur", region: "north", state: "Uttar Pradesh", country: "India" },
  
  // West India
  { name: "Mumbai", slug: "mumbai", region: "west", state: "Maharashtra", country: "India" },
  { name: "Pune", slug: "pune", region: "west", state: "Maharashtra", country: "India" },
  { name: "Ahmedabad", slug: "ahmedabad", region: "west", state: "Gujarat", country: "India" },
  { name: "Surat", slug: "surat", region: "west", state: "Gujarat", country: "India" },
  { name: "Nagpur", slug: "nagpur", region: "west", state: "Maharashtra", country: "India" },
  { name: "Nashik", slug: "nashik", region: "west", state: "Maharashtra", country: "India" },
  { name: "Goa", slug: "goa", region: "west", state: "Goa", country: "India" },
  
  // Central India
  { name: "Indore", slug: "indore", region: "central", state: "Madhya Pradesh", country: "India" },
  { name: "Bhopal", slug: "bhopal", region: "central", state: "Madhya Pradesh", country: "India" },
  { name: "Gwalior", slug: "gwalior", region: "central", state: "Madhya Pradesh", country: "India" },
  { name: "Jabalpur", slug: "jabalpur", region: "central", state: "Madhya Pradesh", country: "India" },
  { name: "Raipur", slug: "raipur", region: "central", state: "Chhattisgarh", country: "India" },
  
  // South India
  { name: "Bangalore", slug: "bangalore", region: "south", state: "Karnataka", country: "India" },
  { name: "Chennai", slug: "chennai", region: "south", state: "Tamil Nadu", country: "India" },
  { name: "Hyderabad", slug: "hyderabad", region: "south", state: "Telangana", country: "India" },
  { name: "Coimbatore", slug: "coimbatore", region: "south", state: "Tamil Nadu", country: "India" },
  { name: "Mysore", slug: "mysore", region: "south", state: "Karnataka", country: "India" },
  { name: "Visakhapatnam", slug: "visakhapatnam", region: "south", state: "Andhra Pradesh", country: "India" },
  { name: "Kochi", slug: "kochi", region: "south", state: "Kerala", country: "India" },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", region: "south", state: "Kerala", country: "India" },
  
  // East India
  { name: "Kolkata", slug: "kolkata", region: "east", state: "West Bengal", country: "India" },
  { name: "Patna", slug: "patna", region: "east", state: "Bihar", country: "India" },
  { name: "Bhubaneswar", slug: "bhubaneswar", region: "east", state: "Odisha", country: "India" },
  { name: "Ranchi", slug: "ranchi", region: "east", state: "Jharkhand", country: "India" },
  { name: "Guwahati", slug: "guwahati", region: "east", state: "Assam", country: "India" },
];

// Comprehensive list of services
export const services = [
  // Development Services
  { name: "Web Development", slug: "web-development", category: "development" },
  { name: "App Development", slug: "app-development", category: "development" },
  { name: "Shopify Store Setup", slug: "shopify-store-setup", category: "development" },
  { name: "WordPress Development", slug: "wordpress-development", category: "development" },
  { name: "RAG System Integration", slug: "rag-system-integration", category: "development" },
  { name: "Custom Software Development", slug: "custom-software-development", category: "development" },
  { name: "E-commerce Development", slug: "ecommerce-development", category: "development" },
  
  // Digital Marketing Services
  { name: "SEO Optimization", slug: "seo", category: "marketing" },
  { name: "Google Ads", slug: "google-ads", category: "marketing" },
  { name: "Meta Ads", slug: "meta-ads", category: "marketing" },
  { name: "Digital Marketing", slug: "digital-marketing", category: "marketing" },
  { name: "Social Media Management", slug: "social-media-management", category: "marketing" },
  { name: "Email Marketing", slug: "email-marketing", category: "marketing" },
  { name: "Content Marketing", slug: "content-marketing", category: "marketing" },
  
  // Creative Services
  { name: "Video Editing", slug: "video-editing", category: "creative" },
  { name: "Logo Design", slug: "logo-design", category: "creative" },
  { name: "AI Content Creation", slug: "ai-content-creation", category: "creative" },
  { name: "Poster Making", slug: "poster-making", category: "creative" },
  { name: "Graphic Design", slug: "graphic-design", category: "creative" },
  { name: "UI/UX Design", slug: "ui-ux-design", category: "creative" },
  { name: "Brand Identity", slug: "brand-identity", category: "creative" },
  
  // Business Services
  { name: "GST Services", slug: "gst-services", category: "business" },
  { name: "Accounting & Ledger", slug: "accounting-ledger", category: "business" },
  { name: "Custom Support", slug: "custom-support", category: "business" },
  { name: "Business Registration", slug: "business-registration", category: "business" },
  { name: "Tax Filing", slug: "tax-filing", category: "business" },
  { name: "Legal Consultation", slug: "legal-consultation", category: "business" },
];

// Helper function to get city by slug
export const getCityBySlug = (slug) => {
  return cities.find(c => c.slug === slug);
};

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return services.find(s => s.slug === slug);
};

// Helper function to get cities by region
export const getCitiesByRegion = (region) => {
  return cities.filter(c => c.region === region);
};

// Helper function to get cities by state
export const getCitiesByState = (state) => {
  return cities.filter(c => c.state === state);
};

// Helper function to get services by category
export const getServicesByCategory = (category) => {
  return services.filter(s => s.category === category);
};

// Helper function to search cities
export const searchCities = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return cities.filter(c => 
    c.name.toLowerCase().includes(lowercaseQuery) ||
    c.state.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to search services
export const searchServices = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(s => 
    s.name.toLowerCase().includes(lowercaseQuery)
  );
};

// Get all regions
export const regions = [
  { name: "North India", slug: "north" },
  { name: "South India", slug: "south" },
  { name: "East India", slug: "east" },
  { name: "West India", slug: "west" },
  { name: "Central India", slug: "central" },
];

// Get all service categories
export const serviceCategories = [
  { name: "Development", slug: "development" },
  { name: "Digital Marketing", slug: "marketing" },
  { name: "Creative Services", slug: "creative" },
  { name: "Business Services", slug: "business" },
];

// Export all data as default object
export default {
  cities,
  services,
  regions,
  serviceCategories,
  getCityBySlug,
  getServiceBySlug,
  getCitiesByRegion,
  getCitiesByState,
  getServicesByCategory,
  searchCities,
  searchServices,
};