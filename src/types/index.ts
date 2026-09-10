export type ProjectCategory = 'ALL' | 'CONSTRUCTION' | 'INTERIORS' | 'EXTERIORS';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
  category: 'construction' | 'interiors' | 'exteriors' | 'all';
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'CONSTRUCTION' | 'INTERIORS' | 'EXTERIORS';
  categoryLabel: string;
  location: string;
  image: string;
  scope: string[];
  description: string;
  duration?: string;
  area?: string;
  clientType?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: 'Construction' | 'Interior' | 'Exterior' | 'Renovation' | 'Modular Kitchen' | 'Carpentry' | 'Other';
  consultationType: 'Free Consultation' | 'Free Site Visit';
  location: string;
  budget: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email';
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: Array<{
    label: string;
    action: string;
    payload?: string;
  }>;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

