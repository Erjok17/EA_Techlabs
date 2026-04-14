import { ElementType } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: ElementType;
  title: string;
  description: string;
  features?: string[];
}

export interface Product {
  icon: ElementType;
  name: string;
  description: string;
  features: string[];
  status: 'Available' | 'Coming Soon' | 'In Development';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}

export interface Value {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface TechStack {
  name: string;
  icon: string;
  category: string;
}