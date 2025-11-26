
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface HomeService {
  title: string;
  icon: LucideIcon;
  points: string[];
}

export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  sector: string;
  overview: string;
  arklivsRole: string[];
  marketValue: string;
  logo: string; 
  color: string;
  isLogoAsset: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  roleKey: 'CEO' | 'CTO' | 'CFO' | 'COO';
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}