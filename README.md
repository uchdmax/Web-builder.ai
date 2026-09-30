# 🚀 MiGroup Web Studio — No-Code Vebsayt Yaratish Platformasi

Professional, zamonaviy va kod yozmasdan turib mijozlarga 3 xil tarifdagi (Oddiy, O'rta, Pro) to'liq ishlaydigan vebsaytlarni yaratish, tahrirlash va mijozga topshirish platformasi.

---

## 🌟 Asosiy Imkoniyatlar

1. **3 Ta Sayt Tarifi (Sayt Darajalari):**
   - **Oddiy (Landing Page):** 1 sahifali tezkor tashrif qog'ozi, asosiy ma'lumotlar, xizmatlar va ariza qoldirish formasi.
   - **O'rta (Ko'p Sahifali Sayt):** Bosh sahifa, Barcha Xizmatlar ro'yxati, Har bir xizmatning alohida batafsil sahifasi, Shifokorlar/Mutaxassislar katalogi, Aloqa va Onlayn qabulga yozilish.
   - **Pro / E-commerce (Portal & Do'kon):** Savat (Shopping Cart), mahsulotlar/paketlar katalogi, shifokorlar bilan onlayn band qilish tizimi, jonli narx kalkulyatori va Telegram bot bildirishnomalari.

2. **Mukammal No-Code Admin Panel:**
   - Hech qanday kod yozmasdan matnlar, rasmlar, telefon raqamlari va ranglarni to'g'ridan-to'g'ri tahrirlash.
   - 6 xil zamonaviy dizayn mavzulari (Indigo, Emerald, Sunset, Slate, Nordic, Royal Dark).
   - Google Fontlar, burchak shakllari (Radius) va bo'limlarni bir klikda yoqish/o'chirish.

3. **Telegram Bot Integratsiyasi:**
   - Saytdan tushgan onlayn arizalar, qabulga yozilishlar va buyurtmalar darhol mijozingizning Telegram bot/guruhiga kelib tushadi.

4. **Yagona Faylda Eksport (Single-File HTML):**
   - Saytni **1 dona `index.html`** fayl ko'rinishida yuklab olish.
   - Ushbu faylni istalgan hostingga (Netlify, Vercel, cPanel, Beget) hech qanday murakkab serversiz yuklash mumkin.
   - Eksport qilingan fayl ichida **Standalone Client Admin rejimi** ham mavjud!

5. **AI Yordamchisi (Gemini API):**
   - Faoliyat turini yozsangiz (masalan: *"Toshkentdagi stomatologiya klinikasi"*), platforma bir zumda to'liq sayt tuzilmasini yaratib beradi.

---

## 💻 Lokal Kompyuterda Ishga Tushirish (Windows / macOS / Linux)

Platformani o'z shaxsiy kompyuteringizda ishlatish uchun quyidagi oddiy qadamlarni bajaring:

### 1. Talablar:
- [Node.js](https://nodejs.org/) (18.x yoki undan yuqori versiya)
- Git (ixtiyoriy)

### 2. O'rnatish va Ishga Tushirish:

Loyihani yuklab oling yoki jildga kiring:
```bash
cd migroup-web-studio
```

Kutubxonalarni o'rnating:
```bash
npm install
```

Muhit o'zgaruvchilarini sozlang (ixtiyoriy, AI generatsiyasi uchun):
`.env.example` faylini nusxalab `.env` qiling:
```bash
cp .env.example .env
```
`.env` fayliga o'zingizning Google Gemini API kalitingizni kiriting:
```env
GEMINI_API_KEY=sizning_gemini_api_kalitingiz
```

Dasturni ishga tushiring:
```bash
npm run dev
```

Brauzeringizda oching:
👉 `http://localhost:3000`

---

## 📦 Loyiha Tuzilishi:

```
├── src/
│   ├── components/
│   │   ├── AdminSidebar.tsx     # No-Code boshqaruv paneli (Tariflar, Dizayn, Bo'limlar, CRM, Telegram)
│   │   ├── WebsitePreview.tsx   # Ko'p sahifali vebsayt renderi va interaktiv namoyishi
│   │   └── CartDrawer.tsx       # E-commerce savat va buyurtma berish drayveri
│   ├── data/
│   │   └── templates.ts         # Tayyor namunalar (Klinika, Do'kon, Restoran, Portfolio, IT Studio)
│   ├── types.ts                 # TypeScript turlari va ma'lumotlar sxemasi
│   ├── utils/
│   │   └── codeGenerator.ts     # Mustaqil HTML eksport qilish generatori
│   ├── App.tsx                  # Boshqaruv markazi va ishchi maydon
│   └── main.tsx
├── server.ts                    # Backend API (Gemini AI va Telegram Dispatch)
├── package.json
└── README.md
```

---

## 🛡 Mualliflik:
**MiGroup Web Studio** — Professional No-Code Web Generator.
