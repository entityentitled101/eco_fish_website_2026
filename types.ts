import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Product {
  name: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  title: string;
  org: string;
  desc: string;
  icon: LucideIcon;
}

export interface BaseInfo {
  name: string;
  area: string;
  desc: string;
}