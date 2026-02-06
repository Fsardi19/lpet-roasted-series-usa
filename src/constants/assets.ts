// Asset URLs - Replace with Cloudinary URLs when ready
// Use Vite's base URL for GitHub Pages compatibility
const BASE_PATH = `${import.meta.env.BASE_URL}images`;

export const ASSETS = {
  // Hero images
  hero: {
    banner: `${BASE_PATH}/hero/hero_banner_born_at_origin.png`,
    felipeCaballo: `${BASE_PATH}/hero/hero_felipe_caballo.jpg`,
    fincaBosque: `${BASE_PATH}/hero/hero_finca_bosque_niebla.jpg`,
  },

  // Product images
  productos: {
    legendary: `${BASE_PATH}/productos/Legendary.png`,
    legendaryFront: `${BASE_PATH}/productos/LP&ET Legendary Front.png`,
    geisha: `${BASE_PATH}/productos/Single-OriginSIDRA3.png`,
    sidra: `${BASE_PATH}/productos/Single-OriginSIDRA3.png`,
    palmaBlend: `${BASE_PATH}/productos/PalmaBlend1.png`,
    tucanBlend: `${BASE_PATH}/productos/Tucan-Blend.png`,
    tresBolsas: `${BASE_PATH}/productos/ascca.png`,
  },

  // Process images
  proceso: {
    vivero: `${BASE_PATH}/proceso/proceso_02_vivero_secaderos.jpg`,
    cultivo: `${BASE_PATH}/proceso/proceso_01_cultivo_cafetales.jpg`,
    cereza: `${BASE_PATH}/proceso/proceso_03_cereza_madura.jpg`,
    secado: `${BASE_PATH}/proceso/proceso_04_secado_natural.jpg`,
    lavado: `${BASE_PATH}/proceso/proceso_05_lavado_washed.jpg`,
  },

  // Team/Origin images
  equipo: {
    fundadores: `${BASE_PATH}/equipo/fundadores_felipe_elisa.jpg`,
    familia: `${BASE_PATH}/equipo/fundadores_familia.jpg`,
    elisaEquipo: `${BASE_PATH}/equipo/equipo_elisa_trabajadoras.jpg`,
    felipeBeneficio: `${BASE_PATH}/equipo/equipo_felipe_beneficio.jpg`,
  },

  // Roaster images
  tostadora: {
    frontal: `${BASE_PATH}/tostadora/stronghold_s8x_frontal.jpg`,
    lateral: `${BASE_PATH}/tostadora/stronghold_s8x_lateral.jpg`,
  },

  // Lifestyle
  lifestyle: {
    bolsasTaza: `${BASE_PATH}/lifestyle/lifestyle_bolsas_taza.png`,
  },

  // Testimonials/Credentials
  testimonios: {
    wbc2019: `${BASE_PATH}/testimonios/wbc_2019_championship.jpg`,
  },

  // Sustainability
  sostenibilidad: {
    ganado: `${BASE_PATH}/sostenibilidad/biodiversidad_ganado.jpg`,
    panoramica: `${BASE_PATH}/sostenibilidad/finca_vista_panoramica.jpg`,
  },
};

// Product data with inventory and urgency
export const PRODUCTS = [
  {
    id: 'legendary-geisha',
    name: 'LEGENDARY Geisha',
    tier: 'Legendary',
    price: 85,
    comparePrice: 95, // Original price for strikethrough
    weight: '12oz (340g)',
    process: 'Lactic Process',
    altitude: '1,760 m.a.s.l.',
    notes: 'Bursting with ripe citrus, exotic stone fruits, and jasmine perfume',
    image: ASSETS.productos.legendary,
    tag: 'ULTRA PREMIUM',
    color: 'bg-brand-dark',
    stock: 12, // Limited stock for urgency
    badge: 'Limited Release',
    scaScore: '90+',
  },
  {
    id: 'geisha-single',
    name: 'GEISHA',
    tier: 'Heroes',
    price: 65,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Bio-Washed',
    altitude: '1,763 m.a.s.l.',
    notes: 'Blood orange, night-blooming jasmine, and crystallized honey',
    image: ASSETS.productos.sidra,
    tag: 'SINGLE ORIGIN',
    color: 'bg-brand-pink',
    stock: 45,
    badge: null,
    scaScore: '88',
  },
  {
    id: 'sidra',
    name: 'SIDRA',
    tier: 'Heroes',
    price: 55,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Lactic',
    altitude: '1,750 m.a.s.l.',
    notes: 'Strawberry yogurt, roses, creamy body — WBC 2019 Champion Varietal',
    image: ASSETS.productos.sidra,
    tag: 'WBC 2019 WINNER',
    color: 'bg-brand-pink',
    stock: 38,
    badge: 'Best Seller',
    scaScore: '89',
  },
  {
    id: 'palma-blend',
    name: 'PALMA Blend',
    tier: 'Warrior',
    price: 42,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Honey',
    altitude: '1,700 m.a.s.l.',
    notes: 'Caramel, milk chocolate, roasted almonds, brown sugar',
    image: ASSETS.productos.palmaBlend,
    tag: 'EVERYDAY LUXURY',
    color: 'bg-brand-beige',
    stock: 120,
    badge: null,
    scaScore: '86',
  },
  {
    id: 'tucan-blend',
    name: 'TUCÁN Blend',
    tier: 'Warrior',
    price: 45,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Traditional & Exotic Varieties',
    altitude: '1,700 m.a.s.l.',
    notes: 'Strawberry, passion fruit, tangerine, cocoa nibs',
    image: ASSETS.productos.tucanBlend,
    tag: 'EXOTIC BLEND',
    color: 'bg-brand-pink',
    stock: 95,
    badge: null,
    scaScore: '87',
  },
];

