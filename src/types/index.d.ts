import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    isActive?: boolean;
}

export interface SharedData extends PageProps {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}


export type BreadcrumbItemType = BreadcrumbItem;

export interface TestimonialAuthor {
    name: string;
    role: string;
    image: string | null;
}

export interface Testimonial {
    id: number;
    content: string;
    author: TestimonialAuthor;
}

export interface Page {
    id: number;
    slug: string;
    title: string;
    description: string;
}

export interface Event {
    id: number;
    external_url: string ;
    title: string;
    description: string;
    event_date: string;
}
export interface Resource {
    id: number;
    external_url: string ;
    title: string;
    description: string;
    image_path: string;
}

export interface Partner {
    id: number;
    url: string ;
    name: string;
    logo: string;
    type: string;
}

export interface TeamMember {
    id: number;
    name: string;
    position: string ;
    image_path: string;
    type: string;
    order: int;
}

export interface Customer {
    id: number;
    message: string;
    logo: string;
}

export interface Solution {
    id: number;
    external_url: string ;
    title: string;
    description: string;
    iconsvg: string;
}

export interface Contact {
    id: number;
    external_url: string ;
    title: string;
    description: string;
    iconsvg: string;
}

export interface Service {
    id: number;
    external_url: string ;
    title: string;
    description: string;
    image_path: string;
}


export interface Company {
    id: number;
    name: string ;
    adress: string;
    history: string;
    missions_title: string;
    missions: string;
    culture_title: string;
    culture_description: string;
     cta?: Array<{
        title: string;
        url: string;
    }>;
}

export interface Statistic {
    id: number;
    title: string;
    value: string;
    order: int;
}

export interface Value {
    id: number;
    name: string ;
    description: string;
    order: int;
}

export interface FooterLink {
    id: number;
    type: string ;
    name: string;
    url: string;
    icon: string;
}

interface CtaItem {
    title: string;
    url: string;
}
interface FooterLinks {
    solutions: FooterLink[];
    support: FooterLink[];
    company: FooterLink[];
    legal: FooterLink[];
    social: FooterLink[];
}
