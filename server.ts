import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json({ limit: "10mb" }));

// Initialize Gemini Client with correct headers and API key
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("⚠️ Warning: GEMINI_API_KEY is not defined in environment variables. AI Generation features will prompt users to configure it.");
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    aiEnabled: !!ai, 
    time: new Date().toISOString() 
  });
});

// Post endpoint to send Telegram notification directly
app.post(["/api/telegram/send", "/api/telegram/test"], async (req, res) => {
  try {
    const { botToken, chatId, message = "🚀 <b>MiGroup Studio</b>: Telegram bot muvaffaqiyatli ulandi va sinovdan o'tdi!" } = req.body;
    
    if (!botToken || !chatId) {
      return res.status(400).json({ error: "botToken va chatId talab qilinadi." });
    }

    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });

    const data = await telegramRes.json();
    if (!data.ok) {
      return res.status(400).json({ error: data.description || "Telegram xabar yuborishda xatolik yuz berdi." });
    }

    res.json({ success: true, result: data.result });
  } catch (err: any) {
    console.error("Telegram API error:", err);
    res.status(500).json({ error: "Telegram serveri bilan bog'lanishda xatolik: " + err.message });
  }
});

// Procedural fallback generator when Gemini API key is missing or quota is exceeded
function buildTailoredWebsite(prompt: string, currentTheme = "slate", industry = "general") {
  const p = prompt.toLowerCase();
  
  const isQBaho = /qbaho|qmeter|baho|feedback|fikr|so'rovnoma|sorovnoma|nps|csat|kiosk|navbat|mijoz/i.test(p);
  const isClinic = /klinika|shifoxona|doktor|tibbiyot|uzi|ginekolog|stomatolog|tish|pediatr/i.test(p);
  const isStore = /do'kon|dokon|store|shop|gadjet|iphone|kiyim|telefon|sotish|savdo|buyurtma/i.test(p);
  const isRestaurant = /restoran|kafe|oshxona|taom|food|choyxona|pizza|burger|qahva|lavash/i.test(p);
  const isEdu = /kurs|o'quv|oquv|markaz|talim|maktab|mentor|ingliz|dasturlash kurs/i.test(p);
  const isAuto = /avto|mashina|ustaxona|diagnostika|moy|servis|motor|ta'mir/i.test(p);

  let name = "Zamonaviy Biznes Portal";
  let logoName = "BiznesPortal";
  let theme = currentTheme || "indigo";
  let heroTitle = "Biznesingiz uchun professional va jozibali veb-sayt";
  let heroSubtitle = prompt.slice(0, 160) || "Zamonaviy xizmatlar, yuqori sifat, tezkor xizmat va ishonchli natija.";
  let badge = "✨ Rasmiy Kafolatli Xizmat";
  let ctaText = "Onlayn Bog'lanish";
  let heroImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200";
  let schemaType = "LocalBusiness";

  if (isQBaho) {
    name = "QBaho – Omnichannel Mijozlar Baholash Tizimi";
    logoName = "QBaho";
    theme = "indigo";
    heroTitle = "Mijozlar fikrini real vaqtda o'lchang va xizmat sifatini oshiring";
    heroSubtitle = "Sensorli kiosklar, planshetlar, QR-kodlar va Telegram orqali mijozlar qoniqishini (NPS, CSAT) nazorat qiling. Salbiy baholarga 15 soniyada reaksiya qiling.";
    badge = "⭐ Qmeter Tamoyillari Asosidagi AI Platforma";
    ctaText = "Bepul Demo Sinov";
    heroImg = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200";
    schemaType = "SoftwareApplication";
  } else if (isClinic) {
    name = "MedLife Premium Tibbiyot Markazi";
    logoName = "MedLife";
    theme = "indigo";
    heroTitle = "Sog'lom hayot va oilangiz xotirjamligi bizning ustuvor maqsadimiz";
    heroSubtitle = "Oliy toifali shifokorlar, zamonaviy 4D UZI diagnostikasi va 24/7 tezkor statsionar yordam.";
    badge = "🏥 Oliy Toifali Tibbiy Yordam";
    ctaText = "Shifokor qabuliga yozilish";
    heroImg = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200";
    schemaType = "MedicalBusiness";
  } else if (isStore) {
    name = "SmartStore Premium Gadjetlar";
    logoName = "SmartStore";
    theme = "emerald";
    heroTitle = "Original smartfonlar va zamonaviy texnika qulay narxlarda";
    heroSubtitle = "100% original brendlar, O'zbekiston bo'ylab 1 kunda yetkazib berish va 12 oylik rasmiy kafolat.";
    badge = "🔥 Yangi Avlod Mahsulotlari";
    ctaText = "Katalogni Ko'rish & Xarid Qilish";
    heroImg = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200";
    schemaType = "Store";
  } else if (isRestaurant) {
    name = "Lazzat Milliy & Yevropa Taomlari";
    logoName = "Lazzat Resto";
    theme = "sunset";
    heroTitle = "Shinam muhit va unutilmas lazzatli taomlar maskani";
    heroSubtitle = "Mohir oshpazlar, sarxil tabiiy masalliqlar, qulay stol band qilish va tezkor yetkazib berish.";
    badge = "🍽️ Milliy va Yevropa Taomlari";
    ctaText = "Stol band qilish (Bron)";
    heroImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200";
    schemaType = "Restaurant";
  } else if (isEdu) {
    name = "Future Academy O'quv Markazi";
    logoName = "Future Academy";
    theme = "indigo";
    heroTitle = "Kelajak kasblarini amaliyotchi mentorlar bilan o'rganing";
    heroSubtitle = "Dasturlash, xorijiy tillar va biznes kurslari. Birinchi sinov darsi bepul, ishga joylashish ko'magi.";
    badge = "🎓 Sertifikatli Ta'lim Dasturlari";
    ctaText = "Bepul sinov darsiga yozilish";
    heroImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200";
    schemaType = "EducationalOrganization";
  } else if (isAuto) {
    name = "AvtoMaster 24/7 Professional Servis";
    logoName = "AvtoMaster";
    theme = "royal_dark";
    heroTitle = "Avtomobilingiz uchun mukammal sifat va kafolatli servis";
    heroSubtitle = "Kompyuter diagnostikasi, motor ta'miri, original moy almashtirish va ehtiyot qismlar kafolat bilan.";
    badge = "⚡ 24/7 Tezkor Avtoservis";
    ctaText = "Ustaxonaga navbatsiz yozilish";
    heroImg = "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=1200";
    schemaType = "LocalBusiness";
  }

  return {
    name,
    tierLevel: isStore ? 'pro' : 'orta',
    theme,
    font: 'modern',
    borderRadius: 'lg',
    structureMode: 'multi_page',
    seo: {
      metaTitle: `${logoName} – ${heroTitle}`.slice(0, 60),
      metaDescription: heroSubtitle.slice(0, 160),
      keywords: `${logoName}, xizmatlar, narxlar, toshkent, onlayn buyurtma, rasmiy sayt`,
      ogImage: heroImg,
      canonicalUrl: `https://${logoName.toLowerCase().replace(/[^a-z0-9]/g, '')}.uz`,
      siteName: name,
      schemaType,
      author: name,
      robots: 'index, follow'
    },
    header: {
      logoName,
      menuItems: [
        { id: "1", label: "Bosh sahifa", link: "#home" },
        { id: "2", label: "Xizmatlar", link: "#services" },
        { id: "3", label: isClinic ? "Mutaxassislar" : isEdu ? "Mentorlar" : "Jamoa", link: "#team" },
        { id: "4", label: "Biz haqimizda", link: "#about" },
        { id: "5", label: isStore ? "Katalog" : "Paketlar", link: "#products" },
        { id: "6", label: "Narxlar", link: "#pricing" },
        { id: "7", label: "Aloqa", link: "#contact" }
      ]
    },
    hero: {
      badge,
      title: heroTitle,
      subtitle: heroSubtitle,
      ctaText,
      ctaLink: "#contact",
      imageUrl: heroImg,
      showCta: true
    },
    stats: {
      title: "Bizning Natijalar",
      items: [
        { id: "1", number: "12,000+", label: "Mamnun Mijozlar" },
        { id: "2", number: "100%", label: "Kafolatlangan Sifat" },
        { id: "3", number: "8+ yil", label: "Bozor Tajribasi" },
        { id: "4", number: "24/7", label: "Tezkor Qo'llab-quvvatlash" }
      ]
    },
    features: {
      title: "Asosiy Xizmatlarimiz va Ustunliklarimiz",
      subtitle: "Sizga eng yuqori darajada xizmat ko'rsatish uchun barcha qulayliklar",
      items: [
        {
          id: "1",
          title: isClinic ? "4D UZI va Aniq Tashxis" : isStore ? "Original Kafolatli Qurilmalar" : "Professional Xizmat Ko'rsatish",
          description: "Zamonaviy texnologiyalar va tajribali mutaxassislar nazorati ostida mukammal natija.",
          iconName: "Activity",
          badge: "Ommabop",
          price: "150,000 UZS dan",
          benefits: ["100% Kafolat", "Tezkor jarayon", "Sifat nazorati"]
        },
        {
          id: "2",
          title: "Malakali Mutaxassislar Jamoasi",
          description: "Ko'p yillik amaliy tajribaga ega sertifikatli mutaxassislarimiz har bir mijozga individual yondashadi.",
          iconName: "Users",
          badge: "Ekspert",
          price: "Kelishilgan narxda",
          benefits: ["Individual yondashuv", "Doimiy aloqa"]
        },
        {
          id: "3",
          title: "Qulay To'lov va Rasmiy Kafolat",
          description: "Click, Payme, Uzum yoki karta orqali to'lovlar, rasmiy hujjatlar va kafolat akti.",
          iconName: "Award",
          badge: "Kafolat",
          price: "0 UZS",
          benefits: ["Xavfsiz to'lov", "Kafolat muddati"]
        }
      ]
    },
    team: {
      title: isClinic ? "Oliy Toifali Shifokorlarimiz" : isEdu ? "Yetakchi Mentorlarimiz" : "Bizning Mutaxassislar",
      subtitle: "O'z sohasining yetuk ustalari bilan tanishing",
      items: [
        {
          id: "1",
          name: "Azizbek Mansurov",
          role: "Bosh Maslahatchi & Ekspert",
          experience: "10 yillik tajriba",
          specialization: "Strategik rejalashtirish va sifat nazorati",
          imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
          schedule: "Dushanba - Shanba: 09:00 - 18:00"
        },
        {
          id: "2",
          name: "Dilnoza Rahimova",
          role: "Mijozlar bilan ishlash bo'yicha menejer",
          experience: "7 yillik tajriba",
          specialization: "Tezkor aloqa va konsultatsiya",
          imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
          schedule: "Har kuni: 09:00 - 20:00"
        }
      ]
    },
    about: {
      title: `${name} Haqida`,
      subtitle: "Ishonch, sifat va mijozlar manfaati biz uchun birinchi o'rinda",
      content: `${name} ko'p yillardan buyon sohada o'zining ishonchli xizmatlari bilan yetakchi o'rinlarda turib kelmoqda. Biz har bir mijozning talablarini to'liq inobatga olgan holda eng zamonaviy yechimlarni taqdim etamiz.`,
      imageUrl: heroImg,
      features: ["Sertifikatlangan mutaxassislar", "100% rasmiy shartnoma", "Mijozlar roziligi kafolati", "Tezkor va sifatli ijro"]
    },
    gallery: {
      title: "Fototurlar & Ish Jarayoni",
      subtitle: "Bizning muhit va xizmat ko'rsatish jarayonidan lavhalar",
      items: [
        { id: "1", title: "Asosiy Zal va Qabulxona", description: "Mijozlar uchun qulay va shinam muhit.", imageUrl: heroImg }
      ]
    },
    products: {
      title: isStore ? "Mahsulotlar Katalogi" : "Tayyor Xizmat Paketlari",
      subtitle: "Bir zumda tanlang va qulay tarzda buyurtma bering",
      items: [
        { id: "1", name: "Standart Paket", description: "Barcha asosiy xizmatlarni o'z ichiga olgan qulay variant.", price: "250,000 UZS", numericPrice: 250000, imageUrl: heroImg, category: "Asosiy", badge: "Ommabop" },
        { id: "2", name: "Premium VIP Reja", description: "Kengaytirilgan imtiyozlar, ustuvor navbat va shaxsiy menejer xizmati.", price: "600,000 UZS", numericPrice: 600000, imageUrl: heroImg, category: "VIP", badge: "Tavsiya" }
      ]
    },
    pricing: {
      title: "Xizmat Rejalari & Narxlar",
      subtitle: "Yashirin to'lovlarsiz ochiq va shaffof narxlar",
      plans: [
        { id: "1", name: "Boshlang'ich Reja", price: "250,000 UZS", period: "1 marta", features: ["Asosiy xizmat ko'rsatish", "Mutaxassis ko'rigi", "Rasmiy tavsiyanoma"], isPopular: false, ctaText: "Tanlash" },
        { id: "2", name: "To'liq Kompleks", price: "600,000 UZS", period: "to'liq kurs", features: ["Barcha diagnostika va xizmatlar", "Shaxsiy mutaxassis nazorati", "1 oylik bepul qo'llab-quvvatlash"], isPopular: true, ctaText: "Eng ommabop" }
      ]
    },
    testimonials: {
      title: "Mijozlarimiz Fikrlari",
      subtitle: "Biz bilan hamkorlik qilgan mijozlarning samimiy e'tiroflari",
      items: [
        { id: "1", quote: "Xizmat ko'rsatish darajasi juda yuqori! Mutaxassislar ham o'z ishining ustalari ekan. Rahmat, barchaga tavsiya qilaman.", author: "Rustam Karimov", role: "Toshkent sh.", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" }
      ]
    },
    faq: {
      title: "Ko'p Beriladigan Savollar",
      subtitle: "Xizmatlarimiz va qabul jarayoni haqida ma'lumotlar",
      items: [
        { id: "1", question: "Xizmatga qanday yozilish mumkin?", answer: "Sayt orqali onlayn ariza qoldirishingiz yoki telefon raqamimizga qo'ng'iroq qilishingiz mumkin." },
        { id: "2", question: "To'lovlar qanday amalga oshiriladi?", answer: "To'lovlarni Click, Payme, Uzum yoki karta orqali amalga oshirish mumkin." }
      ]
    },
    contact: {
      title: "Aloqa va Bog'lanish",
      subtitle: "Savollaringiz bormi? Mutaxassislarimiz sizga yordam berishdan mamnun.",
      email: "info@portal.uz",
      phone: "+998 71 200 11 22",
      address: "Toshkent shahri, Amir Temur shoh ko'chasi, 24-bino",
      showForm: true
    },
    footer: {
      copyrightText: `© 2026 ${name}. Barcha huquqlar himoyalangan.`,
      socialTelegram: "https://t.me/example",
      socialInstagram: "https://instagram.com/example",
      socialPhone: "tel:+998712001122"
    },
    integrations: {
      telegramBotToken: "",
      telegramChatId: "",
      telegramUsername: "admin_portal",
      whatsappPhone: "+998712001122",
      emailNotifications: "info@portal.uz",
      sendToTelegram: true,
      sendToWhatsApp: true,
      successMessage: "Arizangiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassisimiz siz bilan bog'lanadi."
    },
    visibility: {
      header: true,
      hero: true,
      stats: true,
      features: true,
      team: true,
      about: true,
      gallery: true,
      products: isStore,
      cart: isStore,
      pricing: true,
      testimonials: true,
      faq: true,
      contact: true,
      footer: true
    }
  };
}

// Post endpoint to generate a fully styled website via Gemini
app.post(["/api/generate", "/api/generate-website"], async (req, res) => {
  try {
    const { prompt, currentTheme = "slate", industry = "general" } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Sarlavha yoki tavsif bo'sh bo'lishi mumkin emas." });
    }

    if (!ai) {
      console.warn("GEMINI_API_KEY is not configured. Using intelligent site builder fallback.");
      const fallbackConfig = buildTailoredWebsite(prompt, currentTheme, industry);
      return res.json(fallbackConfig);
    }

    const systemInstruction = `Siz professional Web-Sayt Konstruktori uchun AI yordamchisiz.
Mijozning so'rovi (prompt) asosida unga juda chiroyli, ma'noli, jozibali va mukammal veb-sayt tuzilishini (JSON shaklida) tayyorlab berishingiz kerak.
Hamma matnlar, sarlavhalar, xizmatlar, mahsulotlar nomlari va tavsiflari O'zbek tilida, imlo xatolarisiz va juda chiroyli marketing uslubida yozilishi shart.

Yo'riqnomalar:
1. "theme" maydonini so'rovga va sayt yo'nalishiga qarab tanlang:
   - "slate" (minimalist/muhandislik)
   - "indigo" (zamonaviy/SaaS)
   - "emerald" (savdo/eco/tabiiy)
   - "sunset" (restoran/kafe/ovqatlar)
   - "nordic" (och mavzu, toza)
   - "royal_dark" (premium/qorong'u korporativ)
2. "font" maydoni: "modern", "display", "serif", "mono" lardan birini tanlang.
3. Unsplash rasmlari (imageUrl) uchun mavzuga mos, haqiqiy va juda chiroyli rasmlarni keltiring. (Masalan, kofexona bo'lsa qahva donalari yoki kofe finjoni rasmi, sartarosh bo'lsa zamonaviy soch kesish jarayoni, dasturchi bo'lsa kod yozilayotgan noutbuk). Faqat to'g'ri va ishlaydigan URLs formatlarini ishlating.
4. "id" maydonlari uchun unikal qisqa stringlar bering (masalan, "item-1", "plan-premium", "feat-3" kabi).
5. "visibility" obyektidagi barcha qiymatlar boolean (true yoki false) bo'lishi kerak. Agar so'rovga doir mahsulot sotish bo'lsa "products"ni true qiling, aks holda false. Agar xizmatlar bo'lsa "features"ni true qiling va hk.
6. Hamma so'rovlar o'zbek tili madaniyatiga, sharoitlariga va milliy valyuta bo'lgan so'm (UZS) ko'rinishida narxlangan bo'lsin. Masalan, narxlar "50,000 UZS" yoki "12,000,000 UZS" kabi shakllantirilsin.

Loyiha uchun o'ta chiroyli va realistik ma'lumotlar to'ldiring, quruq 'Loyiha-1', 'Mahsulot-1' deb yozmang! Har biriga haqiqiy marketing sarlavhasi va tavsif bering.`;

    const promptText = `Mijoz so'rovi: "${prompt}"
Sanoat yo'nalishi: ${industry}
Tavsiya etilgan boshlang'ich mavzu: ${currentTheme}

Iltimos, ushbu talablarga mos mukammal sayt strukturasini JSON ko'rinishida yaratib bering.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "Kompaniya yoki shaxsning to'liq nomi" },
            theme: { type: Type.STRING, description: "slate, indigo, emerald, sunset, nordic, royal_dark" },
            font: { type: Type.STRING, description: "modern, display, serif, mono" },
            borderRadius: { type: Type.STRING, description: "none, sm, md, lg, full" },
            header: {
              type: Type.OBJECT,
              properties: {
                logoName: { type: Type.STRING, description: "Qisqa logotip matni, masalan: 'GrandBakery' yoki 'Sardor.Dev'" },
                menuItems: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      label: { type: Type.STRING, description: "Menyu elementi nomi, masalan 'Biz haqimizda'" },
                      link: { type: Type.STRING, description: "Horg'on havola, masalan '#features' yoki '#hero'" }
                    },
                    required: ["id", "label", "link"]
                  }
                }
              },
              required: ["logoName", "menuItems"]
            },
            hero: {
              type: Type.OBJECT,
              properties: {
                badge: { type: Type.STRING, description: "Kichik yuqori nishon matni, masalan: '100% Halol xizmat'" },
                title: { type: Type.STRING, description: "Katta sarlavha, juda jozibador bo'lishi shart" },
                subtitle: { type: Type.STRING, description: "Loyiha yoki xizmatni tushuntiruvchi 2-3 jumlali tavsif" },
                ctaText: { type: Type.STRING, description: "Asosiy tugma matni" },
                ctaLink: { type: Type.STRING, description: "Asosiy tugma havolasi, odatda aloqa bo'limiga" },
                imageUrl: { type: Type.STRING, description: "Unsplash rasmi havolasi, masalan: https://images.unsplash.com/photo-... formatda" },
                showCta: { type: Type.BOOLEAN }
              },
              required: ["badge", "title", "subtitle", "ctaText", "ctaLink", "imageUrl", "showCta"]
            },
            features: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Xizmatlar bo'limi sarlavhasi" },
                subtitle: { type: Type.STRING, description: "Xizmatlar bo'limi kichik sarlavhasi" },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      title: { type: Type.STRING, description: "Xizmat yoki ustunlik nomi" },
                      description: { type: Type.STRING, description: "Batafsil tushuntirish" },
                      iconName: { type: Type.STRING, description: "Faqat bittasi bo'lsin: Code, Layout, Activity, Users, Layers, ShoppingBag, Utensils, Award, Flame, Coffee, Heart, Camera" }
                    },
                    required: ["id", "title", "description", "iconName"]
                  }
                }
              },
              required: ["title", "subtitle", "items"]
            },
            gallery: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Galereya/Loyihalar bo'limi sarlavhasi" },
                subtitle: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      title: { type: Type.STRING, description: "Loyiha yoki rasm sarlavhasi" },
                      description: { type: Type.STRING },
                      imageUrl: { type: Type.STRING, description: "Unsplash rasmi havolasi" }
                    },
                    required: ["id", "title", "description", "imageUrl"]
                  }
                }
              },
              required: ["title", "subtitle", "items"]
            },
            products: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Mahsulotlar yoki menyu sarlavhasi" },
                subtitle: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      name: { type: Type.STRING, description: "Mahsulot/Taom nomi" },
                      description: { type: Type.STRING, description: "Tarkibi yoki qisqa tavsifi" },
                      price: { type: Type.STRING, description: "Masalan: '45,000 UZS' yoki '1,200,000 UZS'" },
                      imageUrl: { type: Type.STRING, description: "Mahsulot rasm havolasi" }
                    },
                    required: ["id", "name", "description", "price", "imageUrl"]
                  }
                }
              },
              required: ["title", "subtitle", "items"]
            },
            pricing: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Narxlar bo'limi sarlavhasi" },
                subtitle: { type: Type.STRING },
                plans: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      name: { type: Type.STRING, description: "Tarif nomi, masalan 'Standart', 'Premium'" },
                      price: { type: Type.STRING, description: "Narxi, masalan '450,000 UZS'" },
                      period: { type: Type.STRING, description: "loyiha, oy, yil, kishi" },
                      features: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Tarif ichidagi xizmatlar ro'yxati (3-4 ta)" },
                      isPopular: { type: Type.BOOLEAN },
                      ctaText: { type: Type.STRING }
                    },
                    required: ["id", "name", "price", "period", "features", "isPopular", "ctaText"]
                  }
                }
              },
              required: ["title", "subtitle", "plans"]
            },
            testimonials: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Mijozlar fikri bo'limi" },
                subtitle: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      quote: { type: Type.STRING, description: "Mijoz fikri, masalan 'Juda zo'r xizmat, xursandmiz!'" },
                      author: { type: Type.STRING, description: "Mijoz ismi" },
                      role: { type: Type.STRING, description: "Lavozimi yoki kasbi" },
                      avatarUrl: { type: Type.STRING, description: "Mijoz yuzi tasvirlangan Unsplash rasm havolasi" }
                    },
                    required: ["id", "quote", "author", "role", "avatarUrl"]
                  }
                }
              },
              required: ["title", "subtitle", "items"]
            },
            contact: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Aloqa bo'limi sarlavhasi" },
                subtitle: { type: Type.STRING },
                email: { type: Type.STRING },
                phone: { type: Type.STRING },
                address: { type: Type.STRING },
                showForm: { type: Type.BOOLEAN }
              },
              required: ["title", "subtitle", "email", "phone", "address", "showForm"]
            },
            footer: {
              type: Type.OBJECT,
              properties: {
                copyrightText: { type: Type.STRING },
                socialTelegram: { type: Type.STRING, description: "Telegram manzili havolasi" },
                socialInstagram: { type: Type.STRING, description: "Instagram manzili havolasi" },
                socialPhone: { type: Type.STRING, description: "tel:+998... ko'rinishidagi telefon havolasi" }
              },
              required: ["copyrightText", "socialTelegram", "socialInstagram", "socialPhone"]
            },
            visibility: {
              type: Type.OBJECT,
              properties: {
                header: { type: Type.BOOLEAN },
                hero: { type: Type.BOOLEAN },
                features: { type: Type.BOOLEAN },
                gallery: { type: Type.BOOLEAN },
                products: { type: Type.BOOLEAN },
                pricing: { type: Type.BOOLEAN },
                testimonials: { type: Type.BOOLEAN },
                contact: { type: Type.BOOLEAN },
                footer: { type: Type.BOOLEAN }
              },
              required: ["header", "hero", "features", "gallery", "products", "pricing", "testimonials", "contact", "footer"]
            }
          },
          required: [
            "name", "theme", "font", "borderRadius",
            "header", "hero", "features", "gallery", "products", "pricing", "testimonials", "contact", "footer", "visibility"
          ]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Gemini javob matni bo'sh qaytdi.");
    }

    const generatedConfig = JSON.parse(resultText);

    // Ensure SEO metadata is always present
    if (!generatedConfig.seo) {
      const brand = generatedConfig.header?.logoName || generatedConfig.name || "Biznes";
      const title = generatedConfig.hero?.title || "Rasmiy Portal";
      const desc = generatedConfig.hero?.subtitle || "Biznesingiz uchun professional va zamonaviy veb-sayt.";
      generatedConfig.seo = {
        metaTitle: `${brand} – ${title}`.slice(0, 60),
        metaDescription: desc.slice(0, 160),
        keywords: `${brand}, xizmatlar, toshkent, narxlar, buyurtma, sifatli`,
        ogImage: generatedConfig.hero?.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: `https://${brand.toLowerCase().replace(/[^a-z0-9]/g, '') || 'biznes'}.uz`,
        siteName: brand,
        schemaType: "LocalBusiness",
        author: brand,
        robots: "index, follow"
      };
    }

    res.json(generatedConfig);

  } catch (error: any) {
    console.warn("AI Generation encountered an issue, activating intelligent site builder fallback:", error?.message);
    const fallbackConfig = buildTailoredWebsite(
      req.body?.prompt || "Zamonaviy biznes sayti",
      req.body?.currentTheme,
      req.body?.industry
    );
    res.json(fallbackConfig);
  }
});

// Configure Vite middleware or static serving
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    console.log("🚀 Starting development server with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("📦 Serving production build from dist folder...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌍 Server running on http://0.0.0.0:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Failed to bootstrap server:", err);
});
