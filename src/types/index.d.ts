import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';



export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
}
export interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  duration?: string;
  description?: string;
  technologies?: string[];
  achievements: string[];
  stack: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  quote: string;
  avatar: string;
}

export interface SkillItem {
  name: string;
  level: number;
  years: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  year: string | number;
  features?: string[];
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface AboutCard {
  title: string;
  text: string;
  icon: string;
  bg: string;
  color: string;
  class: string;
}

export interface SocialLink {
  icon: string;
  link: string;
  name: string;
}

export interface ContactMethod {
  name: string;
  description: string;
  action: 'link' | 'copy';
  link?: string;
  value?: string;
}

export interface NavLink {
  id: string;
  text: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  specialties: string[];
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
  languages: Array<{ name: string; level: string }>;
}

export interface SharedData {
  personal: PersonalInfo;
  aboutCards: AboutCard[];
  education: EducationItem[];
  testimonials: Testimonial[];
  skills: Record<string, SkillCategory>;
  tools: Array<{ category: string; items: string[] }>;
  experience: ExperienceItem[];
  projects: Record<string, Project>;
  timeline: Array<{ title: string; content: string }>;
  socialLinks: SocialLink[];
  contactMethods: Record<string, ContactMethod>;
  navLinks: NavLink[];
}