import { WebsiteConfig } from '../types';

export function generateSingleFileHTML(config: WebsiteConfig): string {
  const themeColors = {
    slate: {
      bg: "bg-slate-50",
      text: "text-slate-900",
      primary: "bg-slate-900 text-white hover:bg-slate-800",
      primaryText: "text-slate-900",
      secondaryBg: "bg-slate-100",
      accentBg: "bg-slate-200",
      accentText: "text-slate-600",
      cardBg: "bg-white border border-slate-200",
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
      secondaryBg: "bg-indigo-50",
      accentBg: "bg-indigo-100",
      accentText: "text-indigo-700",
      cardBg: "bg-white border border-slate-200",
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
      secondaryBg: "bg-emerald-50",
      accentBg: "bg-emerald-100",
      accentText: "text-emerald-900",
      cardBg: "bg-white border border-stone-200",
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
      secondaryBg: "bg-amber-50",
      accentBg: "bg-orange-100",
      accentText: "text-orange-800",
      cardBg: "bg-white border border-orange-100",
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
      secondaryBg: "bg-sky-50",
      accentBg: "bg-sky-100",
      accentText: "text-sky-800",
      cardBg: "bg-white border border-neutral-200",
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
      secondaryBg: "bg-slate-900",
      accentBg: "bg-slate-800",
      accentText: "text-amber-400",
      cardBg: "bg-slate-900 border border-slate-800",
      footerBg: "bg-black text-slate-500",
      heroGradient: "from-slate-950 via-slate-900 to-slate-950",
      divider: "border-slate-800",
      primaryBtn: "bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold",
      badge: "text-amber-400 bg-slate-900",
      activeLink: "text-amber-400 font-semibold bg-slate-800"
    }
  };

  const palette = themeColors[config.theme] || themeColors.slate;
  const isMultiPage = config.structureMode !== 'landing';

  // Border radius map
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-xl',
    full: 'rounded-2xl'
  }[config.borderRadius] || 'rounded-xl';

  // Embed JSON config for client-side routing, cart, CRM, and standalone client admin panel
  const serializedConfig = JSON.stringify(config);

  // SEO & Social Card Metadata resolution
  const seo = config.seo || {
    metaTitle: `${config.header.logoName} - ${config.hero.title}`,
    metaDescription: config.hero.subtitle,
    keywords: `${config.header.logoName}, xizmatlar, buyurtma, narxlar, toshkent`,
    ogImage: config.hero.imageUrl,
    canonicalUrl: 'https://mysite.uz',
    siteName: config.header.logoName,
    schemaType: 'LocalBusiness',
    author: config.header.logoName,
    robots: 'index, follow'
  };

  const metaTitle = seo.metaTitle || `${config.header.logoName} - ${config.hero.title}`;
  const metaDescription = seo.metaDescription || config.hero.subtitle;
  const keywords = seo.keywords || '';
  const ogImage = seo.ogImage || config.hero.imageUrl;
  const canonicalUrl = seo.canonicalUrl || 'https://mysite.uz';
  const siteName = seo.siteName || config.header.logoName;
  const schemaType = seo.schemaType || 'Organization';
  const robots = seo.robots || 'index, follow';
  const author = seo.author || config.header.logoName;

  // Schema.org Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": siteName,
    "url": canonicalUrl,
    "description": metaDescription,
    "image": ogImage,
    "telephone": config.contact?.phone || "",
    "email": config.contact?.email || "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.contact?.address || "Toshkent shahri",
      "addressLocality": "Toshkent",
      "addressCountry": "UZ"
    }
  };

  // Standalone SaaS / CX platform detection
  const isFeedbackPlatform = (config.name || '').toLowerCase().includes('qbaho') || 
                             (config.header?.logoName || '').toLowerCase().includes('qbaho') || 
                             (config.seo?.keywords || '').toLowerCase().includes('qbaho') ||
                             (config.seo?.keywords || '').toLowerCase().includes('qmeter');

  const navServicesLabel = config.features?.title ? 
    (config.features.title.toLowerCase().includes('kanal') || config.features.title.toLowerCase().includes('imkoniyat') ? 'Imkoniyatlar' : 'Xizmatlar') 
    : 'Xizmatlar';
  const navTeamLabel = config.team?.title ? 
    (config.team.title.toLowerCase().includes('shifokor') ? 'Shifokorlar' : config.team.title.toLowerCase().includes('muhandis') || config.team.title.toLowerCase().includes('arxitektor') ? 'Mutaxassislar' : 'Jamoa') 
    : 'Jamoa';
  const navProductsLabel = config.products?.title ? 
    (config.products.title.toLowerCase().includes('uskuna') || config.products.title.toLowerCase().includes('kiosk') ? 'Uskunalar' : config.products.title.toLowerCase().includes('paket') ? 'Paketlar' : 'Mahsulotlar') 
    : 'Mahsulotlar';
  const navContactLabel = (config.contact?.title || '').toLowerCase().includes('demo') ? 'Demo & Aloqa' : 'Aloqa & Qabul';
  const ctaButtonLabel = config.hero?.ctaText || 'Bog\'lanish';

  return `<!DOCTYPE html>
<html lang="uz" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${metaTitle}</title>
  <meta name="description" content="${metaDescription}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  <meta name="author" content="${author}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- OpenGraph Social Cards (Facebook, Telegram, LinkedIn) -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:title" content="${metaTitle}">
  <meta property="og:description" content="${metaDescription}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:url" content="${canonicalUrl}">

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${metaTitle}">
  <meta name="twitter:description" content="${metaDescription}">
  <meta name="twitter:image" content="${ogImage}">

  <!-- Schema.org Structured Data (JSON-LD) -->
  <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
  </script>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .page-view {
      display: none;
    }
    .page-view.active {
      display: block;
      animation: fadeIn 0.25s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body class="${palette.bg} ${palette.text} min-h-screen antialiased flex flex-col">

  <!-- ========================================== -->
  <!-- 1. HEADER & NAVIGATION                    -->
  <!-- ========================================== -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b ${palette.divider}">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#home" onclick="navigateTo('home'); return false;" class="flex items-center gap-3 group">
          <div class="w-11 h-11 ${roundedClass} ${palette.primary} flex items-center justify-center font-bold text-xl shadow-md">
            ${config.header.logoName.charAt(0) || 'M'}
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-xl tracking-tight ${palette.primaryText}">
              ${config.header.logoName}
            </span>
            <span class="text-[11px] text-slate-500 font-medium -mt-1 tracking-wider uppercase">
              ${isMultiPage ? 'Ko\'p Sahifali Portal' : 'Rasmiy Sayt'}
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav id="desktop-nav" class="hidden md:flex items-center gap-1">
          <a href="#home" onclick="navigateTo('home'); return false;" data-nav="home" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Bosh sahifa</a>
          ${config.visibility.features ? `<a href="#services" onclick="navigateTo('services'); return false;" data-nav="services" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">${navServicesLabel}</a>` : ''}
          ${config.visibility.team && config.team?.items?.length ? `<a href="#team" onclick="navigateTo('team'); return false;" data-nav="team" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">${navTeamLabel}</a>` : ''}
          ${config.visibility.about && config.about ? `<a href="#about" onclick="navigateTo('about'); return false;" data-nav="about" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Biz haqimizda</a>` : ''}
          ${config.visibility.products && config.products?.items?.length ? `<a href="#products" onclick="navigateTo('products'); return false;" data-nav="products" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">${navProductsLabel}</a>` : ''}
          ${config.visibility.pricing && config.pricing?.plans?.length ? `<a href="#pricing" onclick="navigateTo('pricing'); return false;" data-nav="pricing" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Narxlar</a>` : ''}
          <a href="#contact" onclick="navigateTo('contact'); return false;" data-nav="contact" class="nav-btn px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">${navContactLabel}</a>
        </nav>

        <!-- CTA & Shopping Cart & Mobile Toggle -->
        <div class="flex items-center gap-3">
          ${config.visibility.cart ? `
            <button onclick="toggleCartDrawer()" class="relative p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span id="cart-badge" class="hidden absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">0</span>
            </button>
          ` : ''}

          <button onclick="openAppointmentModal('${ctaButtonLabel}', 'appointment')" class="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white ${palette.primaryBtn} ${roundedClass}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>${ctaButtonLabel}</span>
          </button>
          
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
      <a href="#home" onclick="navigateTo('home'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Bosh sahifa</a>
      ${config.visibility.features ? `<a href="#services" onclick="navigateTo('services'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Barcha Xizmatlar</a>` : ''}
      ${config.visibility.team && config.team?.items?.length ? `<a href="#team" onclick="navigateTo('team'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Shifokorlar</a>` : ''}
      ${config.visibility.about && config.about ? `<a href="#about" onclick="navigateTo('about'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Biz haqimizda</a>` : ''}
      ${config.visibility.products && config.products?.items?.length ? `<a href="#products" onclick="navigateTo('products'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Check-up Paketlar</a>` : ''}
      <a href="#contact" onclick="navigateTo('contact'); toggleMobileMenu(); return false;" class="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">Aloqa & Onlayn Navbat</a>
      <button onclick="openAppointmentModal('Shifokor Ko\\'rigi va Qabul', 'appointment'); toggleMobileMenu();" class="w-full mt-2 py-3 text-center text-sm font-semibold text-white ${palette.primaryBtn} ${roundedClass}">
        Qabulga yozilish
      </button>
    </div>
  </header>

  <!-- ========================================== -->
  <!-- MAIN CONTAINER (MULTI-PAGE & LANDING)      -->
  <!-- ========================================== -->
  <main class="flex-1">
    
    <!-- PAGE 1: HOME (BOSH SAHIFA) -->
    <div id="page-home" class="page-view active">
      
      <!-- Hero -->
      <section class="py-16 md:py-24 bg-gradient-to-b ${palette.heroGradient} border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-6">
              ${config.hero.badge ? `
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 ${roundedClass} text-xs font-semibold ${palette.badge} border border-slate-200 shadow-sm">
                  <span>✨ ${config.hero.badge}</span>
                </div>
              ` : ''}
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                ${config.hero.title}
              </h1>
              <p class="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                ${config.hero.subtitle}
              </p>
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <button onclick="openAppointmentModal('Umumiy Qabul', 'appointment')" class="px-6 py-3.5 text-base font-semibold text-white ${palette.primaryBtn} ${roundedClass} shadow-lg flex items-center gap-2">
                  <span>${config.hero.ctaText || 'Qabulga yozilish'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <button onclick="navigateTo('services')" class="px-6 py-3.5 text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass} shadow-sm flex items-center gap-2">
                  <span>Barcha Xizmatlar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>

            <div class="lg:col-span-5 relative">
              <img src="${config.hero.imageUrl}" alt="Hero banner" class="w-full h-[380px] object-cover ${roundedClass} shadow-2xl border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Bar -->
      ${config.visibility.stats && config.stats?.items?.length ? `
        <section class="py-10 bg-white border-b ${palette.divider}">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              ${config.stats.items.map(st => `
                <div class="p-4 ${roundedClass} bg-slate-50 border border-slate-100">
                  <div class="text-2xl sm:text-3xl font-extrabold ${palette.primaryText}">${st.number}</div>
                  <div class="text-xs sm:text-sm font-medium text-slate-600 mt-1">${st.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- QBaho Interactive Kiosk Simulator Section -->
      ${isFeedbackPlatform ? `
        <section class="py-14 bg-slate-950 text-white border-b border-slate-800">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <div class="text-xs font-semibold text-indigo-400 mb-2">Qmeter Xalqaro Tajribasi Asosida · Jonli Kiosk Simulyatori</div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mb-3 text-white">Mijozlar Fikr Bildirish Jarayoni va 15s Reaksiya</h2>
            <p class="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8">Kassadagi sensorli planshet yoki chekdagi QR kod orqali baho berishni quyida sinab ko'ring:</p>
            <div class="max-w-xl mx-auto bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-center shadow-2xl">
              <div class="text-[11px] text-indigo-400 font-bold mb-2">QBaho Kiosk OS · Filial: Toshkent Markaziy (#04)</div>
              <h3 class="text-lg font-bold text-white mb-6">Bugungi xizmatimizdan rozi bo'ldingizmi?</h3>
              <div class="grid grid-cols-5 gap-2 mb-6" id="kiosk-buttons">
                <button type="button" onclick="handleKioskRate(1)" class="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-red-500 hover:bg-red-950/40 text-2xl transition-all">😡<div class="text-[10px] text-slate-400 mt-1">1</div></button>
                <button type="button" onclick="handleKioskRate(2)" class="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-orange-500 hover:bg-orange-950/40 text-2xl transition-all">😞<div class="text-[10px] text-slate-400 mt-1">2</div></button>
                <button type="button" onclick="handleKioskRate(3)" class="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-amber-500 hover:bg-amber-950/40 text-2xl transition-all">😐<div class="text-[10px] text-slate-400 mt-1">3</div></button>
                <button type="button" onclick="handleKioskRate(4)" class="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-emerald-500 hover:bg-emerald-950/40 text-2xl transition-all">😊<div class="text-[10px] text-slate-400 mt-1">4</div></button>
                <button type="button" onclick="handleKioskRate(5)" class="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-indigo-500 hover:bg-indigo-950/40 text-2xl transition-all">😍<div class="text-[10px] text-slate-400 mt-1">5</div></button>
              </div>
              <div id="kiosk-result" class="hidden p-4 rounded-xl text-xs text-left"></div>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Services Preview -->
      ${config.visibility.features && config.features?.items?.length ? `
        <section class="py-16 md:py-20 bg-slate-50/60 border-b ${palette.divider}">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">${config.features.title}</h2>
                <p class="text-slate-600 mt-2 text-sm sm:text-base">${config.features.subtitle}</p>
              </div>
              <button onclick="navigateTo('services')" class="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold ${palette.primaryText} hover:underline">
                <span>Barcha xizmatlarni ko'rish</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${config.features.items.slice(0, 3).map(feat => `
                <div class="bg-white p-6 ${roundedClass} border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="w-12 h-12 ${roundedClass} ${palette.secondaryBg} flex items-center justify-center ${palette.primaryText} font-bold text-lg">
                        ✦
                      </div>
                      ${feat.badge ? `<span class="px-2.5 py-1 text-[11px] font-bold ${roundedClass} ${palette.badge}">${feat.badge}</span>` : ''}
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">${feat.title}</h3>
                    <p class="text-sm text-slate-600 leading-relaxed mb-4">${feat.description}</p>
                  </div>
                  <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-xs font-bold text-emerald-600">${feat.price || 'Narx kelishilgan holda'}</span>
                    <button onclick="openServiceDetail('${feat.id}')" class="text-xs font-bold ${palette.primaryText} hover:underline flex items-center gap-1">
                      <span>Batafsil</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Doctors / Team Preview -->
      ${config.visibility.team && config.team?.items?.length ? `
        <section class="py-16 md:py-20 bg-white border-b ${palette.divider}">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">${config.team.title}</h2>
                <p class="text-slate-600 mt-2 text-sm sm:text-base">${config.team.subtitle}</p>
              </div>
              <button onclick="navigateTo('team')" class="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold ${palette.primaryText} hover:underline">
                <span>Barcha shifokorlar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              ${config.team.items.slice(0, 3).map(doc => `
                <div class="bg-slate-50 p-5 ${roundedClass} border border-slate-200 flex flex-col justify-between">
                  <div>
                    <img src="${doc.imageUrl}" alt="${doc.name}" class="w-full h-56 object-cover ${roundedClass} mb-4" />
                    <h3 class="text-base font-bold text-slate-900">${doc.name}</h3>
                    <p class="text-xs font-semibold ${palette.primaryText} mt-0.5">${doc.role}</p>
                    <p class="text-xs text-slate-500 mt-1">${doc.experience}</p>
                  </div>
                  <button onclick="openDoctorDetail('${doc.id}')" class="mt-4 w-full py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 ${roundedClass} text-center">
                    Shifokor Profili & Qabul
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Check-up Products / Cart Catalog Preview -->
      ${config.visibility.products && config.products?.items?.length ? `
        <section class="py-16 md:py-20 bg-slate-50/60 border-b ${palette.divider}">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">${config.products.title}</h2>
              <p class="text-slate-600 mt-2 text-sm sm:text-base">${config.products.subtitle}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              ${config.products.items.map(prod => `
                <div class="bg-white p-5 ${roundedClass} border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <img src="${prod.imageUrl}" alt="${prod.name}" class="w-full h-44 object-cover ${roundedClass} mb-4" />
                    <h3 class="text-base font-bold text-slate-900 mb-1">${prod.name}</h3>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">${prod.description}</p>
                  </div>
                  <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-sm font-extrabold text-emerald-600">${prod.price}</span>
                    <button onclick="addToCart('${prod.id}')" class="px-3.5 py-1.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                      <span>Savatga</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}

    </div>

    <!-- PAGE 2: SERVICES (BARCHA XIZMATLAR SAHIFASI) -->
    <div id="page-services" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">Barcha Tibbiy Xizmatlar & Tashxis</h1>
          <p class="text-slate-600 mt-2 text-base">To'liq xizmatlar ro'yxati, narxlar va qabulga yozilish</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          ${(config.features?.items || []).map(feat => `
            <div class="bg-white p-6 ${roundedClass} border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold px-2.5 py-1 ${roundedClass} ${palette.badge}">${feat.badge || 'Xizmat'}</span>
                  <span class="text-xs font-bold text-emerald-600">${feat.price || ''}</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">${feat.title}</h3>
                <p class="text-sm text-slate-600 leading-relaxed mb-4">${feat.description}</p>
                ${feat.procedures?.length ? `
                  <div class="space-y-1.5 mb-4 p-3 bg-slate-50 rounded-lg text-xs">
                    <div class="font-bold text-slate-700 mb-1">Protseduralar:</div>
                    ${feat.procedures.slice(0, 3).map(p => `
                      <div class="flex justify-between text-slate-600">
                        <span>• ${p.name}</span>
                        <span class="font-semibold text-slate-900">${p.price}</span>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
              <div class="pt-4 border-t border-slate-100 flex gap-2">
                <button onclick="openAppointmentModal('${feat.title}', 'appointment')" class="flex-1 py-2 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}">
                  Qabulga yozilish
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- PAGE 3: TEAM / DOCTORS (SHIFOKORLAR SAHIFASI) -->
    <div id="page-team" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">${config.team?.title || 'Bizning Shifokorlar'}</h1>
          <p class="text-slate-600 mt-2 text-base">${config.team?.subtitle || 'Oliy toifali mutaxassislar'}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${(config.team?.items || []).map(doc => `
            <div class="bg-white p-6 ${roundedClass} border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <img src="${doc.imageUrl}" alt="${doc.name}" class="w-full h-64 object-cover ${roundedClass} mb-4" />
                <h3 class="text-lg font-bold text-slate-900">${doc.name}</h3>
                <p class="text-xs font-semibold ${palette.primaryText} mt-0.5">${doc.role}</p>
                <p class="text-xs text-slate-500 mt-1">Tajriba: ${doc.experience}</p>
                <p class="text-xs text-slate-600 mt-3 leading-relaxed">${doc.specialization}</p>
                ${doc.schedule ? `<div class="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 font-medium">🕒 Qabul: ${doc.schedule}</div>` : ''}
              </div>
              <button onclick="openAppointmentModal('${doc.name} qabuliga yozilish', 'appointment')" class="mt-4 w-full py-2.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}">
                Shifokorga Navbat Olish
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- PAGE 4: ABOUT (BIZ HAQIMIZDA) -->
    <div id="page-about" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">${config.about?.title || 'Biz haqimizda'}</h1>
          <p class="text-slate-600 mt-2 text-base">${config.about?.subtitle || ''}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-4">
            <p class="text-base text-slate-700 leading-relaxed">${config.about?.content || ''}</p>
            ${config.about?.features?.length ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                ${config.about.features.map(f => `
                  <div class="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
          <div class="lg:col-span-5">
            <img src="${config.about?.imageUrl || config.hero.imageUrl}" alt="About" class="w-full h-80 object-cover ${roundedClass} shadow-xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE 5: PRODUCTS (CHECK-UP PAKETLAR & KATALOG) -->
    <div id="page-products" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">${config.products?.title || 'Mahsulotlar & Check-up Paketlar'}</h1>
          <p class="text-slate-600 mt-2 text-base">${config.products?.subtitle || ''}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${(config.products?.items || []).map(prod => `
            <div class="bg-white p-5 ${roundedClass} border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <img src="${prod.imageUrl}" alt="${prod.name}" class="w-full h-48 object-cover ${roundedClass} mb-4" />
                <h3 class="text-base font-bold text-slate-900 mb-1">${prod.name}</h3>
                <p class="text-xs text-slate-600 leading-relaxed mb-3">${prod.description}</p>
              </div>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="text-sm font-extrabold text-emerald-600">${prod.price}</span>
                <button onclick="addToCart('${prod.id}')" class="px-3.5 py-1.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass} flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  <span>Savatga</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- PAGE 6: PRICING (TARIFLAR & REJALAR) -->
    <div id="page-pricing" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">${config.pricing?.title || 'Narxlar & Rejalar'}</h1>
          <p class="text-slate-600 mt-2 text-base">${config.pricing?.subtitle || ''}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          ${(config.pricing?.plans || []).map(plan => `
            <div class="bg-white p-8 ${roundedClass} border ${plan.isPopular ? 'border-2 border-indigo-600 shadow-xl' : 'border-slate-200 shadow-sm'} flex flex-col justify-between">
              <div>
                ${plan.isPopular ? `<span class="px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider mb-4 inline-block">Eng Ommabop</span>` : ''}
                <h3 class="text-xl font-bold text-slate-900">${plan.name}</h3>
                <div class="mt-4 mb-6">
                  <span class="text-3xl font-extrabold ${palette.primaryText}">${plan.price}</span>
                  <span class="text-xs text-slate-500 font-medium"> / ${plan.period}</span>
                </div>
                <div class="space-y-2.5 text-xs text-slate-600 mb-8">
                  ${plan.features.map(f => `
                    <div class="flex items-center gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>${f}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
              <button onclick="openAppointmentModal('${plan.name} Paketi', 'order')" class="w-full py-3 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}">
                ${plan.ctaText || 'Tanlash'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- PAGE 7: CONTACT & APPOINTMENT (ALOQA & NAVBAT) -->
    <div id="page-contact" class="page-view">
      <div class="py-12 bg-slate-100/70 border-b ${palette.divider}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-extrabold text-slate-900">${config.contact.title}</h1>
          <p class="text-slate-600 mt-2 text-base">${config.contact.subtitle}</p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div class="lg:col-span-5 space-y-6">
            <div class="p-6 bg-white border border-slate-200 ${roundedClass} space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Aloqa Ma'lumotlari</h3>
              <div class="space-y-3 text-xs">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700">📞</div>
                  <div>
                    <div class="font-semibold text-slate-500">Telefon:</div>
                    <a href="tel:${config.contact.phone}" class="font-bold text-emerald-600 hover:underline">${config.contact.phone}</a>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700">✉️</div>
                  <div>
                    <div class="font-semibold text-slate-500">Email:</div>
                    <a href="mailto:${config.contact.email}" class="font-bold text-slate-800 hover:underline">${config.contact.email}</a>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-700">📍</div>
                  <div>
                    <div class="font-semibold text-slate-500">Manzil:</div>
                    <div class="text-slate-800 font-medium">${config.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="p-6 sm:p-8 bg-white border border-slate-200 ${roundedClass} shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-4">Onlayn Qabulga Yozilish</h3>
              <form id="standalone-contact-form" onsubmit="handleDirectLead(event)" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Ism va Familiyangiz *</label>
                  <input type="text" id="direct-name" required placeholder="Nodir Aliyev" class="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Telefon Raqamingiz *</label>
                  <input type="tel" id="direct-phone" required placeholder="+998 90 123 45 67" class="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Qulay Sana</label>
                    <input type="date" id="direct-date" class="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Qulay Vaqt</label>
                    <input type="time" id="direct-time" class="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Xizmat yoki Shifokor</label>
                  <input type="text" id="direct-service" placeholder="4D UZI Skrining yoki Shifokor ko'rigi" class="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                </div>
                <button type="submit" class="w-full py-3 text-xs font-bold uppercase tracking-wider text-white ${palette.primaryBtn} ${roundedClass}">
                  Arizani Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- ========================================== -->
  <!-- FOOTER                                     -->
  <!-- ========================================== -->
  <footer class="${palette.footerBg} py-12 border-t border-slate-800 pb-20 md:pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-xs text-center md:text-left">
        ${config.footer.copyrightText}
      </div>
      <div class="flex items-center gap-4 text-xs">
        ${config.footer.socialTelegram ? `<a href="${config.footer.socialTelegram}" target="_blank" class="hover:text-white">Telegram</a>` : ''}
        ${config.footer.socialInstagram ? `<a href="${config.footer.socialInstagram}" target="_blank" class="hover:text-white">Instagram</a>` : ''}
        ${config.footer.socialPhone ? `<a href="${config.footer.socialPhone}" class="hover:text-white">Qo'ng'iroq</a>` : ''}
      </div>
    </div>
  </footer>

  <!-- ========================================== -->
  <!-- STICKY MOBILE ACTION BAR (SMARTPHONES)    -->
  <!-- ========================================== -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-3 flex items-center justify-between gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
    <a href="tel:${config.contact.phone}" class="flex-1 py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Qo'ng'iroq</span>
    </a>
    <button onclick="openAppointmentModal('Umumiy Qabul va Navbat', 'appointment')" class="flex-[2] py-2 px-3 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md ${palette.primaryBtn}">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
      <span>Qabulga Yozilish</span>
    </button>
    ${config.visibility.cart ? `
      <button onclick="toggleCartDrawer()" class="p-2 bg-slate-100 text-slate-700 rounded-xl relative hover:bg-slate-200 flex-shrink-0" title="Savat">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      </button>
    ` : ''}
  </div>

  <!-- ========================================== -->
  <!-- MODAL: APPOINTMENT / BOOKING               -->
  <!-- ========================================== -->
  <div id="booking-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-sm items-center justify-center p-4">
    <div class="bg-white max-w-md w-full ${roundedClass} shadow-2xl p-6 relative">
      <button onclick="closeAppointmentModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
        ✕
      </button>
      <h3 id="modal-title" class="text-base font-bold text-slate-900 mb-1">Qabulga Yozilish</h3>
      <p id="modal-subtitle" class="text-xs text-slate-500 mb-4">Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz</p>
      
      <form onsubmit="handleModalSubmit(event)" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Ism va Familiyangiz *</label>
          <input type="text" id="modal-name" required placeholder="Nodir Aliyev" class="w-full p-2 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Telefon Raqamingiz *</label>
          <input type="tel" id="modal-phone" required placeholder="+998 90 123 45 67" class="w-full p-2 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Sana</label>
            <input type="date" id="modal-date" class="w-full p-2 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Vaqt</label>
            <input type="time" id="modal-time" class="w-full p-2 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>
        </div>
        <button type="submit" class="w-full mt-2 py-2.5 text-xs font-bold text-white ${palette.primaryBtn} ${roundedClass}">
          Tasdiqlash & Yuborish
        </button>
      </form>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- FLOATING CLIENT ADMIN PANEL TRIGGER        -->
  <!-- ========================================== -->
  <div class="fixed bottom-4 right-4 z-50">
    <button onclick="toggleClientAdminModal()" class="px-3.5 py-2 bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105">
      <span>⚙️ Sayt Admini</span>
    </button>
  </div>

  <!-- CLIENT ADMIN MODAL -->
  <div id="client-admin-modal" class="fixed inset-0 z-50 hidden bg-slate-900/70 backdrop-blur-sm items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 text-slate-200 max-w-lg w-full ${roundedClass} shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      <button onclick="toggleClientAdminModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
      <h3 class="text-base font-bold text-white mb-1 flex items-center gap-2">
        <span>⚙️ Standalone No-Code Admin Panel</span>
      </h3>
      <p class="text-xs text-slate-400 mb-4">
        Hurmatli mijoz! Ushbu panel orqali sayt telefon raqami, Telegram boti va tushgan arizalaringizni bevosita boshqarishingiz mumkin.
      </p>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-slate-300 mb-1">Logotip Nomi:</label>
          <input type="text" id="admin-logo" value="${config.header.logoName}" class="w-full p-2 bg-slate-950 border border-slate-700 rounded text-white" />
        </div>
        <div>
          <label class="block font-semibold text-slate-300 mb-1">Telefon Raqam:</label>
          <input type="text" id="admin-phone" value="${config.contact.phone}" class="w-full p-2 bg-slate-950 border border-slate-700 rounded text-emerald-400 font-bold" />
        </div>
        <div>
          <label class="block font-semibold text-slate-300 mb-1">Telegram Bot Token:</label>
          <input type="text" id="admin-bot-token" value="${config.integrations?.telegramBotToken || ''}" placeholder="123456:ABC-DEF..." class="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 font-mono text-[11px]" />
        </div>
        <div>
          <label class="block font-semibold text-slate-300 mb-1">Telegram Chat ID:</label>
          <input type="text" id="admin-chat-id" value="${config.integrations?.telegramChatId || ''}" placeholder="-100123456789" class="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 font-mono text-[11px]" />
        </div>

        <button onclick="saveClientAdminSettings()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow">
          O'zgarishlarni Saqlash
        </button>

        <!-- Saved Leads Section -->
        <div class="pt-4 border-t border-slate-800">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-white">Tushgan Arizalar Tarixi (CRM):</span>
            <button onclick="clearSavedLeads()" class="text-[10px] text-red-400 hover:underline">Tozalash</button>
          </div>
          <div id="admin-leads-list" class="space-y-2 max-h-40 overflow-y-auto pr-1">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- CLIENT JAVASCRIPT ROUTER & LOGIC           -->
  <!-- ========================================== -->
  <script>
    const CONFIG = ${serializedConfig};
    let cart = [];
    let currentModalContext = '';

    function navigateTo(pageId) {
      document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('page-' + pageId);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Update nav highlights
      document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset.nav === pageId) {
          btn.classList.add('bg-slate-100', 'font-bold');
        } else {
          btn.classList.remove('bg-slate-100', 'font-bold');
        }
      });
    }

    function toggleMobileMenu() {
      const el = document.getElementById('mobile-menu');
      el.classList.toggle('hidden');
    }

    function openAppointmentModal(title, type) {
      currentModalContext = title;
      document.getElementById('modal-title').innerText = title || 'Qabulga Yozilish';
      document.getElementById('booking-modal').classList.remove('hidden');
      document.getElementById('booking-modal').classList.add('flex');
    }

    function closeAppointmentModal() {
      document.getElementById('booking-modal').classList.add('hidden');
      document.getElementById('booking-modal').classList.remove('flex');
    }

    function toggleClientAdminModal() {
      const el = document.getElementById('client-admin-modal');
      el.classList.toggle('hidden');
      el.classList.toggle('flex');
      renderAdminLeads();
    }

    function saveClientAdminSettings() {
      const logo = document.getElementById('admin-logo').value;
      const phone = document.getElementById('admin-phone').value;
      const botToken = document.getElementById('admin-bot-token').value;
      const chatId = document.getElementById('admin-chat-id').value;

      CONFIG.header.logoName = logo;
      CONFIG.contact.phone = phone;
      if (!CONFIG.integrations) CONFIG.integrations = {};
      CONFIG.integrations.telegramBotToken = botToken;
      CONFIG.integrations.telegramChatId = chatId;

      localStorage.setItem('migroup_site_config', JSON.stringify(CONFIG));
      alert("✅ Sozlamalar muvaffaqiyatli saqlandi! Sahifa yangilanmoqda.");
      location.reload();
    }

    function addToCart(productId) {
      const product = (CONFIG.products?.items || []).find(p => p.id === productId);
      if (!product) return;
      
      const existing = cart.find(i => i.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id: productId, name: product.name, price: product.price, qty: 1 });
      }

      updateCartBadge();
      alert("🛒 " + product.name + " savatga qo'shildi!");
    }

    function updateCartBadge() {
      const badge = document.getElementById('cart-badge');
      if (!badge) return;
      const total = cart.reduce((acc, i) => acc + i.qty, 0);
      if (total > 0) {
        badge.innerText = total;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function handleModalSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('modal-name').value;
      const phone = document.getElementById('modal-phone').value;
      const date = document.getElementById('modal-date').value;
      const time = document.getElementById('modal-time').value;

      saveLead({
        name,
        phone,
        service: currentModalContext,
        date,
        time,
        created: new Date().toLocaleString('uz-UZ')
      });

      closeAppointmentModal();
      alert("✅ Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan bog'lanadi.");
    }

    function handleDirectLead(e) {
      e.preventDefault();
      const name = document.getElementById('direct-name').value;
      const phone = document.getElementById('direct-phone').value;
      const date = document.getElementById('direct-date').value;
      const time = document.getElementById('direct-time').value;
      const service = document.getElementById('direct-service').value || 'Umumiy Qabul';

      saveLead({
        name,
        phone,
        service,
        date,
        time,
        created: new Date().toLocaleString('uz-UZ')
      });

      alert("✅ Arizangiz qabul qilindi!");
      document.getElementById('standalone-contact-form').reset();
    }

    async function sendLeadToTelegram(lead) {
      const token = CONFIG.integrations?.telegramBotToken;
      const chatId = CONFIG.integrations?.telegramChatId;
      
      if (!token || !chatId) return; // Skip if no config

      const text = \`Yangi ariza! 🔔\\n\\n\` +
                   \`Mijoz: \${lead.name}\\n\` +
                   \`Telefon: \${lead.phone}\\n\` +
                   \`Xizmat: \${lead.service}\\n\` +
                   (lead.date ? \`Sana: \${lead.date}\\n\` : '') +
                   (lead.time ? \`Vaqt: \${lead.time}\\n\` : '') +
                   \`Yaratildi: \${lead.created}\`;

      try {
        await fetch(\`https://api.telegram.org/bot\${token}/sendMessage\`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        });
      } catch (e) {
        console.error("Telegram error", e);
      }
    }

    function saveLead(lead) {
      let list = JSON.parse(localStorage.getItem('migroup_leads') || '[]');
      list.unshift(lead);
      localStorage.setItem('migroup_leads', JSON.stringify(list));
      
      // Try sending to Telegram if configured
      sendLeadToTelegram(lead);
    }

    function renderAdminLeads() {
      const container = document.getElementById('admin-leads-list');
      if (!container) return;
      const list = JSON.parse(localStorage.getItem('migroup_leads') || '[]');
      if (list.length === 0) {
        container.innerHTML = '<div class="text-slate-500 text-center py-4">Arizalar mavjud emas</div>';
        return;
      }
      container.innerHTML = list.map(l => \`
        <div class="p-2 bg-slate-950 border border-slate-800 rounded text-[11px]">
          <div class="font-bold text-white">\${l.name} - <span class="text-emerald-400">\${l.phone}</span></div>
          <div class="text-slate-300">\${l.service}</div>
          <div class="text-slate-500 text-[10px]">\${l.created} \${l.date ? ' | Qabul: ' + l.date : ''}</div>
        </div>
      \`).join('');
    }

    function clearSavedLeads() {
      if (confirm("Hamma arizalarni tozalashni xohlaysizmi?")) {
        localStorage.removeItem('migroup_leads');
        renderAdminLeads();
      }
    }

    function handleKioskRate(score) {
      const res = document.getElementById('kiosk-result');
      if (!res) return;
      res.classList.remove('hidden');
      if (score <= 2) {
        res.className = 'p-4 bg-red-950/70 border border-red-800 rounded-xl text-xs text-left space-y-2 text-white';
        res.innerHTML = '<div class="font-bold text-red-400">🚨 [TELEGRAM CLOSED-LOOP ALERT] QIZIL SHIKOYAT!</div><div class="text-slate-300">Mijoz salbiy baho berdi (' + score + '/5). Filial boshqaruvchisiga 15 soniya ichida muammoni hal qilish vazifasi yuklatildi (SLA taymer faol).</div><button type="button" onclick="document.getElementById(\\'kiosk-result\\').classList.add(\\'hidden\\')" class="mt-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px]">Qaytadan sinash</button>';
      } else if (score >= 4) {
        res.className = 'p-4 bg-indigo-950/70 border border-indigo-800 rounded-xl text-xs text-left space-y-2 text-white';
        res.innerHTML = '<div class="font-bold text-indigo-300">⭐ Katta rahmat! NPS indeksiga qo\\'shildi (98.4%)</div><div class="text-slate-300">Sodiq mijozga Google Xarita & Yandexda 5 yulduzli sharh qoldirish uchun QR havola taklif qilindi.</div><button type="button" onclick="document.getElementById(\\'kiosk-result\\').classList.add(\\'hidden\\')" class="mt-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-[11px]">Qaytadan sinash</button>';
      } else {
        res.className = 'p-4 bg-slate-800 border border-slate-700 rounded-xl text-xs text-left space-y-2 text-white';
        res.innerHTML = '<div class="font-bold text-slate-200">Tashakkur!</div><div class="text-slate-400">Xolis fikringiz xizmat sifatini oshirishga yo\\'naltirildi.</div><button type="button" onclick="document.getElementById(\\'kiosk-result\\').classList.add(\\'hidden\\')" class="mt-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-[11px]">Qaytadan sinash</button>';
      }
    }
  </script>
</body>
</html>`;
}
