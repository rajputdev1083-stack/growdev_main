import { getLocationsByCity, getAllServices, unslugify } from './db';

// Deterministic random number generator based on string seed
function seededRandom(seedStr) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(31, h) + seedStr.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

export function getInternalLinks(state, city, location, service) {
  const allLocations = getLocationsByCity(city);
  const allServices = getAllServices();
  
  // A deterministic random instance for this specific page
  const rand = seededRandom(`${city}-${location}-${service}`)();
  
  // 1. Parent Links
  const parentLinks = [
    { name: `All services in ${unslugify(city)}`, url: `/${state}/${city}` },
    { name: `All services in ${unslugify(location)}`, url: `/${state}/${city}/${location}` }
  ];
  
  // 2. 5 Nearby Locations
  // We shuffle or pick deterministically based on page seed so it's consistent per page but varies between pages
  const otherLocations = allLocations.filter(a => a.id !== location);
  // Simple deterministic pick
  const nearbyLocations = [];
  const offset = rand % Math.max(1, otherLocations.length);
  for (let i = 0; i < 5; i++) {
    if (otherLocations.length > 0) {
      const idx = (offset + i) % otherLocations.length;
      nearbyLocations.push({
         name: `${unslugify(service)} in ${otherLocations[idx].name}`,
         url: `/${state}/${city}/${otherLocations[idx].id}/${service}`
      });
    }
  }

  // 3. All services in same location
  const sameLocationServices = allServices
    .filter(s => s.id !== service)
    .map(s => ({
      name: `${s.name} in ${unslugify(location)}`,
      url: `/${state}/${city}/${location}/${s.id}`
    }));

  // 4. Same service in other locations
  const crossLocationLinks = nearbyLocations; // already maps to the same service in other locations!

  // Sibling locations in same city
  const siblingLinks = allLocations.filter(a => a.id !== location).map(a => ({
    name: `Agencies in ${a.name}`,
    url: `/${state}/${city}/${a.id}`
  }));

  return {
    parentLinks,
    nearbyLocations,
    sameLocationServices,
    crossLocationLinks,
    siblingLinks
  };
}


// --- CONTENT SPINNING ENGINE ---

const intros = [
  "Are you looking for professional {service} in {location}, {city}? Your search ends here. We provide top-notch, highly reliable {service} tailored to meet the dynamic needs of businesses operating near {location}.",
  "Finding reliable {service} in {location}, {city} can be challenging. However, our expert team is here to deliver exceptional {service} that helps you scale. Whether you are situated near the main markets of {location} or the surrounding commercial hubs, we've got you covered.",
  "When it comes to the best {service} in {location}, {city}, businesses trust our proven expertise. We have track records of delivering outstanding {service} to clients locally in {location}.",
  "Welcome to the premier provider of {service} in {location}, {city}. If you need cutting-edge {service} to elevate your business footprint around {location}, we are the local partners you need."
];

const whyUsPool = [
  "Deep understanding of the {location} local market dynamics.",
  "Custom strategies designed specifically for clients in {city}.",
  "Quick response times and dedicated support for localized {service}.",
  "Proven track record serving numerous neighborhoods around {location}.",
  "Transparent pricing with no hidden costs for {service}.",
  "Highly trained professionals providing {service} near {location}."
];

const faqsPool = [
  { q: "What is the cost of {service} in {location}?", a: "The cost of {service} in {location} varies depending on the scope of your requirements. We offer highly competitive local pricing for businesses in {city}." },
  { q: "Do you provide customized {service} for small businesses in {location}?", a: "Yes, our {service} is fully tailored for both small businesses and large enterprises located in and around {location}." },
  { q: "How long does it take to see results from your {service}?", a: "Results from our {service} in {city} typically begin showing within a few weeks, depending on the complexity of your exact needs in {location}." },
  { q: "Are your {service} packages scalable?", a: "Absolutely. As your business in {location} grows, our {service} can be easily scaled up to match your expanding operational needs." },
  { q: "How do I get started with {service} in {location}?", a: "Getting started with our {service} in {location} is easy. Simply contact us through our local {city} hotline or fill out the form securely." },
  { q: "Is ongoing support included for {service}?", a: "Yes! Every {service} we provide in {location} is backed by our robust ongoing support team based near {city}." },
  { q: "Why choose your {service} over competitors in {location}?", a: "Our deep local footprint in {location}, dedicated experts, and commitment to customized {service} make us the #1 choice in {city}." }
];

// Helper to inject variables
const inject = (text, location, city, service) => {
  return text
    .replace(/{location}/g, location)
    .replace(/{city}/g, city)
    .replace(/{service}/g, service);
};

export function generatePageContent(cityRaw, locationRaw, serviceRaw) {
  const city = unslugify(cityRaw);
  const location = unslugify(locationRaw);
  const service = unslugify(serviceRaw);
  
  const randNum = seededRandom(`${cityRaw}-${locationRaw}-${serviceRaw}`)();
  
  // Pick intro
  const introTemplate = intros[randNum % intros.length];
  const introText = inject(introTemplate, location, city, service);
  
  // Pick FAQs (Select exactly 5 uniquely)
  const shuffledFaqs = [...faqsPool].sort((a, b) => {
    const rA = seededRandom(a.q + location)();
    const rB = seededRandom(b.q + location)();
    return rA - rB;
  });
  const selectedFaqs = shuffledFaqs.slice(0, 5).map(f => ({
    q: inject(f.q, location, city, service),
    a: inject(f.a, location, city, service)
  }));

  // Pick Why Us bullet points
  const shuffledWhyUs = [...whyUsPool].sort((a, b) => {
    const rA = seededRandom(a + location)();
    const rB = seededRandom(b + location)();
    return rA - rB;
  });
  const whyUs = shuffledWhyUs.slice(0, 4).map(w => inject(w, location, city, service));

  // Paragraph 2 (Services section)
  const paragraph2 = inject(
    "Our comprehensive range of {service} is designed explicitly for the competitive landscape of {city}. Many organizations operating in {location} struggle with generic solutions. We bypass that by offering highly specialized {service} that integrates seamlessly into your daily operations. From initial consultation to final delivery, every step of our {service} is optimized to provide maximum value for operations based in {location}.",
    location, city, service
  );

  // Paragraph 3 (Local expansion)
  const paragraph3 = inject(
    "Being a part of the {city} business ecosystem means your strategy needs to be flawless. With our {service}, your brand can easily dominate the local market share in {location}. We not only serve clients right here in {location}, but our expanding network helps us deliver premium {service} across the entire city.",
    location, city, service
  );

  return {
    h1: `${service} in ${location}, ${city}`,
    introText,
    paragraph2,
    paragraph3,
    whyUs,
    faqs: selectedFaqs
  };
}
