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
app.post("/api/telegram/send", async (req, res) => {
  try {
    const { botToken, chatId, message } = req.body;
    
    if (!botToken || !chatId || !message) {
      return res.status(400).json({ error: "botToken, chatId va message talab qilinadi." });
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

// Post endpoint to generate a fully styled website via Gemini
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt, currentTheme = "slate", industry = "general" } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Sarlavha yoki tavsif bo'sh bo'lishi mumkin emas." });
    }

    if (!ai) {
      return res.status(500).json({ 
        error: "Gemini API kaliti topilmadi. Iltimos, o'ng tarafdagi Settings > Secrets panelida GEMINI_API_KEY ni sozlang." 
      });
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
      model: "gemini-3.5-flash",
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
    res.json(generatedConfig);

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ 
      error: "Sun'iy intellekt orqali sayt yaratishda xatolik yuz berdi: " + (error.message || "noma'lum xatolik") 
    });
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
