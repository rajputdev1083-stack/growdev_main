import { services as baseServices } from "@/data/serviceData";

const PROGRAMMATIC_SERVICE_SLUGS = [
  "web-development",
  "app-development",
  "seo",
  "digital-marketing",
  "google-ads",
];

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const createLocations = (names) =>
  names.map((name) => ({
    name,
    slug: slugify(name),
  }));

export const programmaticStates = [
  {
    name: "Delhi",
    slug: "delhi",
    locations: createLocations([
      "Dwarka",
      "Rohini",
      "Janakpuri",
      "Uttam Nagar",
      "Vikaspuri",
      "Paschim Vihar",
      "Pitampura",
      "Shalimar Bagh",
      "Model Town",
      "Civil Lines",
      "Kashmere Gate",
      "Karol Bagh",
      "Paharganj",
      "Rajouri Garden",
      "Punjabi Bagh",
      "Kirti Nagar",
      "Patel Nagar",
      "R K Puram",
      "Vasant Kunj",
      "Vasant Vihar",
      "Saket",
      "Malviya Nagar",
      "Hauz Khas",
      "Green Park",
      "Lajpat Nagar",
      "South Extension",
      "Defence Colony",
      "Greater Kailash",
      "Nehru Place",
      "Kalkaji",
      "Okhla",
      "Jamia Nagar",
      "New Friends Colony",
      "Mayur Vihar",
      "Patparganj",
      "Preet Vihar",
      "Laxmi Nagar",
      "Shahdara",
      "Dilshad Garden",
      "Seelampur",
      "Yamuna Vihar",
      "Burari",
      "Mukherjee Nagar",
      "GTB Nagar",
      "Narela",
      "Bawana",
      "Najafgarh",
      "Chattarpur",
      "Mehrauli",
      "Badarpur",
      "Govindpuri",
      "Sarita Vihar",
    ]),
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    locations: createLocations([
      "Mumbai",
      "Navi Mumbai",
      "Thane",
      "Kalyan",
      "Dombivli",
      "Mira Bhayandar",
      "Vasai",
      "Virar",
      "Panvel",
      "Pune",
      "Pimpri Chinchwad",
      "Hadapsar",
      "Kothrud",
      "Baner",
      "Wakad",
      "Hinjewadi",
      "Aundh",
      "Kharadi",
      "Viman Nagar",
      "Nagpur",
      "Wardha Road",
      "Dharampeth",
      "Nashik",
      "Aurangabad",
      "Chhatrapati Sambhajinagar",
      "Kolhapur",
      "Sangli",
      "Satara",
      "Solapur",
      "Amravati",
      "Akola",
      "Jalgaon",
      "Dhule",
      "Nanded",
      "Latur",
      "Parbhani",
      "Ratnagiri",
      "Sindhudurg",
      "Chiplun",
      "Mahad",
      "Alibaug",
      "Karjat",
      "Lonavala",
      "Igatpuri",
      "Malegaon",
      "Bhiwandi",
      "Ulhasnagar",
      "Ambernath",
      "Badlapur",
      "Goregaon",
      "Andheri",
      "Borivali",
      "Ghatkopar",
    ]),
  },
  {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    locations: createLocations([
      "Noida",
      "Greater Noida",
      "Ghaziabad",
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Lucknow",
      "Gomti Nagar",
      "Hazratganj",
      "Aliganj",
      "Kanpur",
      "Varanasi",
      "Prayagraj",
      "Agra",
      "Mathura",
      "Vrindavan",
      "Meerut",
      "Saharanpur",
      "Moradabad",
      "Bareilly",
      "Aligarh",
      "Firozabad",
      "Muzaffarnagar",
      "Shamli",
      "Bijnor",
      "Bulandshahr",
      "Hapur",
      "Amroha",
      "Rampur",
      "Badaun",
      "Shahjahanpur",
      "Sitapur",
      "Hardoi",
      "Unnao",
      "Raebareli",
      "Ayodhya",
      "Faizabad",
      "Sultanpur",
      "Pratapgarh",
      "Gorakhpur",
      "Deoria",
      "Kushinagar",
      "Basti",
      "Gonda",
      "Bahraich",
      "Balrampur",
      "Jhansi",
      "Lalitpur",
      "Etawah",
      "Mainpuri",
      "Auraiya",
      "Mau",
      "Azamgarh",
      "Ballia",
    ]),
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    locations: createLocations([
      "Bengaluru",
      "Whitefield",
      "Electronic City",
      "Marathahalli",
      "Indiranagar",
      "Koramangala",
      "Jayanagar",
      "Rajajinagar",
      "Yelahanka",
      "Hebbal",
      "Mysuru",
      "Mangaluru",
      "Hubballi",
      "Dharwad",
      "Belagavi",
      "Ballari",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Manipal",
      "Davanagere",
      "Chitradurga",
      "Hassan",
      "Mandya",
      "Kodagu",
      "Madikeri",
      "Chikkamagaluru",
      "Bagalkote",
      "Vijayapura",
      "Kalaburagi",
      "Bidar",
      "Raichur",
      "Koppal",
      "Haveri",
      "Gadag",
      "Ramanagara",
      "Kolar",
      "Chikkaballapur",
      "Karwar",
      "Sirsi",
      "Dandeli",
      "Hospet",
      "Anekal",
      "Nelamangala",
      "Kanakapura",
      "BTM Layout",
      "HSR Layout",
      "Banashankari",
      "Basavanagudi",
      "Malleshwaram",
      "Sahakar Nagar",
      "KR Puram",
    ]),
  },
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    locations: createLocations([
      "Chennai",
      "Velachery",
      "OMR",
      "T Nagar",
      "Anna Nagar",
      "Tambaram",
      "Chromepet",
      "Porur",
      "Sholinganallur",
      "Thoraipakkam",
      "Coimbatore",
      "Peelamedu",
      "Saibaba Colony",
      "RS Puram",
      "Madurai",
      "Trichy",
      "Salem",
      "Erode",
      "Tiruppur",
      "Vellore",
      "Thoothukudi",
      "Nagercoil",
      "Dindigul",
      "Thanjavur",
      "Kumbakonam",
      "Nagapattinam",
      "Cuddalore",
      "Villupuram",
      "Karur",
      "Namakkal",
      "Krishnagiri",
      "Dharmapuri",
      "Hosur",
      "Kanchipuram",
      "Chengalpattu",
      "Ranipet",
      "Sivakasi",
      "Virudhunagar",
      "Ramanathapuram",
      "Pudukkottai",
      "Tenkasi",
      "Theni",
      "Pollachi",
      "Udhagamandalam",
      "Kodaikanal",
      "Ambur",
      "Arakkonam",
      "Perambalur",
      "Ariyalur",
      "Tirunelveli",
      "Avadi",
      "Mylapore",
    ]),
  },
];

