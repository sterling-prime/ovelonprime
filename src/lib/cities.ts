// Major world cities by country code - prioritized by population for autocomplete
// This is a curated list for fast client-side autocomplete without external API

export const CITIES_BY_COUNTRY: Record<string, string[]> = {
  US: [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
    "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis",
    "Seattle", "Denver", "Washington", "Boston", "Nashville", "Detroit", "Portland",
    "Memphis", "Las Vegas", "Louisville", "Baltimore", "Milwaukee", "Albuquerque",
    "Tucson", "Fresno", "Sacramento", "Atlanta", "Miami", "Cleveland", "Tampa"
  ],
  GB: [
    "London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Leeds",
    "Sheffield", "Edinburgh", "Bristol", "Leicester", "Coventry", "Nottingham",
    "Newcastle", "Belfast", "Brighton", "Cardiff", "Southampton", "Oxford", "Cambridge"
  ],
  DE: [
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf",
    "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hanover", "Nuremberg",
    "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster"
  ],
  FR: [
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg",
    "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Étienne",
    "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes", "Villeurbanne"
  ],
  IT: [
    "Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence",
    "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia"
  ],
  ES: [
    "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia",
    "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo"
  ],
  PL: [
    "Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin",
    "Bydgoszcz", "Lublin", "Białystok", "Katowice", "Gdynia", "Częstochowa"
  ],
  NL: [
    "Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Groningen",
    "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn", "Haarlem", "Arnhem"
  ],
  BE: [
    "Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur",
    "Leuven", "Mons", "Mechelen", "Aalst", "Kortrijk", "Hasselt"
  ],
  AT: [
    "Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach",
    "Wels", "Sankt Pölten", "Dornbirn", "Wiener Neustadt", "Steyr"
  ],
  CH: [
    "Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne",
    "St. Gallen", "Lugano", "Biel", "Thun", "Köniz", "La Chaux-de-Fonds"
  ],
  CA: [
    "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg",
    "Quebec City", "Hamilton", "Kitchener", "London", "Victoria", "Halifax"
  ],
  AU: [
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle",
    "Canberra", "Sunshine Coast", "Wollongong", "Hobart", "Geelong", "Townsville"
  ],
  JP: [
    "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto",
    "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Kitakyushu", "Chiba"
  ],
  CN: [
    "Shanghai", "Beijing", "Shenzhen", "Guangzhou", "Chengdu", "Hangzhou", "Wuhan",
    "Xi'an", "Suzhou", "Nanjing", "Tianjin", "Chongqing", "Dongguan", "Shenyang"
  ],
  IN: [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad",
    "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore"
  ],
  BR: [
    "São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte",
    "Manaus", "Curitiba", "Recife", "Porto Alegre", "Belém", "Goiânia"
  ],
  MX: [
    "Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León",
    "Juárez", "Zapopan", "Mérida", "Cancún", "Querétaro", "San Luis Potosí"
  ],
  RU: [
    "Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan",
    "Nizhny Novgorod", "Chelyabinsk", "Samara", "Omsk", "Rostov-on-Don"
  ],
  KR: [
    "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan",
    "Seongnam", "Goyang", "Bucheon", "Cheongju"
  ],
  SG: ["Singapore"],
  AE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"],
  SA: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Tabuk", "Taif"],
  ZA: [
    "Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"
  ],
  NG: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Kaduna"],
  EG: ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez"],
  TR: [
    "Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya"
  ],
  IL: ["Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod"],
  SE: [
    "Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping"
  ],
  NO: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad"],
  DK: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Frederiksberg", "Esbjerg"],
  FI: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä"],
  IE: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk"],
  PT: ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Coimbra"],
  GR: ["Athens", "Thessaloniki", "Patras", "Piraeus", "Larissa", "Heraklion"],
  CZ: ["Prague", "Brno", "Ostrava", "Pilsen", "Liberec", "Olomouc"],
  HU: ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr"],
  RO: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova"],
  UA: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv"],
  AR: [
    "Buenos Aires", "Córdoba", "Rosario", "Mendoza", "San Miguel de Tucumán", "La Plata"
  ],
  CL: ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco"],
  CO: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta"],
  PE: ["Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo", "Iquitos"],
  VE: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay", "Ciudad Guayana"],
  TH: ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai"],
  VN: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa"],
  MY: ["Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru", "Petaling Jaya", "Shah Alam"],
  ID: ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang"],
  PH: ["Manila", "Quezon City", "Caloocan", "Davao City", "Cebu City", "Zamboanga City"],
  NZ: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Dunedin"],
};

// Fallback for countries not in our list - just return empty array
export const getCitiesForCountry = (countryCode: string): string[] => {
  return CITIES_BY_COUNTRY[countryCode.toUpperCase()] || [];
};

export const searchCities = (
  query: string,
  countryCode?: string,
  limit = 10
): string[] => {
  if (!query || query.length < 2) return [];
  
  const q = query.toLowerCase();
  
  // If country specified, search only that country
  if (countryCode) {
    const cities = getCitiesForCountry(countryCode);
    return cities
      .filter((city) => city.toLowerCase().includes(q))
      .slice(0, limit);
  }
  
  // Search all countries, prioritizing exact starts
  const allCities: { city: string; score: number }[] = [];
  
  Object.values(CITIES_BY_COUNTRY).forEach((cities) => {
    cities.forEach((city) => {
      const lower = city.toLowerCase();
      if (lower.includes(q)) {
        const score = lower.startsWith(q) ? 2 : 1;
        allCities.push({ city, score });
      }
    });
  });
  
  return allCities
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((c) => c.city);
};
