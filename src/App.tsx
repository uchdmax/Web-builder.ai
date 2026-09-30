import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  Laptop, 
  Tablet, 
  Smartphone, 
  Globe, 
  Eye,
  Code as CodeIcon,
  Sparkles
} from 'lucide-react';
import { WebsiteConfig, TierLevel, LeadItem } from './types';
import { templates } from './data/templates';
import WebsitePreview from './components/WebsitePreview';
import AdminSidebar from './components/AdminSidebar';
import { generateSingleFileHTML } from './utils/codeGenerator';

export default function App() {
  // Main Config State - Default to QBaho (Qmeter-inspired CX platform)
  const [config, setConfig] = useState<WebsiteConfig>(
    templates.qbaho ? templates.qbaho.config : (templates.klinika ? templates.klinika.config : templates.ecommerce.config)
  );
  
  // Navigation & View States
  const [activeTab, setActiveTab] = useState<string>('tier');
  const [previewTab, setPreviewTab] = useState<'live' | 'code' | 'publish'>('live');
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // AI Generation States
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [genStep, setGenStep] = useState<number>(0);
  const [aiError, setAiError] = useState<string | null>(null);

  const stepMessages = [
    "Gemini AI biznes sohasini tahlil qilmoqda...",
    "Sahifalar arxitekturasi va navigatsiya qurilmoqda...",
    "Kiosklar, xizmatlar va uskunalar katalogi shakllantirilmoqda...",
    "Ranglar, dizayn va Telegram integratsiyasi sozlanmoqda...",
    "Veb-portal to'liq tayyor!"
  ];

  // Code & Export States
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [telegramTestStatus, setTelegramTestStatus] = useState<{ loading: boolean; success?: boolean; message?: string } | null>(null);

  // CRM Leads State (Sample B2B Clients for QBaho)
  const [leads, setLeads] = useState<LeadItem[]>([
    {
      id: 'lead-1',
      createdAt: '2026-09-30 09:15',
      fullName: 'Ipak Yo\'li Banki (Mirobod filiali)',
      phone: '+998 71 200 11 22',
      serviceOrProduct: '4 ta Kassa uchun Counter Planshet Stendlari',
      price: '7,400,000 UZS',
      appointmentDate: '2026-10-02',
      appointmentTime: '11:00',
      notes: 'Kassa xodimlari va navbat tajribasini o\'lchash uchun demo taqdimot kerak',
      status: 'yangi'
    },
    {
      id: 'lead-2',
      createdAt: '2026-09-29 16:40',
      fullName: 'Akfa Medline Markaziy Klinika',
      phone: '+998 90 987 65 43',
      serviceOrProduct: 'Floor Kiosk (Polga o\'rnatiladigan 2 ta stend)',
      price: '3,900,000 UZS',
      appointmentDate: '2026-10-03',
      appointmentTime: '15:30',
      notes: 'Qabulxona va UZI bo\'limiga bemorlar qoniqishini o\'lchash stendlari',
      status: 'boglanildi'
    },
    {
      id: 'lead-3',
      createdAt: '2026-09-28 14:20',
      fullName: 'EVOS Fast Food Tarmog\'i (12 ta filial)',
      phone: '+998 93 555 12 34',
      serviceOrProduct: 'Biznes Pro Obuna + Dinamik Stol QR Akril',
      price: '1,290,000 UZS/oy',
      appointmentDate: '2026-10-04',
      appointmentTime: '10:00',
      notes: 'Har bir stoldan Telegram bot orqali salbiy fikr tushganda menejerga xabar',
      status: 'yangi'
    }
  ]);

  // Load saved leads and config if available in localStorage
  useEffect(() => {
    try {
      const qbahoLoaded = localStorage.getItem('migroup_qbaho_active_v1');
      const savedConfig = localStorage.getItem('migroup_app_config');
      
      if (!qbahoLoaded && templates.qbaho) {
        setConfig(templates.qbaho.config);
        localStorage.setItem('migroup_qbaho_active_v1', 'true');
        localStorage.setItem('migroup_app_config', JSON.stringify(templates.qbaho.config));
      } else if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }

      const savedLeads = localStorage.getItem('migroup_leads');
      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  // Update Config Helper
  const handleUpdateConfig = (updater: (prev: WebsiteConfig) => WebsiteConfig) => {
    setConfig(prev => {
      const updated = typeof updater === 'function' ? updater(prev) : updater;
      try {
        localStorage.setItem('migroup_app_config', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save config to localStorage', e);
      }
      return updated;
    });
  };

  // Add new lead from preview interactions
  const handleNewLead = (newLead: LeadItem) => {
    setLeads(prev => {
      const updated = [newLead, ...prev];
      try {
        localStorage.setItem('migroup_leads', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save leads to localStorage', e);
      }
      return updated;
    });
  };

  // Delete single lead
  const handleDeleteLead = (id: string) => {
    setLeads(prev => {
      const updated = prev.filter(l => l.id !== id);
      try {
        localStorage.setItem('migroup_leads', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save leads to localStorage', e);
      }
      return updated;
    });
  };

  // Export Leads to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert("Hozircha arizalar mavjud emas!");
      return;
    }
    const headers = "ID,Sana,Mijoz,Telefon,Xizmat/Mahsulot,Narx,Qabul Sanasi,Qabul Vaqti,Status,Izoh\n";
    const rows = leads.map(l => 
      `"${l.id}","${l.createdAt}","${l.fullName}","${l.phone}","${l.serviceOrProduct}","${l.price || ''}","${l.appointmentDate || ''}","${l.appointmentTime || ''}","${l.status}","${l.notes || ''}"`
    ).join("\n");

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `arizalar_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Update lead status
  const handleUpdateLeadStatus = (id: string, status: LeadItem['status']) => {
    setLeads(prev => {
      const updated = prev.map(l => l.id === id ? { ...l, status } : l);
      localStorage.setItem('migroup_leads', JSON.stringify(updated));
      return updated;
    });
  };

  // Switch Tier
  const handleSelectTier = (tier: TierLevel) => {
    setConfig(prev => {
      const nextConfig = { ...prev, tierLevel: tier };
      if (tier === 'oddiy') {
        nextConfig.structureMode = 'landing';
        nextConfig.visibility = {
          ...nextConfig.visibility,
          features: true,
          about: true,
          contact: true,
          team: false,
          products: false,
          pricing: false,
          cart: false
        };
      } else if (tier === 'orta') {
        nextConfig.structureMode = 'multipage_services';
        nextConfig.visibility = {
          ...nextConfig.visibility,
          features: true,
          about: true,
          contact: true,
          team: true,
          products: false,
          pricing: true,
          cart: false
        };
      } else {
        nextConfig.structureMode = 'multipage_portal';
        nextConfig.visibility = {
          ...nextConfig.visibility,
          features: true,
          about: true,
          contact: true,
          team: true,
          products: true,
          pricing: true,
          cart: true
        };
      }
      try {
        localStorage.setItem('migroup_app_config', JSON.stringify(nextConfig));
      } catch (e) {
        console.warn(e);
      }
      return nextConfig;
    });
  };

  // Handle AI Generation
  const handleGenerateAI = async () => {
    if (!aiPrompt.trim()) return;

    setIsGenerating(true);
    setAiError(null);
    setGenStep(1);

    const stepInterval = setInterval(() => {
      setGenStep(s => (s < 4 ? s + 1 : s));
    }, 1200);

    try {
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt })
      });

      if (!response.ok) {
        let errorMsg = `Server xatosi: ${response.status}`;
        try {
          const errData = await response.json();
          if (errData?.error) errorMsg = errData.error;
        } catch (_) {}
        throw new Error(errorMsg);
      }

      const generatedConfig = await response.json();
      clearInterval(stepInterval);
      setGenStep(4);
      
      setTimeout(() => {
        setConfig(generatedConfig);
        try {
          localStorage.setItem('migroup_app_config', JSON.stringify(generatedConfig));
        } catch (e) {
          console.warn(e);
        }
        setIsGenerating(false);
        setGenStep(0);
        setPreviewTab('live');
      }, 500);

    } catch (err: any) {
      clearInterval(stepInterval);
      setIsGenerating(false);
      setGenStep(0);
      setAiError(err.message || "AI generatsiyasida xatolik yuz berdi.");
    }
  };

  // Send test Telegram notification
  const handleTestTelegram = async () => {
    if (!config.integrations?.telegramBotToken || !config.integrations?.telegramChatId) {
      setTelegramTestStatus({
        loading: false,
        success: false,
        message: "Iltimos, avval Bot Token va Chat ID ni to'liq kiriting!"
      });
      return;
    }

    setTelegramTestStatus({ loading: true });
    try {
      const response = await fetch('/api/telegram/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          botToken: config.integrations.telegramBotToken,
          chatId: config.integrations.telegramChatId
        })
      });

      const resData = await response.json();
      if (resData.success) {
        setTelegramTestStatus({
          loading: false,
          success: true,
          message: "✅ Test xabari muvaffaqiyatli Telegram guruhingizga yuborildi!"
        });
      } else {
        setTelegramTestStatus({
          loading: false,
          success: false,
          message: `Xatolik: ${resData.error || 'Token yoki Chat ID noto\'g\'ri'}`
        });
      }
    } catch (err: any) {
      setTelegramTestStatus({
        loading: false,
        success: false,
        message: "Server bilan bog'lanishda xatolik."
      });
    }
  };

  // Generate complete single HTML file string
  const generatedCodeString = generateSingleFileHTML(config);

  // Copy code handler
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCodeString);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Download single-file HTML
  const handleDownloadFile = () => {
    const filename = `${config.header.logoName.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'website'}.html`;
    const blob = new Blob([generatedCodeString], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Tier info label
  const currentTierBadge = {
    oddiy: { label: 'Oddiy (Landing)', color: 'bg-slate-800 text-slate-300 border-slate-700' },
    orta: { label: 'O\'rta (Ko\'p sahifali)', color: 'bg-indigo-950 text-indigo-300 border-indigo-800' },
    pro: { label: 'Pro / E-commerce', color: 'bg-amber-950 text-amber-300 border-amber-800' }
  }[config.tierLevel || 'orta'];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans">
      
      {/* ========================================================================= */}
      {/* 1. TOP NAVBAR / CONTROL BAR                                              */}
      {/* ========================================================================= */}
      <header className="h-16 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-30 shrink-0">
        
        {/* Left: Brand & Tier Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                MiGroup Web Studio
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                v2.0 No-Code
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5">
              Kod yozmasdan professional saytlar yaratish va mijozga topshirish tizimi
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-slate-800">
            <span className="text-[11px] text-slate-400 font-medium">Joriy Tarif:</span>
            <button 
              onClick={() => setActiveTab('tier')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${currentTierBadge.color} hover:opacity-80 transition-opacity`}
            >
              {currentTierBadge.label}
            </button>
          </div>
        </div>

        {/* Center: Live / Code / Publish Mode Tabs */}
        <div className="hidden md:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setPreviewTab('live')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              previewTab === 'live' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Jonli Ko'rish (Live)</span>
          </button>

          <button
            onClick={() => setPreviewTab('code')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              previewTab === 'code' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CodeIcon className="w-3.5 h-3.5" />
            <span>Mustaqil HTML Kod</span>
          </button>

          <button
            onClick={() => setPreviewTab('publish')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              previewTab === 'publish' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Mijozga Topshirish & Hosting</span>
          </button>
        </div>

        {/* Right: Device Switcher & Quick Download */}
        <div className="flex items-center gap-2.5">
          
          {/* Device Switcher (Desktop / Tablet / Mobile) */}
          {previewTab === 'live' && (
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-1.5 rounded-md ${viewMode === 'desktop' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                title="Desktop (100%)"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('tablet')}
                className={`p-1.5 rounded-md ${viewMode === 'tablet' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                title="Planshet (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-1.5 rounded-md ${viewMode === 'mobile' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                title="Mobil Telefon (375px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Download HTML Button */}
          <button
            onClick={handleDownloadFile}
            className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Saytni Yuklab Olish</span>
          </button>
        </div>

      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN WORKSPACE: SIDEBAR + PREVIEW CANVAS                              */}
      {/* ========================================================================= */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT NO-CODE ADMIN SIDEBAR */}
        <AdminSidebar
          config={config}
          onChangeConfig={handleUpdateConfig}
          onSetTier={handleSelectTier}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          leads={leads}
          onUpdateLeadStatus={handleUpdateLeadStatus}
          onDeleteLead={handleDeleteLead}
          onExportCSV={handleExportCSV}
          onGenerateAI={handleGenerateAI}
          aiPrompt={aiPrompt}
          setAiPrompt={setAiPrompt}
          isGenerating={isGenerating}
          genStep={genStep}
          stepMessages={stepMessages}
          aiError={aiError}
          onTestTelegram={handleTestTelegram}
          telegramTestStatus={telegramTestStatus}
          onExportHTML={handleDownloadFile}
          onDownloadProjectZip={handleDownloadFile}
        />

        {/* RIGHT PREVIEW & EXPORT CANVAS */}
        <div className="flex-1 flex flex-col bg-slate-900/60 overflow-y-auto relative">
          
          {/* VIEW 1: LIVE PREVIEW */}
          {previewTab === 'live' && (
            <div className="flex-1 p-3 sm:p-6 flex flex-col items-center justify-start overflow-y-auto">
              <div className="w-full transition-all duration-300">
                <WebsitePreview
                  config={config}
                  activeSection={activeSection}
                  onSelectSection={(sec) => {
                    setActiveSection(sec);
                    setActiveTab('content');
                  }}
                  viewMode={viewMode}
                  onNewLead={handleNewLead}
                />
              </div>
            </div>
          )}

          {/* VIEW 2: HTML EXPORT VIEWER */}
          {previewTab === 'code' && (
            <div className="flex-1 p-6 flex flex-col items-center justify-start">
              <div className="w-full max-w-5xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">index.html (Yagona to'liq mustaqil fayl, Tailwind + JS Router + Cart + CRM)</span>
                  </div>
                  <button 
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-200 rounded-lg text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Nusxa olindi!' : 'Nusxalash'}</span>
                  </button>
                </div>
                <pre className="p-6 text-xs font-mono text-emerald-300/90 overflow-x-auto max-h-[700px] leading-relaxed select-all">
                  {generatedCodeString}
                </pre>
              </div>
            </div>
          )}

          {/* VIEW 3: PUBLISH & CLIENT DELIVERY GUIDE */}
          {previewTab === 'publish' && (
            <div className="flex-1 p-6 flex flex-col items-center justify-start">
              <div className="w-full max-w-3xl space-y-6">
                
                {/* Instant client site download card */}
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Mijozga Tayyor Saytni Topshirish</h3>
                      <p className="text-xs text-slate-400">Ushbu tugmani bosganingizda 1 ta mustaqil index.html fayl yuklanadi.</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Yuklangan fayl hech qanday server yoki murakkab o'rnatishni talab qilmaydi. Unda ichki sahifalar, router, xizmatlar, shifokorlar profili, savat va mijoz uchun bevosita boshqarish paneli (Standalone Admin Mode) mavjud! Uni to'g'ridan-to'g'ri istalgan hostingga (masalan: <b>Vercel, Netlify, cPanel, Beget</b>) yuklab mijozingiz domeniga ulashingiz mumkin.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button 
                      onClick={handleDownloadFile}
                      className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-900/30 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>{config.header.logoName}.html faylini yuklab olish</span>
                    </button>
                    <button 
                      onClick={handleCopyCode}
                      className="px-4 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>To'liq kodni nusxalash</span>
                    </button>
                  </div>
                </div>

                {/* Hosting & Domain Setup Instructions in Uzbek */}
                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Mijoz uchun saytni internetga joylash bosqichlari:</span>
                  </h4>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">HTML Faylni yuklab oling:</strong>
                        <span>Yuqoridagi tugma orqali yagona <code>index.html</code> faylini yuklab olasiz.</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Bepul va tezkor hostingga yuklang (Vercel yoki Netlify):</strong>
                        <span><a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono">netlify.com/drop</a> yoki Vercel sahifasiga faylni shunchaki sudrab (drag & drop) tashlang. Sayt 1 soniyada butun dunyoga ochiladi.</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Mijozning domenini ulang:</strong>
                        <span>Mijozingizning <code>mijoznomi.uz</code> domenini hosting DNS sozlamalariga bog'lang. Sayt to'liq SSL sertifikat bilan ishga tushadi.</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">4</span>
                      <div>
                        <strong className="text-slate-100 block mb-0.5">Telegram Bot orqali buyurtmalarni qabul qilish:</strong>
                        <span>"Integratsiyalar" bo'limida mijozingizning Telegram bot tokeni va Chat ID sini kiritgan bo'lsangiz, saytdan tushgan barcha arizalar to'g'ridan-to'g'ri ularning Telegram guruhiga kelib tushadi!</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