export const programmaticServices = baseServices
  .filter((service) => PROGRAMMATIC_SERVICE_SLUGS.includes(service.slug))
  .map((service) => ({
    slug: service.slug,
    name: service.title,
    description: service.description,
  }));

export const getProgrammaticServiceBySlug = (serviceSlug) =>
  programmaticServices.find((service) => service.slug === serviceSlug);

export const getStateBySlug = (stateSlug) =>
  programmaticStates.find((state) => state.slug === stateSlug);

export const getLocationBySlugs = (stateSlug, locationSlug) => {
  const state = getStateBySlug(stateSlug);
  if (!state) return null;
  return state.locations.find((location) => location.slug === locationSlug) || null;
};

export const getNearbyLocations = (stateSlug, locationSlug, limit = 8) => {
  const state = getStateBySlug(stateSlug);
  if (!state) return [];

  const index = state.locations.findIndex((location) => location.slug === locationSlug);
  if (index === -1) return [];

  const nearby = [];
  let offset = 1;

  while (nearby.length < limit && (index - offset >= 0 || index + offset < state.locations.length)) {
    if (index - offset >= 0) nearby.push(state.locations[index - offset]);
    if (nearby.length === limit) break;
    if (index + offset < state.locations.length) nearby.push(state.locations[index + offset]);
    offset += 1;
  }

  return nearby;
};

export const getAllProgrammaticParams = () =>
  programmaticServices.flatMap((service) =>
    programmaticStates.flatMap((state) =>
      state.locations.map((location) => ({
        slug: service.slug,
        state: state.slug,
        location: location.slug,
      }))
    )
  );

export const getProgrammaticPageData = ({ serviceSlug, stateSlug, locationSlug }) => {
  const service = getProgrammaticServiceBySlug(serviceSlug);
  const state = getStateBySlug(stateSlug);
  const location = getLocationBySlugs(stateSlug, locationSlug);

  if (!service || !state || !location) return null;

  return {
    service,
    state,
    location,
    nearbyLocations: getNearbyLocations(stateSlug, locationSlug),
  };
};

