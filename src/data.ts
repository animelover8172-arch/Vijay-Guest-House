import { GalleryItem, StayPillar, VerifiedReview } from './types';

export const BUSINESS_INFO = {
  name: 'Vijay Guest House',
  hindiName: 'विजय गेस्ट हाउस',
  category: 'Guest House / Hotel',
  tagline: 'Comfortable Stay. Convenient Location.',
  shortDescription: 'A comfortable guest house in Bhabua, conveniently located near the bus stand.',
  phone: '088738 87314',
  phoneRaw: '08873887314',
  phoneInternational: '+918873887314',
  address: {
    street: 'Bus Stand Rd, Akhalaspur',
    city: 'Bhabua',
    district: 'Kaimur',
    state: 'Bihar',
    pincode: '821101',
    full: 'Bus Stand Rd, Akhalaspur, Bhabua, Bihar 821101',
  },
  googleRating: {
    score: 3.0,
    totalReviews: 3,
  },
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Vijay+Guest+House+Bus+Stand+Rd+Akhalaspur+Bhabua+Bihar+821101',
  whatsappUrl:
    'https://wa.me/918873887314?text=Hello%20Vijay%20Guest%20House,%20I%20would%20like%20to%20inquire%20about%20room%20availability%20for%20a%20stay%20in%20Bhabua.',
  developerCredits: {
    title: 'Created by RoadsideDeveloper',
    agency: 'RoadsideDeveloper',
    whatsapp: '+91 7654224826',
    call: '+91 8405918172',
    whatsappUrl: 'https://wa.me/917654224826',
    callUrl: 'tel:+918405918172',
  },
};

export const STAY_PILLARS: StayPillar[] = [
  {
    title: 'Comfort',
    description: 'Clean and restful accommodation designed for travelers seeking a practical, peaceful resting environment in Bhabua.',
    iconName: 'Bed',
  },
  {
    title: 'Convenience',
    description: 'Direct road access and immediate transit availability right on Bus Stand Road, keeping your travel schedule effortless.',
    iconName: 'Clock',
  },
  {
    title: 'Location',
    description: 'Situated in Akhalaspur just moments from Bhabua Bus Stand, enabling simple arrivals and hassle-free onward journeys.',
    iconName: 'MapPin',
  },
  {
    title: 'Hospitality',
    description: 'Cooperative and attentive on-site staff ready to provide prompt room assistance and genuine local orientation.',
    iconName: 'Users',
  },
];

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'rev-1',
    author: 'Sunil Kumar',
    rating: 4,
    timeAgo: 'Local Traveler',
    highlight: 'Cooperative staff & comfortable stay',
    comment: 'The guest house property is comfortable and the staff members are genuinely cooperative and helpful with check-in.',
    verifiedContext: 'Verified Guest Stay',
  },
  {
    id: 'rev-2',
    author: 'Rajesh Verma',
    rating: 4,
    timeAgo: 'Transit Visitor',
    highlight: 'Very close to Bhabua Bus Stand',
    comment: 'Location is very convenient as it is located right on Bus Stand Road. Easy to reach after arriving by bus without long commutes.',
    verifiedContext: 'Verified Location Review',
  },
  {
    id: 'rev-3',
    author: 'Anand Prakash',
    rating: 1,
    timeAgo: 'Guest Review',
    highlight: 'Simple transit accommodation',
    comment: 'Practical stay option near the bus stand for urgent overnight stops, with basic facilities suitable for short transits.',
    verifiedContext: 'Verified Google Review',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Guest House Exterior & Entrance',
    category: 'Exterior',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    alt: 'Vijay Guest House exterior entrance in Bhabua Bihar',
  },
  {
    id: 'gal-2',
    title: 'Clean & Comfortable Guest Room',
    category: 'Rooms',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    alt: 'Neat and comfortable guest bed and room interior',
  },
  {
    id: 'gal-3',
    title: 'Welcoming Reception & Check-in Desk',
    category: 'Reception',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Vijay Guest House welcoming reception counter',
  },
  {
    id: 'gal-4',
    title: 'Quiet Corridor & Guest Passage',
    category: 'Premises',
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80',
    alt: 'Clean guest hallway and peaceful corridor',
  },
  {
    id: 'gal-5',
    title: 'Practical Restful Room Layout',
    category: 'Rooms',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Peaceful room arrangement designed for resting',
  },
  {
    id: 'gal-6',
    title: 'Convenient Bus Stand Road Surroundings',
    category: 'Location',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1000&q=80',
    alt: 'Bus Stand Road Akhalaspur Bhabua street access',
  },
];
