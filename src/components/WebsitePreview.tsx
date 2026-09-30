import React, { useState } from 'react';
import { WebsiteConfig, LeadItem, FeatureItem, TeamMemberItem, ProductItem, CartItem } from '../types';
import { 
  Code, 
  Layout, 
  Activity, 
  Users, 
  Layers, 
  ShoppingBag, 
  Utensils, 
  Award, 
  Flame, 
  Coffee, 
  Heart, 
  Camera,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Instagram,
  Check,
  Star,
  Globe,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Clock,
  HelpCircle,
  ArrowLeft,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Search,
  ExternalLink,
  Briefcase,
  Zap,
  Building2,
  Crown,
  Plus
} from 'lucide-react';
import CartDrawer from './CartDrawer';

export const themePalettes = {
  slate: {
    bg: "bg-slate-50",
    text: "text-slate-900",
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    primaryText: "text-slate-900",
    primaryBorder: "border-slate-900",
    secondaryBg: "bg-slate-100",
    accentBg: "bg-slate-200",
    accentText: "text-slate-600",
    cardBg: "bg-white border-slate-200",
    footerBg: "bg-slate-900 text-slate-400",
    heroGradient: "from-slate-100 to-slate-200/50",
    divider: "border-slate-200",
    primaryBtn: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10",
    badge: "text-slate-700 bg-slate-100",
    activeLink: "text-slate-900 font-semibold bg-slate-100"
  },
  indigo: {
    bg: "bg-slate-50",
    text: "text-slate-900",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    primaryText: "text-indigo-600",
    primaryBorder: "border-indigo-600",
    secondaryBg: "bg-indigo-50",
    accentBg: "bg-indigo-100",
    accentText: "text-indigo-700",
    cardBg: "bg-white border-slate-200",
    footerBg: "bg-slate-950 text-slate-400",
    heroGradient: "from-indigo-50 to-indigo-100/30",
    divider: "border-indigo-100",
    primaryBtn: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/10",
    badge: "text-indigo-600 bg-indigo-50",
    activeLink: "text-indigo-600 font-semibold bg-indigo-50"
  },
  emerald: {
    bg: "bg-stone-50",
    text: "text-emerald-950",
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    primaryText: "text-emerald-700",
    primaryBorder: "border-emerald-600",
    secondaryBg: "bg-emerald-50",
    accentBg: "bg-emerald-100",
    accentText: "text-emerald-900",
    cardBg: "bg-white border-stone-200",
    footerBg: "bg-emerald-950 text-emerald-200",
    heroGradient: "from-emerald-50 via-teal-50/30 to-emerald-50",
    divider: "border-emerald-100",
    primaryBtn: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-700/20",
    badge: "text-emerald-700 bg-emerald-50",
    activeLink: "text-emerald-700 font-semibold bg-emerald-100/60"
  },
  sunset: {
    bg: "bg-amber-50/30",
    text: "text-stone-900",
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    primaryText: "text-amber-700",
    primaryBorder: "border-amber-600",
    secondaryBg: "bg-amber-50",
    accentBg: "bg-orange-100",
    accentText: "text-orange-800",
    cardBg: "bg-white border-orange-100",
    footerBg: "bg-stone-900 text-stone-400",
    heroGradient: "from-amber-50 to-orange-50",
    divider: "border-orange-100",
    primaryBtn: "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/10",
    badge: "text-amber-700 bg-amber-50",
    activeLink: "text-amber-700 font-semibold bg-amber-100"
  },
  nordic: {
    bg: "bg-neutral-50",
    text: "text-neutral-800",
    primary: "bg-sky-950 text-white hover:bg-sky-900",
    primaryText: "text-sky-900",
    primaryBorder: "border-sky-950",
    secondaryBg: "bg-sky-50",
    accentBg: "bg-sky-100",
    accentText: "text-sky-800",
    cardBg: "bg-white border-neutral-200",
    footerBg: "bg-neutral-900 text-neutral-400",
    heroGradient: "from-sky-50/20 to-sky-100/10",
    divider: "border-neutral-200",
    primaryBtn: "bg-sky-950 hover:bg-sky-900 text-white shadow-md shadow-sky-950/10",
    badge: "text-sky-900 bg-sky-50",
    activeLink: "text-sky-900 font-semibold bg-sky-100"
  },
  royal_dark: {
    bg: "bg-slate-950",
    text: "text-slate-100",
    primary: "bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold",
    primaryText: "text-amber-400",
    primaryBorder: "border-amber-500",
    secondaryBg: "bg-slate-900",
    accentBg: "bg-slate-800",
    accentText: "text-amber-400",
    cardBg: "bg-slate-900 border-slate-800",
    footerBg: "bg-black text-slate-500",
    heroGradient: "from-slate-950 via-slate-900 to-slate-950",
    divider: "border-slate-800",
    primaryBtn: "bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold",
    badge: "text-amber-400 bg-slate-900",
    activeLink: "text-amber-400 font-semibold bg-slate-800"
  }
};

