export type ThemeType = 'slate' | 'indigo' | 'emerald' | 'sunset' | 'nordic' | 'royal_dark';

export type FontType = 'modern' | 'display' | 'serif' | 'mono';

export type StructureMode = 'landing' | 'multi_page';

export type TierLevel = 'oddiy' | 'orta' | 'pro';

export interface MenuItem {
  id: string;
  label: string;
  link: string;
}

export interface FeatureProcedure {
  name: string;
  price: string;
}

export interface FeatureFaq {
  q: string;
  a: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  fullDescription?: string;
  price?: string;
  procedures?: FeatureProcedure[];
  faqs?: FeatureFaq[];
  benefits?: string[];
  assignedDoctorId?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  imageUrl: string;
  bio?: string;
  schedule?: string;
  consultationPrice?: string;
  education?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: string;
  numericPrice?: number;
  imageUrl: string;
  category?: string;
  fullDescription?: string;
  inStock?: boolean;
  badge?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  suffix?: string;
}

export interface IntegrationSettings {
  telegramBotToken: string;
  telegramChatId: string;
  telegramUsername: string;
  whatsappPhone: string;
  emailNotifications: string;
  sendToTelegram: boolean;
  sendToWhatsApp: boolean;
  successMessage: string;
}

export interface LeadItem {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  serviceOrProduct: string;
  price?: string;
  appointmentDate?: string;
  appointmentTime?: string;
  address?: string;
  deliveryType?: 'qabul' | 'yetkazib_berish' | 'olib_ketish';
  orderItems?: { name: string; qty: number; price: string }[];
  totalAmount?: string;
  notes?: string;
  status: 'yangi' | 'boglanildi' | 'yakunlandi' | 'bekor_qilindi';
}

export interface SectionVisibility {
  header: boolean;
  hero: boolean;
  stats: boolean;
  features: boolean;
  team: boolean;
  about: boolean;
  gallery: boolean;
  products: boolean;
  cart: boolean;
  pricing: boolean;
  testimonials: boolean;
  faq: boolean;
  contact: boolean;
  footer: boolean;
}

export interface SeoSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  canonicalUrl?: string;
  siteName?: string;
  schemaType?: 'MedicalBusiness' | 'Store' | 'LocalBusiness' | 'Organization' | 'Restaurant' | 'EducationalOrganization' | 'SoftwareApplication';
  author?: string;
  robots?: 'index, follow' | 'noindex, nofollow';
}

export interface WebsiteConfig {
  name: string;
  tierLevel: TierLevel; // 'oddiy' (Landing), 'orta' (Multi-page), 'pro' (Multi-page + E-commerce + CRM)
  theme: ThemeType;
  font: FontType;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  structureMode: StructureMode; // 'landing' | 'multi_page'
  
  seo?: SeoSettings;
  
  header: {
    logoName: string;
    menuItems: MenuItem[];
  };
  
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
    showCta: boolean;
  };

  stats: {
    title?: string;
    items: StatItem[];
  };
  
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };

  team: {
    title: string;
    subtitle: string;
    items: TeamMemberItem[];
  };

  about: {
    title: string;
    subtitle: string;
    content: string;
    imageUrl?: string;
    features?: string[];
    description?: string;
    bulletPoints?: string[];
    badge?: string;
  };
  
  gallery: {
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  
  products: {
    title: string;
    subtitle: string;
    items: ProductItem[];
  };
  
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };

  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    showForm: boolean;
    mapEmbedUrl?: string;
    workingHours?: string;
    formTitle?: string;
    formSubtitle?: string;
    submitButtonText?: string;
  };
  
  footer: {
    copyrightText: string;
    socialTelegram: string;
    socialInstagram: string;
    socialPhone: string;
  };

  integrations: IntegrationSettings;
  
  visibility: SectionVisibility;
}
