export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  url: string;
  alt: string;
}

export interface VerifiedReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  highlight: string;
  comment: string;
  verifiedContext: string;
}

export interface StayPillar {
  title: string;
  description: string;
  iconName: 'Bed' | 'Clock' | 'MapPin' | 'Users';
}