export function getIconComponent(name: string) {
  switch (name) {
    case 'Code': return <Code className="w-5 h-5" />;
    case 'Layout': return <Layout className="w-5 h-5" />;
    case 'Activity': return <Activity className="w-5 h-5" />;
    case 'Users': return <Users className="w-5 h-5" />;
    case 'Layers': return <Layers className="w-5 h-5" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
    case 'Utensils': return <Utensils className="w-5 h-5" />;
    case 'Award': return <Award className="w-5 h-5" />;
    case 'Flame': return <Flame className="w-5 h-5" />;
    case 'Coffee': return <Coffee className="w-5 h-5" />;
    case 'Heart': return <Heart className="w-5 h-5" />;
    case 'Camera': return <Camera className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
}

interface WebsitePreviewProps {
  config: WebsiteConfig;
  activeSection: string | null;
  onSelectSection: (sectionKey: string) => void;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onNewLead?: (lead: LeadItem) => void;
}

export default function WebsitePreview({
  config,
  activeSection,
  onSelectSection,
  viewMode,
  onNewLead
}: WebsitePreviewProps) {
  const palette = themePalettes[config.theme] || themePalettes.slate;
  const isMultiPage = config.structureMode !== 'landing';

  // Active Multi-Page route
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'service-detail' | 'team' | 'doctor-detail' | 'about' | 'products' | 'pricing' | 'faq' | 'contact'>('home');
  const [selectedService, setSelectedService] = useState<FeatureItem | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMemberItem | null>(null);

  // Shopping Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Appointment / Order Modal state
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    price?: string;
    type: 'appointment' | 'order' | 'contact';
  } | null>(null);

  // Direct contact form
  const [directForm, setDirectForm] = useState({ name: '', phone: '', date: '', time: '', service: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Border radius map
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-xl',
    full: 'rounded-2xl'
  }[config.borderRadius] || 'rounded-xl';

  // Cart operations
  const handleAddToCart = (product: ProductItem) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(i => {
          if (i.product.id === productId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const navigateTo = (page: any, params?: { service?: FeatureItem; doctor?: TeamMemberItem }) => {
    setCurrentPage(page);
    if (params?.service) setSelectedService(params.service);
    if (params?.doctor) setSelectedDoctor(params.doctor);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!directForm.name || !directForm.phone) return;

    setFormSubmitting(true);
    const newLead: LeadItem = {
      id: 'lead-' + Date.now(),
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      fullName: directForm.name,
      phone: directForm.phone,
      serviceOrProduct: directForm.service || 'Umumiy Qabul va Navbat',
      appointmentDate: directForm.date || undefined,
      appointmentTime: directForm.time || undefined,
      status: 'yangi'
    };

    if (onNewLead) onNewLead(newLead);

    // Try sending to Telegram
    if (config.integrations?.sendToTelegram && config.integrations?.telegramBotToken && config.integrations?.telegramChatId) {
      try {
        const msg = `⚡ <b>Yangi Online Qabul Arizasi!</b>\n\n` +
          `👤 <b>Mijoz:</b> ${directForm.name}\n` +
          `📞 <b>Telefon:</b> ${directForm.phone}\n` +
          `🩺 <b>Xizmat/Shifokor:</b> ${directForm.service || 'Umumiy qabul'}\n` +
          (directForm.date ? `📅 <b>Sana:</b> ${directForm.date} ${directForm.time || ''}\n` : '') +
          `\n<i>MiGroup Web Studio orqali qabul qilindi</i>`;

        await fetch('/api/telegram/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            botToken: config.integrations.telegramBotToken,
            chatId: config.integrations.telegramChatId,
            message: msg
          })
        });
      } catch (err) {
        console.error('Telegram dispatch failed:', err);
      }
    }

    setFormSubmitting(false);
    setFormSuccess(true);
    setDirectForm({ name: '', phone: '', date: '', time: '', service: '' });
    setTimeout(() => setFormSuccess(false), 5000);
  };

  // Canvas and Device View helpers
  const isMobile = viewMode === 'mobile';
  const isTablet = viewMode === 'tablet';
  const isDesktop = viewMode === 'desktop';

  // Responsive grid classes based on device viewMode
  const gridCols3 = isMobile 
    ? 'grid-cols-1' 
    : isTablet 
      ? 'grid-cols-1 sm:grid-cols-2' 
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  const gridColsStats = isMobile 
    ? 'grid-cols-2' 
    : isTablet 
      ? 'grid-cols-2 sm:grid-cols-4' 
      : 'grid-cols-2 md:grid-cols-4';

  const websiteInnerContent = (
    <div className={`flex-1 flex flex-col bg-white min-h-screen relative ${isMobile ? 'pb-16' : ''}`}>
      {/* ========================================================================= */}
      {/* 1. HEADER & NAVIGATION BAR                                               */}
      {/* ========================================================================= */}
      {config.visibility.header && (
        <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b ${palette.divider}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between ${isMobile ? 'h-16' : 'h-20'}`}>
              {/* Logo */}
              <div 
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
              >
                <div className={`${isMobile ? 'w-9 h-9 text-base' : 'w-10 h-10 text-lg'} ${roundedClass} ${palette.primary} flex items-center justify-center font-extrabold shadow-md flex-shrink-0`}>
                  {config.header.logoName.charAt(0) || 'M'}
                </div>
                <div>
                  <span className={`font-bold ${isMobile ? 'text-base' : 'text-lg'} tracking-tight ${palette.primaryText}`}>
                    {config.header.logoName}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-0.5">
                    {isMultiPage ? 'Ko\'p Sahifali Portal' : 'Rasmiy Sayt'}
                  </span>
                </div>
              </div>

              {/* Desktop Nav (Only shown in desktop mode) */}
              {isDesktop && (
                <nav className="hidden md:flex items-center gap-1">
                  <button 
                    onClick={() => navigateTo('home')} 
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'home' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    Bosh sahifa
                  </button>
                  {config.visibility.features && (
                    <button 
                      onClick={() => navigateTo('services')} 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'services' || currentPage === 'service-detail' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      Xizmatlar
                    </button>
                  )}
                  {config.visibility.team && config.team?.items?.length > 0 && (
                    <button 
                      onClick={() => navigateTo('team')} 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'team' || currentPage === 'doctor-detail' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      Shifokorlar
                    </button>
                  )}
                  {config.visibility.about && (
                    <button 
                      onClick={() => navigateTo('about')} 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'about' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      Biz haqimizda
                    </button>
                  )}
                  {config.visibility.products && config.products?.items?.length > 0 && (
                    <button 
                      onClick={() => navigateTo('products')} 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'products' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      Paketlar & Do'kon
                    </button>
                  )}
                  {config.visibility.pricing && config.pricing?.plans?.length > 0 && (
                    <button 
                      onClick={() => navigateTo('pricing')} 
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'pricing' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    >
                      Narxlar
                    </button>
                  )}
                  <button 
                    onClick={() => navigateTo('contact')} 
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${currentPage === 'contact' ? palette.activeLink : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    Aloqa & Qabul
                  </button>
                </nav>
              )}

              {/* Actions: Cart & Booking Button */}
              <div className="flex items-center gap-2">
                {config.visibility.cart && (
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                    title="Savat"
                  >
                    <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                    {totalCartCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center animate-scale-in">
                        {totalCartCount}
                      </span>
                    )}
                  </button>
                )}

                {!isMobile && (
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Qabulga yozilish</span>
                  </button>
                )}

                {/* Mobile/Tablet Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`${isDesktop ? 'md:hidden' : 'block'} p-2 rounded-lg text-slate-600 hover:bg-slate-100`}
                >
                  <Layout className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className={`${isDesktop ? 'md:hidden' : 'block'} border-t border-slate-100 bg-white px-4 py-3 space-y-1 shadow-md`}>
              <button onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Bosh sahifa</button>
              {config.visibility.features && <button onClick={() => { navigateTo('services'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Xizmatlar</button>}
              {config.visibility.team && <button onClick={() => { navigateTo('team'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Shifokorlar</button>}
              {config.visibility.about && <button onClick={() => { navigateTo('about'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Biz haqimizda</button>}
              {config.visibility.products && <button onClick={() => { navigateTo('products'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Check-up Paketlar</button>}
              <button onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded">Aloqa & Qabul</button>
            </div>
          )}
        </header>
      )}
        {/* ========================================================================= */}
        {/* 2. PAGE VIEWS                                                            */}
        {/* ========================================================================= */}
        <main className={`flex-1 ${isMobile ? 'pb-20' : ''}`}>

          {/* PAGE: HOME */}
          {currentPage === 'home' && (
            <div>
              {/* HERO SECTION */}
              {config.visibility.hero && (
                <section className={`${isMobile ? 'py-6 px-4' : isTablet ? 'py-10 px-6' : 'py-16 md:py-24 px-4 sm:px-6 lg:px-8'} bg-gradient-to-b ${palette.heroGradient} border-b ${palette.divider}`}>
                  <div className="max-w-7xl mx-auto">
                    {isMobile ? (
                      /* Mobile Hero */
                      <div className="flex flex-col gap-5">
                        <div className="space-y-3">
                          {config.hero.badge && (
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${roundedClass} text-[11px] font-bold ${palette.badge} border border-slate-200/80 shadow-xs`}>
                              <span>✨ {config.hero.badge}</span>
                            </div>
                          )}
                          <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
                            {config.hero.title}
                          </h1>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {config.hero.subtitle}
                          </p>
                          <div className="flex flex-col w-full gap-2 pt-1">
                            <button
                              onClick={() => navigateTo('contact')}
                              className={`w-full py-2.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} shadow-md flex items-center justify-center gap-2`}
                            >
                              <span>{config.hero.ctaText || 'Qabulga yozilish'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => navigateTo('services')}
                              className={`w-full py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass} shadow-xs flex items-center justify-center gap-1.5`}
                            >
                              <span>Barcha Xizmatlar</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <img
                            src={config.hero.imageUrl}
                            alt="Hero"
                            className={`w-full h-48 object-cover ${roundedClass} shadow-md border-2 border-white`}
                          />
                        </div>
                      </div>
                    ) : isTablet ? (
                      /* Tablet Hero */
                      <div className="flex flex-col gap-6">
                        <div className="space-y-4">
                          {config.hero.badge && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${roundedClass} text-xs font-bold ${palette.badge} border border-slate-200/80 shadow-xs`}>
                              <span>✨ {config.hero.badge}</span>
                            </div>
                          )}
                          <h1 className="text-3xl font-extrabold text-slate-900 leading-snug">
                            {config.hero.title}
                          </h1>
                          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                            {config.hero.subtitle}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                              onClick={() => navigateTo('contact')}
                              className={`px-5 py-2.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} shadow-md flex items-center gap-2`}
                            >
                              <span>{config.hero.ctaText || 'Qabulga yozilish'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => navigateTo('services')}
                              className={`px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass} shadow-xs flex items-center gap-1.5`}
                            >
                              <span>Barcha Xizmatlar</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <img
                            src={config.hero.imageUrl}
                            alt="Hero"
                            className={`w-full h-64 object-cover ${roundedClass} shadow-lg border-3 border-white`}
                          />
                        </div>
                      </div>
                    ) : (
                      /* Desktop Hero */
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-5">
                          {config.hero.badge && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${roundedClass} text-xs font-bold ${palette.badge} border border-slate-200/80 shadow-xs`}>
                              <span>✨ {config.hero.badge}</span>
                            </div>
                          )}
                          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                            {config.hero.title}
                          </h1>
                          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                            {config.hero.subtitle}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                              onClick={() => navigateTo('contact')}
                              className={`px-6 py-3 text-xs sm:text-sm font-bold text-white ${palette.primaryBtn} ${roundedClass} shadow-lg flex items-center gap-2`}
                            >
                              <span>{config.hero.ctaText || 'Qabulga yozilish'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => navigateTo('services')}
                              className={`px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass} shadow-xs flex items-center gap-1.5`}
                            >
                              <span>Barcha Xizmatlar</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="lg:col-span-5">
                          <img
                            src={config.hero.imageUrl}
                            alt="Hero"
                            className={`w-full h-80 sm:h-96 object-cover ${roundedClass} shadow-2xl border-4 border-white`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* STATS SECTION */}
              {config.visibility.stats && config.stats?.items?.length > 0 && (
                <section className={`${isMobile ? 'py-5' : 'py-8'} bg-white border-b ${palette.divider}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid ${gridColsStats} gap-3 sm:gap-4 text-center`}>
                      {config.stats.items.map(st => (
                        <div key={st.id} className={`${isMobile ? 'p-2.5' : 'p-4'} ${roundedClass} bg-slate-50 border border-slate-100`}>
                          <div className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-extrabold ${palette.primaryText}`}>{st.number}</div>
                          <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-semibold text-slate-600 mt-1`}>{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* SERVICES PREVIEW */}
              {config.visibility.features && config.features?.items?.length > 0 && (
                <section className={`${isMobile ? 'py-8' : 'py-16'} bg-slate-50/60 border-b ${palette.divider}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex flex-col ${isMobile ? 'items-start gap-1.5 mb-6' : 'md:flex-row md:items-end mb-10'} justify-between`}>
                      <div>
                        <h2 className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-bold text-slate-900`}>{config.features.title}</h2>
                        <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.features.subtitle}</p>
                      </div>
                      <button
                        onClick={() => navigateTo('services')}
                        className={`mt-2 md:mt-0 text-xs font-bold ${palette.primaryText} hover:underline flex items-center gap-1`}
                      >
                        <span>Barcha xizmatlar katalogi</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                      {config.features.items.slice(0, 3).map(feat => (
                        <div key={feat.id} className={`bg-white p-6 ${roundedClass} border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow`}>
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-10 h-10 ${roundedClass} ${palette.secondaryBg} flex items-center justify-center ${palette.primaryText}`}>
                                {getIconComponent(feat.iconName)}
                              </div>
                              {feat.badge && (
                                <span className={`px-2 py-0.5 text-[10px] font-bold ${roundedClass} ${palette.badge}`}>
                                  {feat.badge}
                                </span>
                              )}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                          </div>
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-600">{feat.price || 'Narx kelishilgan'}</span>
                            <button
                              onClick={() => navigateTo('service-detail', { service: feat })}
                              className={`text-xs font-bold ${palette.primaryText} hover:underline flex items-center gap-1`}
                            >
                              <span>Batafsil</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* DOCTORS / TEAM PREVIEW */}
              {config.visibility.team && config.team?.items?.length > 0 && (
                <section className={`${isMobile ? 'py-8' : 'py-16'} bg-white border-b ${palette.divider}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex flex-col ${isMobile ? 'items-start gap-1.5 mb-6' : 'md:flex-row md:items-end mb-10'} justify-between`}>
                      <div>
                        <h2 className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-bold text-slate-900`}>{config.team.title}</h2>
                        <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.team.subtitle}</p>
                      </div>
                      <button
                        onClick={() => navigateTo('team')}
                        className={`mt-2 md:mt-0 text-xs font-bold ${palette.primaryText} hover:underline flex items-center gap-1`}
                      >
                        <span>Barcha shifokorlar profili</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                      {config.team.items.slice(0, 3).map(doc => (
                        <div key={doc.id} className={`bg-slate-50 p-4 sm:p-5 ${roundedClass} border border-slate-200 flex flex-col justify-between`}>
                          <div>
                            <img src={doc.imageUrl} alt={doc.name} className={`w-full ${isMobile ? 'h-48' : 'h-56'} object-cover ${roundedClass} mb-3 sm:mb-4`} />
                            <h3 className="text-base font-bold text-slate-900">{doc.name}</h3>
                            <p className={`text-xs font-semibold ${palette.primaryText} mt-0.5`}>{doc.role}</p>
                            <p className="text-xs text-slate-500 mt-1">{doc.experience}</p>
                          </div>
                          <button
                            onClick={() => navigateTo('doctor-detail', { doctor: doc })}
                            className={`mt-3 sm:mt-4 w-full py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass}`}
                          >
                            Shifokor Profili & Qabul
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* PRODUCTS / CHECK-UP PACKAGES PREVIEW */}
              {config.visibility.products && config.products?.items?.length > 0 && (
                <section className={`${isMobile ? 'py-8' : 'py-16'} bg-slate-50/60 border-b ${palette.divider}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center max-w-2xl mx-auto ${isMobile ? 'mb-6' : 'mb-10'}`}>
                      <h2 className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'} font-bold text-slate-900`}>{config.products.title}</h2>
                      <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.products.subtitle}</p>
                    </div>

                    <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                      {config.products.items.map(prod => (
                        <div key={prod.id} className={`bg-white p-5 ${roundedClass} border border-slate-200 shadow-xs flex flex-col justify-between`}>
                          <div>
                            <img src={prod.imageUrl} alt={prod.name} className={`w-full h-44 object-cover ${roundedClass} mb-3`} />
                            <h3 className="text-sm font-bold text-slate-900 mb-1">{prod.name}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">{prod.description}</p>
                          </div>
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-sm font-extrabold text-emerald-600">{prod.price}</span>
                            <button
                              onClick={() => handleAddToCart(prod)}
                              className={`px-3 py-1.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} flex items-center gap-1.5`}
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Savatga</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* PAGE: SERVICES (XIZMATLAR) */}
          {currentPage === 'services' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Barcha Tibbiy Xizmatlar & Tashxis</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">To'liq tibbiy xizmatlar ro'yxati, apparatlar va narxlar</p>
                </div>

                <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                  {(config.features?.items || []).map(feat => (
                    <div key={feat.id} className={`bg-white p-5 sm:p-6 ${roundedClass} border border-slate-200 shadow-xs flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-0.5 text-[10px] font-bold ${roundedClass} ${palette.badge}`}>{feat.badge || 'Xizmat'}</span>
                          <span className="text-xs font-bold text-emerald-600">{feat.price}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                        {feat.procedures && feat.procedures.length > 0 && (
                          <div className="space-y-1.5 mb-4 p-3 bg-slate-50 rounded-lg text-xs">
                            <div className="font-bold text-slate-700 mb-1">Protseduralar:</div>
                            {feat.procedures.map((p, i) => (
                              <div key={i} className="flex justify-between text-slate-600">
                                <span>• {p.name}</span>
                                <span className="font-semibold text-slate-900">{p.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex gap-2">
                        <button
                          onClick={() => navigateTo('service-detail', { service: feat })}
                          className={`flex-1 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 ${roundedClass}`}
                        >
                          Batafsil
                        </button>
                        <button
                          onClick={() => {
                            setDirectForm(prev => ({ ...prev, service: feat.title }));
                            navigateTo('contact');
                          }}
                          className={`flex-1 py-2 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                        >
                          Qabulga
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAGE: SERVICE DETAIL */}
          {currentPage === 'service-detail' && selectedService && (
            <div className="py-8 sm:py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                <button
                  onClick={() => navigateTo('services')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Xizmatlar ro'yxatiga qaytish</span>
                </button>

                <div className={`bg-white p-5 sm:p-8 ${roundedClass} border border-slate-200 shadow-sm space-y-6`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div>
                      <span className={`px-2.5 py-1 text-xs font-bold ${roundedClass} ${palette.badge} mb-2 inline-block`}>
                        {selectedService.badge || 'Tibbiy Xizmat'}
                      </span>
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">{selectedService.title}</h1>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs text-slate-500 font-medium">Boshlang'ich narx:</div>
                      <div className="text-xl font-extrabold text-emerald-600">{selectedService.price}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedService.fullDescription || selectedService.description}
                  </p>

                  {selectedService.benefits && (
                    <div className="space-y-2 pt-2">
                      <h3 className="text-sm font-bold text-slate-900">Afzalliklarimiz:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedService.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2 bg-slate-50 rounded">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.procedures && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-sm font-bold text-slate-900">Protseduralar va Narxlar:</h3>
                      <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100 text-xs">
                        {selectedService.procedures.map((p, i) => (
                          <div key={i} className="p-3 flex justify-between items-center bg-white">
                            <span className="font-semibold text-slate-800">{p.name}</span>
                            <span className="font-bold text-emerald-600">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Ushbu xizmat bo'yicha navbatga yozilmoqchimisiz?</div>
                      <div className="text-[11px] text-slate-500">Mutaxassisimiz siz bilan 10 daqiqa ichida bog'lanadi</div>
                    </div>
                    <button
                      onClick={() => {
                        setDirectForm(prev => ({ ...prev, service: selectedService.title }));
                        navigateTo('contact');
                      }}
                      className={`w-full sm:w-auto px-6 py-3 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                    >
                      Onlayn Navbat Olish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE: TEAM / DOCTORS */}
          {currentPage === 'team' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{config.team?.title || 'Bizning Shifokorlar'}</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.team?.subtitle || 'Tibbiyot fanlari nomzodlari va xalqaro tajribali mutaxassislar'}</p>
                </div>

                <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                  {(config.team?.items || []).map(doc => (
                    <div key={doc.id} className={`bg-white p-5 sm:p-6 ${roundedClass} border border-slate-200 shadow-xs flex flex-col justify-between`}>
                      <div>
                        <img src={doc.imageUrl} alt={doc.name} className={`w-full ${isMobile ? 'h-48' : 'h-64'} object-cover ${roundedClass} mb-4`} />
                        <h3 className="text-base font-bold text-slate-900">{doc.name}</h3>
                        <p className={`text-xs font-semibold ${palette.primaryText} mt-0.5`}>{doc.role}</p>
                        <p className="text-xs text-slate-500 mt-1">Tajriba: {doc.experience}</p>
                        <p className="text-xs text-slate-600 mt-3 leading-relaxed">{doc.specialization}</p>
                        {doc.schedule && (
                          <div className="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-medium flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{doc.schedule}</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => navigateTo('doctor-detail', { doctor: doc })}
                        className={`mt-4 w-full py-2.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                      >
                        Shifokor Profili & Qabul
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAGE: DOCTOR DETAIL */}
          {currentPage === 'doctor-detail' && selectedDoctor && (
            <div className="py-8 sm:py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                <button
                  onClick={() => navigateTo('team')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Shifokorlar ro'yxatiga qaytish</span>
                </button>

                <div className={`bg-white p-5 sm:p-8 ${roundedClass} border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start`}>
                  <div className="md:col-span-5">
                    <img src={selectedDoctor.imageUrl} alt={selectedDoctor.name} className={`w-full ${isMobile ? 'h-56' : 'h-80'} object-cover ${roundedClass} shadow-md`} />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{selectedDoctor.name}</h1>
                      <p className={`text-sm font-semibold ${palette.primaryText} mt-0.5`}>{selectedDoctor.role}</p>
                      <p className="text-xs text-slate-500 mt-1">Amaliy tajriba: {selectedDoctor.experience}</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                      <div className="font-bold text-slate-700">Ixtisoslashuvi:</div>
                      <p className="text-slate-600">{selectedDoctor.specialization}</p>
                    </div>

                    {selectedDoctor.bio && (
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {selectedDoctor.bio}
                      </p>
                    )}

                    {selectedDoctor.schedule && (
                      <div className="text-xs text-slate-700 font-medium">
                        🕒 <b>Qabul vaqtlari:</b> {selectedDoctor.schedule}
                      </div>
                    )}

                    {selectedDoctor.consultationPrice && (
                      <div className="text-xs font-bold text-emerald-600">
                        Konsultatsiya narxi: {selectedDoctor.consultationPrice}
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setDirectForm(prev => ({ ...prev, service: `${selectedDoctor.name} qabuli` }));
                          navigateTo('contact');
                        }}
                        className={`w-full py-3 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                      >
                        Ushbu Shifokorga Navbat Olish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE: ABOUT */}
          {currentPage === 'about' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{config.about?.title || 'Biz haqimizda'}</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.about?.subtitle || ''}</p>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 lg:grid-cols-12 gap-10'} items-center`}>
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs sm:text-base text-slate-700 leading-relaxed">
                      {config.about?.content}
                    </p>
                    {config.about?.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-4">
                        {config.about.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-5">
                    <img
                      src={config.about?.imageUrl || config.hero.imageUrl}
                      alt="About"
                      className={`w-full ${isMobile ? 'h-52' : 'h-80'} object-cover ${roundedClass} shadow-xl`}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE: PRODUCTS & CHECK-UP PACKAGES */}
          {currentPage === 'products' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{config.products?.title || 'Mahsulotlar & Check-up Paketlar'}</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.products?.subtitle || 'Bir nechtasini tanlab savatga qo\'shing va buyurtma bering'}</p>
                </div>

                <div className={`grid ${gridCols3} gap-4 sm:gap-6`}>
                  {(config.products?.items || []).map(prod => (
                    <div key={prod.id} className={`bg-white p-4 sm:p-5 ${roundedClass} border border-slate-200 shadow-xs flex flex-col justify-between`}>
                      <div>
                        <img src={prod.imageUrl} alt={prod.name} className={`w-full ${isMobile ? 'h-36' : 'h-48'} object-cover ${roundedClass} mb-3`} />
                        <h3 className="text-base font-bold text-slate-900 mb-1">{prod.name}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">{prod.description}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-extrabold text-emerald-600">{prod.price}</span>
                        <button
                          onClick={() => handleAddToCart(prod)}
                          className={`px-4 py-2 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} flex items-center gap-1.5`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Savatga</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAGE: PRICING */}
          {currentPage === 'pricing' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{config.pricing?.title || 'Narxlar va Tariflar'}</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.pricing?.subtitle || 'Shaffof va qulay to\'lov rejalari'}</p>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6 sm:gap-8 max-w-4xl mx-auto`}>
                  {(config.pricing?.plans || []).map(plan => (
                    <div key={plan.id} className={`bg-white p-6 sm:p-8 ${roundedClass} border ${plan.isPopular ? 'border-2 border-indigo-600 shadow-xl' : 'border-slate-200 shadow-xs'} flex flex-col justify-between`}>
                      <div>
                        {plan.isPopular && (
                          <span className="px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                            Eng Ommabop
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                        <div className="mt-3 sm:mt-4 mb-5 sm:mb-6">
                          <span className={`text-2xl sm:text-3xl font-extrabold ${palette.primaryText}`}>{plan.price}</span>
                          <span className="text-xs text-slate-500 font-medium"> / {plan.period}</span>
                        </div>
                        <div className="space-y-2.5 text-xs text-slate-600 mb-6 sm:mb-8">
                          {plan.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setDirectForm(prev => ({ ...prev, service: `${plan.name} Tarifi` }));
                          navigateTo('contact');
                        }}
                        className={`w-full py-3 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}`}
                      >
                        {plan.ctaText || 'Tanlash'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAGE: CONTACT & ONLINE APPOINTMENT */}
          {currentPage === 'contact' && (
            <div className="py-8 sm:py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{config.contact.title}</h1>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm">{config.contact.subtitle}</p>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10'}`}>
                  <div className="lg:col-span-5 space-y-6">
                    <div className={`p-5 sm:p-6 bg-white border border-slate-200 ${roundedClass} space-y-4 shadow-xs`}>
                      <h3 className="text-base font-bold text-slate-900">Aloqa Ma'lumotlari</h3>
                      <div className="space-y-3 text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                            <Phone className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-500">Telefon:</div>
                            <a href={`tel:${config.contact.phone}`} className="font-bold text-emerald-600 hover:underline">{config.contact.phone}</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                            <Mail className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-500">Email:</div>
                            <a href={`mailto:${config.contact.email}`} className="font-bold text-slate-800 hover:underline">{config.contact.email}</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                            <MapPin className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-500">Manzil:</div>
                            <div className="text-slate-800 font-medium">{config.contact.address}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className={`p-5 sm:p-8 bg-white border border-slate-200 ${roundedClass} shadow-sm`}>
                      <h3 className="text-base font-bold text-slate-900 mb-1">Onlayn Qabulga Yozilish Formasi</h3>
                      <p className="text-xs text-slate-500 mb-4">Shifokor ko'rigi yoki diagnostika uchun o'zingizga qulay vaqtni tanlang</p>

                      {formSuccess ? (
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span>Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan bog'lanadi.</span>
                        </div>
                      ) : (
                        <form onSubmit={handleDirectSubmit} className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Ism va Familiyangiz *</label>
                            <input
                              type="text"
                              required
                              placeholder="Masalan: Madina Karimova"
                              value={directForm.name}
                              onChange={(e) => setDirectForm({ ...directForm, name: e.target.value })}
                              className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Telefon Raqamingiz *</label>
                            <input
                              type="tel"
                              required
                              placeholder="+998 90 123 45 67"
                              value={directForm.phone}
                              onChange={(e) => setDirectForm({ ...directForm, phone: e.target.value })}
                              className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>

                          <div className={`grid ${isMobile ? 'grid-cols-1 gap-2.5' : 'grid-cols-2 gap-3'}`}>
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">Qulay Sana</label>
                              <input
                                type="date"
                                value={directForm.date}
                                onChange={(e) => setDirectForm({ ...directForm, date: e.target.value })}
                                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">Qulay Vaqt</label>
                              <input
                                type="time"
                                value={directForm.time}
                                onChange={(e) => setDirectForm({ ...directForm, time: e.target.value })}
                                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">Xizmat yoki Shifokor</label>
                            <input
                              type="text"
                              placeholder="4D UZI Skrining yoki Shifokor ko'rigi"
                              value={directForm.service}
                              onChange={(e) => setDirectForm({ ...directForm, service: e.target.value })}
                              className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={formSubmitting}
                            className={`w-full py-3 text-xs font-bold uppercase tracking-wider text-white ${palette.primaryBtn} ${roundedClass}`}
                          >
                            {formSubmitting ? "Yuborilmoqda..." : "Arizani Yuborish"}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* ========================================================================= */}
        {/* 3. FOOTER                                                                */}
        {/* ========================================================================= */}
        {config.visibility.footer && (
          <footer className={`${palette.footerBg} py-8 sm:py-10 border-t border-slate-800 mt-auto`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs text-center md:text-left text-slate-400">
                {config.footer.copyrightText}
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                {config.footer.socialTelegram && <a href={config.footer.socialTelegram} target="_blank" className="hover:text-white">Telegram</a>}
                {config.footer.socialInstagram && <a href={config.footer.socialInstagram} target="_blank" className="hover:text-white">Instagram</a>}
                {config.footer.socialPhone && <a href={config.footer.socialPhone} className="hover:text-white">Qo'ng'iroq</a>}
              </div>
            </div>
          </footer>
        )}

        {/* Sticky Mobile Action Bar (Always accessible on mobile preview) */}
        {isMobile && (
          <div className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 flex items-center justify-between gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex-1 py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Qo'ng'iroq</span>
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className={`flex-[2] py-2 px-3 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md ${palette.primaryBtn}`}
            >
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Qabulga Yozilish</span>
            </button>
            {config.visibility.cart && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 bg-slate-100 text-slate-700 rounded-xl relative hover:bg-slate-200 flex-shrink-0"
                title="Savat"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
            )}
          </div>
        )}

        {/* Shopping Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
          config={config}
          onNewLead={onNewLead}
          roundedClass={roundedClass}
          palette={palette}
        />
    </div>
  );

  // Return Device-Specific Wrapper
  if (isMobile) {
    return (
      <div className={`w-full py-4 sm:py-8 px-2 flex justify-center items-start overflow-y-auto ${palette.bg} min-h-full`}>
        {/* Realistic Mobile Device Frame (iPhone style) */}
        <div className="w-[390px] max-w-full bg-slate-950 p-3 sm:p-3.5 rounded-[48px] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/60 flex flex-col my-auto">
          {/* iOS Dynamic Island Status Bar */}
          <div className="flex items-center justify-between px-5 pt-1 pb-2.5 text-white text-[11px] font-semibold select-none">
            <span>09:41</span>
            <div className="w-24 h-4 bg-black rounded-full mx-auto flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90 ml-auto mr-1 border border-slate-800"></div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <span className="text-[9px] font-bold">5G</span>
              <div className="w-4 h-2 border border-slate-300 rounded-[2px] p-[1px] flex">
                <div className="w-full h-full bg-emerald-400 rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Screen inside phone */}
          <div className="w-full rounded-[36px] overflow-hidden bg-white flex flex-col relative max-h-[760px] overflow-y-auto shadow-inner border border-slate-200">
            {websiteInnerContent}
          </div>

          {/* Bottom Home Indicator */}
          <div className="py-2.5 flex justify-center select-none">
            <div className="w-32 h-1 bg-slate-500 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={`w-full py-4 sm:py-8 px-2 sm:px-4 flex justify-center items-start overflow-y-auto ${palette.bg} min-h-full`}>
        {/* Realistic Tablet Frame (iPad style) */}
        <div className="w-[768px] max-w-full bg-slate-950 p-3.5 rounded-[34px] shadow-2xl border-4 border-slate-800 flex flex-col my-auto">
          {/* Tablet Front Camera */}
          <div className="flex justify-center pb-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
          </div>

          {/* Screen inside tablet */}
          <div className="w-full rounded-[22px] overflow-hidden bg-white flex flex-col relative max-h-[850px] overflow-y-auto shadow-inner border border-slate-200">
            {websiteInnerContent}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Full View
  return (
    <div className={`w-full min-h-full ${palette.bg} ${palette.text} transition-all duration-300 font-sans flex flex-col`}>
      <div className="w-full flex-1 flex flex-col bg-white min-h-screen relative shadow-xs">
        {websiteInnerContent}
      </div>
    </div>
  );
}
