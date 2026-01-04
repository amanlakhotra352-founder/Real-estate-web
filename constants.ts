
import { Listing, Testimonial, Neighborhood } from './types';

export const CLIENT_INFO = {
  name: "Efren Ortiz",
  company: "Infiniti Properties Inc.",
  title: "Real Estate Broker & Investor",
  location: "Homewood, IL",
  phones: ["(630) 697-4450", "(708) 866-1242"],
  email: "eortiz13337@gmail.com",
  experience: "8+",
  languages: ["English", "Spanish"],
  socials: {
    instagram: "https://instagram.com/efrenortizrealtor",
    facebook: "https://facebook.com/efrenortizrealtor",
    linkedin: "https://linkedin.com/in/efrenortiz"
  }
};

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Modern Suburban Estate",
    price: 450000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    address: "18205 Highland Ave",
    city: "Homewood",
    zip: "60430",
    imageUrl: "https://picsum.photos/seed/home1/800/600",
    type: "Residential",
    description: "Beautifully renovated colonial with modern finishes and a spacious backyard.",
    features: ["Smart Home", "Hardwood Floors", "Chef's Kitchen"]
  },
  {
    id: "2",
    title: "Investor's Dream Duplex",
    price: 325000,
    beds: 6,
    baths: 4,
    sqft: 3200,
    address: "214 E Chicago Heights Blvd",
    city: "Chicago Heights",
    zip: "60411",
    imageUrl: "https://picsum.photos/seed/home2/800/600",
    type: "Investment",
    description: "Fully leased duplex with high ROI and low maintenance history.",
    features: ["Turn-key", "New HVAC", "Separate Utilities"]
  },
  {
    id: "3",
    title: "Commercial Opportunity",
    price: 850000,
    beds: 0,
    baths: 2,
    sqft: 5000,
    address: "15501 Cicero Ave",
    city: "Oak Forest",
    zip: "60452",
    imageUrl: "https://picsum.photos/seed/home3/800/600",
    type: "Commercial",
    description: "Prime retail location with high visibility and ample parking.",
    features: ["High Traffic", "Corner Lot", "Flexible Layout"]
  },
  {
    id: "4",
    title: "Cozy Family Starter",
    price: 215000,
    beds: 3,
    baths: 2,
    sqft: 1600,
    address: "3200 Markham Rd",
    city: "Markham",
    zip: "60428",
    imageUrl: "https://picsum.photos/seed/home4/800/600",
    type: "Residential",
    description: "Perfect for first-time buyers with recent upgrades throughout.",
    features: ["Quiet Street", "Attached Garage", "Move-in Ready"]
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Maria Gonzalez",
    role: "First-time Buyer",
    content: "Efren was incredibly patient and knowledgeable. As a first-time buyer, I was nervous, but he explained everything in Spanish and English, making me feel confident.",
    rating: 5
  },
  {
    id: "2",
    author: "James Wilson",
    role: "Real Estate Investor",
    content: "Efren knows the Southland market like no other. He helped me find three off-market investment properties that have exceeded my ROI goals.",
    rating: 5
  },
  {
    id: "3",
    author: "Sarah & David P.",
    role: "Home Sellers",
    content: "Professional, communicative, and aggressive in marketing our home. We sold in 4 days above asking price!",
    rating: 5
  }
];

export const MOCK_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: "n1",
    name: "Homewood",
    description: "A vibrant community known for its top-rated schools, beautiful parks, and historic architecture.",
    imageUrl: "https://picsum.photos/seed/nh1/600/400",
    avgPrice: "$350k - $600k"
  },
  {
    id: "n2",
    name: "Chicago Heights",
    description: "An area with diverse housing options and excellent value for first-time homeowners.",
    imageUrl: "https://picsum.photos/seed/nh2/600/400",
    avgPrice: "$180k - $300k"
  },
  {
    id: "n3",
    name: "Markham",
    description: "Conveniently located with great highway access and expanding residential opportunities.",
    imageUrl: "https://picsum.photos/seed/nh3/600/400",
    avgPrice: "$150k - $250k"
  },
  {
    id: "n4",
    name: "Hazel Crest",
    description: "Quiet residential streets and a strong sense of community pride characterize this suburb.",
    imageUrl: "https://picsum.photos/seed/nh4/600/400",
    avgPrice: "$200k - $350k"
  }
];
