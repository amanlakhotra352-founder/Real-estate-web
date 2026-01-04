
export interface Listing {
  id: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  zip: string;
  imageUrl: string;
  type: 'Residential' | 'Commercial' | 'Investment' | 'Foreclosure';
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  avgPrice: string;
}
