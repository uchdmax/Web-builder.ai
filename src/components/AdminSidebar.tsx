import React, { useState } from 'react';
import { 
  Sparkles, 
  Settings, 
  Layers, 
  Edit, 
  Sliders, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Send, 
  Download, 
  RefreshCw, 
  Plus, 
  Trash2, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Code, 
  Phone, 
  MapPin, 
  Mail, 
  Instagram, 
  FileSpreadsheet, 
  ExternalLink,
  Laptop,
  Check,
  AlertCircle,
  HelpCircle,
  Activity,
  Award,
  Crown,
  Zap,
  Building2,
  Search,
  Globe,
  Share2,
  Image as ImageIcon,
  Tag,
  X
} from 'lucide-react';
import { WebsiteConfig, ThemeType, FontType, TierLevel, LeadItem, FeatureItem, TeamMemberItem, ProductItem, PricingPlan, FaqItem } from '../types';
import { templates } from '../data/templates';

interface AdminSidebarProps {
  config: WebsiteConfig;
  onChangeConfig: (updater: (prev: WebsiteConfig) => WebsiteConfig) => void;
  onSetTier: (tier: TierLevel) => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
  leads: LeadItem[];
  onUpdateLeadStatus: (id: string, status: LeadItem['status']) => void;
  onDeleteLead: (id: string) => void;
  onExportCSV: () => void;
  onGenerateAI: () => void;
  aiPrompt: string;
  setAiPrompt: (p: string) => void;
  isGenerating: boolean;
  genStep: number;
  stepMessages: string[];
  aiError: string | null;
  onTestTelegram: () => void;
  telegramTestStatus: { loading: boolean; success?: boolean; message?: string } | null;
  onExportHTML: () => void;
  onDownloadProjectZip: () => void;
}