// Process steps - CORRECTED ORDER
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Nursery',
    titleEs: 'Germinado',
    description: 'Seeds germinate in our nursery for 6-8 months before transplanting',
    image: ASSETS.proceso.vivero,
  },
  {
    step: 2,
    title: 'Planting',
    titleEs: 'Plantación',
    description: 'Young plants transplanted to shade-grown lots at 1,700m elevation',
    image: ASSETS.proceso.cultivo,
  },
  {
    step: 3,
    title: 'Cultivation',
    titleEs: 'Cultivo',
    description: '3-4 years of careful growth under native forest canopy',
    image: ASSETS.proceso.cultivo,
  },
  {
    step: 4,
    title: 'Harvest',
    titleEs: 'Cosecha',
    description: 'Hand-picked at peak ripeness, cherry by cherry',
    image: ASSETS.proceso.cereza,
  },
  {
    step: 5,
    title: 'Fermentation',
    titleEs: 'Fermentación',
    description: 'Proprietary processes: Lactic, Bio-Innovation, pH Clarity',
    image: ASSETS.proceso.lavado,
  },
  {
    step: 6,
    title: 'Drying',
    titleEs: 'Secado',
    description: 'African raised beds for 15-25 days of controlled drying',
    image: ASSETS.proceso.secado,
  },
  {
    step: 7,
    title: 'Roasting',
    titleEs: 'Tostión',
    description: 'Roasted on-site, 50 meters from where it grew',
    image: ASSETS.tostadora.frontal,
  },
];

// Sustainability stats
export const SUSTAINABILITY_STATS = [
  { value: '11,418', label: 'Tons CO₂ Captured', icon: 'tree' },
  { value: '55+', label: 'Species on Farm', icon: 'bird' },
  { value: '9%', label: 'Soil Organic Matter', icon: 'leaf' },
  { value: '200+', label: 'Neighbor Families', icon: 'users' },
];

// Shipping configuration for USA
export const SHIPPING = {
  freeShippingThreshold: 50, // USD
  standardShipping: {
    price: 8,
    days: '5-7 business days',
    description: 'USPS Priority Mail',
  },
  expressShipping: {
    price: 15,
    days: '2-3 business days',
    description: 'USPS Express',
  },
  zones: ['All 50 US States', 'Puerto Rico'],
  fulfillmentLocation: 'Ships from Miami, FL',
  roastedFresh: 'Roasted within 48 hours of shipping',
};

// Trust badges
export const TRUST_BADGES = [
  { icon: 'shield', text: 'Secure Checkout' },
  { icon: 'truck', text: 'Free Shipping $50+' },
  { icon: 'refresh', text: '30-Day Guarantee' },
  { icon: 'award', text: 'SCA Certified 85+' },
];

// Social proof
export const SOCIAL_PROOF = {
  customersServed: '2,500+',
  countriesShipped: 12,
  avgRating: 4.9,
  totalReviews: 847,
  featuredIn: ['Sprudge', 'Perfect Daily Grind', 'Barista Magazine'],
};

// Reviews (sample)
export const REVIEWS = [
  {
    name: 'Michael T.',
    location: 'Portland, OR',
    rating: 5,
    product: 'SIDRA',
    text: 'The most complex cup I\'ve ever had at home. The strawberry notes are incredible.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Sarah K.',
    location: 'Austin, TX',
    rating: 5,
    product: 'LEGENDARY Geisha',
    text: 'Worth every penny. This is what specialty coffee should taste like.',
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'James L.',
    location: 'Seattle, WA',
    rating: 5,
    product: 'PALMA Blend',
    text: 'Perfect everyday coffee. Smooth, chocolatey, never bitter.',
    date: '3 weeks ago',
    verified: true,
  },
];

// SEO data
export const SEO = {
  title: 'La Palma & El Tucán | Producer-Roasted Specialty Coffee from Colombia',
  description: 'Experience rare Colombian coffee roasted at origin. Geisha, Sidra & more from our cloud forest farm. Free shipping on orders $50+. SCA scores 85-90+.',
  keywords: 'specialty coffee, Colombian coffee, Geisha coffee, single origin coffee, producer roasted, farm to cup, La Palma El Tucan',
  ogImage: ASSETS.hero.banner,
  canonical: 'https://shop.lapalmayeltucan.com',
};
