export type Page = 'home' | 'services' | 'contact';

export interface NavItem {
  label: string;
  page: Page;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  review: string;
  rating: number;
}
