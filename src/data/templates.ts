import { WebsiteConfig } from '../types';

export const templates: Record<string, { label: string; description: string; icon: string; tier: 'oddiy' | 'orta' | 'pro'; config: WebsiteConfig }> = {
  qbaho: {
    label: "QBaho – Mijozlar Baholash & Feedback Platformasi",
    description: "Qmeter tamoyillari asosidagi AI-quvvatli mijozlar fikrini yig'ish, sensorli kiosklar, QR-kodlar va yopiq zanjirli shikoyat tizimi (Pro SaaS)",
    icon: "Activity",
    tier: "pro",
    config: {
      name: "QBaho – Omnichannel Mijozlar Baholash Platformasi",
      tierLevel: "pro",
      theme: "indigo",
      font: "modern",
      borderRadius: "lg",
      structureMode: "multi_page",
      seo: {
        metaTitle: "QBaho – Mijozlar Fikr-Mulohazalari va Xizmat Sifatini O'lchash Platformasi",
        metaDescription: "Banklar, klinikalar, do'konlar va restoranlar uchun sensorli kiosk, QR-kod va Telegram orqali real vaqtda mijozlar qoniqishini (NPS, CSAT) o'lchash tizimi.",
        keywords: "qbaho, qmeter, mijozlar baholash tizimi, nps toshkent, csat o'lchash, fikr mulohaza planshet, mijozlar tajribasi, kiosk baholash, telegram ogohlantirish",
        ogImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: "https://qbaho.uz",
        siteName: "QBaho Customer Experience Platform",
        schemaType: "SoftwareApplication",
        author: "QBaho Technologies",
        robots: "index, follow"
      },
      header: {
        logoName: "QBaho",
        menuItems: [
          { id: "1", label: "Bosh sahifa", link: "#home" },
          { id: "2", label: "Imkoniyatlar", link: "#services" },
          { id: "3", label: "Biz haqimizda", link: "#about" },
          { id: "4", label: "Uskunalar", link: "#products" },
          { id: "5", label: "Tariflar", link: "#pricing" },
          { id: "6", label: "Sharhlar", link: "#testimonials" },
          { id: "7", label: "Savol-Javob", link: "#faq" },
          { id: "8", label: "Demo & Aloqa", link: "#contact" }
        ]
      },
      hero: {
        badge: "⭐ AI-Assisted Omnichannel Mijozlar Baholash Platformasi",
        title: "Mijozlar fikrini real vaqtda o'lchang va xizmat sifatini yangi bosqichga olib chiqing",
        subtitle: "Qmeter xalqaro tajribasi asosida: sensorli planshet-kiosk, QR-kodlar, SMS va Telegram so'rovnomalari orqali mijozlar qoniqishini (NPS, CSAT) nazorat qiling. Salbiy baholarga 15 soniyada javob bering.",
        ctaText: "Bepul Demo Taqdimot",
        ctaLink: "#contact",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
        showCta: true
      },
      stats: {
        title: "QBaho Platformasi Raqamlarda",
        items: [
          { id: "st-1", number: "98.4%", label: "Mijozlar Qoniqish Ko'rsatkichi (CSAT)" },
          { id: "st-2", number: "15 soniya", label: "Salbiy Fikrga Reaksiya Vaqti" },
          { id: "st-3", number: "4.2x", label: "Mijozlar Sadoqati va Qayta Xaridlar" },
          { id: "st-4", number: "1,450+", label: "Ulangan Filiallar va Kiosklar" }
        ]
      },
      features: {
        title: "Ko'p Kanalli (Omnichannel) Fikr Yig'ish va AI Tahlil",
        subtitle: "Har bir teginish nuqtasida — kassada, stolda, internetda mijozlar his-tuyg'ularini 3 soniyada baholash imkoniyati",
        items: [
          {
            id: "f-1",
            title: "Sensor Kiosk va Planshet-Stendlar",
            description: "Banklar, klinikalar va savdo markazlari kassalari uchun qulay sensorli planshet stendlari. Mijozlar 1 klik bilan xizmatga baho beradi (Smayliklar yoki 1-5 yulduz).",
            iconName: "Activity",
            badge: "Asosiy Kanal",
            price: "O'rnatish bepul",
            benefits: [
              "3 soniyada tezkor baholash",
              "O'g'irlikka qarshi mustahkam metall stend",
              "Offline-First: internet uzilsa ham ishlaydi"
            ]
          },
          {
            id: "f-2",
            title: "Chek va Stol Usti QR-Kodlari",
            description: "Restoranlar, kafelar va kuryerlik yetkazib berish xizmatlari uchun dinamik QR kodlar. Chekdagi yoki stoldagi kod orqali mijoz o'z smartfonida 5 soniyada fikr bildiradi.",
            iconName: "Zap",
            badge: "QR Yechim",
            price: "Cheksiz generatsiya",
            benefits: [
              "Ilova o'rnatish shart emas",
              "Har bir stol va chek uchun unikal kod",
              "Google Review va Yandex Xaritaga yo'naltirish"
            ]
          },
          {
            id: "f-3",
            title: "Yopiq Zanjirli Chiptalar (Closed-Loop Ticketing)",
            description: "Agar mijoz salbiy baho (1-2 yulduz) qo'ysa, tizim 15 soniya ichida filial boshqaruvchisi yoki direktorning Telegramiga 'Qizil Shikoyat' yuboradi va muammoni zudlik bilan hal qilishga undaydi.",
            iconName: "Users",
            badge: "Tezkor Alert",
            price: "15 soniya tezkorlik",
            benefits: [
              "Filial menejeriga Telegram ogohlantirish",
              "Mijoz ketmasidan oldin muammoni yechish",
              "SLA vaqt nazorati va audit jurnali"
            ]
          },
          {
            id: "f-4",
            title: "NPS va CSAT Tahliliy Boshqaruv Paneli",
            description: "Net Promoter Score (Sadoqat indeksi), CSAT (Xizmat qoniqishi), CES (Osonlik indeksi) bo'yicha filiallar va smenalarni taqqoslovchi jonli grafiklar va hisobotlar.",
            iconName: "Layers",
            badge: "Analitika",
            price: "Real-vaqt statistikasi",
            benefits: [
              "Filiallarni o'zaro solishtirish (Branch Benchmark)",
              "Haftalik va oylik avtomatik PDF/Excel hisobotlar",
              "Trendlar va mavsumiy qoniqish grafigi"
            ]
          },
          {
            id: "f-5",
            title: "Xodimlar KPI va Reyting Tizimi",
            description: "Qaysi kassir, shifokor yoki ofitsiant eng yaxshi baholarga ega, qaysi xodimga eng ko'p shikoyat tushayotganini aniq faktlar va audio/matnli izohlar bilan nazorat qiling.",
            iconName: "Award",
            badge: "Xodimlar KPI",
            price: "Avtomatlashgan baholash",
            benefits: [
              "Xodimlar o'rtasida motivatsion reyting",
              "Mukofot va jazo tizimiga to'g'ridan-to'g'ri integratsiya",
              "Soxta baholarni aniqlash algoritmi"
            ]
          },
          {
            id: "f-6",
            title: "1C, CRM va POS Kassa Integratsiyasi",
            description: "iiko, Jowi, R-Keeper, Poster, 1C Korxona, Bitrix24 va amoCRM bilan to'liq avtomatik integratsiya. Har bir chek va xarid bilan bog'langan baholar.",
            iconName: "Code",
            badge: "Integratsiya",
            price: "API & Webhook",
            benefits: [
              "REST API va Webhooks",
              "Kassa cheki ma'lumotlari bilan sinxron",
              "Telegram Bot va SMS shlyuzlar"
            ]
          }
        ]
      },
      team: {
        title: "QBaho Yetakchi Arxitektorlari & Muhandislari",
        subtitle: "Mijozlar tajribasi (CX), Sun'iy Intellekt va kiosk muhandisligi bo'yicha ekspertlar",
        items: [
          {
            id: "tm-1",
            name: "Jasur Rahimov",
            role: "Bosh CX Arxitektori & Texnik Direktor",
            experience: "10+ yil tajriba (Fintech & CX)",
            specialization: "Omnichannel tizimlar va NPS metodologiyasi",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
            consultationPrice: "Taqdimot bepul"
          },
          {
            id: "tm-2",
            name: "Nigora Salimova",
            role: "AI & Sentiment Data Science Rahbari",
            experience: "8 yil tajriba",
            specialization: "O'zbek tili matnli va ovozli izohlarini sentiment tahlili",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
            consultationPrice: "Taqdimot bepul"
          },
          {
            id: "tm-3",
            name: "Sardorbek Yusupov",
            role: "Hardware & POS Integratsiya Boshlig'i",
            experience: "7 yil tajriba",
            specialization: "Planshet-stendlar, 1C va kassa apparatlari sinxroni",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
            consultationPrice: "Taqdimot bepul"
          }
        ]
      },
      about: {
        title: "Nima uchun O'zbekistonning ilg'or brendlari QBaho platformasini tanlaydi?",
        subtitle: "Qmeter tajribasi asosida qurilgan milliy mijozlar tajribasi ekotizimi",
        content: "Qmeter'ning global amaliyoti shuni ko'rsatdiki: norozi mijozlarning 96 foizi shikoyat qilmasdan indamay raqobatchiga o'tib ketadi. QBaho ushbu muammoni ildizi bilan yechadi. Biz kassada yoki navbatda turgan mijozning kayfiyatini 3 soniyada o'lchaymiz, muammo yuzaga kelganda rahbariyatni darhol xabardor qilamiz va har bir filialning xizmat ko'rsatish standartlarini doimiy yuqori darajada ushlab turamiz.",
        description: "Qmeter'ning global amaliyoti shuni ko'rsatdiki: norozi mijozlarning 96 foizi shikoyat qilmasdan indamay raqobatchiga o'tib ketadi. QBaho ushbu muammoni ildizi bilan yechadi. Biz kassada yoki navbatda turgan mijozning kayfiyatini 3 soniyada o'lchaymiz, muammo yuzaga kelganda rahbariyatni darhol xabardor qilamiz va har bir filialning xizmat ko'rsatish standartlarini doimiy yuqori darajada ushlab turamiz.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
        bulletPoints: [
          "3 soniyalik o'ta qulay so'rovnoma interfeysi (Smayliklar, Yulduzlar, NPS 0-10)",
          "Telegram Bot orqali zudlik bilan 'Qizil Shikoyat' bildirishnomalari",
          "Offline-First texnologiyasi: internet o'chsa ham ma'lumotlar yo'qolmaydi",
          "O'zbekiston bo'ylab planshet va metall stendlarni o'rnatish va 24/7 texnik qo'llab-quvvatlash"
        ]
      },
      gallery: {
        title: "Filiallardagi O'rnatilgan Uskunalar va Kiosklar",
        subtitle: "Banklar, klinikalar va savdo markazlaridagi jonli amaliyot",
        items: [
          {
            id: "gal-1",
            title: "Bank Kassa Sensor Stendi",
            description: "Mijozlar navbati va kassa xizmatini 1 tugma bilan baholash",
            imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
            category: "Banklar"
          },
          {
            id: "gal-2",
            title: "Klinika Qabulxona Kioski",
            description: "Bemorlar qabulidan keyin shifokor va xizmatga baho berish",
            imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            category: "Klinikalar"
          },
          {
            id: "gal-3",
            title: "Restoran Stol Usti QR Akril Stoykasi",
            description: "Ofitsiant va taomlar sifatiga 5 soniyada fikr bildirish",
            imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            category: "Restoranlar"
          },
          {
            id: "gal-4",
            title: "Supermarket Kassa Plansheti",
            description: "Kassir xizmati tezligi va madaniyatini baholash",
            imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
            category: "Chakana Savdo"
          }
        ]
      },
      products: {
        title: "Tayyor Uskunalar & Kiosk Komplektlari",
        subtitle: "Biznesingiz uchun to'liq sozlangan, brendlangan planshetlar, himoyalangan metall stendlar",
        items: [
          {
            id: "kiosk-1",
            name: "QBaho Counter Stand (Kassa plansheti)",
            description: "Metall mustahkam korpus, 10.1 dyuymli sensor ekran, o'g'irlikka qarshi qulf va doimiy quvvatlagich bilan kassa stoykasi.",
            price: "1,850,000 UZS",
            numericPrice: 1850000,
            imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
            category: "Hardware",
            inStock: true,
            badge: "Eng Ko'p Sotilgan"
          },
          {
            id: "kiosk-2",
            name: "QBaho Floor Kiosk (Polga o'rnatiladigan stend)",
            description: "Klinikalar, banklar va mehmonxona zallari uchun ergonomik, baland bo'yli, LED yoritgichli premium metall stend.",
            price: "3,900,000 UZS",
            numericPrice: 3900000,
            imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            category: "Hardware",
            inStock: true,
            badge: "Premium"
          },
          {
            id: "kiosk-3",
            name: "QBaho Smart QR Acryl Stand (Stol usti akril)",
            description: "Restoran va kafelar uchun ultrabinafsha nurga chidamli, brend logotipi tushirilgan smart QR stoykasi.",
            price: "95,000 UZS",
            numericPrice: 95000,
            imageUrl: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=800",
            category: "QR Stend",
            inStock: true,
            badge: "Tezkor Yetkazish"
          }
        ]
      },
      pricing: {
        title: "Shaffof va Qulay Obuna Tariflari",
        subtitle: "Yashirin to'lovlarsiz, 14 kunlik bepul sinov muddati va so'mda qulay to'lov",
        plans: [
          {
            id: "plan-start",
            name: "Start / Kichik Biznes",
            price: "490,000 UZS",
            period: "oyiga",
            features: [
              "1-3 tagacha filial yoki kassa",
              "Android & iOS planshet ilovasi",
              "Dinamik QR-kodlar generatsiyasi",
              "Telegram orqali tezkor 'Qizil Shikoyat' xabarlari",
              "Asosiy NPS & CSAT hisobotlari",
              "Email & Telegram qo'llab-quvvatlash"
            ],
            isPopular: false,
            ctaText: "Start bilan boshlash"
          },
          {
            id: "plan-pro",
            name: "Biznes Pro / Tarmoq",
            price: "1,290,000 UZS",
            period: "oyiga",
            features: [
              "10 tagacha filial va nuqtalar",
              "Cheksiz planshet va QR stendlar",
              "AI sentiment va matnli fikr tahlili",
              "Xodimlar individual KPI reytingi",
              "1C, iiko, Jowi, Bitrix24 integratsiyasi",
              "Filiallar o'rtasida solishtirma analitika",
              "24/7 ustuvor texnik yordam"
            ],
            isPopular: true,
            ctaText: "Pro tarifni tanlash"
          },
          {
            id: "plan-enterprise",
            name: "Enterprise / Korporativ",
            price: "3,490,000 UZS",
            period: "oyiga",
            features: [
              "Cheksiz filiallar va tarmog'lar",
              "On-Premise shaxsiy serverga o'rnatish",
              "Maxsus API va shaxsiy integratsiyalar",
              "Shaxsiy CX maslahatchi biriktiriladi",
              "SLA kafolati (99.9% uptime)",
              "Bank darajasidagi xavfsizlik va PII himoyasi"
            ],
            isPopular: false,
            ctaText: "Korporativ so'rov yuborish"
          }
        ]
      },
      testimonials: {
        title: "Mijozlarimiz va Ilg'or Bizneslar Natijalari",
        subtitle: "QBaho yordamida mijozlar sadoqatini oshirgan va xizmat sifatini yaxshilagan korxonalar fikri",
        items: [
          {
            id: "t-1",
            author: "Alisher Qosimov",
            role: "Chakana Savdo Tarmog'i Boshqaruvchisi",
            quote: "Kassalarimizga QBaho planshetlarini o'rnatganimizdan so'ng, navbatdagi noroziliklar darhol aniqlanib, 2 hafta ichida salbiy fikrlar 68% ga kamaydi! Salbiy baho tushsa darhol direktorga Telegram borishi mo'jiza.",
            avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
          },
          {
            id: "t-2",
            author: "Dilnoza Akromova",
            role: "Xususiy Tibbiyot Markazi Bosh Shifokori",
            quote: "Har bir shifokor va qabulxona xodimi endi o'z reytingini ko'rib turadi. Bemorlarimizning mamnunlik darajasi 99% ga chiqdi, xodimlar muomalasi sezilarli yaxshilandi.",
            avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
          },
          {
            id: "t-3",
            author: "Rustam Zokirov",
            role: "Restoranlar Tarmog'i Ta'sischisi",
            quote: "Stol ustidagi QR orqali mijoz ovqat yoki ofitsiantdan norozi bo'lsa, xabar menejerga 10 soniyada yetib boradi va biz mijoz ketmasidan vaziyatni to'g'irlaymiz.",
            avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
          }
        ]
      },
      faq: {
        title: "Ko'p Beriladigan Savollar",
        subtitle: "QBaho tizimi, uskunalar va o'rnatish jarayoni bo'yicha javoblar",
        items: [
          {
            id: "faq-1",
            question: "QBaho tizimi qanday ishlaydi?",
            answer: "Kassa yoki stollarga planshet yoki QR kod o'rnatiladi. Mijoz xarid yoki xizmatdan so'ng 1-3 soniyada smaylik bosadi yoki baho beradi. Barcha natijalar real vaqtda boshqaruv panelida ko'rinadi va tahlil qilinadi."
          },
          {
            id: "faq-2",
            question: "Internet o'chib qolsa baholar yo'qolmaydimi?",
            answer: "Yo'q, QBaho ilovasi Offline-First arxitekturasida ishlaydi. Internet yo'q paytda barcha fikrlar planshet xotirasida xavfsiz saqlanadi va internet paydo bo'lishi bilanoq bulutga uzatiladi."
          },
          {
            id: "faq-3",
            question: "Salbiy fikr bildirilganda Telegram xabari qanchalik tez keladi?",
            answer: "Mijoz 1 yoki 2 yulduz (xafa smaylik) qo'yganidan keyin roppa-rosa 15 soniya ichida mas'ul filial menejeri yoki rahbarning shaxsiy Telegramiga shikoyat matni va chek ma'lumotlari boradi."
          },
          {
            id: "faq-4",
            question: "1C, iiko yoki boshqa dasturlarimiz bilan ulana oladimi?",
            answer: "Ha, QBaho ochiq REST API va Webhooklarga ega bo'lib, 1C, iiko, Jowi, R-Keeper, Poster, Bitrix24 va amoCRM bilan to'liq avtomatik integratsiya qilinadi."
          }
        ]
      },
      contact: {
        title: "QBaho Bepul Demo Taqdimotiga Yoziling",
        subtitle: "Mutaxassisimiz sizning biznesingizga mos yechimni ko'rsatib beradi va 14 kunlik bepul sinov taqdim etadi",
        address: "Toshkent shahri, Mirobod tumani, Afrosiyob ko'chasi, 12-uy",
        phone: "+998 71 200 45 45",
        email: "info@qbaho.uz",
        showForm: true,
        workingHours: "Dushanba - Shanba: 09:00 - 19:00",
        formTitle: "Bepul Taqdimot & Demo Sinov",
        formSubtitle: "Ma'lumotlaringizni qoldiring, 15 daqiqada siz bilan bog'lanamiz",
        submitButtonText: "Demo Taqdimotga Yozilish"
      },
      footer: {
        copyrightText: "© 2026 QBaho Technologies. Qmeter xalqaro tajribasi asosidagi mijozlar baholash ekotizimi.",
        socialTelegram: "https://t.me/qbaho_uz",
        socialInstagram: "https://instagram.com/qbaho.uz",
        socialPhone: "tel:+998712004545"
      },
      integrations: {
        telegramBotToken: "",
        telegramChatId: "",
        telegramUsername: "qbaho_admin",
        whatsappPhone: "+998712004545",
        emailNotifications: "support@qbaho.uz",
        sendToTelegram: true,
        sendToWhatsApp: false,
        successMessage: "Rahmat! QBaho demo taqdimotiga arizangiz qabul qilindi. 15 daqiqada menejerimiz siz bilan bog'lanadi."
      },
      visibility: {
        header: true,
        hero: true,
        stats: true,
        features: true,
        team: true,
        about: true,
        gallery: true,
        products: true,
        cart: true,
        pricing: true,
        testimonials: true,
        faq: true,
        contact: true,
        footer: true
      }
    }
  },

  klinika: {
    label: "Ona va Bola Tibbiyot Majmuasi",
    description: "Xususiy tug'ruqxona, zamonaviy ginekologiya, UZI va robotlashgan laboratoriya (Ko'p sahifali + Qabul tizimi)",
    icon: "Heart",
    tier: "pro",
    config: {
      name: "Ona va Bola Premium Tibbiyot Majmuasi",
      tierLevel: "pro",
      theme: "indigo",
      font: "modern",
      borderRadius: "md",
      structureMode: "multi_page",
      seo: {
        metaTitle: "Ona va Bola Tibbiyot Majmuasi – Xususiy Ginekologiya va Tug'ruqxona",
        metaDescription: "Toshkentdagi yuqori toifali shifokorlar, 4D UZI Voluson E10 skriningi va qulay tug'ruqxona sharoitlari. 24/7 tezkor qabul va statsionar.",
        keywords: "ginekologiya, 4D UZI, tug'ruqxona toshkent, homiladorlik skriningi, pediatriya, tibbiy ko'rik, laboratoriya",
        ogImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: "https://onavabola-klinika.uz",
        siteName: "Ona va Bola Tibbiyot Majmuasi",
        schemaType: "MedicalBusiness",
        author: "Ona va Bola Tibbiyot Markazi",
        robots: "index, follow"
      },
      header: {
        logoName: "Ona va Bola",
        menuItems: [
          { id: "1", label: "Bosh sahifa", link: "#home" },
          { id: "2", label: "Xizmatlar & Tashxis", link: "#services" },
          { id: "3", label: "Shifokorlarimiz", link: "#team" },
          { id: "4", label: "Biz haqimizda", link: "#about" },
          { id: "5", label: "Check-Up Paketlar", link: "#products" },
          { id: "6", label: "Tug'ruq Rejalari", link: "#pricing" },
          { id: "7", label: "Savol-Javob", link: "#faq" },
          { id: "8", label: "Aloqa & Qabul", link: "#contact" }
        ]
      },
      hero: {
        badge: "✨ Xususiy Ginekologiya va Tug'ruqxona Majmuasi",
        title: "Sog'lom ona va xavfsiz tug'ruq — baxtimiz kafolati",
        subtitle: "Sizning va jajji farzandingiz salomatligi uchun eng so'nggi 4D UZI apparatlari (Voluson E10), to'liq avtomatlashgan shaxsiy laboratoriya hamda ko'p yillik xalqaro tajribaga ega shifokorlar jamoasi 24/7 xizmat ko'rsatadi.",
        ctaText: "Bepul shifokor maslahatiga yozilish",
        ctaLink: "#contact",
        imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
        showCta: true
      },
      stats: {
        title: "Klinika Statistikasi",
        items: [
          { id: "1", number: "18,000+", label: "Muvaffaqiyatli Tug'ruqlar" },
          { id: "2", number: "40+", label: "Oliy Toifali Shifokorlar" },
          { id: "3", number: "100%", label: "Germaniya & Yaponiya Texnologiyalari" },
          { id: "4", number: "24/7", label: "Tezkor Qabul & Statsionar" }
        ]
      },
      features: {
        title: "Professional Tibbiy Yo'nalishlarimiz",
        subtitle: "Eng zamonaviy texnologiyalar va mehribon xodimlarimiz ko'magida yuqori sifatli g'amxo'rlik",
        items: [
          { 
            id: "1", 
            title: "4D UZI Skrining va Diagnostika", 
            badge: "Premium Diagnostika",
            description: "Yevropa premium klassidagi Voluson E10 uskunasida homilaning 4D skriningi, doplerometriya va barcha ichki a'zolarni 100% aniq tashxislash.", 
            iconName: "Activity",
            fullDescription: "Markazimizda AQShning General Electric kompaniyasiga tegishli eng so'nggi va mukammal Voluson E10 premium-klass ultratovush apparati o'rnatilgan. Ushbu apparat homila patologiyalarini 100% gacha aniqlikda ilk haftalardanoq aniqlash imkonini beradi.",
            price: "180,000 UZS",
            procedures: [
              { name: "Homiladorlik I-trimestr skriningi (11-14 hafta) + FMF bayonnomasi", price: "180,000 UZS" },
              { name: "Homiladorlik II-trimestr skriningi (18-22 hafta) + 4D Video rasm", price: "250,000 UZS" },
              { name: "Ginekologik UZI (transvaginal va transabdominal)", price: "130,000 UZS" },
              { name: "Doplerometriya (homilada qon aylanish oqimini o'rganish)", price: "150,000 UZS" }
            ],
            faqs: [
              { q: "Skriningga kelishdan oldin qanday tayyorlanish kerak?", a: "Zamonaviy datchiklarimiz siydik pufagi bo'sh bo'lganda ham o'ta yuqori tiniqlikda ko'rsatadi." },
              { q: "4D UZI nima beradi?", a: "4D UZI orqali farzandingizning real vaqtdagi harakatlari, yuz tuzilishi va tabassumini ko'ra olasiz. Tasvirlar sizga Telegram orqali taqdim etiladi." }
            ],
            benefits: ["GE Voluson E10 premium apparati", "FMF sertifikatli shifokorlar", "Raqamli foto va video yozib berish", "Navbatsiz qulay sharoit"]
          },
          { 
            id: "2", 
            title: "Robotlashgan Zamonaviy Laboratoriya", 
            badge: "100% Avtomatlashgan",
            description: "Hech qanday inson omilisiz, to'liq avtomatlashgan uskunalar yordamida gormonlar, infektsiyalar, prenatal skrining va genetik tahlillar.", 
            iconName: "Layers",
            fullDescription: "Markazimiz qoshida to'liq avtomatlashtirilgan shaxsiy laboratoriya faoliyat ko'rsatadi. Bu yerda tahlillar Roche (Shveysariya) va Abbott (AQSh) uskunalarida xatosiz chiqariladi.",
            price: "60,000 UZS",
            procedures: [
              { name: "Ayollar jinsiy gormonlari paneli (FSG, LG, Prolaktin, Progesteron)", price: "320,000 UZS" },
              { name: "Homiladorlikda prenatal skrining tahlili (PRISCA risk hisoblash)", price: "290,000 UZS" },
              { name: "TORCH-infektsiyalarga to'liq qon tahlili", price: "380,000 UZS" }
            ],
            benefits: ["Roche va Abbott avtomat analizatorlari", "Xalqaro sifat nazorati (EQAS)", "Natijalarni Telegramga yuborish"]
          },
          { 
            id: "3", 
            title: "Ginekologiya va Endokrinologiya", 
            badge: "Reproduktiv Sog'liq",
            description: "Bepushtlikni zamonaviy usullar bilan davolash, hayz siklini normallashtirish, eroziya hamda gormonal muammolarni xavfsiz bartaraf etish.", 
            iconName: "Heart",
            price: "150,000 UZS",
            procedures: [
              { name: "Oliy toifali reproduktolog-ginekolog konsultatsiyasi", price: "150,000 UZS" },
              { name: "Kolposkopiya (bachadon bo'ynini mikroskop ostida ko'rish)", price: "120,000 UZS" },
              { name: "Bachadon bo'yni eroziyasini radioto'lqinli davolash (Surgitron)", price: "450,000 UZS" }
            ],
            benefits: ["Germaniya va Rossiyada malaka oshirgan shifokorlar", "Kam invaziv muolajalar", "Shaxsiy shifokor ko'magi"]
          },
          { 
            id: "4", 
            title: "Fransuz Andozasidagi Tug'ruqxona", 
            badge: "Oliy Toifali Tug'ruq",
            description: "Fransuz andozasidagi individual tug'ruq xonalari, og'riqsizlantirish (epidural anesteziya) va tajribali reanimatolog-neonatologlar nazorati.", 
            iconName: "Users",
            price: "6,500,000 UZS",
            procedures: [
              { name: "Shinam standart palata (barcha ovqat va parvarish bilan, 3 kun)", price: "6,500,000 UZS" },
              { name: "VIP Kengaytirilgan palata (turmush o'rtog'i yashashi bilan, 3 kun)", price: "12,900,000 UZS" }
            ],
            benefits: ["Alohida tug'ruq palatasi", "24/7 neonatal reanimatsiya", "Fransuzcha og'riqsizlantirish", "5 mahal parhez taomlar"]
          }
        ]
      },
      team: {
        title: "Oliy Toifali Shifokorlarimiz",
        subtitle: "Tibbiyot fanlari nomzodlari, ko'p yillik xalqaro tajribaga ega akusher-ginekologlar",
        items: [
          {
            id: "1",
            name: "Dr. Gulnora Mansurova",
            role: "Bosh Shifokor, Akusher-Ginekolog, Reproduktolog",
            experience: "22 yillik amaliy tajriba",
            specialization: "Bepushtlikni davolash, murakkab homiladorlik va yuqori xavfli tug'ruqlar",
            imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
            bio: "Tibbiyot fanlari nomzodi. Moskva va Berlin klinikalarida malaka oshirgan. 8,000 dan ortiq muvaffaqiyatli tug'ruq va operatsiyalarni bajargan.",
            schedule: "Dush - Juma: 09:00 - 16:00",
            consultationPrice: "200,000 UZS",
            education: ["Toshkent Tibbiyot Akademiyasi", "Berlin Charite Klinikasi"]
          },
          {
            id: "2",
            name: "Dr. Shahzod Tursunov",
            role: "Oliy Toifali UZI Eksperti, FMF Sertifikati sohibi",
            experience: "17 yillik tajriba",
            specialization: "4D Homila skriningi, doplerometriya, neonatal va ginekologik UZI",
            imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
            bio: "London Fetal Medicine Foundation (FMF) sertifikatiga ega bo'lib, eng murakkab homila patologiyalarini aniqlash bo'yicha ekspert.",
            schedule: "Har kuni: 09:00 - 18:00",
            consultationPrice: "180,000 UZS"
          },
          {
            id: "3",
            name: "Dr. Nilufar Sabirova",
            role: "Ginekolog-Endokrinolog, Reproduktolog",
            experience: "15 yillik tajriba",
            specialization: "Gormonal buzilishlar, bepushtlik, follikulometriya va gisteroskopiya",
            imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
            schedule: "Dush - Shanba: 08:30 - 15:00",
            consultationPrice: "160,000 UZS"
          }
        ]
      },
      about: {
        title: "Klinikamiz Haqida",
        subtitle: "15 yildan buyon onalar va bolalar salomatligi yo'lida xizmat qilib kelmoqdamiz",
        content: "Ona va Bola tibbiyot majmuasi — bu eng so'nggi jahon standartlari asosida jihozlangan, professional shifokorlar va mehribon hamshiralar jamoasi jamlangan zamonaviy tibbiyot maskanidir. Bizda har bir bemorga individual yondashuv, shinam xonalar va 100% steril sharoit ta'minlanadi.",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        features: [
          "AQSh va Germaniya premium tibbiyot uskunalari",
          "Oliy toifali va xalqaro sertifikatli shifokorlar",
          "Fransuz andozasidagi individual tug'ruqxona",
          "24/7 Shoshilinch tibbiy yordam va qabul"
        ]
      },
      gallery: {
        title: "Klinikamiz Sharoitlari & Fototurlar",
        subtitle: "Siz va farzandingiz uchun yaratilgan 5 yulduzli qulayliklar",
        items: [
          { id: "1", title: "VIP Tug'ruq Palatasi", description: "Oila a'zolari bilan birga qolish mumkin bo'lgan keng va shinam xona.", imageUrl: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600" },
          { id: "2", title: "4D UZI Skrining Xonasi", description: "GE Voluson E10 apparati bilan jihozlangan qulay diagnostika zali.", imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
          { id: "3", title: "Robotlashgan Laboratoriya", description: "Roche va Abbott avtomat analizatorlari o'rnatilgan steril markaz.", imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600" }
        ]
      },
      products: {
        title: "Sog'lomlashtirish Paketlari (Check-Up)",
        subtitle: "Salomatlikni rejalashtirish va har tomonlama tibbiy tekshiruv dasturlari",
        items: [
          { id: "1", name: "Homiladorlikka Rejalashtirish Paketi", description: "Er va xotin uchun to'liq bioximik va gormonal tahlillar, reproduktiv salomatlik ko'rigi, UZI va konsultatsiya.", price: "750,000 UZS", numericPrice: 750000, imageUrl: "https://images.unsplash.com/photo-1504813184591-0155286141a5?auto=format&fit=crop&q=80&w=400", category: "Tekshiruv", badge: "Ommabop" },
          { id: "2", name: "Ginekologik Skrining Premium", description: "Kolposkopiya, onkomarkerlar, barcha infektsiyalar tahlili, ginekolog qabuli hamda kichik tos a'zolari UZI tekshiruvi.", price: "480,000 UZS", numericPrice: 480000, imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=400", category: "Ginekologiya" },
          { id: "3", name: "Premium Prenatal Skrining", description: "Homiladorlar uchun I va II-trimestr skriningi, 4D Voluson UZI rasm/videosi hamda genetika tahlillari integratsiyasi.", price: "390,000 UZS", numericPrice: 390000, imageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400", category: "Skrining", badge: "4D UZI" }
        ]
      },
      pricing: {
        title: "Tug'ruq (Maternity) Paketlarimiz",
        subtitle: "Kasalxona sharoitida shohona qulaylik va xavfsiz onalik kechasi",
        plans: [
          { id: "1", name: "Standart Tug'ruq Paketi", price: "6,500,000 UZS", period: "barcha kunlar uchun", features: ["3 kunlik shinam individual palata", "Fiziologik tug'ruqni qabul qilish", "Oliy toifali akusher-ginekolog nazorati", "Sog'lom 3 mahal parhez taomlar"], isPopular: false, ctaText: "Standart reja bilan tanishish" },
          { id: "2", name: "Premium (VIP) Tug'ruq Paketi", price: "12,900,000 UZS", period: "to'liq sharoitlar bilan", features: ["Kengaytirilgan VIP palata (hamroh bilan yashash)", "Epidural og'riqsizlantirish (fransuzcha uslubda)", "Bosh shifokor va shaxsiy akusher guruhi", "24/7 neonatal nazorat", "Restorandan 5 mahal taomlar"], isPopular: true, ctaText: "VIP xizmatlarni band qilish" }
        ]
      },
      testimonials: {
        title: "Baxtli Onalarimiz Fikrlari",
        subtitle: "Tug'ruqxonamizda ko'z yorib, quvonchini baham ko'rgan mijozlar sharhlari",
        items: [
          { id: "1", quote: "Ona va Bola majmuasida ikkinchi farzandimni dunyoga keltirdim. VIP palata judayam shinam ekan, turmush o'rtog'im ham yonimda qoldi. Og'riqsiz epidural anesteziya tufayli tug'ruq juda oson kechdi. Rahmat!", author: "Nilufar Orifova", role: "Toshkent sh., 28 yoshli ona", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
          { id: "2", quote: "Bepushtlik tashxisi bilan 4 yil davolangan edik. Dr. Gulnora Mansurova ko'magida birinchi urinishdayoq homilador bo'ldim va sog'lom o'g'il ko'rdik! Laboratoriya tahlillari va UZI juda ham professional.", author: "Aziza Karimova", role: "Farg'ona sh., Baxtli ona", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" }
        ]
      },
      faq: {
        title: "Tug'ruqxona & Qabul Savollari",
        subtitle: "Homiladorlik, UZI va tug'ruqqa oid muhim ma'lumotlar",
        items: [
          { id: "1", question: "Shifokor qabuliga qanday yozilish mumkin?", answer: "Sayt orqali onlayn ariza qoldirishingiz, telefon qilish yoki Telegram orqali o'zingizga qulay vaqtni tanlashingiz mumkin." },
          { id: "2", question: "Tug'ruq paytida turmush o'rtog'i yonida bo'lishi mumkinmi?", answer: "Ha, bizda individual sheriklik tug'ruqlari to'liq qo'llab-quvvatlanadi." }
        ]
      },
      contact: {
        title: "Onlayn Navbat & Bog'lanish",
        subtitle: "Hech qanday navbatlarsiz, o'zingizga qulay vaqtga shifokor ko'rigi yoki UZIga yoziling.",
        email: "qabul@onajonlar.uz",
        phone: "+998 71 200 44 55",
        address: "Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko'chasi, 12-uy (Metro: Novza)",
        showForm: true
      },
      footer: {
        copyrightText: "© 2026 Ona va Bola Premium Ginekologiya va Tug'ruq Majmuasi. Barcha huquqlar himoyalangan.",
        socialTelegram: "https://t.me/example",
        socialInstagram: "https://instagram.com/example",
        socialPhone: "tel:+998712004455"
      },
      integrations: {
        telegramBotToken: "",
        telegramChatId: "",
        telegramUsername: "onajonlar_admin",
        whatsappPhone: "+998712004455",
        emailNotifications: "qabul@onajonlar.uz",
        sendToTelegram: true,
        sendToWhatsApp: true,
        successMessage: "Shifokor qabuliga navbatingiz muvaffaqiyatli rasmiylashtirildi! Tez orada klinikadan siz bilan bog'lanishadi."
      },
      visibility: {
        header: true,
        hero: true,
        stats: true,
        features: true,
        team: true,
        about: true,
        gallery: true,
        products: true,
        cart: true,
        pricing: true,
        testimonials: true,
        faq: true,
        contact: true,
        footer: true
      }
    }
  },

  ecommerce: {
    label: "SmartStore E-Commerce & Savat",
    description: "Elektronika, kiyim-kechak yoki zamonaviy do'konlar uchun to'liq Savat (Cart) va buyurtma moduli (Pro)",
    icon: "ShoppingBag",
    tier: "pro",
    config: {
      name: "SmartStore Uzbekistan",
      tierLevel: "pro",
      theme: "emerald",
      font: "modern",
      borderRadius: "lg",
      structureMode: "multi_page",
      seo: {
        metaTitle: "SmartStore Uzbekistan – Original iPhone, MacBook va Smart Gadjetlar",
        metaDescription: "Rasmiy kafolatli Apple va Xiaomi gadjetlari, O'zbekiston bo'ylab 1 kunda bepul yetkazib berish va qulay to'lov imkoniyati.",
        keywords: "iphone toshkent, macbook sotib olish, apple watch, smart gadjetlar, original telefonlar, onlayn do'kon",
        ogImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: "https://smartstore.uz",
        siteName: "SmartStore Uzbekistan",
        schemaType: "Store",
        author: "SmartStore Official",
        robots: "index, follow"
      },
      header: {
        logoName: "SmartStore",
        menuItems: [
          { id: "1", label: "Bosh sahifa", link: "#home" },
          { id: "2", label: "Katalog", link: "#products" },
          { id: "3", label: "Afzalliklar", link: "#features" },
          { id: "4", label: "Sharhlar", link: "#testimonials" },
          { id: "5", label: "Aloqa", link: "#contact" }
        ]
      },
      hero: {
        badge: "🔥 Yangi Avlod Gadjetlari & Rasmiy Kafolat",
        title: "Eng so'nggi smartfon va aqlli qurilmalar qulay narxlarda",
        subtitle: "100% original brendlar, O'zbekiston bo'ylab 1 kunda bepul yetkazib berish va 12 oylik rasmiy kafolat bilan buyurtma bering.",
        ctaText: "Katalogni ko'rish",
        ctaLink: "#products",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        showCta: true
      },
      stats: {
        title: "Do'kon Ko'rsatkichlari",
        items: [
          { id: "1", number: "25,000+", label: "Yetkazilgan Buyurtmalar" },
          { id: "2", number: "100%", label: "Original Mahsulotlar" },
          { id: "3", number: "24 soat", label: "Tezkor Yetkazib Berish" },
          { id: "4", number: "1 yil", label: "To'liq Rasmiy Kafolat" }
        ]
      },
      features: {
        title: "Nima uchun SmartStore?",
        subtitle: "Mijozlarimizga eng qulay onlayn xarid tajribasini taqdim etamiz",
        items: [
          { id: "1", title: "Tezkor Bepul Yetkazib Berish", description: "Toshkent shahri bo'ylab 3 soat ichida, viloyatlarga 24 soat ichida bepul kuryerlik.", iconName: "Activity", badge: "Tezkor" },
          { id: "2", title: "100% Original & Kafolat", description: "Barcha qurilmalar rasmiy IMEI ro'yxatidan o'tgan va 1 yillik servis kafolatiga ega.", iconName: "Award", badge: "Kafolat" },
          { id: "3", title: "Qulay To'lov Usullari", description: "Click, Payme, Uzum yoki mahsulotni qo'lingizga olgandan so'ng naqd/karta orqali to'lang.", iconName: "ShoppingBag", badge: "Xavfsiz" }
        ]
      },
      team: {
        title: "Bizning Menejerlar",
        subtitle: "Sizga to'g'ri tanlov qilishda yordam beruvchi mutaxassislar",
        items: [
          {
            id: "1",
            name: "Jamshid Rustamov",
            role: "Bosh Savdo Menejeri & Gadjet Maslahatchisi",
            experience: "6 yillik tajriba",
            specialization: "Apple, Samsung va aqlli uy texnikalari bo'yicha ekspert",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
            schedule: "Har kuni: 09:00 - 21:00"
          }
        ]
      },
      about: {
        title: "SmartStore Haqida",
        subtitle: "O'zbekistonda ishonchli elektronika yetkazib beruvchi yetakchi brend",
        content: "SmartStore 2020-yildan buyon xaridorlarga eng sara texnologiyalarni qulay narxlarda yetkazib kelmoqda. Biz faqat rasmiy ishlab chiqaruvchilar bilan hamkorlik qilamiz.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        features: ["Rasmiy IMEI", "1 yil bepul servis", "Eski telefonni Trade-In qilish", "Online savat va bo'lib to'lash"]
      },
      gallery: {
        title: "Showroom va Yetkazib Berish",
        subtitle: "Do'konimiz zali va omborimizdagi asl muhit",
        items: [
          { id: "1", title: "Flagman Do'konimiz", description: "Toshkent markazidagi zamonaviy texnika zali.", imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600" }
        ]
      },
      products: {
        title: "Eng Ommabop Mahsulotlar Katalogi",
        subtitle: "Bir tugma bilan savatga qo'shing va tezkor buyurtma bering",
        items: [
          { id: "1", name: "iPhone 16 Pro Max 256GB Desert Titanium", description: "A18 Pro protsessor, 48MP asosiy kamera, titanium korpus va rekord darajadagi batareya.", price: "14,500,000 UZS", numericPrice: 14500000, imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=400", category: "Smartfonlar", badge: "Xit Sotuv" },
          { id: "2", name: "MacBook Air 15 M3 16GB / 512GB Space Gray", description: "Yengil va ingichka noutbuk, 18 soat quvvat va Liquid Retina displey.", price: "16,800,000 UZS", numericPrice: 16800000, imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400", category: "Noutbuklar", badge: "Yangi" },
          { id: "3", name: "Apple Watch Ultra 2 Titanium GPS + Cellular", description: "Sportchilar va faol hayot tarzi uchun 100 metrga suvga chidamli aqlli soat.", price: "9,200,000 UZS", numericPrice: 9200000, imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400", category: "Aqlli Soatlar" },
          { id: "4", name: "AirPods Pro 2 MagSafe (USB-C)", description: "Faol shovqin so'ndiruvchi (ANC) va fazoviy audio qo'llab-quvvatlovchi original quloqchin.", price: "2,850,000 UZS", numericPrice: 2850000, imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=400", category: "Aksessuarlar", badge: "Chegirma" }
        ]
      },
      pricing: {
        title: "Kafolat va Servis Rejalari",
        subtitle: "Qurilmalaringiz uchun qo'shimcha himoya paketlari",
        plans: [
          { id: "1", name: "Standart Kafolat", price: "0 UZS", period: "12 oy", features: ["Zavod nuqsonlariga to'liq bepul tuzatish", "Rasmiy servis xizmati"], isPopular: true, ctaText: "Paket ichida mavjud" },
          { id: "2", name: "SmartCare Plus", price: "650,000 UZS", period: "24 oy", features: ["Ekran sinishini 1 marta bepul almashtirish", "Suv kirishidan himoya sug'urtasi", "2 yil bepul tozalash"], isPopular: false, ctaText: "Kafolatni uzaytirish" }
        ]
      },
      testimonials: {
        title: "Xaridorlarimiz Fikrlari",
        subtitle: "SmartStore orqali gadjet xarid qilgan mamnun mijozlar sharhlari",
        items: [
          { id: "1", quote: "Buyurtma berganimdan keyin 2 soat o'tmay Toshkent ichida yetkazib berishdi! IMEI ro'yxatdan o'tgan, qutisi plombali. Judayam xursandman!", author: "Sardorbek Rahimov", role: "Toshkent", avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" }
        ]
      },
      faq: {
        title: "Buyurtma va Yetkazib Berish Savollari",
        subtitle: "To'lov va kafolat bo'yicha ko'p beriladigan savollar",
        items: [
          { id: "1", question: "Yetkazib berish qancha vaqt oladi?", answer: "Toshkent shahri bo'ylab 3 soat ichida, O'zbekistonning barcha viloyatlariga esa 24 soat ichida yetkaziladi." },
          { id: "2", question: "Mahsulotni olgandan keyin to'lasam bo'ladimi?", answer: "Ha, albatta! Kuryer mahsulotni topshirganda naqd yoki karta orqali to'lashingiz mumkin." }
        ]
      },
      contact: {
        title: "Buyurtma & Aloqa Markazi",
        subtitle: "Savollaringiz bormi? Biz bilan bog'laning yoki xabar qoldiring.",
        email: "sales@smartstore.uz",
        phone: "+998 71 205 88 99",
        address: "Toshkent shahri, Yunusobod tumani, Malika savdo majmuasi, 12-do'kon",
        showForm: true
      },
      footer: {
        copyrightText: "© 2026 SmartStore Uzbekistan. Barcha huquqlar himoyalangan.",
        socialTelegram: "https://t.me/smartstore_uz",
        socialInstagram: "https://instagram.com/smartstore_uz",
        socialPhone: "tel:+998712058899"
      },
      integrations: {
        telegramBotToken: "",
        telegramChatId: "",
        telegramUsername: "smartstore_sales",
        whatsappPhone: "+998712058899",
        emailNotifications: "sales@smartstore.uz",
        sendToTelegram: true,
        sendToWhatsApp: true,
        successMessage: "Buyurtmangiz muvaffaqiyatli qabul qilindi! Tez orada kuryerlik bo'limimiz siz bilan bog'lanadi."
      },
      visibility: {
        header: true,
        hero: true,
        stats: true,
        features: true,
        team: false,
        about: true,
        gallery: false,
        products: true,
        cart: true,
        pricing: false,
        testimonials: true,
        faq: true,
        contact: true,
        footer: true
      }
    }
  },

  portfolio: {
    label: "MI Group IT Agency & Portfolio",
    description: "Dasturchilar, dizaynerlar va IT agentliklar uchun ko'p sahifali korporativ portal (O'rta)",
    icon: "User",
    tier: "orta",
    config: {
      name: "MI Group Agency",
      tierLevel: "orta",
      theme: "slate",
      font: "modern",
      borderRadius: "lg",
      structureMode: "multi_page",
      seo: {
        metaTitle: "MI Group Agency – Professional Veb-Saytlar va IT Yechimlar",
        metaDescription: "Biznesingiz uchun tezkor, xavfsiz va zamonaviy veb-saytlar, mobil ilovalar va CRM tizimlar ishlab chiqish agentligi.",
        keywords: "sayt yaratish toshkent, it agentlik, web dasturlash, crm tizimlar, mobil ilovalar, ui ux dizayn",
        ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: "https://migroup.uz",
        siteName: "MI Group Digital Agency",
        schemaType: "Organization",
        author: "MI Group Agency",
        robots: "index, follow"
      },
      header: {
        logoName: "MI Group",
        menuItems: [
          { id: "1", label: "Bosh sahifa", link: "#home" },
          { id: "2", label: "Xizmatlar", link: "#services" },
          { id: "3", label: "Jamoamiz", link: "#team" },
          { id: "4", label: "Loyihalar", link: "#gallery" },
          { id: "5", label: "Narxlar", link: "#pricing" },
          { id: "6", label: "Aloqa", link: "#contact" }
        ]
      },
      hero: {
        badge: "Raqamli Yechimlar & Dasturiy Ta'minot",
        title: "Biznesingiz uchun professional va tezkor veb-saytlar",
        subtitle: "MI Group jamoasi zamonaviy veb-texnologiyalar yordamida tezkor, xavfsiz va konversiyasi yuqori bo'lgan saytlarni loyihalashtiradi va ishlab chiqadi.",
        ctaText: "Bepul Konsultatsiya",
        ctaLink: "#contact",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        showCta: true
      },
      stats: {
        title: "Raqamlarda Bizning Natijalar",
        items: [
          { id: "1", number: "150+", label: "Muvaffaqiyatli Loyihalar" },
          { id: "2", number: "99.4%", label: "Mamnun Mijozlar" },
          { id: "3", number: "7+", label: "Yillik Bozor Tajribasi" },
          { id: "4", number: "24/7", label: "Texnik Qo'llab-quvvatlash" }
        ]
      },
      features: {
        title: "Biz taklif qiladigan xizmatlar",
        subtitle: "Mijozlarimizga eng yuqori sifatli va zamonaviy raqamli xizmatlarni taqdim etamiz",
        items: [
          { 
            id: "1", 
            title: "Web Dasturlash & Portal", 
            description: "React, Next.js, Node.js yordamida murakkab veb-saytlar va ilovalarni mukammal darajada yaratish.", 
            iconName: "Code",
            badge: "Top Xizmat",
            price: "4,500,000 UZS",
            procedures: [
              { name: "Landing Page yaratish", price: "2,000,000 UZS" },
              { name: "Ko'p sahifali korporativ sayt", price: "5,000,000 UZS" },
              { name: "Online do'kon va to'lov integratsiyasi", price: "9,000,000 UZS" }
            ],
            benefits: ["Tez yuklanish (100 PageSpeed)", "Mobil moslashuvchanlik", "SEO optimallashtirish"]
          },
          { 
            id: "2", 
            title: "UI/UX Dizayn & Prototip", 
            description: "Figma orqali foydalanuvchilar uchun juda qulay va ko'zga tashlanadigan interfeys dizaynlarini chizish.", 
            iconName: "Layout",
            price: "2,000,000 UZS",
            benefits: ["Figma prototip", "Foydalanuvchi sinovlari", "Brend uslubi"]
          },
          { 
            id: "3", 
            title: "Tezlashtirish & SEO", 
            description: "Veb-saytlarni yuklanish tezligini oshirish va qidiruv tizimlarida eng yuqori o'rinlarga chiqishini ta'minlash.", 
            iconName: "Activity",
            price: "1,500,000 UZS",
            benefits: ["Google Top-10 chiqish", "Texnik audit", "Kalit so'zlar tahlili"]
          }
        ]
      },
      team: {
        title: "Bizning IT Mutaxassislar",
        subtitle: "Tajribali dasturchilar, dizaynerlar va loyiha menejerlari",
        items: [
          {
            id: "1",
            name: "Sardor Aliyev",
            role: "Bosh Texnik Direktor (CTO), Full-stack Dasturchi",
            experience: "8 yillik tajriba",
            specialization: "Arxitektura, React, Node.js va Cloud yechimlar",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
            schedule: "Dush - Juma: 10:00 - 18:00"
          },
          {
            id: "2",
            name: "Zarina Karimova",
            role: "Bosh UI/UX Dizayner",
            experience: "6 yillik tajriba",
            specialization: "Mobil va veb interfeyslar, foydalanuvchi tajribasi",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
            schedule: "Dush - Juma: 09:00 - 17:00"
          }
        ]
      },
      about: {
        title: "MI Group Haqida",
        subtitle: "Biz bizneslar uchun raqamli kelajak yaratamiz",
        content: "MI Group — zamonaviy texnologiyalar, yuqori sifat va tezkor natijani birlashtirgan raqamli agentlik. Biz har bir mijozning biznes maqsadlarini chuqur o'rganib, unga mos IT yechim taqdim etamiz.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        features: ["Yuqori malakali jamoa", "Rasmiy shartnoma va kafolat", "O'z vaqtida topshirish", "24/7 texnik yordam"]
      },
      gallery: {
        title: "Saralangan Loyihalarimiz",
        subtitle: "Yaqinda amalga oshirgan va muvaffaqiyatli topshirilgan ishlarimiz",
        items: [
          { id: "1", title: "EcoMarket E-Commerce", description: "Tabiiy mahsulotlar yetkazib berish bo'yicha onlayn do'kon va admin panel.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
          { id: "2", title: "SayohatUz Platformasi", description: "O'zbekiston bo'ylab sayohatlarni band qilish va gid topish veb-sayti.", imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" }
        ]
      },
      products: {
        title: "Tayyor Raqamli Mahsulotlar",
        subtitle: "Sotib olishingiz mumkin bo'lgan foydali shablonlar va yechimlar",
        items: [
          { id: "1", name: "SaaS Landing Page Shablon", description: "To'liq moslashuvchan, Tailwind CSS yordamida yozilgan startap sahifasi.", price: "290,000 UZS", numericPrice: 290000, imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400" }
        ]
      },
      pricing: {
        title: "Xizmat Ko'rsatish Paketlari",
        subtitle: "Sizning loyihangiz hajmiga mos keluvchi narxlash rejalari",
        plans: [
          { id: "1", name: "Vizitka Sayt (Landing)", price: "1,500,000 UZS", period: "loyiha", features: ["1 sahifali sodda veb-sayt", "UI/UX dizayn", "Mobil moslashuvchanlik", "Qo'llab-quvvatlash (2 hafta)"], isPopular: false, ctaText: "Buyurtma berish" },
          { id: "2", name: "Biznes Portal (Ko'p Sahifali)", price: "4,500,000 UZS", period: "loyiha", features: ["Ko'p sahifali to'liq arxitektura", "Premium maxsus dizayn", "SEO optimallashtirish", "Admin panel integratsiyasi", "1 oylik bepul texnik ko'mak"], isPopular: true, ctaText: "Eng ko'p tanlangan" }
        ]
      },
      testimonials: {
        title: "Mijozlarning fikrlari",
        subtitle: "Biz bilan hamkorlik qilgan muvaffaqiyatli biznes rahbarlarining fikrlari",
        items: [
          { id: "1", quote: "MI Group ishimizni juda qisqa vaqtda va yuqori sifatda topshirdi. Saytimiz ochilgandan so'ng mijozlarimiz soni sezilarli darajada ko'paydi.", author: "Azamat G'ofurov", role: "Apex Cargo CEO", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" }
        ]
      },
      faq: {
        title: "Ko'p Beriladigan Savollar",
        subtitle: "Mijozlarimiz tez-tez so'raydigan savollarga aniq javoblar",
        items: [
          { id: "1", question: "Sayt qancha vaqt ichida tayyor bo'ladi?", answer: "Soddaroq landing page saytlari 2-3 kunda, murakkab korporativ yoki do'kon saytlari 1-2 hafta ichida to'liq tayyorlanib topshiriladi." },
          { id: "2", question: "Buyurtmalar Telegram botga tushadimi?", answer: "Ha, albatta! Har bir buyurtma va ariza to'g'ridan-to'g'ri Telegram guruh yoki botingizga boradi." }
        ]
      },
      contact: {
        title: "Biz bilan bog'laning",
        subtitle: "Yangi loyiha bo'yicha g'oyalaringiz bormi? Birgalikda amalga oshiramiz!",
        email: "info@migroup.uz",
        phone: "+998 90 123 45 67",
        address: "Toshkent shahri, Yunusobod tumani, Amir Temur shoh ko'chasi, 45-uy",
        showForm: true
      },
      footer: {
        copyrightText: "© 2026 MI Group. Barcha huquqlar himoyalangan.",
        socialTelegram: "https://t.me/migroup_uz",
        socialInstagram: "https://instagram.com/migroup_uz",
        socialPhone: "tel:+998901234567"
      },
      integrations: {
        telegramBotToken: "",
        telegramChatId: "",
        telegramUsername: "migroup_admin",
        whatsappPhone: "+998901234567",
        emailNotifications: "info@migroup.uz",
        sendToTelegram: true,
        sendToWhatsApp: true,
        successMessage: "Rahmat! Arizangiz muvaffaqiyatli qabul qilindi. Tez orada operatorimiz siz bilan bog'lanadi."
      },
      visibility: {
        header: true,
        hero: true,
        stats: true,
        features: true,
        team: true,
        about: true,
        gallery: true,
        products: false,
        cart: false,
        pricing: true,
        testimonials: true,
        faq: true,
        contact: true,
        footer: true
      }
    }
  },

  landing_simple: {
    label: "Tezkor Landing Page (Oddiy)",
    description: "Xizmatlar, mutaxassislar yoki bitta aniq mahsulot uchun ixcham, yuqori konversiyali 1-sahifali vizitka sayt",
    icon: "Layout",
    tier: "oddiy",
    config: {
      name: "AvtoTa'mir Premium Servis",
      tierLevel: "oddiy",
      theme: "royal_dark",
      font: "modern",
      borderRadius: "md",
      structureMode: "landing",
      seo: {
        metaTitle: "AvtoTa'mir Premium Servis – 24/7 Avtomobillar Diagnostikasi",
        metaDescription: "Dvigatel, xodovoy qism ta'miri, kompyuter diagnostikasi va original moy almashtirish servisi. Kafolatli ta'mir.",
        keywords: "avtoservis toshkent, kompyuter diagnostika, motor remont, moy almashtirish sergeli, avto usta",
        ogImage: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=1200",
        canonicalUrl: "https://avtotamir-servis.uz",
        siteName: "AvtoTa'mir Premium Servis",
        schemaType: "LocalBusiness",
        author: "AvtoTa'mir Servis",
        robots: "index, follow"
      },
      header: {
        logoName: "AvtoTa'mir Servis",
        menuItems: [
          { id: "1", label: "Asosiy", link: "#hero" },
          { id: "2", label: "Xizmatlar", link: "#features" },
          { id: "3", label: "Narxlar", link: "#pricing" },
          { id: "4", label: "Aloqa", link: "#contact" }
        ]
      },
      hero: {
        badge: "⚡ 24/7 Professional Avtoservis va Diagnostika",
        title: "Avtomobilingiz uchun mukammal sifat va kafolatli servis",
        subtitle: "Dvigatel, xodovoy qism ta'miri, kompyuter diagnostikasi va moy almashtirish xizmatlari navbatsiz va kafolat bilan.",
        ctaText: "Ustaga yozilish",
        ctaLink: "#contact",
        imageUrl: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=800",
        showCta: true
      },
      stats: {
        title: "Ko'rsatkichlar",
        items: [
          { id: "1", number: "12,000+", label: "Ta'mirlangan Avtolar" },
          { id: "2", number: "10+", label: "Yillik Tajriba" },
          { id: "3", number: "6 oy", label: "Ehtiyot Qismlar Kafolati" }
        ]
      },
      features: {
        title: "Bizning Asosiy Xizmatlarimiz",
        subtitle: "Avtomobilingizni 100% sog'lom holatga keltiramiz",
        items: [
          { id: "1", title: "Kompyuter Diagnostikasi", description: "Barcha zamonaviy xorijiy va mahalliy avtomobillar elektronikasini 100% tekshirish.", iconName: "Activity", price: "50,000 UZS" },
          { id: "2", title: "Dvigatel va Xodovoy Ta'miri", description: "Oliy toifali motoristlar tomonidan sifatli ehtiyot qismlar bilan to'liq ta'mirlash.", iconName: "Flame", price: "150,000 UZS dan" },
          { id: "3", title: "Moy va Filtrlarni Almashtirish", description: "Original Germaniya va Yaponiya moylari bilan tezkor xizmat ko'rsatish.", iconName: "Award", price: "40,000 UZS" }
        ]
      },
      team: { title: "", subtitle: "", items: [] },
      about: { title: "", subtitle: "", content: "" },
      gallery: { title: "", subtitle: "", items: [] },
      products: { title: "", subtitle: "", items: [] },
      pricing: {
        title: "Tezkor Texnik Ko'rik Tariflari",
        subtitle: "Mijozlarimiz uchun qulay narx paketlari",
        plans: [
          { id: "1", name: "Ekspress Ko'rik", price: "80,000 UZS", period: "1 marta", features: ["Kompyuter skaneri", "Xodovoy qism ko'rigi", "Tormoz tizimi tekshiruvi"], isPopular: false, ctaText: "Ko'rikka yozilish" },
          { id: "2", name: "To'liq Kompleks Tekshiruv", price: "180,000 UZS", period: "1 marta", features: ["To'liq kompyuter diagnostikasi", "Endoskopiya bilan motor tekshiruvi", "Moy va suyuqliklar tahlili", "Rasmiy akt taqdim etish"], isPopular: true, ctaText: "Eng ommabop" }
        ]
      },
      testimonials: {
        title: "Haydovchilar Fikrlari",
        subtitle: "Bizning servisimizdan mamnun qaytgan doimiy mijozlarimiz",
        items: [
          { id: "1", quote: "Mashinamdagi g'alati ovozni boshqa ustalar topa olmagandi. Bu yerda 20 daqiqada diagnostika qilib hal qilib berishdi. Rahmat!", author: "Sherzod Yo'ldoshev", role: "Chevrolet Malibu egasi", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" }
        ]
      },
      faq: {
        title: "Ko'p Beriladigan Savollar",
        subtitle: "Avtoservisga oid ma'lumotlar",
        items: [
          { id: "1", question: "Navbatsiz qabul qilasizlarmi?", answer: "Ha, sayt orqali vaqtni band qilsangiz, kelganingizda ustangiz sizni kutib oladi." }
        ]
      },
      contact: {
        title: "Ustaxonaga Yozilish & Manzil",
        subtitle: "Qulay vaqtni tanlang yoki to'g'ridan-to'g'ri qo'ng'iroq qiling.",
        email: "avtotamir@example.com",
        phone: "+998 90 999 11 22",
        address: "Toshkent shahri, Sergeli tumani, Yangi Sergeli ko'chasi, 88-bino",
        showForm: true
      },
      footer: {
        copyrightText: "© 2026 AvtoTa'mir Premium Servis. Barcha huquqlar himoyalangan.",
        socialTelegram: "https://t.me/example",
        socialInstagram: "https://instagram.com/example",
        socialPhone: "tel:+998909991122"
      },
      integrations: {
        telegramBotToken: "",
        telegramChatId: "",
        telegramUsername: "avtoservis_admin",
        whatsappPhone: "+998909991122",
        emailNotifications: "avtotamir@example.com",
        sendToTelegram: true,
        sendToWhatsApp: true,
        successMessage: "Arizangiz qabul qilindi! Usta siz bilan tez orada bog'lanadi."
      },
      visibility: {
        header: true,
        hero: true,
        stats: true,
        features: true,
        team: false,
        about: false,
        gallery: false,
        products: false,
        cart: false,
        pricing: true,
        testimonials: true,
        faq: true,
        contact: true,
        footer: true
      }
    }
  }
};
