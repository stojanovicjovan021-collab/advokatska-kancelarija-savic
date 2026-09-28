import type { LucideIcon } from 'lucide-react';

export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
image: string;
content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
  icon: LucideIcon;
}
