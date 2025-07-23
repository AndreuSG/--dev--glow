export interface Service {
  title: string;
  description: string;
  image: string;
  icon?: any;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface InstagramPost {
  id: string;
  type: 'image' | 'video' | 'reel';
  thumbnail: string;
  caption: string;
  likes: number;
}

export interface Testimonial {
  content: string;
  author: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}