export default function AdminSidebar({
  config,
  onChangeConfig,
  onSetTier,
  activeTab,
  setActiveTab,
  leads,
  onUpdateLeadStatus,
  onDeleteLead,
  onExportCSV,
  onGenerateAI,
  aiPrompt,
  setAiPrompt,
  isGenerating,
  genStep,
  stepMessages,
  aiError,
  onTestTelegram,
  telegramTestStatus,
  onExportHTML,
  onDownloadProjectZip
}: AdminSidebarProps) {
  const [contentSection, setContentSection] = useState<'header' | 'hero' | 'stats' | 'features' | 'team' | 'about' | 'products' | 'pricing' | 'gallery' | 'testimonials' | 'faq' | 'contact' | 'footer'>('hero');
  const [leadFilter, setLeadFilter] = useState<'barchasi' | 'yangi' | 'boglanildi' | 'yakunlandi' | 'bekor_qilindi'>('barchasi');
  const [searchTerm, setSearchTerm] = useState('');

  // SEO Tab States
  const [seoPreviewMode, setSeoPreviewMode] = useState<'google' | 'social'>('google');
  const [showAdvancedSeo, setShowAdvancedSeo] = useState<boolean>(false);
  const [keywordInput, setKeywordInput] = useState<string>('');

  // Industry prompt presets
  const industryPresets = [
    { label: "🏥 Xususiy Klinika & UZI", prompt: "Toshkentdagi zamonaviy ginekologiya, 4D UZI skrining va xususiy tug'ruqxona majmuasi uchun professional ko'p sahifali veb-portal" },
    { label: "🛍️ Smart Gadjetlar Do'koni", prompt: "iPhone, MacBook, Apple Watch va original gadjetlar sotiladigan to'liq savatli zamonaviy internet-do'kon" },
    { label: "💻 IT Agentlik & Veb-Dasturlash", prompt: "Bizneslar uchun saytlar, mobil ilovalar va CRM tizimlar yaratuvchi yetakchi dasturlash agentligi" },
    { label: "🍽️ Milliy & Yevropa Restorani", prompt: "Shinam oilaviy restoran, mazali taomlar menyusi, online stol band qilish va yetkazib berish xizmati" },
    { label: "🎓 Zamonaviy IT O'quv Markazi", prompt: "Frontend, Backend, Foundation va Ingliz tili kurslari bo'yicha zamonaviy o'quv markazi va mentorlar jamoasi" },
    { label: "🚗 24/7 Professional Avtoservis", prompt: "Avtomobillarni kompyuter diagnostika qilish, dvigatel ta'miri va original moy almashtirish servisi" }
  ];

  // Helper updater
  const updateField = (path: string[], value: any) => {
    onChangeConfig(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      let curr = copy;
      for (let i = 0; i < path.length - 1; i++) {
        curr = curr[path[i]];
      }
      curr[path[path.length - 1]] = value;
      return copy;
    });
  };

  const updateSeoField = (key: string, value: any) => {
    onChangeConfig(prev => ({
      ...prev,
      seo: {
        metaTitle: prev.seo?.metaTitle || `${prev.header.logoName} – ${prev.hero.title}`,
        metaDescription: prev.seo?.metaDescription || prev.hero.subtitle,
        keywords: prev.seo?.keywords || '',
        ogImage: prev.seo?.ogImage || prev.hero.imageUrl,
        canonicalUrl: prev.seo?.canonicalUrl || 'https://mysite.uz',
        siteName: prev.seo?.siteName || prev.header.logoName,
        schemaType: prev.seo?.schemaType || 'LocalBusiness',
        author: prev.seo?.author || prev.header.logoName,
        robots: prev.seo?.robots || 'index, follow',
        ...(prev.seo || {}),
        [key]: value
      }
    }));
  };

  const filteredLeads = leads.filter(lead => {
    if (leadFilter !== 'barchasi' && lead.status !== leadFilter) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return lead.fullName.toLowerCase().includes(q) || lead.phone.toLowerCase().includes(q) || lead.serviceOrProduct.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <aside className="w-80 md:w-96 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col h-full text-slate-200 select-none">
      {/* Platform Branding & Tier Switcher */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                MiGroup Studio
                <span className="px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
                  No-Code
                </span>
              </h1>
              <p className="text-[11px] text-slate-400">Professional Sayt Konstruktori</p>
            </div>
          </div>

          {/* Current Tier Badge */}
          <div className="flex items-center">
            {config.tierLevel === 'oddiy' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Zap className="w-3 h-3" /> Oddiy
              </span>
            )}
            {config.tierLevel === 'orta' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                <Building2 className="w-3 h-3" /> O'rta
              </span>
            )}
            {config.tierLevel === 'pro' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Crown className="w-3 h-3" /> Pro
              </span>
            )}
          </div>
        </div>

        {/* 3 Tier Segmented Control */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => onSetTier('oddiy')}
            className={`py-1.5 px-2 text-[11px] font-semibold rounded-md transition-all flex flex-col items-center gap-0.5 ${
              config.tierLevel === 'oddiy'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-1">⚡ Oddiy</span>
            <span className="text-[9px] opacity-75 font-normal">Landing</span>
          </button>
          <button
            onClick={() => onSetTier('orta')}
            className={`py-1.5 px-2 text-[11px] font-semibold rounded-md transition-all flex flex-col items-center gap-0.5 ${
              config.tierLevel === 'orta'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-1">🏢 O'rta</span>
            <span className="text-[9px] opacity-75 font-normal">Ko'p Sahifali</span>
          </button>
          <button
            onClick={() => onSetTier('pro')}
            className={`py-1.5 px-2 text-[11px] font-semibold rounded-md transition-all flex flex-col items-center gap-0.5 ${
              config.tierLevel === 'pro'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <span className="flex items-center gap-1">👑 Pro</span>
            <span className="text-[9px] opacity-75 font-normal">Savat + CRM</span>
          </button>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex border-b border-slate-800 bg-slate-950/40 overflow-x-auto scrollbar-none px-2 py-1.5 gap-1">
        {[
          { id: 'ai', label: 'AI Yaratuvchi', icon: Sparkles },
          { id: 'templates', label: 'Shablonlar', icon: Layers },
          { id: 'design', label: 'Dizayn', icon: Sliders },
          { id: 'sections', label: 'Sahifalar', icon: Settings },
          { id: 'content', label: 'Kontent', icon: Edit },
          { id: 'seo', label: 'SEO & Meta', icon: Search, badge: 'Yangi' },
          { id: 'cart', label: 'Savat', icon: ShoppingBag, badge: config.tierLevel === 'pro' ? 'Pro' : undefined },
          { id: 'leads', label: 'CRM Arizalar', icon: TrendingUp, count: leads.filter(l => l.status === 'yangi').length },
          { id: 'integrations', label: 'Telegram', icon: Send },
          { id: 'export', label: 'Eksport & PC', icon: Download }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="px-1 py-0.2 text-[8px] font-bold bg-emerald-500/20 text-emerald-400 rounded">
                  {tab.badge}
                </span>
              )}
              {tab.count !== undefined && tab.count > 0 && (
                <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-500 text-slate-950 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        
        {/* ========================================================= */}
        {/* 1. AI GENERATOR TAB                                      */}
        {/* ========================================================= */}
        {activeTab === 'ai' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                AI Bilan Sayt Yaratish
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Biznesingiz haqida qisqacha yozing, sun'iy intellekt marketing matnlari, xizmatlar, shifokorlar va to'liq dizaynni o'zbek tilida generatsiya qilib beradi.
              </p>
            </div>

            {/* Prompt Input Box */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                Biznesingiz yoki saytingiz tavsifi:
              </label>
              <textarea
                rows={4}
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Masalan: Toshkentdagi zamonaviy 4D UZI va ginekologiya klinikasi uchun qabulga yozilish tizimli sayt..."
                className="w-full p-3 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Quick Industry Presets */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-slate-400">
                Tayyor namunalar (1 bosish bilan to'ldirish):
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {industryPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAiPrompt(preset.prompt)}
                    className="text-left px-2.5 py-1.5 text-xs bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-md text-slate-300 hover:text-white transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={onGenerateAI}
              disabled={isGenerating || !aiPrompt.trim()}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Sayt Yaratilmoqda...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>AI Yordamida Saytni Qayta Yaratish</span>
                </>
              )}
            </button>

            {/* Live Generation Progress Steps */}
            {isGenerating && (
              <div className="p-3 bg-slate-950 border border-indigo-500/30 rounded-lg space-y-2">
                <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold">
                  <span>Jarayon:</span>
                  <span>{Math.round(((genStep + 1) / stepMessages.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full transition-all duration-300"
                    style={{ width: `${((genStep + 1) / stepMessages.length) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-300 italic animate-pulse">
                  {stepMessages[genStep]}
                </p>
              </div>
            )}

            {aiError && (
              <div className="p-3 bg-red-950/50 border border-red-800/60 rounded-lg text-xs text-red-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p>{aiError}</p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. TEMPLATES TAB                                         */}
        {/* ========================================================= */}
        {activeTab === 'templates' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                Tayyor Shablonlar Kolleksiyasi
              </h3>
              <p className="text-xs text-slate-400">
                Har qanday biznes yo'nalishiga moslashtirilgan 100% tayyor va no-code shablonni yuklang.
              </p>
            </div>

            <div className="space-y-3">
              {Object.entries(templates).map(([key, item]) => {
                const isCurrent = config.name === item.config.name;
                return (
                  <div
                    key={key}
                    onClick={() => {
                      onChangeConfig(() => JSON.parse(JSON.stringify(item.config)));
                    }}
                    className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                      isCurrent
                        ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        {item.label}
                      </h4>
                      <span className={`px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded ${
                        item.tier === 'pro' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : item.tier === 'orta'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {item.tier === 'pro' ? '👑 Pro' : item.tier === 'orta' ? '🏢 O\'rta' : '⚡ Oddiy'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                      <span>Mavzu: {item.config.theme}</span>
                      <span className="text-indigo-400 font-semibold flex items-center gap-1">
                        Yuklash <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. DESIGN TAB                                            */}
        {/* ========================================================= */}
        {activeTab === 'design' && (
          <div className="space-y-5">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                Sayt Vizual Dizayni & Uslubi
              </h3>
              <p className="text-xs text-slate-400">
                Ranglar palitrasi, shriftlar va vizual tuzilmani o'zgartiring.
              </p>
            </div>

            {/* Structure Mode */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                Sayt Arxitekturasi:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateField(['structureMode'], 'landing')}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all ${
                    config.structureMode === 'landing'
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">⚡ Landing Page</div>
                  <div className="text-[10px] opacity-75 font-normal">1 sahifali yagona oqim</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateField(['structureMode'], 'multi_page')}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-all ${
                    config.structureMode === 'multi_page'
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">🏢 Ko'p Sahifali Portal</div>
                  <div className="text-[10px] opacity-75 font-normal">Alohida batafsil sahifalar</div>
                </button>
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                Ranglar Palitrasi (Theme):
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'indigo', label: 'Indigo Tech', color: 'bg-indigo-600' },
                  { id: 'emerald', label: 'Emerald Health', color: 'bg-emerald-600' },
                  { id: 'slate', label: 'Clean Slate', color: 'bg-slate-800' },
                  { id: 'sunset', label: 'Warm Sunset', color: 'bg-amber-600' },
                  { id: 'nordic', label: 'Nordic Sky', color: 'bg-sky-800' },
                  { id: 'royal_dark', label: 'Royal Dark VIP', color: 'bg-slate-950 border border-amber-500' }
                ].map(theme => (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => updateField(['theme'], theme.id)}
                    className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all ${
                      config.theme === theme.id
                        ? 'bg-slate-800 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${theme.color} flex-shrink-0`} />
                    <span className="truncate">{theme.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Style */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                Tipografika (Shrift):
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'modern', label: 'Plus Jakarta (Zamonaviy)' },
                  { id: 'display', label: 'Inter Display (Texnik)' },
                  { id: 'serif', label: 'Playfair (Klassik)' },
                  { id: 'mono', label: 'JetBrains (Muhandislik)' }
                ].map(font => (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => updateField(['font'], font.id)}
                    className={`p-2 rounded-lg border text-xs font-medium text-left transition-all ${
                      config.font === font.id
                        ? 'bg-slate-800 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    {font.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                Tugma va Bloklar Burchagi:
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { id: 'none', label: '0px' },
                  { id: 'sm', label: '4px' },
                  { id: 'md', label: '8px' },
                  { id: 'lg', label: '14px' },
                  { id: 'full', label: 'Dumaloq' }
                ].map(radius => (
                  <button
                    key={radius.id}
                    type="button"
                    onClick={() => updateField(['borderRadius'], radius.id)}
                    className={`py-1.5 text-center text-xs font-semibold rounded border transition-all ${
                      config.borderRadius === radius.id
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850'
                    }`}
                  >
                    {radius.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. SECTIONS & PAGES VISIBILITY TAB                       */}
        {/* ========================================================= */}
        {activeTab === 'sections' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                Sahifalar va Bo'limlar Boshqaruvi
              </h3>
              <p className="text-xs text-slate-400">
                Saytda ko'rinishi kerak bo'lgan bo'limlarni bir tugma bilan yoqing yoki o'chiring.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { key: 'header', label: 'Yuqori Menyu (Header)' },
                { key: 'hero', label: 'Asosiy Banner (Hero)' },
                { key: 'stats', label: 'Statistika & Ko\'rsatkichlar' },
                { key: 'features', label: 'Xizmatlar & Diagnostika' },
                { key: 'team', label: 'Shifokorlar & Mutaxassislar' },
                { key: 'about', label: 'Biz haqimizda Tarixi' },
                { key: 'products', label: 'Katalog & Check-up Paketlar' },
                { key: 'cart', label: 'E-Commerce Savat (Cart)' },
                { key: 'pricing', label: 'Tariflar & Narxlar' },
                { key: 'gallery', label: 'Fototurlar & Galereya' },
                { key: 'testimonials', label: 'Mijozlar Sharhlari' },
                { key: 'faq', label: 'Savol-Javoblar (FAQ)' },
                { key: 'contact', label: 'Aloqa & Onlayn Navbat' },
                { key: 'footer', label: 'Pastki Qism (Footer)' }
              ].map(sec => {
                const isVisible = (config.visibility as any)[sec.key];
                return (
                  <div
                    key={sec.key}
                    className="flex items-center justify-between p-2.5 bg-slate-950 border border-slate-800 rounded-lg"
                  >
                    <span className="text-xs font-medium text-slate-300">
                      {sec.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateField(['visibility', sec.key], !isVisible)}
                      className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                        isVisible ? 'bg-emerald-600 justify-end' : 'bg-slate-700 justify-start'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full bg-white shadow-md transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. VISUAL CONTENT INSPECTOR TAB                          */}
        {/* ========================================================= */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                Vizual No-Code Matn Tahrirlagich
              </h3>
              <p className="text-xs text-slate-400">
                Tahrirlash uchun bo'limni tanlang:
              </p>
            </div>

            {/* Sub-section Selector */}
            <select
              value={contentSection}
              onChange={(e) => setContentSection(e.target.value as any)}
              className="w-full p-2.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="hero">👑 Asosiy Banner (Hero)</option>
              <option value="header">🧭 Logo & Navigatsiya</option>
              <option value="stats">📊 Statistika</option>
              <option value="features">🩺 Xizmatlar & Narxlar</option>
              <option value="team">👨‍⚕️ Shifokorlar & Jamoa</option>
              <option value="about">🏢 Biz Haqimizda</option>
              <option value="products">🛍️ Mahsulotlar & Paketlar</option>
              <option value="pricing">🏷️ Narxlar & Rejalar</option>
              <option value="gallery">🖼️ Galereya</option>
              <option value="testimonials">💬 Fikrlar</option>
              <option value="faq">❓ Savol-Javob</option>
              <option value="contact">📞 Aloqa & Manzil</option>
              <option value="footer">⚓ Footer & Ijtimoiy</option>
            </select>

            {/* Content Forms */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-3.5">
              
              {/* HERO */}
              {contentSection === 'hero' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Yuqori Nishon (Badge):</label>
                    <input
                      type="text"
                      value={config.hero.badge}
                      onChange={(e) => updateField(['hero', 'badge'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Katta Bosh Sarlavha:</label>
                    <textarea
                      rows={2}
                      value={config.hero.title}
                      onChange={(e) => updateField(['hero', 'title'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Kichik Tavsif Matni:</label>
                    <textarea
                      rows={3}
                      value={config.hero.subtitle}
                      onChange={(e) => updateField(['hero', 'subtitle'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Tugma Matni:</label>
                    <input
                      type="text"
                      value={config.hero.ctaText}
                      onChange={(e) => updateField(['hero', 'ctaText'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Rasm Havolasi (URL):</label>
                    <input
                      type="text"
                      value={config.hero.imageUrl}
                      onChange={(e) => updateField(['hero', 'imageUrl'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-300 font-mono text-[11px]"
                    />
                  </div>
                </>
              )}

              {/* HEADER */}
              {contentSection === 'header' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Logotip Nomi:</label>
                    <input
                      type="text"
                      value={config.header.logoName}
                      onChange={(e) => updateField(['header', 'logoName'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                </>
              )}

              {/* FEATURES / SERVICES */}
              {contentSection === 'features' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Bo'lim Sarlavhasi:</label>
                    <input
                      type="text"
                      value={config.features.title}
                      onChange={(e) => updateField(['features', 'title'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Xizmatlar Ro'yxati:</span>
                      <button
                        type="button"
                        onClick={() => {
                          const newItem: FeatureItem = {
                            id: 'feat-' + Date.now(),
                            title: "Yangi Tibbiy Xizmat",
                            description: "Xizmat haqida qisqacha ma'lumot",
                            iconName: "Activity",
                            price: "100,000 UZS"
                          };
                          updateField(['features', 'items'], [...config.features.items, newItem]);
                        }}
                        className="px-2 py-1 text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Qo'shish
                      </button>
                    </div>

                    {config.features.items.map((feat, idx) => (
                      <div key={feat.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-indigo-300">#{idx + 1} Xizmat</span>
                          <button
                            type="button"
                            onClick={() => {
                              updateField(['features', 'items'], config.features.items.filter(f => f.id !== feat.id));
                            }}
                            className="text-slate-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={feat.title}
                          onChange={(e) => {
                            const newItems = [...config.features.items];
                            newItems[idx].title = e.target.value;
                            updateField(['features', 'items'], newItems);
                          }}
                          placeholder="Xizmat nomi"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white font-semibold"
                        />
                        <input
                          type="text"
                          value={feat.price || ''}
                          onChange={(e) => {
                            const newItems = [...config.features.items];
                            newItems[idx].price = e.target.value;
                            updateField(['features', 'items'], newItems);
                          }}
                          placeholder="Narxi (masalan: 180,000 UZS)"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-emerald-400 font-semibold"
                        />
                        <textarea
                          rows={2}
                          value={feat.description}
                          onChange={(e) => {
                            const newItems = [...config.features.items];
                            newItems[idx].description = e.target.value;
                            updateField(['features', 'items'], newItems);
                          }}
                          placeholder="Xizmat tavsifi"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-300"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* TEAM / DOCTORS */}
              {contentSection === 'team' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Bo'lim Sarlavhasi:</label>
                    <input
                      type="text"
                      value={config.team?.title || ''}
                      onChange={(e) => updateField(['team', 'title'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Shifokorlar / Mutaxassislar:</span>
                      <button
                        type="button"
                        onClick={() => {
                          const newDoc: TeamMemberItem = {
                            id: 'doc-' + Date.now(),
                            name: "Dr. Yangi Shifokor",
                            role: "Akusher-Ginekolog",
                            experience: "10 yillik tajriba",
                            specialization: "Ginekologiya va UZI",
                            imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
                            consultationPrice: "150,000 UZS"
                          };
                          updateField(['team', 'items'], [...(config.team?.items || []), newDoc]);
                        }}
                        className="px-2 py-1 text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Shifokor Qo'shish
                      </button>
                    </div>

                    {(config.team?.items || []).map((doc, idx) => (
                      <div key={doc.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-indigo-300">#{idx + 1} Shifokor</span>
                          <button
                            type="button"
                            onClick={() => {
                              updateField(['team', 'items'], config.team.items.filter(d => d.id !== doc.id));
                            }}
                            className="text-slate-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={doc.name}
                          onChange={(e) => {
                            const newDocs = [...config.team.items];
                            newDocs[idx].name = e.target.value;
                            updateField(['team', 'items'], newDocs);
                          }}
                          placeholder="Ism va Familiya"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white font-bold"
                        />
                        <input
                          type="text"
                          value={doc.role}
                          onChange={(e) => {
                            const newDocs = [...config.team.items];
                            newDocs[idx].role = e.target.value;
                            updateField(['team', 'items'], newDocs);
                          }}
                          placeholder="Lavozimi / Mutaxassisligi"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-indigo-300"
                        />
                        <input
                          type="text"
                          value={doc.experience}
                          onChange={(e) => {
                            const newDocs = [...config.team.items];
                            newDocs[idx].experience = e.target.value;
                            updateField(['team', 'items'], newDocs);
                          }}
                          placeholder="Tajribasi (masalan: 15 yillik tajriba)"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-300"
                        />
                        <input
                          type="text"
                          value={doc.imageUrl}
                          onChange={(e) => {
                            const newDocs = [...config.team.items];
                            newDocs[idx].imageUrl = e.target.value;
                            updateField(['team', 'items'], newDocs);
                          }}
                          placeholder="Rasm URL"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-400 font-mono text-[10px]"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* PRODUCTS & CHECK-UP PACKAGES */}
              {contentSection === 'products' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Bo'lim Sarlavhasi:</label>
                    <input
                      type="text"
                      value={config.products?.title || ''}
                      onChange={(e) => updateField(['products', 'title'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Mahsulotlar / Check-up Paketlar:</span>
                      <button
                        type="button"
                        onClick={() => {
                          const newProd: ProductItem = {
                            id: 'prod-' + Date.now(),
                            name: "Yangi Check-Up Paketi",
                            description: "To'liq tekshiruv va tahlillar to'plami",
                            price: "500,000 UZS",
                            numericPrice: 500000,
                            imageUrl: "https://images.unsplash.com/photo-1504813184591-0155286141a5?auto=format&fit=crop&q=80&w=400"
                          };
                          updateField(['products', 'items'], [...(config.products?.items || []), newProd]);
                        }}
                        className="px-2 py-1 text-[11px] font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Mahsulot Qo'shish
                      </button>
                    </div>

                    {(config.products?.items || []).map((prod, idx) => (
                      <div key={prod.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-emerald-400">#{idx + 1} Mahsulot</span>
                          <button
                            type="button"
                            onClick={() => {
                              updateField(['products', 'items'], config.products.items.filter(p => p.id !== prod.id));
                            }}
                            className="text-slate-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={prod.name}
                          onChange={(e) => {
                            const newProds = [...config.products.items];
                            newProds[idx].name = e.target.value;
                            updateField(['products', 'items'], newProds);
                          }}
                          placeholder="Mahsulot nomi"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-white font-bold"
                        />
                        <input
                          type="text"
                          value={prod.price}
                          onChange={(e) => {
                            const newProds = [...config.products.items];
                            newProds[idx].price = e.target.value;
                            newProds[idx].numericPrice = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0;
                            updateField(['products', 'items'], newProds);
                          }}
                          placeholder="Narxi (masalan: 750,000 UZS)"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-emerald-400 font-bold"
                        />
                        <textarea
                          rows={2}
                          value={prod.description}
                          onChange={(e) => {
                            const newProds = [...config.products.items];
                            newProds[idx].description = e.target.value;
                            updateField(['products', 'items'], newProds);
                          }}
                          placeholder="Tavsifi"
                          className="w-full p-1.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-300"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* CONTACT */}
              {contentSection === 'contact' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Aloqa Sarlavhasi:</label>
                    <input
                      type="text"
                      value={config.contact.title}
                      onChange={(e) => updateField(['contact', 'title'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Telefon Raqam:</label>
                    <input
                      type="text"
                      value={config.contact.phone}
                      onChange={(e) => updateField(['contact', 'phone'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-emerald-400 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Email Manzil:</label>
                    <input
                      type="email"
                      value={config.contact.email}
                      onChange={(e) => updateField(['contact', 'email'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Manzil & Mo'ljal:</label>
                    <textarea
                      rows={2}
                      value={config.contact.address}
                      onChange={(e) => updateField(['contact', 'address'], e.target.value)}
                      className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. SEO & SEARCH METADATA TAB                             */}
        {/* ========================================================= */}
        {activeTab === 'seo' && (() => {
          const currentSeo = config.seo || {
            metaTitle: `${config.header.logoName} – ${config.hero.title}`,
            metaDescription: config.hero.subtitle,
            keywords: `${config.header.logoName}, xizmatlar, buyurtma, narxlar, toshkent`,
            ogImage: config.hero.imageUrl,
            canonicalUrl: 'https://mysite.uz',
            siteName: config.header.logoName,
            schemaType: 'LocalBusiness',
            author: config.header.logoName,
            robots: 'index, follow'
          };

          const keywordList = (currentSeo.keywords || '')
            .split(',')
            .map(k => k.trim())
            .filter(Boolean);

          const titleLen = (currentSeo.metaTitle || '').length;
          const descLen = (currentSeo.metaDescription || '').length;

          let seoScore = 0;
          if (titleLen >= 30 && titleLen <= 60) seoScore += 30;
          else if (titleLen > 0) seoScore += 15;

          if (descLen >= 70 && descLen <= 160) seoScore += 30;
          else if (descLen > 0) seoScore += 15;

          if (keywordList.length >= 3) seoScore += 20;
          else if (keywordList.length > 0) seoScore += 10;

          if (currentSeo.ogImage && currentSeo.ogImage.trim().length > 0) seoScore += 20;

          const removeKeyword = (idxToRemove: number) => {
            const nextList = keywordList.filter((_, idx) => idx !== idxToRemove);
            updateSeoField('keywords', nextList.join(', '));
          };

          const addKeyword = (kw: string) => {
            const clean = kw.trim();
            if (!clean) return;
            if (keywordList.some(k => k.toLowerCase() === clean.toLowerCase())) return;
            const nextList = [...keywordList, clean];
            updateSeoField('keywords', nextList.join(', '));
            setKeywordInput('');
          };

          const quickPresets = [
            { label: '🏥 Klinika', url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200' },
            { label: '🛍️ Do\'kon', url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200' },
            { label: '💻 IT & Dasturlash', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
            { label: '🚗 Avtoservis', url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=1200' },
            { label: '🍽️ Restoran', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200' }
          ];

          return (
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  SEO & Qidiruv Sozlamalari
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Google, Yandex qidiruv tizimlarida birinchi o'ringa chiqish hamda Telegram/Facebook'da chiroyli ulashish kartochkalari (OpenGraph) yaratish.
                </p>
              </div>

              {/* SEO Score & Audit Card */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-200">SEO Salomatlik Balli:</span>
                    <span className={`px-2 py-0.5 text-[11px] font-bold rounded-full ${
                      seoScore >= 80 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      seoScore >= 50 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {seoScore}% {seoScore >= 80 ? 'A\'lo darajada' : seoScore >= 50 ? 'Yaxshi' : 'Yaxshilash kerak'}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      seoScore >= 80 ? 'bg-emerald-500' :
                      seoScore >= 50 ? 'bg-amber-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${seoScore}%` }}
                  />
                </div>

                {/* Checklist indicators */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-400 pt-1">
                  <div className={`flex items-center gap-1 ${titleLen >= 30 && titleLen <= 60 ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Sarlavha ({titleLen}/60)</span>
                  </div>
                  <div className={`flex items-center gap-1 ${descLen >= 70 && descLen <= 160 ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Tavsif ({descLen}/160)</span>
                  </div>
                  <div className={`flex items-center gap-1 ${keywordList.length >= 3 ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Kalit so'zlar ({keywordList.length} ta)</span>
                  </div>
                  <div className={`flex items-center gap-1 ${currentSeo.ogImage ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Ijtimoiy rasm (og:image)</span>
                  </div>
                </div>
              </div>

              {/* Live Preview Switcher (Google Snippet vs Social Card) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                    <Globe className="w-3 h-3 text-indigo-400" />
                    Jonli Ko'rinish Simulyatsiyasi:
                  </label>
                  <div className="flex bg-slate-950 p-0.5 rounded border border-slate-800 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setSeoPreviewMode('google')}
                      className={`px-2 py-0.5 rounded transition-colors font-medium ${
                        seoPreviewMode === 'google' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Google Qidiruv
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeoPreviewMode('social')}
                      className={`px-2 py-0.5 rounded transition-colors font-medium ${
                        seoPreviewMode === 'social' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Telegram / Ulashish
                    </button>
                  </div>
                </div>

                {/* Google Snippet Preview */}
                {seoPreviewMode === 'google' && (
                  <div className="p-3.5 bg-white text-slate-900 rounded-lg shadow-sm border border-slate-300 font-sans space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600 truncate">
                      <div className="w-3.5 h-3.5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-700">
                        G
                      </div>
                      <span className="truncate">{currentSeo.canonicalUrl || 'https://sizningsaytingiz.uz'}</span>
                      <span className="text-slate-400">› xizmatlar</span>
                    </div>
                    <div className="text-blue-700 hover:underline cursor-pointer font-medium text-sm leading-snug line-clamp-1">
                      {currentSeo.metaTitle || `${config.header.logoName} – ${config.hero.title}`}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {currentSeo.metaDescription || config.hero.subtitle}
                    </div>
                  </div>
                )}

                {/* Social Card Preview */}
                {seoPreviewMode === 'social' && (
                  <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-md">
                    {/* og:image Banner */}
                    <div className="w-full h-32 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                      {currentSeo.ogImage ? (
                        <img 
                          src={currentSeo.ogImage} 
                          alt="Social share preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-slate-500 text-xs">
                          <ImageIcon className="w-6 h-6" />
                          <span>Rasm tanlanmagan</span>
                        </div>
                      )}
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/70 text-white backdrop-blur-xs">
                        og:image
                      </span>
                    </div>
                    {/* Details */}
                    <div className="p-3 space-y-1 bg-slate-900/90 border-t border-slate-800">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {(currentSeo.canonicalUrl || 'sizningsaytingiz.uz').replace(/^https?:\/\//, '')}
                      </div>
                      <div className="text-xs font-bold text-white line-clamp-1">
                        {currentSeo.metaTitle || `${config.header.logoName} – ${config.hero.title}`}
                      </div>
                      <div className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {currentSeo.metaDescription || config.hero.subtitle}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Input 1: Meta-Sarlavha */}
              <div className="space-y-1.5 p-3 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-200">
                    Meta-Sarlavha (Title):
                  </label>
                  <span className={`text-[10px] font-bold ${
                    titleLen >= 30 && titleLen <= 60 ? 'text-emerald-400' :
                    titleLen > 60 ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {titleLen}/60 belgi {titleLen >= 30 && titleLen <= 60 ? '(Ideal)' : titleLen > 60 ? '(Juda uzun)' : '(Qisqa)'}
                  </span>
                </div>
                <input
                  type="text"
                  value={currentSeo.metaTitle || ''}
                  onChange={(e) => updateSeoField('metaTitle', e.target.value)}
                  placeholder="Masalan: Ona va Bola – Xususiy Ginekologiya va Tug'ruqxona"
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => updateSeoField('metaTitle', `${config.header.logoName} – ${config.hero.title}`)}
                  className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <Sparkles className="w-3 h-3" />
                  Sayt nomi va sarlavhasidan avtomatik to'ldirish
                </button>
              </div>

              {/* Form Input 2: Meta-Tavsif */}
              <div className="space-y-1.5 p-3 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-200">
                    Meta-Tavsif (Description):
                  </label>
                  <span className={`text-[10px] font-bold ${
                    descLen >= 70 && descLen <= 160 ? 'text-emerald-400' :
                    descLen > 160 ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {descLen}/160 belgi {descLen >= 70 && descLen <= 160 ? '(Ideal)' : descLen > 160 ? '(Juda uzun)' : '(Qisqa)'}
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentSeo.metaDescription || ''}
                  onChange={(e) => updateSeoField('metaDescription', e.target.value)}
                  placeholder="Sayt haqida qisqacha, jozibali tavsif (Google qidiruv natijalarida va Telegramda ko'rinadi)..."
                  className="w-full p-2.5 text-xs bg-slate-900 border border-slate-700 rounded-md text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => updateSeoField('metaDescription', config.hero.subtitle)}
                  className="text-[10px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <Sparkles className="w-3 h-3" />
                  Hero matnidan nusxa olish
                </button>
              </div>

              {/* Form Input 3: Kalit So'zlar */}
              <div className="space-y-2 p-3 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-indigo-400" />
                    Kalit So'zlar (Keywords):
                  </label>
                  <span className="text-[10px] text-slate-400">
                    {keywordList.length} ta kiritildi
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addKeyword(keywordInput);
                      }
                    }}
                    placeholder="Yangi so'z (masalan: toshkent klinika)..."
                    className="flex-1 p-2 text-xs bg-slate-900 border border-slate-700 rounded-md text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() => addKeyword(keywordInput)}
                    className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-bold transition-colors"
                  >
                    Qo'shish
                  </button>
                </div>

                {/* Keyword Tags display */}
                {keywordList.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {keywordList.map((kw, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 border border-slate-700 text-slate-200"
                      >
                        {kw}
                        <button
                          type="button"
                          onClick={() => removeKeyword(idx)}
                          className="hover:text-red-400 ml-0.5 text-slate-400"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Suggestions pills */}
                <div className="space-y-1 pt-1 border-t border-slate-800/80">
                  <span className="text-[10px] text-slate-400 block font-medium">
                    Tavsiya etilgan qo'shimcha so'zlar (1 bosish bilan qo'shish):
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {['toshkent', 'xizmatlar', 'narxlar', 'rasmiy sayt', 'onlayn buyurtma', 'sifatli', 'arzon', 'yetkazib berish'].map(sug => (
                      <button
                        key={sug}
                        type="button"
                        onClick={() => addKeyword(sug)}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        + {sug}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Input 4: Ijtimoiy Tarmoq Rasmi (og:image) */}
              <div className="space-y-2 p-3 bg-slate-950 border border-slate-800 rounded-lg">
                <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                  <Share2 className="w-3 h-3 text-indigo-400" />
                  Ijtimoiy Tarmoq Rasmi (og:image):
                </label>
                <input
                  type="text"
                  value={currentSeo.ogImage || ''}
                  onChange={(e) => updateSeoField('ogImage', e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded-md text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />

                {/* Quick Presets */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 block font-medium">
                    Tayyor rasmlardan tanlash:
                  </span>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      type="button"
                      onClick={() => updateSeoField('ogImage', config.hero.imageUrl)}
                      className="px-2 py-1 text-[10px] bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-slate-300 text-left truncate transition-colors"
                    >
                      🖼️ Hero rasmini olish
                    </button>
                    {quickPresets.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => updateSeoField('ogImage', p.url)}
                        className="px-2 py-1 text-[10px] bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-slate-300 text-left truncate transition-colors"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced SEO Toggle & Accordion */}
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
                <button
                  type="button"
                  onClick={() => setShowAdvancedSeo(!showAdvancedSeo)}
                  className="w-full p-3 flex items-center justify-between text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-indigo-400" />
                    Kengaytirilgan SEO & Schema.org (JSON-LD)
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAdvancedSeo ? 'rotate-90' : ''}`} />
                </button>

                {showAdvancedSeo && (
                  <div className="p-3 pt-0 space-y-3 border-t border-slate-850">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Canonical URL (Asosiy sayt manzili):
                      </label>
                      <input
                        type="text"
                        value={currentSeo.canonicalUrl || ''}
                        onChange={(e) => updateSeoField('canonicalUrl', e.target.value)}
                        placeholder="https://sizningsaytingiz.uz"
                        className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Sayt Nomi (og:site_name):
                      </label>
                      <input
                        type="text"
                        value={currentSeo.siteName || ''}
                        onChange={(e) => updateSeoField('siteName', e.target.value)}
                        placeholder={config.header.logoName}
                        className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Schema.org Mikro-ma'lumot turi (@type):
                      </label>
                      <select
                        value={currentSeo.schemaType || 'LocalBusiness'}
                        onChange={(e) => updateSeoField('schemaType', e.target.value)}
                        className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                      >
                        <option value="LocalBusiness">LocalBusiness (Mahalliy biznes / Servis)</option>
                        <option value="MedicalBusiness">MedicalBusiness (Klinika / Tibbiyot markazi)</option>
                        <option value="Store">Store (Online do'kon / E-Commerce)</option>
                        <option value="Organization">Organization (IT Agentlik / Korporativ)</option>
                        <option value="Restaurant">Restaurant (Restoran / Kafe / Ovqatlanish)</option>
                        <option value="EducationalOrganization">EducationalOrganization (O'quv markazi)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Qidiruv Robotlari Ko'rsatmasi (Robots):
                      </label>
                      <select
                        value={currentSeo.robots || 'index, follow'}
                        onChange={(e) => updateSeoField('robots', e.target.value)}
                        className="w-full p-2 text-xs bg-slate-900 border border-slate-700 rounded text-slate-200"
                      >
                        <option value="index, follow">index, follow (Google'da indekslash tavsiya etiladi)</option>
                        <option value="noindex, nofollow">noindex, nofollow (Qidiruv tizimlaridan yashirish)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })()}

        {/* ========================================================= */}
        {/* 7. E-COMMERCE & SAVAT TAB                                */}
        {/* ========================================================= */}
        {activeTab === 'cart' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                E-Commerce Savat & Buyurtma Moduli
              </h3>
              <p className="text-xs text-slate-400">
                Savat tizimi orqali mijozlar bir nechta xizmat va paketlarni tanlab to'liq summa bilan buyurtma bera olishadi.
              </p>
            </div>

            <div className="p-3 bg-slate-950 border border-emerald-500/30 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">Savat Funksiyasini Faollashtirish</span>
                <button
                  type="button"
                  onClick={() => updateField(['visibility', 'cart'], !config.visibility.cart)}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                    config.visibility.cart ? 'bg-emerald-600 justify-end' : 'bg-slate-700 justify-start'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-md" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                <p>✓ Savatdagi elementlar soni suzuvchi nishonda ko'rinadi.</p>
                <p>✓ Buyurtma berilganda umumiy summa avtomatik hisoblanadi.</p>
                <p>✓ Ma'lumotlar to'g'ridan-to'g'ri CRM arizalariga va Telegramga keladi.</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 7. CRM LEADS & ORDERS TAB                                */}
        {/* ========================================================= */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  CRM: Mijoz Arizalari ({leads.length})
                </h3>
                <p className="text-xs text-slate-400">
                  Saytdan tushgan barcha qabul va buyurtmalar.
                </p>
              </div>
              <button
                onClick={onExportCSV}
                className="px-2.5 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 rounded-md flex items-center gap-1.5 transition-colors"
                title="Excel (CSV) ga yuklab olish"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Excel</span>
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
              {(['barchasi', 'yangi', 'boglanildi', 'yakunlandi', 'bekor_qilindi'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setLeadFilter(f)}
                  className={`px-2 py-1 text-[10px] font-bold rounded capitalize whitespace-nowrap transition-colors ${
                    leadFilter === f
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                  }`}
                >
                  {f === 'barchasi' ? 'Barchasi' : f}
                </button>
              ))}
            </div>

            {/* Leads List */}
            <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  Arizalar mavjud emas
                </div>
              ) : (
                filteredLeads.map(lead => (
                  <div
                    key={lead.id}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{lead.fullName}</span>
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as any)}
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded border focus:outline-none ${
                          lead.status === 'yangi' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                          lead.status === 'boglanildi' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                          lead.status === 'yakunlandi' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                          'bg-red-500/20 text-red-300 border-red-500/30'
                        }`}
                      >
                        <option value="yangi">Yangi</option>
                        <option value="boglanildi">Bog'lanildi</option>
                        <option value="yakunlandi">Yakunlandi</option>
                        <option value="bekor_qilindi">Bekor qilindi</option>
                      </select>
                    </div>

                    <div className="text-[11px] text-slate-400 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Phone className="w-3 h-3" />
                        <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                      </div>
                      <div className="font-medium text-slate-300">
                        {lead.serviceOrProduct} {lead.price ? `(${lead.price})` : ''}
                      </div>
                      {lead.appointmentDate && (
                        <div className="text-slate-400">
                          📅 {lead.appointmentDate} {lead.appointmentTime || ''}
                        </div>
                      )}
                      {lead.address && (
                        <div className="text-slate-400">
                          📍 {lead.address}
                        </div>
                      )}
                      {lead.notes && (
                        <div className="text-slate-400 italic">
                          💬 "{lead.notes}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-900">
                      <span>{lead.createdAt}</span>
                      <button
                        onClick={() => onDeleteLead(lead.id)}
                        className="text-slate-600 hover:text-red-400"
                        title="O'chirish"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 8. TELEGRAM & INTEGRATIONS TAB                           */}
        {/* ========================================================= */}
        {activeTab === 'integrations' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                Telegram Bot & Bildirishnomalar
              </h3>
              <p className="text-xs text-slate-400">
                Saytingizdan tushgan barcha arizalar zudlik bilan Telegram guruhingizga yoki botingizga boradi.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Telegram Bot Token:
                </label>
                <input
                  type="text"
                  placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxYZ"
                  value={config.integrations?.telegramBotToken || ''}
                  onChange={(e) => updateField(['integrations', 'telegramBotToken'], e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Telegram Chat ID:
                </label>
                <input
                  type="text"
                  placeholder="-100123456789 yoki 987654321"
                  value={config.integrations?.telegramChatId || ''}
                  onChange={(e) => updateField(['integrations', 'telegramChatId'], e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-950 border border-slate-700 rounded text-slate-200 font-mono text-[11px]"
                />
              </div>

              <button
                onClick={onTestTelegram}
                disabled={telegramTestStatus?.loading}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                {telegramTestStatus?.loading ? "Yuborilmoqda..." : "Sinov Xabarini Yuborish (Test)"}
              </button>

              {telegramTestStatus && (
                <div className={`p-2.5 rounded text-xs ${telegramTestStatus.success ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950 text-red-300 border border-red-800'}`}>
                  {telegramTestStatus.message}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 9. EXPORT & LOCAL PC RUN TAB                             */}
        {/* ========================================================= */}
        {activeTab === 'export' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5" />
                Mijozga Topshirish & Lokal Kompyuter
              </h3>
              <p className="text-xs text-slate-400">
                Saytni mijozga to'liq mustaqil holda topshiring yoki o'zingizning kompyuteringizda ishlatish uchun yuklab oling.
              </p>
            </div>

            {/* Standalone HTML Export */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">
                  1. Standalone HTML Fayl (Mijoz uchun)
                </h4>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                  Eng Oson
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Ushbu bitta faylni brauzerda ochish kifoya. Uning ichida ko'p sahifalar, savat, Telegram bildirishnomalari va <b>Mijoz uchun maxsus Admin Tahrirlagich</b> joylangan!
              </p>
              <button
                onClick={onExportHTML}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Saytni Yuklab Olish (index.html)</span>
              </button>
            </div>

            {/* Full Source Code */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-2.5">
              <h4 className="text-xs font-bold text-white">
                2. Lokal Kompyuterda Ishga Tushirish (Node.js)
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Loyihani o'z kompyuteringizda (Windows / Mac / Linux) AI Studio'siz ishlatish ketma-ketligi:
              </p>
              <div className="p-2.5 bg-slate-900 rounded font-mono text-[11px] text-indigo-300 space-y-1">
                <div>1. git clone yoki ZIP yuklash</div>
                <div>2. npm install</div>
                <div>3. .env faylga GEMINI_API_KEY yozish</div>
                <div>4. npm run dev</div>
                <div className="text-slate-400">👉 Brauzerda ochiladi: http://localhost:3000</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
