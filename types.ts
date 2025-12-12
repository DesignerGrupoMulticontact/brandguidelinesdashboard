import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface ColorDefinition {
  name: string;
  hex: string;
  description: string;
  textColor: string;
}

export interface ValueCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
}

export interface LogoPlaceholderProps {
  title: string;
  description: string;
  variant: 'color' | 'mono' | 'negative' | 'icon' | 'wordmark';
  imageUrl?: string;
  pngUrl?: string;
  delay?: number;
  disableFilter?: boolean;
}

export interface TypographySampleProps {
  fontFamily: string;
  weight: string;
  usage: string;
  sampleText: string;
  className?: string;
}

export interface ToneCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
}

export interface SearchableContent {
  id: string; // The section ID to scroll to
  title: string; // The main title of the result
  category: string; // Context (e.g., "Logótipos")
  keywords: string; // Hidden string for broader matching
}